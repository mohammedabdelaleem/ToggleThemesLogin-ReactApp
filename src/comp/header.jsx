import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
import "./dark.css";
import { useContext } from "react";
import ThemeContext from "../context/ContextData";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const { theme, toggleTheme } = useContext(ThemeContext);

  ///
  const signOutBtn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/Signin");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className={`myheader `}>
      <header className="hide-when-mobile ali">
        {/* don't go to the main page until you sign in */}
        <h1>
          <Link className="logo" to="/">AWF</Link>
        </h1>

        <i
          onClick={() => {
            toggleTheme(theme === "dark" ? "light" : "dark");
          }}
          className="fa-solid fa-sun"
        ></i>

        <i
          onClick={() => {
            toggleTheme(theme === "dark" ? "light" : "dark");
          }}
          className="fa-solid fa-moon"
        ></i>

        <ul className="flex">
          {/* About */}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/about">
                About
              </NavLink>
            </li>
          )}

          {/* Profile */}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/profile">
                Profile
              </NavLink>
            </li>
          )}
        </ul>

        <ul className="flex">
          {/* Sign in */}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Signin">
                Sign in
              </NavLink>
            </li>
          )}

          {/* Sign up */}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Signup">
                Sign up
              </NavLink>
            </li>
          )}

          {/* Sign out */}
          {user && (
            <li
              onClick={() => {
                signOutBtn();
              }}
              className="main-list"
            >
              <Link className="main-link">Sign-out 📤</Link>
            </li>
          )}
        </ul>
      </header>

      
    </div>
  );
};

export default Header;

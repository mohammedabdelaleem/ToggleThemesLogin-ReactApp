import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
import "./dark.css";
import { useContext } from "react";
import ThemeContext from "../context/ContextData";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`myheader `}>
      <header className="hide-when-mobile ali">
        {/* don't go to the main page until you sign in */}
          <h1>
            <Link to="/">AWF</Link>
          </h1>
        


        <i
          onClick={() => {
            toggleTheme(theme === "dark" ? "light" : "dark");
          }}
          class="fa-solid fa-sun"
        ></i>

        <i
          onClick={() => {
            toggleTheme(theme === "dark" ? "light" : "dark");
          }}
          class="fa-solid fa-moon"
        ></i>

        <ul className="flex">
          {/* html */}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/html">
                HTML
              </NavLink>
              <ul className="sub-ul">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul>
            </li>
          )}

          {/* css */}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/css">
                CSS
              </NavLink>
              <ul className="sub-ul">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">CSS Examples</a>
                </li>
                <li className="mini-projects">
                  <a href="">mini projects&nbsp; + </a>
                  <ul className="sub-sub-ul">
                    <li>
                      <a href="">project 1</a>
                    </li>
                    <li>
                      <a href="">project 2</a>
                    </li>
                    <li>
                      <a href="">project 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          )}

          {/* js */}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/javascript">
                JavaScript
              </NavLink>
              <ul className="sub-ul sub-of-js">
                <li>
                  <a href="">coming soon🔥</a>
                </li>
              </ul>
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
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.

                    navigate("/Signin");
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
              className="main-list"
            >
              <Link className="main-link">Sign-out 📤</Link>
            </li>
          )}
        </ul>
      </header>

      <header className="show-when-mobile ali">
        <h1>AWF</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

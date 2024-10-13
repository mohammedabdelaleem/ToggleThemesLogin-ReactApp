import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "../style/sign.css";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");

  const [user, loading, error] = useAuthState(auth);



  // loading
  // Not Sign in
  // sign in ,but not verification
  //sign in && verification -> navigate("/")


  //sign in && verification -> navigate("/")
  useEffect(() => {
    if(user && user.emailVerified){
      navigate("/")
    }
  })


  // loading
  if (loading) {
    return (
      <div>
        <Header />

        <main>
          <h1>Loading..........................</h1>
        </main>

        <Footer />
      </div>
    );
  }

  // sign in ,but not verification  => don't forget you must have a user , to prevent null value
  if (user) {
    if (!user.emailVerified) {
      return (
        <div>
          <Header />
          <main>
            <p>We Send You An Email To Verify Your Account</p>
            <button className="delete">send again</button>
          </main>
          <Footer />
        </div>
      );
    }



  }

  // Not Sign in
  if (!user) {
    return (
      <div>
        <Helmet>
          <title>Signup Page</title>
          <meta name="description" content="Signupppppppp" />
        </Helmet>

        <Header />

        <main>
          <form>
            <h1>
              Create A New Account <span>🧡</span>
            </h1>

            <input
              onChange={(eo) => {
                setusername(eo.target.value);
              }}
              required
              placeholder=" Username: "
              type="text"
            />

            <input
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
              required
              placeholder=" Email: "
              type="email"
            />

            <input
              onChange={(eo) => {
                setpassword(eo.target.value);
              }}
              required
              placeholder=" Password: "
              type="password"
            />

            <button
              onClick={(eo) => {
                eo.preventDefault();

                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    // ...

                    sendEmailVerification(auth.currentUser).then(() => {
                      // Email verification sent!
                      // ...

                      console.log("Email verification sent!");
                    });

                    updateProfile(auth.currentUser, {
                      displayName: username,
                    })
                      .then(() => {
                        // Profile updated!
                        // ...

                        navigate("/");
                      })
                      .catch((error) => {
                        // An error occurred
                        // ...
                      });
                  })
                  .catch((error) => {
                    const errorCode = error.code;

                    sethasError(true);

                    switch (errorCode) {
                      case "auth/invalid-credential":
                        setfirebaseError(
                          "please check your email and password well"
                        );
                        break;

                      case "auth/invalid-email":
                        setfirebaseError("wrong email !!");
                        break;

                      case "auth/missing-password":
                        setfirebaseError("please enter your password !!");
                        break;

                      case "auth/weak-password":
                        setfirebaseError("please enter a strong password !!");
                        break;

                      default:
                        setfirebaseError(
                          "please check your email and password well"
                        );
                    }
                  });
              }}
            >
              Sign Up
            </button>
            <p>
              Already Have An Account <Link to="/Signin">Sign-in </Link>
            </p>

            {hasError && <p className="error-msg">{firebaseError}</p>}
          </form>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />

        <main>
          <h1>ERROR : {error}</h1>
        </main>

        <Footer />
      </div>
    );
  }
};

export default Signup;

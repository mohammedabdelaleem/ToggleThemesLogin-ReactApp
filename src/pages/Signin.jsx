import Header from "../comp/header";
import Footer from "../comp/Footer";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Singnup from "./Signup.jsx";
import "../style/sign.css";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/config.js";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [resetEmail, setresetEmail] = useState("");

  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
  const [showSendEmail, setshowSendEmail] = useState(false);
  const [showForgotPass, setshowForgotPass] = useState("");

  ///
  const signInBtn = (eo) => {
    eo.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user; /*user info*/
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        sethasError(true);

        switch (errorCode) {
          case "auth/invalid-email":
            setfirebaseError("please enter your email well !!");
            break;

          case "auth/missing-password":
            setfirebaseError("please enter your password !!");
            break;

          case "auth/invalid-credential":
            setfirebaseError("please check your email and password well");
            break;

          default:
            setfirebaseError("please check your email and password well");
        }
      });
  };

  const ResetPasswordBtn = (eo) => {
    eo.preventDefault();

    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        // Password reset email sent!
        setshowSendEmail(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };



  return (
    <div>
      <Helmet>
        <title>Signin Page</title>
        <meta name="description" content="Signinnnnnnnnnnnnnnnnn" />
      </Helmet>

      <Header />

      <main>
        {/* main form    */}
        <form className="signinFrm">
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
              signInBtn(eo);
            }}
          >
            Sign in
          </button>
          <p>
            Don't Have An Account <Link to="/Signup">Sign-up </Link>
          </p>

          <p
            onClick={() => {
              setshowForgotPass("show");
            }}
            className="forgot-pass"
          >
            Forgot Password 🤔
          </p>

          {hasError && <p className="error-msg">{firebaseError}</p>}
        </form>

        {/* forgot pass form */}
        <form className={`forget-password ${showForgotPass}`}>
          <i
            onClick={() => {
              setshowForgotPass("");
            }}
            className="close fa-solid fa-xmark"
          ></i>

          <input
            onChange={(eo) => {
              setresetEmail(eo.target.value);
            }}
            required
            placeholder=" Email: "
            type="Email"
          />

          <button onClick={(eo) => {
            ResetPasswordBtn(eo)
          }} className="reset-email">
            Reset Password
          </button>

          {showSendEmail && (
            <p className="check-email">
              please check your email to reset your password
            </p>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;

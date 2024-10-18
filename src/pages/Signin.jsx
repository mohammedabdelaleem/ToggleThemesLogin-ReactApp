import Header from "../comp/header";
import Footer from "../comp/Footer";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
  const [mainFormState, setmainFormState] = useState(false);
  const [showForgotPass, setshowForgotPass] = useState("");
  const [forgettenEmailCorrectenece, setforgettenEmailCorrectenece] = useState(false);

  ///
  const signInBtn = (eo) => {
    eo.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
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

    //check if the email is correct
    const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()n[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const fogrotEmailPass = document.getElementById("fogrotEmailPass")

if(regEmail.test(fogrotEmailPass.value))
{
  sendPasswordResetEmail(auth, resetEmail)
  .then(() => {
    // Password reset email sent!
    setshowSendEmail(true);
    setforgettenEmailCorrectenece(false)
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
  });
}

else {
  setforgettenEmailCorrectenece(true)
}
    
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
        <form className={`signinFrm ${mainFormState}`}>
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
              // remove the main form 
              setmainFormState("dn")
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
              setmainFormState("")
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
            id = "fogrotEmailPass"
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

{forgettenEmailCorrectenece && (
            <p className="wrong-email">
              Please Enter A Right Email<span style={{ animationDuration:"01s"}}><i style={{color:"red" }}  class="fa-solid fa-file-signature"></i></span>
            </p>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;

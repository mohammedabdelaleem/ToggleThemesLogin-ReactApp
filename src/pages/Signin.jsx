import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/sign.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");

  return (
    <div>
      <Helmet>
        <title>Signin Page</title>
        <meta name="description" content="Signinnnnnnnnnnnnnnnnn" />
      </Helmet>

      <Header />

      <main>
        <form>
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
                      setfirebaseError(
                        "please check your email and password well"
                      );
                      break;

                    default:
                      setfirebaseError(
                        "please check your email and password well"
                      );
                  }
                });
            }}
          >
            Sign in
          </button>
          <p>
            Don't Have An Account <Link to="/Signin">Sign-up </Link>
          </p>

          {hasError && <p className="error-msg">{firebaseError}</p>}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;

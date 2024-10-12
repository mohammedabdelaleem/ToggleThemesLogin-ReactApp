import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "../style/sign.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");

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

                  navigate("/");
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
                      setfirebaseError("please check your email and password well");
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
};

export default Signup;

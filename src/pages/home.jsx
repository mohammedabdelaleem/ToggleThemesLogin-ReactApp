import Header from "../comp/header.jsx";
import Footer from "../comp/Footer.jsx";
import Loading from "../comp/loadingAni.jsx"

import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";


import { sendEmailVerification } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";
import { useState } from "react";


const Home = () => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailSucc,setsendEmailSucc] = useState(false);


/// on click on send email btn
const sendEmailBtn = () => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...

    setsendEmailSucc(true)

  });
}


  // loading
  if (loading) {
    return (
      
      <Loading />
    
    );
  }

  if (!user) {
    return (
      <>
        <Helmet>
          <title>HOME Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>

        <Header />

        <main>
          <h1 >
            please Go To &nbsp;
            <Link className="go-to-sign-in" to="/Signin">
              Sign-in/up
            </Link>
            <span><i  className="fa-solid fa-heart"></i></span>
          </h1>
        </main>

        <Footer />
      </>
    );
  }

  if (user) {

    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main  >
            <h2>
              Welcome : {user.displayName}
              <span>🧡</span>
            </h2>

              </main>

          <Footer />
        </>
      );
    }

    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main
            style={{
              flexDirection: "column",
              alignItems: "baseline",
              gap: "11px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <h2>
              Welcome : {user.displayName}
              <span><i  className="fa-solid fa-heart"></i></span>
            </h2>

            <p>
              please Verif your email To Continue<span><i className="fa-solid fa-hand"></i></span>
            </p>

            <button onClick={() => {
            sendEmailBtn()
            }} className="delete">send email</button>

            {sendEmailSucc  && <p className="send-email-succ">Sended Email Successfully!</p>}
          </main>

          <Footer />
        </>
      );
    }
  }

};

export default Home;

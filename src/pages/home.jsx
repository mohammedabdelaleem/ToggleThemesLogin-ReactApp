import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

import { sendEmailVerification } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

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

  if (!user) {
    return (
      <>
        <Helmet>
          <title>HOME Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>

        <Header />

        <main>
          <h1>
            please Go To
            <Link className="go-to-sign-in" to="/Signin">
              Sign-in/up
            </Link>
            <span>🧡</span>
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
              <span>🧡</span>
            </h2>

            <p>
              please Verif your email To Continue<span>🤚</span>
            </p>

            <button onClick={() => {
              sendEmailVerification(auth.currentUser)
              .then(() => {
                // Email verification sent!
                // ...
              });
            }} className="delete">send email</button>
          </main>

          <Footer />
        </>
      );
    }
  }


};

export default Home;

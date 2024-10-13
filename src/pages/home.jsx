import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
console.log(user);
  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
      </Helmet>

      <Header />

      {user && 
      <main>
      <h1>Welcome {user.displayName} <span>🧡</span></h1>
      </main>
      }

      {!user && (
        <main><h1>
        please Go To{" "}
        <Link className="go-to-sign-in" to="/Signin">
        
          Sign-in/up 
        </Link>
        <span>🧡</span>
      </h1></main>
      )}

      <Footer />
    </>
  );
};

export default Home;

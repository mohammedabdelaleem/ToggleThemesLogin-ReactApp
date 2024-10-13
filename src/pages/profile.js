import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Moment from "react-moment";

const Profile = () => {
  /// you must sign in
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
  });

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

  if (user) {
    return (
      <>
        <Helmet>
          <title>Profile Page</title>
          <meta name="description" content="Profileeeeeeeeeeeeeee" />

          <style type="text/css">
            {`
          h2 {
              font-size: 25px;
          }

          .deleteAcc {
  all: reset;
  background-color: rgba(255, 0, 0, 0.895);
color: white;
font-size: 20px;
padding: 8px 15px;
margin-top : 15px;
border-radius : 3px;
border: 1px solid red;
outline : none;

}


          `}
          </style>
        </Helmet>

        <Header />

        <main>
          <div style={{ textAlign: "left" }}>
            <h2>
              {" "}
              Name : {user.displayName !== null
                ? user.displayName
                : "null"}{" "}
            </h2>
            <h2> Email : {user.email} </h2>
            <h2>
              {" "}
              Last Signin :{" "}
              <Moment fromNow date={user.metadata.lastSignInTime}></Moment>{" "}
            </h2>
            <h2>
              {" "}
              Account Created :{" "}
              <Moment fromNow date={user.metadata.creationTime}></Moment>
            </h2>

            <button className="deleteAcc">Delete Account</button>
          </div>
        </main>

        <Footer />
      </>
    );
  }
};

export default Profile;

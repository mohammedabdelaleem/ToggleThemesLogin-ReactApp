import Header from "../comp/header.jsx";
import Footer from "../comp/Footer.jsx";
import Loading from "../comp/loadingAni.jsx"


import { Helmet } from "react-helmet-async";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {  deleteUser } from "firebase/auth";

// const auth = getAuth();

import Moment from "react-moment";



const Profile = () => {
  /// you must sign in
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if ((!user && !loading) || (user && !user.emailVerified)) {
      navigate("/");
    }
  });


// delete Account Btn
const deleteAccountBtn= () => {
  deleteUser(user)
  .then(() => {
  console.log("User deleted.");
    // User deleted.
  })
  .catch((error) => {
    // An error ocurred
    // ...
    console.log(error);
  });
}




  // loading
  if (loading) {
    return (
      
      <Loading />
    
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

  if (user && user.emailVerified) {
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

            <button
              onClick={() => {

            deleteAccountBtn()
              
              }}
              className="delete"
            >
              Delete Account
            </button>
          </div>
        </main>

        <Footer />
      </>
    );
  }
};

export default Profile;

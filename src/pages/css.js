import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";




const Css = () => {


    /// you must sign in 
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
  
  
    useEffect(() => {
      if(!user) {
        navigate("/");
      }
  
      }
    )

    

  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="csssssssssssssssssssss" />
      </Helmet>

      <Header />

      <MainContent pageName="CSS Page" />

      <Footer />
    </>
  );
};

export default Css;

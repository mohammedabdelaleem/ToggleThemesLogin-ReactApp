
import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet  } from 'react-helmet-async';

import Loading from "../comp/loadingAni.jsx"

///
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";




const About = () => {
  /// you must sign in 
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth);


  useEffect(() => {
    if(!user  || (user  && !user.emailVerified)) {
      navigate("/");
    }

    }
  )


  // loading
  if (loading) {
    return (
      
      <Loading />
    
    );
  }

if(user && user.emailVerified) 
{  return (
    <div>
         <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>


      <Header />
      <MainContent pageName="Abuot Page"  />   
      <Footer />

{/* {user  && 
  <div>
      <Header />
      <MainContent pageName="HTML Page"  />   
      <Footer />
  </div>
}

{!user} */}

  </div>
  );}



}

export default About;

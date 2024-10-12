
import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet  } from 'react-helmet-async';


///
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";




const Html = () => {
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
    <div>
         <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>


      <Header />
      <MainContent pageName="HTML Page"  />   
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
  );
}

export default Html;

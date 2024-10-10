


import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet  } from 'react-helmet-async';


const Html = () => {
  return (
    <div className={`{ffff}`}>
         <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
    <Header />
    <MainContent pageName="HTML Page"  />   
    <Footer />
  </div>
  );
}

export default Html;

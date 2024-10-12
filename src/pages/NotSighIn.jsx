import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";


const NotSighIn = () => {
const [counter, setcounter] = useState(1);
const [name, setname] = useState("Mohammed");

useEffect(() => {
 
  console.log("object");



},[counter, name])

  return (
    <div>
      <Helmet>
        <title>NotSighIn Page</title>
        <meta name="description" content="NotSighIn" />
      </Helmet>

      <Header />

      <main>

    <div>
        <h4>My Name Is {name}</h4>
        <button onClick={() => {
          setname("ALiii")
        }} className="btn01">change Name</button>
      

        <h4 style={{marginTop:"30px"}}>My Name Is {counter}</h4>
        <button onClick={() => {
          setcounter(counter+1)
        }} className="btn01">change counter</button>
      

    </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotSighIn;

import React from "react";
import    './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
<div className="myfooter">
      <footer className="ali   ">
        Designed and developed by Eng Mohammed Abdelaleem
        <span><Link to="./Error404.jsx" ><i className="fa-solid fa-heart"></i></Link></span>
      </footer>
</div>
  );
};

export default Footer;

import Header from "./header";
import Footer from "./Footer";

import "./loadingAni.css";

import React from "react";

const LoadingAni = () => {
  return (
    <div>
      <Header />

      <main>
        <div className="loading"></div>

        {/* Loading.......................... */}
      </main>

      <Footer />
    </div>
  );
};

export default LoadingAni;

import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div>
      <div className="fscroll-text">
        <marquee behavior="scroll" direction="left">
          V5 STUDENT PERMISSION ACCESS
        </marquee>
      </div>
      <hr />
      <div className="copy">
        <footer>&copy; Copyright V5@gmail.com</footer>
      </div>
    </div>
  );
};

export default Footer;

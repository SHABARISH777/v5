import React from "react";
import logo1 from "../images/logo1.png";
import "../App.css";
import { useNavigate } from "react-router";

const Header = () => {
  let navigate=useNavigate();
  return (
    <>
      <div className="header">
        <div className="header-image">
          <img src={logo1} alt="" />
        </div>
        <div className="header-btn">
          <button className="lbtn" onClick={()=>{navigate("/")}}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Header;

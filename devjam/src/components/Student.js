import React from "react";
import Header from "./Header";
import Categeory from "./Categeory";
import Sfooter from "./Sfooter";
import Snotification from "./Snotification";
import { useNavigate } from "react-router";


const Student = () => {
  let navigate=useNavigate();
  function handleclick(eve){
    navigate('/snotification')
  }
  return (
    <>
      <div className="app">
        <Header />
        <h1>
          Student Permission Access
          <button
            className="bell-icon"
            onClick={handleclick}>
            <i className="fa fa-bell"></i>
          </button>
        </h1>
        <div className="app-main">
          <Categeory />
        </div>
      </div>
      <Sfooter />
    </>
  );
};

export default Student;

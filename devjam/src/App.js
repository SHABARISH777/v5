import React, { useState } from "react";
import Student from "./components/Student";
import Faculty from "./components/Faculty";
import reactDom from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import Flogin from "./components/Flogin";
import Slogin from "./components/Slogin";
import Singup from "./components/Signup";

const App = () => {
  return (
    <React.Fragment>
      
     {/* <Home/> */}
     
     {/* <Flogin/> */}
     {/* <Slogin/> */}
     {/* <Singup/> */}
     <Test/>
     {/* <Student/> */}
     {/* <Faculty/> */}
    </React.Fragment>
  );
};

export default App;

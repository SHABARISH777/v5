import React from "react";
import cmrlogo from "../images/cmrlogo.jpg";
import Student from "./Student";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faculty from "./Faculty";
import About from "./About";
import Slogin from "./Slogin";
import Flogin from "./Flogin";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div>
        <section className="hheader">
          <nav>
            <img src={cmrlogo} />
            <div className="nav-links" id="navlinks">
              <ul>
                
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/slogin">Student Login</Link>
                  </li>
                  <li>
                    <Link to="/flogin">Faculty Login</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>

              </ul>
            </div>
          </nav>

          <div className="text-box">
            <h1>STUDENT PERMISSION ACCESS</h1>
           

          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

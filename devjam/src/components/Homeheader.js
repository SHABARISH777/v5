import React from 'react'
import cmrlogo from '../images/cmrlogo.jpg'
import { Link } from 'react-router-dom';

const Homeheader = () => {
    return (
      <div className="mainheader">
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
      </div>
    );
}

export default Homeheader

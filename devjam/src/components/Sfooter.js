import React from 'react'
import "../App.css";

const Sfooter = () => {
    return (
      <div>
        <div className="scroll-text">
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
}

export default Sfooter

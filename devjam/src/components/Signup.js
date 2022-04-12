import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router'
import Homeheader from './Homeheader'
import { useState } from 'react/cjs/react.development'
import axios from 'axios'



const Singup = () => {
    let navigate = useNavigate();
    const [input,setInput]=useState({
       name:'',
       idnumber:'',
       email:'',
       number:'',
       password:'',
       confirmpassword:''
    })
    function handleChnage(event) {
       const {name,value}=event.target;
       setInput(prevInput=>{
          return{
             ...prevInput,[name]:value
          }
       })
    }
    function handleClick(event) {
      event.preventDefault();
      const signedUp={
         name:input.name,
         email:input.email,
         idnumber:input.idnumber,
         number:input.number,
         password:input.password,
         confirmpassword:input.confirmpassword,
      }
      axios.post('http://localhost:4000/signup',signedUp).then((response)=>{
         console.log(response);
      })
      .catch((err)=>{
         console.log(err)
      })
      const password = input.password;
      const cpassword = input.confirmpassword;
      if(password===cpassword){
        navigate('/slogin')
      }
    }
    return (
      <div>
        <Homeheader />
        <div className="scontainer">
          <div className="title">Signup</div>
          <form >
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  name="name"
                  onChange={handleChnage}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">ID number</span>
                <input
                  type="text"
                  name="idnumber"
                  onChange={handleChnage}
                  placeholder="Enter your id number"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  onChange={handleChnage}
                  type="text"
                  name="email"
                  placeholder="Enter your Email id"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone numner</span>
                <input
                  onChange={handleChnage}
                  type="text"
                  name="number"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  onChange={handleChnage}
                  type="text"
                  name="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  onChange={handleChnage}
                  type="text"
                  name="confirmpassword"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div>
              <button
                className="sbutton"
               //  onClick={() => {
               //    navigate("/slogin");
               //  }}
               onClick={handleClick}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Singup

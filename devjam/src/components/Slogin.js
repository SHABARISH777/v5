import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Homeheader from './Homeheader';
import axios from 'axios';
//var user_id;
const Slogin = () => {
  let navigate=useNavigate();
  const [input,setInput]=useState({
    name:'',
    password:''
  })
  function handleChange(event){
    const{name,value}=event.target;
    setInput(prevInput=>{
      return{
        ...prevInput,[name]:value
      }
    })
  }
  function handleClick(event){
      event.preventDefault();
      const login={
        email:input.email,
        password:input.password
      }
      axios.post('http://localhost:4000/login',login).then((response)=>{
        if(response.data.login===true)
        {
          console.log('success')
       //   user_id = response.data.user_id;
          navigate("/slogin/student");
        }
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      
      })

  }
    return (
      <div>
        <Homeheader/>
        <div>
          <div className="fcontainer">
            <h1>Student Log in</h1>
            <br />
            <form >
              <div className="box">
                <i className="fa fa-envelope"></i>
                <label for="email">
                  <b>Email</b>
                </label>
                <br />
                <input
                  type="Email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div className="box">
                <i className="fa fa-unlock"></i>
                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
              <div className="clearfix">
                {/* <input type="submit" className="loginbtn" value="log in" /> */}
                <button type="button" className="signupbtn" onClick={handleClick}>Log in</button>
                <div className="new-acc">
                Or <a href="/signup">Create new account</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Slogin
//export {user_id}
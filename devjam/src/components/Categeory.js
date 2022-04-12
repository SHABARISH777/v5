import  axios  from "axios";
import React from "react";
import { useState } from "react";
import "../App.css";

const Categeory = () => {
 
  const [request, setRequest] = useState();
  const [ids, setIds] = useState();
  const clearHandle = () => {
    setRequest("");
  };
  const [categeory,setCategory] = useState();
  const [fcategeory,setFcategory] = useState();
   

  const textHandle = (e) => {
    setRequest(e.target.value);
  };
  const idHandle = (e) => {
    setIds(e.target.value);
  };

  var cred=({})
  
  const sendReq = () => {
    cred = {
      categeory: categeory,
      userid: ids,
      facultyid: fcategeory,
      reason: request,
    };
    axios
      .post("http://localhost:4000/addRequest",cred )
      .then((response) => {
        console.log(response);
        setRequest("");
        setIds("");
      })
      .catch((err) => {
        console.log(err);
      });
  alert("Request Sent!");
  };
  return (
    <>
      <div className="cat">
        <div className="dropdown">
          <div className="select">
            <label for="access">Choose Categeory: </label>
            <select onClick = {(e)=>{setCategory(e.target.value)}}  name="list">
              <option value="gatepass">Gate Pass</option>
              <option value="leave">Leave</option>
              <option value="clubs">Clubs</option>
              <option value="fees">Fees</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>
        <div className="dropdown">
          <div className="select">
            <label for="faculty">Choose Faculty: </label>
            <select onClick = {(evn)=>{setFcategory(evn.target.value)}}  name="list">
              <option value="faculty1">Faculty1</option>
              <option value="faculty2">Faculty2</option>
            </select>
          </div>
          <div className="dropdown">
            <div className="select">
              <label for="myfile">Select a file:</label>
              <input type="file" id="myfile" name="myfile" />
            </div>
          </div>
        </div>

        <div className="text-area">
          <textarea
            rows="4"
            cols="50"
            name="comment"
            form="usrform"
            placeholder="Enter Your Reason Here..."
            value={request}
            onChange={textHandle}
          ></textarea>
        </div>
        <div>
          <input type="text" name="id" placeholder="Enter your roll number" value={ids} onChange={idHandle}></input>
        </div>
        <div className="sendbtn">
          <button className="sbtn" onClick={sendReq}>
            Send Request
          </button>
          <button className="cbtn" onClick={clearHandle}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default Categeory;

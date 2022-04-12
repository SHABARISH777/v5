import axios from "axios";
import React from "react";

const RequestCard = ({dets}) => {
  function accept({}){
    axios.post("http://localhost:4000/accepted", {
      categeory: "c",
      userid: "id",
      facultyid: "f",
      reason: "Accepted",
    });
    alert('Accepted !!')
  }
  function decline(){
    axios.post("http://localhost:4000/declined", {
      categeory: "c",
      userid: "id",
      facultyid: "f",
      reason: "Declined",
    });
    alert('Declined !!')
  }
  return (
    <>
      {dets.map(({ reason, categeory, userid, facultyid }) => (
        <div className="container">
          <div>
            <p>Date : 08-12-2021</p>
          </div>
          <div className="card">
            <div>
              <h2 key={userid}>{userid}</h2>
            </div>
            <div>
              <p key={categeory}>
                Categeory-<b>{categeory}</b>
              </p>
              <p key={facultyid}>
                Mentor-<b>{facultyid}</b>
              </p>
            </div>
            <div>
              <label htmlFor="">Reason:</label>
            </div>
            <p key={reason}>{reason}</p>
            <button onClick={accept} className="rbtn">Accept</button>
            <button onClick={decline} className="rcbtn"> Decline</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default RequestCard;

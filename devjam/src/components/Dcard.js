import React from "react";

const Dcard = ({ ddets }) => {
  return (
    <>
      {ddets.map(({ reason, categeory, userid, facultyid }) => (
        <div className="dcontainer">
          {/* <div>
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
          </div> */}
          <div className="card">
          <div>
            <label htmlFor="">Status:</label>
          </div>
          <div>
            <h1 key={reason}>{reason}</h1>
          </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Dcard;

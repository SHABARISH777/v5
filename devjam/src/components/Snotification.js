import React from "react";
import Header from "./Header";
import Categeory from "./Categeory";
import Sfooter from "./Sfooter";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Ncard from "./Ncard";
import Dcard from "./Dcard";

const Snotification = () => {
  const [dets, setDets] = useState([]);
  const [ddets, setDdets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/accepted")
      .then((Response) => setDets(Response.data))
      .catch((error) => console.log(error));
  });

  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/declined")
      .then((Response) => setDdets(Response.data))
      .catch((error) => console.log(error));
  });
  function handleclick(eve) {
    navigate("/snotification");
  }
  return (
    <>
      <div className="app">
        <Header />
        <h1>Student Permission Access Notifications</h1>
        <div>
          <Ncard dets={dets} />
          <Dcard ddets={ddets} />
        </div>
      </div>
      <Sfooter />
    </>
  );
};

export default Snotification;

import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router , Link,Route } from 'react-router-dom'
import Header from './Header'
import '../App.css'
import Footer from './Footer'
import RequestCard from './RequestCard'
import Fcategeory from './Fcategeory'
import axios from 'axios'

const Faculty = () => {
    const [dets,setDets]=useState([])
    const [ddets,setDdets]=useState([])
    const [adets,setAdets]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/request').then((Response) =>{setDets(Response.data)
    console.log(dets)}).catch(error =>console.log(error))
    })
    useEffect(()=>{
        axios
          .get("http://localhost:4000/declined")
          .then((Response) => setDdets(Response.data))
          .catch((error) => console.log(error));
    })
    useEffect(()=>{
        axios
          .get("http://localhost:4000/accepted")
          .then((Response) => setAdets(Response.data))
          .catch((error) => console.log(error));
    })
  

    return (
        <>
        <div className="app">
        <Header/>
        <h1> Faculty Acceptance </h1>
        {/* <Fcategeory/> */}
        <RequestCard dets={dets} ddets={ddets} adets={adets} />

        <Footer/>
        </div>
        </>
    )
}

export default Faculty

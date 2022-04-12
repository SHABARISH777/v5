import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Contact from './Contact'
import Faculty from './Faculty'
import Home from './Home'
import Slogin from './Slogin'
import Flogin from './Flogin'
import About from './About'
import Student from './Student'
import Singup from './Signup'
import Snotification from './Snotification'

const Test = () => {
    return (
        <>
        <div>
            <Router>
                {/* <Link to="/">Home</Link>
                <Link to="/student"> Student </Link>
                <Link to="/faculty"> Faculty </Link> */}
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/slogin" element={<Slogin/>}></Route>
                    <Route path="/flogin" element={<Flogin/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/slogin/student" element={<Student/>}></Route>
                    <Route path="/flogin/faculty" element={<Faculty/>}></Route>
                    <Route path="/signup" element={<Singup/>}></Route>
                    <Route path="/snotification" element={<Snotification/>}></Route>
                </Routes>
            </Router>
        </div>
        </>
    )
}

export default Test

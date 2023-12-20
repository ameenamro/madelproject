import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../companats/Header';
import Home from './Home';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login';
import Database from '../database/Database';
import Mypage from './Mypage';
import BodyCars from './BodyCars';
import Adminpage from './Adminpage';
import Footer from '../companats/Footer';
import ProductDisplay from './ProductDisplay';
import GarageMechanical from './GarageMechanical';
function Routers() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Aboutgarage, setAboutgarage] = useState("");
  return (
    
    <Router>
    <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />

    <Routes>
      
      <Route path="/Mypage" element={<Mypage setAboutgarage={setAboutgarage}Aboutgarage={ Aboutgarage} /> } />
      <Route path="/GarageMechanical" element={<GarageMechanical setAboutgarage={setAboutgarage}Aboutgarage={ Aboutgarage} /> } />

      <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
      <Route path="/BodyCars" element={<BodyCars/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Adminpage" element={<Adminpage/>} />
      <Route path="/ProductDisplay" element={<ProductDisplay setAboutgarage={setAboutgarage} Aboutgarage={Aboutgarage} />} />



    </Routes>

    <Footer/>
  </Router>

   
  
  )
}

export default Routers
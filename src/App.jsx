//Imports funcionales
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//Imports Main
import Landing from "./views/landing";
import Home from "./views/home";
import Register from './Components/Register/Register'
import Developers from "./views/developers";
import Working from "./views/working";

//Imports Condo

const App = () => {
  return (
    <div className="app_container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path="/devs" element={<Developers />} />
        <Route path="/working" element={<Working />} />
      </Routes>
    </div>
  );
};

export default App;

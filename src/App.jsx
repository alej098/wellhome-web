//Imports funcionales
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//Imports Main
import Landing from "./views/landing";
import Home from "./views/home";
import Info from "./views/Info";
import Avisos from "./views/Avisos";
import Reglas from "./views/Reglas";
import Instrucciones from "./views/Instrucciones";
import RegistrarCondominio from "./views/RegistrarCondominio";
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
        <Route path="/info" element={<Info />} />
        <Route path="/avisos" element={<Avisos />} />
        <Route path="/reglas" element={<Reglas />} />
        <Route path="/instrucciones" element={<Instrucciones />} />
        <Route path="/registrar-condominio" element={<RegistrarCondominio />} />
        <Route path='/register' element={<Register />} />
        <Route path="/devs" element={<Developers />} />
        <Route path="/working" element={<Working />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import WellHomeLogo from "../assets/WellHomeLogo04.svg";

const Reglas = () => {
  const reglas = [
    {
      titulo: "Zonas comunes",
      texto:
        "Las zonas comunes (salón social, piscina, cancha y parque) deben reservarse con anticipación a través de la administración y respetar los horarios establecidos.",
    },
    {
      titulo: "Horarios de silencio",
      texto:
        "Se debe mantener silencio entre las 10:00 p.m. y las 7:00 a.m. Las reuniones o celebraciones que generen ruido deben terminar antes de ese horario.",
    },
    {
      titulo: "Mascotas",
      texto:
        "Las mascotas deben permanecer con correa en las áreas comunes y solo transitar por los espacios permitidos. El propietario es responsable de recoger sus desechos.",
    },
    {
      titulo: "Parqueo",
      texto:
        "Los puestos de parqueo son personales e intransferibles. No está permitido estacionar en pasillos, zonas verdes o puestos ajenos.",
    },
    {
      titulo: "Disposición de residuos",
      texto:
        "La basura debe entregarse en los horarios establecidos y separada según el material reciclable, para facilitar el servicio de recolección.",
    },
    {
      titulo: "Obras y remodelaciones",
      texto:
        "Cualquier obra dentro de la unidad debe ser informada previamente a la administración y cumplir con el reglamento de construcción del condominio.",
    },
  ];

  return (
    <div className="landing__container">
      <div className="landing__container__upper">
        <div className="landing__logo">
          <img src={WellHomeLogo} alt="Well Home Logo" />
        </div>
        <div className="landing__description">
          <h3>Reglas de convivencia</h3>
        </div>
        {reglas.map((regla, index) => (
          <div
            className="landing__description"
            key={index}
            style={{
              textAlign: "left",
              border: "1px solid rgba(23, 107, 135, 0.3)",
              borderRadius: "12px",
              padding: "1em 1.5em",
              background: "#fbfbfb",
            }}
          >
            <h3 style={{ marginBottom: "0.3em" }}>{regla.titulo}</h3>
            <p style={{ color: "#053b50", lineHeight: "1.6" }}>{regla.texto}</p>
          </div>
        ))}
        <div className="landing__buttons">
          <button className="button__navigate">
            <Link to="/instrucciones">Ver instrucciones</Link>
          </button>
          <button className="button__navigate">
            <Link to="/home">Volver al inicio</Link>
          </button>
        </div>
      </div>
      <div className="landing__footer">
        <p>©️ WellHome Copyright 2024</p>
        <p>Desarrollado por Castrum Gestión y Servicios SAC</p>
      </div>
    </div>
  );
};

export default Reglas;
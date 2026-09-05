import React from "react";
import { Link } from "react-router-dom";
import WellHomeLogo from "../assets/WellHomeLogo04.svg";

const Instrucciones = () => {
  const pasos = [
    {
      titulo: "Crea tu cuenta",
      texto:
        "Regístrate con tu correo electrónico y una contraseña. Puedes registrarte como administrador del condominio o como residente.",
    },
    {
      titulo: "Registra tu condominio",
      texto:
        "Si eres administrador, crea el condominio, edificio o conjunto residencial indicando su nombre y dirección. Cada comunidad se administra por separado.",
    },
    {
      titulo: "Agrega a los residentes",
      texto:
        "Registra a los propietarios, inquilinos y colaboradores para que queden vinculados a tu comunidad y puedan recibir la información.",
    },
    {
      titulo: "Publica avisos y reglas",
      texto:
        "Mantén informada a tu comunidad publicando avisos, recordatorios y el reglamento de convivencia para todos los miembros.",
    },
    {
      titulo: "Administra pagos y mantenimiento",
      texto:
        "Lleva el control de las cuotas de administración, registra los pagos y gestiona los mantenimientos de los espacios comunes desde un mismo lugar.",
    },
  ];

  return (
    <div className="landing__container">
      <div className="landing__container__upper">
        <div className="landing__logo">
          <img src={WellHomeLogo} alt="Well Home Logo" />
        </div>
        <div className="landing__description">
          <h3>¿Cómo funciona WellHome?</h3>
        </div>
        {pasos.map((paso, index) => (
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
            <h3 style={{ marginBottom: "0.3em" }}>
              {index + 1}. {paso.titulo}
            </h3>
            <p style={{ color: "#053b50", lineHeight: "1.6" }}>{paso.texto}</p>
          </div>
        ))}
        <div className="landing__buttons">
          <button className="button__navigate">
            <Link to="/reglas">Ver reglas de convivencia</Link>
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

export default Instrucciones;
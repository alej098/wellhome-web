import React from "react";
import { Link } from "react-router-dom";
import WellHomeLogo from "../assets/WellHomeLogo04.svg";

const Avisos = () => {
  const avisos = [
    {
      titulo: "Asamblea general de la comunidad",
      fecha: "12 de septiembre de 2026",
      texto:
        "Se convoca a todos los propietarios a la asamblea general ordinaria para revisar el presupuesto del próximo semestre. Lugar: salón comunal. Hora: 6:00 p.m.",
    },
    {
      titulo: "Mantenimiento de ascensores",
      fecha: "10 de septiembre de 2026",
      texto:
        "El mantenimiento preventivo de los ascensores se realizará de 9:00 a.m. a 1:00 p.m. Durante ese tiempo el servicio estará suspendido por torre.",
    },
    {
      titulo: "Pago de cuotas de administración",
      fecha: "Recordatorio mensual",
      texto:
        "Recuerda que el plazo para el pago de las cuotas de administración vence el último día hábil del mes. Evita intereses de mora y paga puntual.",
    },
  ];

  return (
    <div className="landing__container">
      <div className="landing__container__upper">
        <div className="landing__logo">
          <img src={WellHomeLogo} alt="Well Home Logo" />
        </div>
        <div className="landing__description">
          <h3>Avisos de la comunidad</h3>
        </div>
        {avisos.map((aviso, index) => (
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
            <h3 style={{ marginBottom: "0.3em" }}>{aviso.titulo}</h3>
            <p style={{ color: "#176B87", fontWeight: "500", margin: "0 0 0.5em" }}>
              {aviso.fecha}
            </p>
            <p style={{ color: "#053b50", lineHeight: "1.6" }}>{aviso.texto}</p>
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

export default Avisos;
import React from "react";
import { Link } from "react-router-dom";
import WellHomeLogo from "../assets/WellHomeLogo04.svg";

const Info = () => {
  return (
    <div className="landing__container">
      <div className="landing__container__upper">
        <div className="landing__logo">
          <img src={WellHomeLogo} alt="Well Home Logo" />
        </div>
        <div className="landing__description">
          <h3>
            WellHome es un aplicativo web que digitaliza y simplifica la gestión
            administrativa de condominios, edificios, centros comerciales y
            cualquier conjunto de unidades multi-propiedad.
          </h3>
        </div>
        <div className="landing__description">
          <h3>
            Desde el registro de residentes y colaboradores, el control de
            mantenimientos, hasta la gestión de ingresos y la comunicación de
            tu comunidad, todo en una sola plataforma.
          </h3>
        </div>
        <div className="landing__description">
          <h3>
            Con WellHome puedes centralizar la información de tu comunidad en un
            solo lugar: administra los pagos de cuotas, registra a propietarios
            e inquilinos, lleva el control de los espacios comunes y mantén a
            todos informados de manera transparente y en tiempo real.
          </h3>
        </div>
        <div className="landing__description">
          <h3>
            Nuestro objetivo es ahorrarte tiempo y reducir los errores de la
            gestión manual, dándote herramientas claras para que tomes mejores
            decisiones sobre tu condominio o conjunto residencial.
          </h3>
        </div>
        <div className="landing__description">
          <h3>
            La plataforma está pensada para administradores, juntas directivas,
            propietarios y residentes, con un diseño simple pensado para que
            cualquier persona pueda usarla sin complicaciones.
          </h3>
        </div>
        <div className="landing__buttons">
          <button className="button__navigate">
            <Link to="/">Volver al inicio</Link>
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

export default Info;
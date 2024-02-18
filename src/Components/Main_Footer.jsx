import React from "react";
import ContactForm from "./ContactForm";
import wellHomeRounded from "../assets/WellHomeLogo07.svg";

const Main_Footer = () => {
  return (
    <div className="mainFooter__container">
      <div className="mainFooter__container__section">
        <div className="mainFooter__container__section__1">
          <div className="mainFooter__container__section__1__login">
            <h3>¿Ya tienes una cuenta o quieres resgistrarte?</h3>
            <ul>
              <li>Login</li>
              <li>Regístrate</li>
            </ul>
          </div>
          <div className="mainFooter__container__section__1__list">
            <h3>Enlaces:</h3>
            <ul>
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Precios</li>
              <li>Faqs</li>
              <li>Equipo de desarrollo</li>
            </ul>
          </div>
          <div className="mainFooter__container__section__1__logo">
            <img src={wellHomeRounded} alt="WellHome Logo" />
          </div>
        </div>

        <div className="mainFooter__container__section__2">
          <ContactForm />
        </div>
      </div>
      <div className="mainFooter__container__bottom">
        <p>©️ WellHome Copyright 2024</p>
        <p>Desarrollado por Castrum Gestión y Servicios SAC</p>
      </div>
    </div>
  );
};

export default Main_Footer;

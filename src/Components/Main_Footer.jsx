import React, { useState } from "react";
import ContactForm from "./ContactForm";
import wellHomeRounded from "../assets/WellHomeLogo07.svg";
import { Link as ScrollLink } from "react-scroll";
import Register from "./Register/Register";
import Login from "./Login";

const Main_Footer = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const display_modalRegister = () => {
    setRegisterModal(true);
  };

  const display_modalLogin = () => {
    setLoginModal(true);
  };

  return (
    <div className="mainFooter__container">
      <div className="mainFooter__container__section">
        <div className="mainFooter__container__section__1">
          <div className="mainFooter__container__section__1__login">
            <h3>¿Ya tienes una cuenta o quieres resgistrarte?</h3>
            <ul>
              <li>
                <a onClick={display_modalLogin}>Ingresar</a>
              </li>
              <li>
                <a onClick={display_modalRegister}>Registrarse</a>
              </li>
            </ul>
          </div>
          <div className="mainFooter__container__section__1__list">
            <h3>Enlaces:</h3>
            <ul>
              <li id="menu1">
                <ScrollLink
                  to="mainHome-inicio"
                  smooth={true}
                  duration={300}
                  offset={-100}
                >
                  Inicio
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="mainHome-about"
                  smooth={true}
                  duration={300}
                  offset={-100}
                >
                  Nosotros
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="mainHome-pricing"
                  smooth={true}
                  duration={300}
                  offset={-100}
                >
                  Precios
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="mainHome-faqs"
                  smooth={true}
                  duration={300}
                  offset={-100}
                >
                  Faqs
                </ScrollLink>
              </li>

              <li>
                <a href="/devs">Equipo de desarrollo</a>
              </li>
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
      {registerModal && <Register setRegisterModal={setRegisterModal} />}
      {loginModal && (
        <div className="login__popup">
          <div>
            <Login setLoginModal={setLoginModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main_Footer;

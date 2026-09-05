import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import wellHomeSmallLogo from "../assets/WellHomeLogo07.svg";
import wellHomeLongLogo from "../assets/WellHomeLogo05.svg";
import menuLogo from "../assets/icons/menu.svg";
import Register from "./Register/Register";
import { clearSession, getSession } from "../utils/session";
// import Main_NavBar_MobileMenu from './Main_NavBar_MobileMenu'

const Main_navBar = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const navigate = useNavigate();
  const { user } = getSession();

  const handleLogout = () => {
    clearSession();
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const display_modalRegister = () => {
    setRegisterModal(true);
  };

  return (
    <div className="navBar__container">
      <div className="navBar__container__left">
        <div className="navBar__container__left__smallLogo">
          <ScrollLink
            to="mainHome-inicio"
            smooth={true}
            duration={300}
            offset={-100}
          >
            <img id="smallLogo" src={wellHomeSmallLogo} alt="WellHome Logo" />
            <img id="longLogo" src={wellHomeLongLogo} alt="WellHome Logo" />
          </ScrollLink>
        </div>
      </div>

      <div className="navBar__container__right">
        {user && user.foreName && (
          <span className="navBar__container__right__greeting">Hola, {user.foreName}</span>
        )}
        <div
          className="navBar__container__right__menuIcon"
          onClick={toggleMobileMenu}
        >
          <img src={menuLogo} alt="Menu" />
        </div>

        <div
          className={`navBar__container__right__menu ${
            isMobileMenuVisible ? "open" : ""
          }`}
        >
          <ul>
            <li id="menu1">
              <ScrollLink
                to="mainHome-inicio"
                smooth={true}
                duration={300}
                offset={-100}
                onClick={isMobileMenuVisible ? toggleMobileMenu : undefined}
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
                onClick={isMobileMenuVisible ? toggleMobileMenu : undefined}
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
                onClick={isMobileMenuVisible ? toggleMobileMenu : undefined}
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
                onClick={isMobileMenuVisible ? toggleMobileMenu : undefined}
              >
                Faqs
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="main_footer"
                smooth={true}
                duration={300}
                offset={-100}
                onClick={isMobileMenuVisible ? toggleMobileMenu : undefined}
              >
                Contacto
              </ScrollLink>
            </li>
            <li>
              <a href="/avisos" onClick={isMobileMenuVisible ? toggleMobileMenu : undefined}>
                Avisos
              </a>
            </li>
            <li>
              <a href="/reglas" onClick={isMobileMenuVisible ? toggleMobileMenu : undefined}>
                Reglas
              </a>
            </li>
            <li>
              <a href="/instrucciones" onClick={isMobileMenuVisible ? toggleMobileMenu : undefined}>
                Instrucciones
              </a>
            </li>
            <li>
              <a href="/registrar-condominio" onClick={isMobileMenuVisible ? toggleMobileMenu : undefined}>
                Registrar condominio
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                  isMobileMenuVisible && toggleMobileMenu();
                }}
              >
                Cerrar sesión
              </a>
            </li>
            {isMobileMenuVisible ? (
              <li>
                <a
                href="/devs"
                  onClick={() => {
                    isMobileMenuVisible && toggleMobileMenu();
                  }}
                >
                  Equipo de Desarrollo
                </a>
              </li>
            ) : (
              ""
            )}
            {isMobileMenuVisible ? (
              <li>
                <a
                  onClick={() => {
                    display_modalRegister();
                    isMobileMenuVisible && toggleMobileMenu();
                  }}
                >
                  Registrarse
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      {registerModal && <Register setRegisterModal={setRegisterModal} />}
    </div>
  );
};

export default Main_navBar;

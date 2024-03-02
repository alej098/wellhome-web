import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import wellHomeSmallLogo from "../assets/WellHomeLogo04.svg";
import wellHomeLongLogo from "../assets/WellHomeLogo05.svg";
import menuLogo from "../assets/icons/menu.svg";
import Register from "./Register/Register";
import Login from "./Login";
// import Main_NavBar_MobileMenu from './Main_NavBar_MobileMenu'

const Main_navBar = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const display_modalRegister = () => {
    setRegisterModal(true);
  };

  const display_modalLogin = () => {
    setLoginModal(true);
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
            {isMobileMenuVisible ? (
              <li>
                <a
                href="/"
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
            <li>
              <a  onClick={() => {
                    display_modalLogin();
                    isMobileMenuVisible && toggleMobileMenu();
                  }}>Ingresar</a>
            </li>
          </ul>
        </div>
      </div>
      {registerModal && <Register setRegisterModal={setRegisterModal} />}
      {loginModal && <div className="login__popup">
        <div>
          <Login setLoginModal={setLoginModal} />
        </div>
      </div>}
    </div>
  );
};

export default Main_navBar;

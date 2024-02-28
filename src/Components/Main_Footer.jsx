import ContactForm from "./ContactForm";
import wellHomeRounded from "../assets/WellHomeLogo07.svg";
import { Link as ScrollLink } from "react-scroll";
const Main_Footer = () => {
  return (
    <div className="mainFooter__container">
      <div className="mainFooter__container__section">
        <div className="mainFooter__container__section__1">
          <div className="mainFooter__container__section__1__login">
            <h3>¿Ya tienes una cuenta o quieres resgistrarte?</h3>
            <ul>
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/">Regìstrate</a>
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
    </div>
  );
};

export default Main_Footer;

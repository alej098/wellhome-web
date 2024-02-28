import React from "react";

import Main_navBar from "../../Components/Main_NavBar";
import Main_Footer from "../../Components/Main_Footer";
import video from "../../assets/icons/video.png";
import {
  FcDataRecovery,
  FcEngineering,
  FcShare,
  FcBullish,
  FcAssistant,
  FcConferenceCall,
  FcCommandLine,
  FcMindMap,
} from "react-icons/fc";
import Faqs from "../../Components/Register/Components/Faqs";

const faqs = [
  {
    question: `✅¿Qué es una "Unidad"?`,
    answer: `🖇️Una "unidad" hace referencia a un bien o una propiedad, en el caso
  de un condominio o residencial, sería una vivienda, en el caso de de
  un centro comercial, sería un local o comercio. Una unidad es un
  bien inmueble legalmente independizado.{" "}`,
  },
  {
    question: `✅¿Cualquier persona puede registrarse?`,
    answer: `🖇️Los registros pueden realizarse mediante invitaciones o
            directamente desde nuestro aplicativo, para cualquiera de los casos,
            el administrador de cada condominio debe validar y aceptar al
            usuario.`,
  },
  {
    question: `✅¿Existe un límite de usuarios?`,
    answer: `🖇️El aplicativo permite registrar un Propietario y un Inquilino por
            unidad, empleados y personal administrativo según la organización
            interna de cada condominio.`,
  },
];

const Home = () => {
  return (
    <div className="mainHome__container">
      <Main_navBar />
      <div className="mainHome__inicio">
        <div className="mainHome__inicio-title" id="mainHome-inicio">
          <h1>
            Simplifica la administración y mejora la comunicación de tu
            comunidad.
          </h1>
        </div>
        <div className="mainHome__inicio-description">
          <h2>
            Digitaliza tus procesos administrativos, centraliza la comunicación
            en una aplicación confiable y transparente.
          </h2>
        </div>
        <div className="mainHome__inicio-benefits">
          <div className="benefits">
            <div className="benefits__icon">
              <FcDataRecovery />
            </div>
            <p>Registro de residentes y colaboradores.</p>
          </div>
          <div className="benefits">
            <div className="benefits__icon">
              <FcEngineering />
            </div>
            <p>Control de tus mantenimientos.</p>
          </div>
          <div className="benefits">
            <div className="benefits__icon">
              <FcShare />
            </div>
            <p>Comunicación efectiva.</p>
          </div>
          <div className="benefits">
            <div className="benefits__icon">
              <FcBullish />
            </div>
            <p>Control de ingresos y transparencia.</p>
          </div>
        </div>
      </div>

      <div className="mainHome__about">
        <div className="mainHome__about-mainDescription" id="mainHome-about">
          <h2>
            WellHome es un Aplicativo Web que facilita la gestión de cualquier
            condominio, centros de comercio, edificios y otros.
          </h2>
        </div>
        <div className="mainHome__about-secondaryDescription">
          <h3>
            Te ofrecemos una herramienta digital desarrollada por especialistas
            en la administración de conjuntos de unidades multi-propietario, con
            todas las funcionalidades que requieres para que tu gestión sea mas
            eficiente.
          </h3>
        </div>
        <div className="mainHome__about-benefits">
          <div className="benefits">
            <div className="benefits__icon">
              <FcConferenceCall />
            </div>
            <p>
              Te acompañamos en todo el proceso de configuración y registro.
            </p>
          </div>
          <div className="benefits">
            <div className="benefits__icon">
              <FcAssistant />
            </div>
            <p>Te brindamos soporte técnico y administrativo 24/7.</p>
          </div>
          <div className="benefits">
            <div className="benefits__icon">
              <FcCommandLine />
            </div>
            <p>Desarrollamos soluciones a tu medida y reportes customizados.</p>
          </div>
          <div className="benefits">
            <div className="benefits__icon">
              <FcMindMap />
            </div>
            <p>Estuvimos en tu lugar, conocemos tus necesidades.</p>
          </div>
        </div>
        <img className="video__home" src={video} alt="video" />
      </div>

      <div className="mainHome__pricing">
        <div className="mainHome__pricing-title" id="mainHome-pricing">
          <h2>¿Cuánto cuesta implementar WellHome?</h2>
        </div>
        <div className="mainHome__pricing-description">
          <h3>
            Los costos varían de acuerdo a la cantidad de unidades que deseas
            registrar Nuestros planes van desde Pen 0.99 por unidad al mes.
          </h3>
        </div>
        <div className="mainHome__pricing-tableContainer">
          <table>
            <thead>
              <tr>
                <th>Cant. Unidades</th>
                <th>Costo Mensual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5 - 20</td>
                <td>Pen 4.99</td>
              </tr>
              <tr>
                <td>21 - 50</td>
                <td>Pen 3.99</td>
              </tr>
              <tr>
                <td>51 - 100</td>
                <td>Pen 2.99</td>
              </tr>
              <tr>
                <td>101 - 200</td>
                <td>Pen 1.99</td>
              </tr>
              <tr>
                <td>201 - 400</td>
                <td>Pen 1.49</td>
              </tr>
              <tr>
                <td>+500</td>
                <td>Pen 0.99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mainHome__pricing-button">
          <button>¡Lo quiero!</button>
        </div>
      </div>

      <Faqs faqs={faqs} />

      <div id="main_footer">
        <Main_Footer />
      </div>
    </div>
  );
};

export default Home;

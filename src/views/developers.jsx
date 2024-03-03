import DevCard from "../Components/DevCard";
import Pablo from "../assets/icons/devs/pablo.png";
import Franco from "../assets/icons/devs/franco.png";
import Pierre from "../assets/icons/devs/pierre_preview_rev_1.png";
import Alejandro from "../assets/icons/devs/alejandro2.png";
import Luca from "../assets/icons/devs/Luca2.png";
import wellhomelogo from "../assets/WellHomeLong.png";
import { Link } from "react-router-dom";
// import Main_navBar from "../Components/Main_NavBar";

const handleLoad = () => {
  window.scrollTo(0.0);
};
const Developers = () => {
  const devs = [
    {
      id: 1,
      nombre: "Pierre Alcázar",
      imagen: Pierre,
      rol: "Back-End Developer",
      github: "https://github.com/alcazarpierre",
      linkedin: "https://www.linkedin.com/in/alcazarpierre/",
    },
    {
      id: 2,
      nombre: "Luca Bruzzone",
      imagen: Luca,
      rol: "Front-End Developer",
      github: "https://github.com/lucabruzzone",
      linkedin: "https://www.linkedin.com/in/bruzzone-luca/",
    },
    {
      id: 3,
      nombre: "Pablo Figueroa",
      imagen: Pablo,
      rol: "Front-End Developer",
      github: "https://github.com/pablofigueroa16",
      linkedin: "https://www.linkedin.com/in/pablo-figueroa-0b204b22a/",
    },
    {
      id: 4,
      nombre: "Franco Famulari",
      imagen: Franco,
      rol: "Front-End Developer",
      github: "https://github.com/pablofigueroa16",
      linkedin: "https://www.linkedin.com/in/franco-famulari-25b2b9127/",
    },
    {
      id: 5,
      nombre: "Alejandro Becerra",
      imagen: Alejandro,
      rol: "Back-End Developer",
      github: "https://github.com/alej098",
      linkedin: "https://www.linkedin.com/in/d-alejandro-becerra-g-93319025a/",
    },
   
  ];
  return (
    <div className="dev_container">
      {/* <Main_navBar /> */}
      <div className="flex_title">
        {/* <h3>Team de Desarrollo</h3> */}
        <div className="dev_logo">
          <Link to="/home" onClick={handleLoad}>
            <img src={wellhomelogo} alt="WellHome" />
          </Link>
        </div>
        <h1 className="dev_title">
          Conoce a nuestro Equipo de Desarrollo
          {/* <span className="dev_wellhome"> WellHome</span> */}
        </h1>
      </div>
      <div className="grid_container">
        {devs.map(({ nombre, imagen, rol, github, linkedin, id }) => {
          return (
            <DevCard
              nombre={nombre}
              imagen={imagen}
              rol={rol}
              key={id}
              github={github}
              linkedin={linkedin}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Developers;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import CondoRegister from "../Components/Register/Components/CondoRegister";

const ejemplo = [
  { campo: "Nombre del condominio", valor: "Condominio Mi Hogar" },
  { campo: "País", valor: "Perú" },
  { campo: "Estado", valor: "Lima" },
  { campo: "Ciudad/Provincia", valor: "Lima" },
  { campo: "Distrito/Comunidad", valor: "Miraflores" },
  { campo: "Teléfono del condominio", valor: "987654321" },
  { campo: "Descripción", valor: "Edificio residencial de 20 unidades" },
  { campo: "Nombre del usuario", valor: "Carolina" },
  { campo: "Apellido", valor: "Gómez" },
  { campo: "Cédula de identidad/DNI", valor: "87654321" },
  { campo: "Teléfono", valor: "987654123" },
  { campo: "Email", valor: "carolina@example.com" },
  { campo: "Contraseña", valor: "carol12345" },
  { campo: "Repetir contraseña", valor: "carol12345" },
  { campo: "Soy Propietario o Administrador", valor: "✔ Marcado" },
];

const RegistrarCondominio = () => {
  const navigate = useNavigate();

  return (
    <div className="landing__container">
      <div
        style={{
          display: "flex",
          gap: "2em",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "2em 1em",
          width: "100%",
        }}
      >
        <div
          className="register__subMainDiv1"
          style={{ flex: "1 1 480px", maxWidth: "500px" }}
        >
          <div className="register__subMainDiv2">
            <CondoRegister
              setCurrentPage={() => {}}
              currentPage="condominium"
              setPrevPage={() => {}}
              prevPage="condominium"
              onBack={() => navigate("/home")}
            />
          </div>
        </div>

        <aside
          className="landing__container__upper"
          style={{
            flex: "1 1 340px",
            maxWidth: "420px",
            textAlign: "left",
            border: "1px solid rgba(23, 107, 135, 0.35)",
            borderRadius: "16px",
            padding: "1.5em",
            background: "#fbfbfb",
          }}
        >
          <h3 style={{ marginBottom: "1em" }}>Ejemplo de cómo llenarlo</h3>
          <p
            style={{
              color: "#176B87",
              fontWeight: "500",
              marginBottom: "1em",
            }}
          >
            "Condominio Mi Hogar" — así se vería el formulario completo:
          </p>
          {ejemplo.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1em",
                borderBottom: "1px solid rgba(23, 107, 135, 0.15)",
                padding: "0.5em 0",
              }}
            >
              <span style={{ color: "#053b50", fontWeight: "500" }}>
                {item.campo}
              </span>
              <span style={{ color: "#176B87", textAlign: "right" }}>
                {item.valor}
              </span>
            </div>
          ))}
          <div
            className="landing__buttons"
            style={{ marginTop: "1.5em", justifyContent: "flex-start" }}
          >
            <button className="button__navigate">
              <Link to="/home">Volver al inicio</Link>
            </button>
          </div>
        </aside>
      </div>
      <div className="landing__footer">
        <p>©️ WellHome Copyright 2024</p>
        <p>Desarrollado por Castrum Gestión y Servicios SAC</p>
      </div>
    </div>
  );
};

export default RegistrarCondominio;
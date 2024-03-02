import { useState } from "react";
import Select from "react-select";
import arFlag from "../assets/icons/ar.svg";
import clFlag from "../assets/icons/cl.svg";
import peFlag from "../assets/icons/pe.svg";

const options = [
  { value: "+54", label: "Argentina", icon: arFlag },
  { value: "+56", label: "Chile", icon: clFlag },
  { value: "+51", label: "Perú", icon: peFlag },
];
const optionssubject = [
  { value: "Quiero implementarlo", label: "Quiero implementarlo" },
  { value: "Necesito mas informacion", label: "Necesito mas informacion" },
  { value: "Otro asunto", label: "Otro asunto" },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #ccc",
    color: state.isSelected ? "white" : "black",
    padding: 10,
    display: "flex",
    alignItems: "center",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "black",
  }),
};

const customOption = ({ data, innerProps, innerRef, isFocused }) => (
  <div
    {...innerProps}
    ref={innerRef}
    style={{
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      padding: "5px 10px",
      backgroundColor: isFocused ? "#4658b0" : "transparent",
      color: isFocused ? "white" : "black",
    }}
  >
    {data.icon && (
      <img
        src={data.icon}
        alt={data.label}
        style={{ width: "20px", marginRight: "10px" }}
      />
    )}
    {data.label}
  </div>
);
const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    celular: "",
    mensaje: "",
    aceptoContacto: false,
    pais: "",
  });
  const [countrySelected, setCountrySelected] = useState(false);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "celular" && countrySelected) {
      if (value.indexOf(formData.celular) !== 0) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: prevData.celular + value.slice(prevData.celular.length),
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellidos, correo, celular, mensaje, aceptoContacto } =
      formData;
    if (nombre && apellidos && correo && celular && mensaje && aceptoContacto) {
      console.log("Formulario enviado:", formData);
    } else {
      alert(
        "Por favor, completa todos los campos y marca la casilla de aceptación."
      );
    }
  };

  const isFormComplete = () => {
    const { nombre, apellidos, correo, celular, mensaje, aceptoContacto } = formData;
    return nombre && apellidos && correo && celular && mensaje && aceptoContacto;
  };

  const handleCountryChange = (selectedOption) => {
    const selectedCountry = selectedOption ? selectedOption.value : "";
    const selectedCountryData = options.find(
      (option) => option.value === selectedCountry
    );
    const defaultAreaCode = selectedCountryData
      ? selectedCountryData.value
      : "";

    setFormData({
      ...formData,
      pais: selectedCountry,
      celular: defaultAreaCode,
    });

    setCountrySelected(selectedCountry !== "");
  };
  const handleSubjectChange = (selectedOption) => {
    const selectedSubject = selectedOption ? selectedOption.value : "";
    setFormData({
      ...formData,
      asunto: selectedSubject,
    });
  };
  return (
    <div className="contactForm__container">
      <form onSubmit={handleSubmit}>
        <div className="contactForm__container__inputGroup">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="country">País:</label>
          <Select
            className="country"
            id="country"
            options={options}
            onChange={handleCountryChange}
            getOptionLabel={(option) => option.label}
            styles={customStyles}
            components={{ Option: customOption }}
          />
          <label htmlFor="celular">Celular:</label>
          <label htmlFor="number"></label>
          <div className="contactForm__container__NumContainer">
            <input
              className="phone"
              type="tel"
              id="celular"
              name="celular"
              value={formData.celular}
              onChange={handleInputChange}
              required
              readOnly={countrySelected}
            />
            <input className="number" type="number" id="number" />
          </div>
          <label htmlFor="subject">Asunto:</label>
          <Select
            className="subject"
            id="subject"
            options={optionssubject}
            onChange={handleSubjectChange}
            getOptionLabel={(option) => option.label}
          />
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="contactForm__container__check">
          <label>
            <input
              type="checkbox"
              name="aceptoContacto"
              checked={formData.aceptoContacto}
              onChange={handleInputChange}
            />
            Acepto que un asesor de WellHome se ponga en contacto conmigo
          </label>
        </div>

        <div className="contactForm__container__submit">
          <button type="submit" disabled={!formData.aceptoContacto && !isFormComplete()}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

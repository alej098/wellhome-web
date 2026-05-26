import { useState } from "react";
import Select from "react-select";
import axios from "axios";
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

  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    foreName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    aceptoContacto: false,
    country: "",
  });
  const [countrySelected, setCountrySelected] = useState(false);
  
  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { foreName, lastName, email, phone, message, aceptoContacto } = formData;
    if (foreName && lastName && email && phone && message && aceptoContacto) {
      const apiUrl = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3001/';
      try {
        await axios.post(`${apiUrl}contactform`, {
          foreName,
          lastName,
          email,
          phone,
          message,
        });
        setMessageSent(true);
      } catch (err) {
        alert("Error al enviar el formulario. Intenta de nuevo.");
      }
    } else {
      alert(
        "Por favor, completa todos los campos y marca la casilla de aceptación."
      );
    }
  };

  const isFormComplete = () => {
    const { foreName, lastName, email, phone, message, aceptoContacto } = formData;
    return foreName && lastName && email && phone && message && aceptoContacto;
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
          <label htmlFor="foreName">Nombre:</label>
          <input
            type="text"
            id="foreName"
            name="foreName"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Apellidos:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.correo}
            onChange={handleChange}
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
              onChange={handleChange}
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
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contactForm__container__check">
          <label>
            <input
              type="checkbox"
              name="aceptoContacto"
              checked={formData.aceptoContacto}
              onChange={handleChange}
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

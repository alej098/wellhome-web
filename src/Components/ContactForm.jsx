import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    celular: '',
    mensaje: '',
    aceptoContacto: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellidos, correo, celular, mensaje, aceptoContacto } = formData;
    if (nombre && apellidos && correo && celular && mensaje && aceptoContacto) {
      // Enviar el formulario (puedes agregar la lógica para enviar la información)
      console.log('Formulario enviado:', formData);
    } else {
      alert('Por favor, completa todos los campos y marca la casilla de aceptación.');
    }
  };

  return (
    <div className='contactForm__container'>
      <form onSubmit={handleSubmit}>
        <div className='contactForm__container__inputGroup'>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />

            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleInputChange} required />

            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required />

            <label htmlFor="celular">Celular:</label>
            <input type="tel" id="celular" name="celular" value={formData.celular} onChange={handleInputChange} required />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleInputChange} required />
        </div>
        
        <div className='contactForm__container__check'>
          <label>
            <input type="checkbox" name="aceptoContacto" checked={formData.aceptoContacto} onChange={handleInputChange} />
            Acepto que un asesor de WellHome se ponga en contacto conmigo
          </label>
        </div>

        <div className='contactForm__container__submit'>
            <button type="submit" disabled={!formData.  aceptoContacto}>
              Enviar
            </button>
        </div>
      </form>
    </div>
    
  );
};

export default ContactForm;

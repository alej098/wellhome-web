import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import { postLoginForm } from "../utils/apiRequest";
import 'react-toastify/dist/ReactToastify.css';
import imgClose from "../assets/icons/circle-xmark-regular.svg";

const Login = ({setLoginModal}) => {

  function close_modal() {
    setLoginModal(false);
  }

  const [user, setUser] = useState({
    login:'',
    password:''
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await postLoginForm(user);
      console.log("Ingreso Exitoso", response);
      setUser({ login: '', password: '' });
      navigate("/working");
    } catch (error) {
      console.error("Fallo el proceso de Login", error);
      setError("Ocurrió un error durante el inicio de sesión.");
      toast.error("Error al iniciar sesión. Por favor, verifica tu usuario y contraseña.")
    }
  };

  return (
    <div className="login__container">
      {setLoginModal && <div onClick={close_modal} className="login__container__close__icon">
        <img src={imgClose} alt="" />
      </div>}
      <ToastContainer 
        position="center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick = {true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}/>
      <form action="#" method="post" className="login__form">

        <div className="input__group">
          <label htmlFor="login">Usuario o Email:</label>
          <input 
            onChange={handleChange} 
            type="email" 
            id="login" 
            name="login"
            autoComplete="on" 
            placeholder="Escribe tu email"
            required />
        </div>

        <div className="input__group">
          <label htmlFor="password">Contraseña o Password:</label>
          <input 
            onChange={handleChange} 
            type="password" 
            id="password" 
            name="password"
            autoComplete="off" 
            placeholder="******"
            required  />
        </div>

        <div className="login__submit">
          <button onClick={handleSubmit} className="login__submit__button" type="submit">
            Ingresar
          </button>
        </div>
      </form>

    </div>
  );
};

export default Login;

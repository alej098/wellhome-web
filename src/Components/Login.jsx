import React from "react";
import imgClose from "../assets/icons/circle-xmark-regular.svg";

const Login = ({setLoginModal}) => {

  function close_modal() {
    setLoginModal(false);
  }

  return (
    <div className="login__container">
      {setLoginModal && <div onClick={close_modal} className="login__container__close__icon">
        <img src={imgClose} alt="" />
      </div>}
      <form action="#" method="post" className="login__form">
        <div className="input__group">
          <label htmlFor="username">Usuario o Email:</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className="input__group">
          <label htmlFor="password">Contraseña o Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="login__submit">
          <button className="login__submit__button" type="submit">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

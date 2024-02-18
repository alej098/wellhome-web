import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import WellHomeLogo from "../assets/WellHomeLogo04.svg"
import Login from '../Components/Login'
import Register from '../Components/Register/Register'

function Landing() {
    const [registerModal, setRegisterModal] = useState(false);

    function display_modal(params) {
        setRegisterModal(true)
    }

    const handleLoad = () => {
        window.scrollTo(0.0);
    }

    return (
        <div className='landing__container'>
            <div className='landing__container__upper'>
                <div className='landing__logo'>
                    <img src={WellHomeLogo} alt="Well Home Logo" />
                </div>
                <div className='landing__title'>
                    <h1>Gestor de Inmuebles</h1>
                </div>
                <div className='landing__description'>
                    <h3>Digitaliza y simplifica la gestión administrativa de tu Condominio o cualquier conjunto de unidades Multi Propiedad con nuestro Aplicativo Web</h3>
                </div>
                <div className='landing__buttons'>
                    <button className='button__navigate'>
                        <Link to='/home' onClick={handleLoad}>¿Quiéres saber más?<br />¡Ingresa Aquí!</Link>
                    </button>
                </div>
            </div>
            <div>
                <Login display_modal={display_modal} />
            </div>
            <div className='landing__footer'>
                <p>©️ WellHome Copyright 2024</p>
                <p>Desarrollado por Castrum Gestión y Servicios SAC</p>
            </div>
            {registerModal && <Register setRegisterModal={setRegisterModal} />}
        </div>
    )
}

export default Landing;
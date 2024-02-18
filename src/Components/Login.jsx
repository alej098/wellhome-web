import React from 'react'

const Login = ({ display_modal }) => {
    return (
        <div className='login__container'>
            <div onClick={display_modal} className='login__title'>
                <p>¿Ya tienes una cuenta o deseas <a onClick={display_modal} href="#">registrarte?</a></p>
            </div>
            <form action="#" method="post" className="login__form">
                <div className="input__group">
                    <label htmlFor="username">Usuario o Email:</label>
                    <input type="text" id="username" name="username" required />
                </div>

                <div className="input__group">
                    <label htmlFor="password">Contraseña o Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div className='login__submit'>
                    <button className='login__submit__button' type="submit">Ingresar</button>
                </div>

            </form>
        </div>
    )
}

export default Login;
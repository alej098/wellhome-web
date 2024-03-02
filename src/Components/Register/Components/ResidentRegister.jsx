import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import logo from '../../../assets/icons/WellHomeLogo01.svg'
import { formValidation } from './formValidation'

function ResidentRegister({ countType, setCurrentPage, currentPage, setPrevPage, prevPage, message }) {
    const [isACondominiumOwner, setIsACondominiumOwner] = useState(currentPage === 'owner_inquilino' || currentPage === 'owner_propietario');
    const [captchaValue, setCaptchaValue] = useState(null);
    const [form_completed, setForm_completed] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        lastname: '',
        dni: '',
        phone: '',
        email: '',
        password: '',
        repeat_password: '',
        checkbox_confirm: isACondominiumOwner
    });
    const [passwordValidation, setPasswordValidation] = useState({
        largo: false,
        letters: false,
        numbers: false,
    });
    const [form, setForm] = useState({
        name: '',
        lastname: '',
        dni: '',
        phone: '',
        email: '',
        password: '',
        repeat_password: '',
        checkbox_confirm: isACondominiumOwner
    });

    function input_change(e) {
        const id = e.target.id;
        let value = e.target.value;
        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }
        setForm({ ...form, [id]: value });
        const form_validation = formValidation({ ...form, [id]: value });
        // console.log(form_validation);
        const errors_detected = form_validation.errors;
        const password_validation = form_validation.passwordValidation;
        setPasswordValidation(password_validation);
        if (!Object.keys(errors_detected).length && password_validation.largo && password_validation.letters && password_validation.numbers) {
            // si no hay errores y la contraseña cumple con los requisitos, seteamos el estado "form" en true.
            setForm_completed(true);
            setErrors({
                name: '',
                phone: '',
                email: '',
                password: '',
                repeat_password: '',
                checkbox_confirm: false
            });
        }
        else if (Object.keys(errors_detected).length) {
            //si existen errores, renderizamos los errores y seteamos el estado "form" en false.
            setErrors(errors_detected);
            setForm_completed(false);
        }
        else {
            setForm_completed(false);
        }
    }

    function submitForm(e) {
        e.preventDefault();
        if (form_completed) {
            if (captchaValue) {
                alert(`Se envía el formulario del ${countType} al back`);
            }
            else {
                alert('Por favor, resuelve el Captcha.');
            }
        }
        setPrevPage(currentPage);
    }

    function prev_page() {
        setCurrentPage(prevPage);
        setPrevPage(currentPage);
    }

    function handleCaptchaChange(value) {
        setCaptchaValue(value);
    };

    return (
        <div className='userRegister_mainView'>
            <section className='userRegister_section1'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <p className='register_opacity_appear'>{message ? message : 'Complete los campos'}</p>
            </section>
            <form action="#" method="post" className="residentRegister__form register_opacity_appear">
                <div className="register__inputBox">
                    <label htmlFor="">Nombre<span>*</span></label>
                    <input onChange={input_change} id="name" type="text" className={`${errors.name ? 'errorInput' : ''}`} />
                    {errors.name && <p className='errors'>{errors.name}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Apellido<span>*</span></label>
                    <input onChange={input_change} id="lastname" type="text" className={`${errors.lastname ? 'errorInput' : ''}`} />
                    {errors.lastname && <p className='errors'>{errors.lastname}</p>}
                </div>
                <div className="register__select">
                    <select onChange={input_change} defaultValue='dni' id="identification" name="Identificación" className="register__inputBox">
                        <option value="dni">Cédula de identidad/DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                    </select>
                    <input onChange={input_change} id="dni" type="text" placeholder='Identificación' className={`${errors.dni ? 'errorInput' : ''}`} />
                    {errors.dni && <p className='errors'>{errors.dni}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Teléfono<span>*</span></label>
                    <input onChange={input_change} id="phone" type="text" className={`${errors.phone ? 'errorInput' : ''}`} />
                    {errors.phone && <p className='errors'>{errors.phone}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Email<span>*</span></label>
                    <input onChange={input_change} id="email" type="text" className={`${errors.email ? 'errorInput' : ''}`} />
                    {errors.email && <p className='errors'>{errors.email}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Contraseña<span>*</span></label>
                    <input onChange={input_change} id="password" type="password" autocomplete="off" />
                    <p>Debe contener:</p>
                    <li className='errors' id={`${passwordValidation.largo ? 'password_ok' : ''}`}>Entre 6 y 10 caracteres</li>
                    <li className='errors' id={`${passwordValidation.letters ? 'password_ok' : ''}`}>Al menos una letra del abecedario [a-z]'</li>
                    <li className='errors' id={`${passwordValidation.numbers ? 'password_ok' : ''}`}>Al menos un número del 1 al 9</li>
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Repita su contraseña<span>*</span></label>
                    <input onChange={input_change} id="repeat_password" type="password" autocomplete="off" />
                    {errors.repeat_password && <p className='errors'>{errors.repeat_password}</p>}
                </div>
                {!isACondominiumOwner &&
                    <div className="register__checkBox">
                        <input onChange={input_change} id="checkbox_confirm" type="checkbox" name="miCheckbox" />
                        <label for="miCheckbox">{`Confirmo que soy ${currentPage} de la vivienda`}</label>
                    </div>
                }
                <div className='reCaptcha'>
                    <ReCAPTCHA
                        sitekey="6Lc_ynApAAAAAPLNrHIT4L2Bz4cNNU9jnp4SYCSr"
                        onChange={handleCaptchaChange}
                    />
                </div>
            </form>
            <section className='userRegister_section3 register_opacity_appear'>
                <button onClick={prev_page}>
                    <i class="fa-solid fa-chevron-left"></i>
                    <p>Atrás</p>
                </button>
                <button onClick={submitForm} className={`${form_completed && captchaValue ? '' : 'button_not_allowed'}`}>
                    <p>Siguiente</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </section>
        </div>
    );
}

export default ResidentRegister;
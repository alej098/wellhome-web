import { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import logo from '../../../assets/icons/WellHomeLogo01.svg';
import { formValidation } from './formValidation.js';
import { preregister } from '../../../../endpoints.js';
import axios from 'axios';

function CondoRegister({ countType, setCurrentPage, currentPage, setPrevPage, prevPage, message }) {
    const api = import.meta.env.VITE_REACT_APP_API_URL;
    const [isACondominiumOwner, setIsACondominiumOwner] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [form_completed, setForm_completed] = useState(false);
    const [errors, setErrors] = useState({
        foreName: '',
        lastName: '',
        dni: '',
        ownerPhone: '',
        ownerEmail: '',
        password: '',
        repeat_password: '',
        checkbox_confirm: isACondominiumOwner,

        name: '',
        country: 'argentina',
        state: '',
        city: '',
        district: '',
        placeDescription: '',
        phone: '',
    });
    const [passwordValidation, setPasswordValidation] = useState({
        largo: false,
        letters: false,
        numbers: false,
    });
    const [form, setForm] = useState({
        foreName: '',
        lastName: '',
        dni: '',
        ownerPhone: '',
        ownerEmail: '',
        password: '',
        repeat_password: '',
        checkbox_confirm: isACondominiumOwner,

        name: '',
        country: 'Argentina',
        state: '',
        city: '',
        district: '',
        placeDescription: '',
        phone: '',
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
        postForm();
        /* e.preventDefault();
        if (form_completed) {
            setCurrentPage('owner_register');
        }
        setPrevPage(currentPage); */
    }

    async function postForm() {
        console.log(form);
        try {
            const { data } = await axios.post(`${api}${preregister}`, form);
            console.log(data);
        } catch (error) {
            console.error({ error: error });
        }
    }

    function prev_page() {
        setCurrentPage(prevPage);
        setPrevPage(currentPage);
    }

    function handleCaptchaChange(value) {
        setCaptchaValue(value);
    };

    /* useEffect(() => {
        //verificamos si el formulario está completo y válido
        const errors = validationCondo(form);
        if (!Object.values(errors).includes(false)) {
            setForm_completed(true);
        }
    }, [form]); */

    return (
        <div className='userRegister_mainView'>
            <section className='userRegister_section1'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <p className='register_opacity_appear'>Ingrese los datos de su condominio</p>
            </section>
            <form action="#" method="post" className="residentRegister__form register_opacity_appear">
                <div className="register__inputBox">
                    <label htmlFor="">Nombre del condominio<span>*</span></label>
                    <input onChange={input_change} id="name" type="text" className={`${errors.name ? 'errorInput' : ''}`} />
                    {errors.name && <p className='errors'>{errors.name}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">País<span>*</span></label>
                    <select onChange={input_change} defaultValue='Argentina' id="country" name="País" className="register__inputBox">
                        <option value="Argentina">Argentina</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="México">México</option>
                        <option value="Perú">Perú</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Venezuela">Venezuela</option>
                    </select>
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Estado<span>*</span></label>
                    <input onChange={input_change} id="state" type="text" className={`${errors.state ? 'errorInput' : ''}`} />
                    {errors.state && <p className='errors'>{errors.state}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Provincia/Distrito<span>*</span></label>
                    <input onChange={input_change} id="district" type="text" className={`${errors.district ? 'errorInput' : ''}`} />
                    {errors.district && <p className='errors'>{errors.district}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Ciudad<span>*</span></label>
                    <input onChange={input_change} id="city" type="text" className={`${errors.city ? 'errorInput' : ''}`} />
                    {errors.city && <p className='errors'>{errors.city}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Teléfono del condominio<span>*</span></label>
                    <input onChange={input_change} id="phone" type="number" max={5} min={0} className={`${errors.phone ? 'errorInput' : ''}`} />
                    {errors.phone && <p className='errors'>{errors.phone}</p>}
                </div>
                <div className="register_description register__inputBox">
                    <label htmlFor="">Descripción<span></span></label>
                    <textarea onChange={input_change} id="placeDescription" type="text" maxLength={300} />
                </div>


                <section className='userRegister_section1'>
                    <p className='register_opacity_appear'>Ingrese los datos de ususario</p>
                </section>
                <div className="register__inputBox">
                    <label htmlFor="">Nombre del usuario<span>*</span></label>
                    <input onChange={input_change} id="foreName" type="text" className={`${errors.foreName ? 'errorInput' : ''}`} />
                    {errors.foreName && <p className='errors'>{errors.foreName}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Apellido<span>*</span></label>
                    <input onChange={input_change} id="lastName" type="text" className={`${errors.lastName ? 'errorInput' : ''}`} />
                    {errors.lastName && <p className='errors'>{errors.lastName}</p>}
                </div>
                <div className="register__inputBox register__select">
                    <select onChange={input_change} defaultValue='dni' id="identification" name="Identificación" className="register__inputBox">
                        <option value="dni">Cédula de identidad/DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                    </select>
                    <input onChange={input_change} id="dni" type="text" placeholder='Identificación' className={`${errors.dni ? 'errorInput' : ''}`} />
                    {errors.dni && <p className='errors'>{errors.dni}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Teléfono<span>*</span></label>
                    <input onChange={input_change} id="ownerPhone" type="text" className={`${errors.ownerPhone ? 'errorInput' : ''}`} />
                    {errors.ownerPhone && <p className='errors'>{errors.ownerPhone}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Email<span>*</span></label>
                    <input onChange={input_change} id="ownerEmail" type="text" autoComplete="on" className={`${errors.ownerEmail ? 'errorInput' : ''}`} />
                    {errors.ownerEmail && <p className='errors'>{errors.ownerEmail}</p>}
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Contraseña<span>*</span></label>
                    <input onChange={input_change} id="password" type="password" autoComplete="off" />
                    <p>Debe contener:</p>
                    <li className='errors' id={`${passwordValidation.largo ? 'password_ok' : ''}`}>Entre 6 y 10 caracteres</li>
                    <li className='errors' id={`${passwordValidation.letters ? 'password_ok' : ''}`}>Al menos una letra del abecedario [a-z]'</li>
                    <li className='errors' id={`${passwordValidation.numbers ? 'password_ok' : ''}`}>Al menos un número del 1 al 9</li>
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Repita su contraseña<span>*</span></label>
                    <input onChange={input_change} id="repeat_password" type="password" autoComplete="off" />
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
                    <i className="fa-solid fa-chevron-left"></i>
                    <p>Atrás</p>
                </button>
                <button onClick={submitForm} className={`${form_completed && captchaValue ? '' : 'button_not_allowed'}`}>
                    <p>Siguiente</p>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </section>
        </div>
    );
}

export default CondoRegister;
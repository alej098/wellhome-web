import { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import logo from '../../../assets/icons/WellHomeLogo01.svg'
import { validationCondo } from './formValidation'

function CondoRegister({ setCurrentPage, currentPage, setPrevPage }) {
    const [form_completed, setForm_completed] = useState(false);
    const [form, setForm] = useState({
        name: '',
        country: 'argentina',
        state: '',
        district: '',
        city: '',
        phone: '',
        email: '',
        description: '',
    });

    function input_change(e) {
        const id = e.target.id;
        let value = e.target.value;
        setForm({ ...form, [id]: value });
        // console.log({ ...form, [id]: value });
    }

    function submitForm(e) {
        e.preventDefault();
        if (form_completed) {
            setCurrentPage('owner_register');
        }
        setPrevPage(currentPage);
    }

    function prev_page() {
        setCurrentPage('general');
        setPrevPage(currentPage);
    }

    useEffect(() => {
        //verificamos si el formulario está completo y válido
        const errors = validationCondo(form);
        if (!Object.values(errors).includes(false)) {
            setForm_completed(true);
        }
    }, [form]);

    return (
        <div className='userRegister_mainView'>
            <section className='userRegister_section1'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <p className='register_opacity_appear'>Complete los campos</p>
            </section>
            <form action="#" method="post" className="residentRegister__form register_opacity_appear">
                <div className="register__inputBox">
                    <label htmlFor="">Nombre del condominio<span>*</span></label>
                    <input onChange={input_change} id="name" type="text" />
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">País<span>*</span></label>
                    <select onChange={input_change} defaultValue='Argentina' id="country" name="País" className="register__inputBox">
                        <option value="argentina">Argentina</option>
                        <option value="bolivia">Bolivia</option>
                        <option value="chile">Chile</option>
                        <option value="colombia">Colombia</option>
                        <option value="ecuador">Ecuador</option>
                        <option value="mexico">México</option>
                        <option value="peru">Perú</option>
                        <option value="paraguay">Paraguay</option>
                        <option value="uruguay">Uruguay</option>
                        <option value="venezuela">Venezuela</option>
                    </select>
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Estado<span>*</span></label>
                    <input onChange={input_change} id="state" type="text" />
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Provincia/Distrito<span>*</span></label>
                    <input onChange={input_change} id="district" type="text" />
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Ciudad<span>*</span></label>
                    <input onChange={input_change} id="city" type="text" />
                </div>
                <div className="register__inputBox">
                    <label htmlFor="">Teléfono del condominio<span>*</span></label>
                    <input onChange={input_change} id="phone" type="number" max={5} min={0} />
                </div>
                {/* <div className="register__inputBox">
                    <label htmlFor="">Email<span></span></label>
                    <input onChange={input_change} id="email" type="text" />
                </div> */}
                <div className="register_description register__inputBox">
                    <label htmlFor="">Descripción<span></span></label>
                    <input onChange={input_change} id="description" type="text" />
                </div>
            </form>
            <section className='userRegister_section3 register_opacity_appear'>
                <button onClick={prev_page}>
                    <i class="fa-solid fa-chevron-left"></i>
                    <p>Atrás</p>
                </button>
                <button onClick={submitForm} className={`${form_completed ? '' : 'button_not_allowed'}`}>
                    <p>Siguiente</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </section>
        </div>
    );
}

export default CondoRegister;
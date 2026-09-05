import logo from '../../../assets/WellHomeLogo07.svg'
import resident from '../../../assets/icons/residente2.png'
import condominium from '../../../assets/icons/condominium.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GeneralRegister({ currentPage, setCurrentPage, setPrevPage }) {
    const [userType, setUserType] = useState('resident_type');
    const navigate = useNavigate();

    function next_page() {
        if (userType === 'condominium') {
            navigate('/registrar-condominio');
            return;
        }
        setPrevPage(currentPage);
        if (userType) {
            setCurrentPage(userType);
        }
    }

    function handle_usertype(e) {
        setUserType(e.target.name);
    }

    return (
        <div className='userRegister_mainView'>
            <section className='userRegister_section1'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <p>Crea tu cuenta como residente <br /> o registra tu Condominio <br />para adquirir la App</p>
            </section>
            <section className='userRegister_section2'>
                <div className='register_scale_appear'>
                    <p>Residente</p>
                    <button onClick={handle_usertype} name='resident_type' className={`${userType === 'resident_type' ? 'register_selected_option' : 'div_off'}`}>
                        <img name='resident_type' src={resident} alt="" />
                    </button>
                </div>
                <div className='register_scale_appear'>
                    <p>Condominio</p>
                    <button onClick={handle_usertype} name='condominium' className={`${userType === 'condominium' ? 'register_selected_option' : 'div_off'}`}>
                        <img name='condominium' src={condominium} alt="" />
                    </button>
                </div>
            </section>
            <section className='userRegister_section3 register_opacity_appear'>
                <button className='scale_hidden_element'>
                    <i className="fa-solid fa-chevron-left"></i>
                    <p>Atrás</p>
                </button>
                <button onClick={next_page}>
                    <p>Siguiente</p>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </section>
        </div>
    );
}

export default GeneralRegister;
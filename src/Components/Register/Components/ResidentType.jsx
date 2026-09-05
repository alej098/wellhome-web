import { useState } from 'react';
import logo from '../../../assets/WellHomeLogo07.svg';
import rent from '../../../assets/icons/alquilar.png';
import owner from '../../../assets/icons/dueno.png';

function ResidentType({ currentPage, setCurrentPage, setPrevPage }) {
    const [userType, setUserType] = useState('inquilino');

    function handle_usertype(e) {
        setUserType(e.target.name);
    }

    function next_page() {
        setPrevPage(currentPage);
        setCurrentPage(userType);
    }

    function prev_page() {
        setCurrentPage('general');
        setPrevPage('resident_type');
    }

    return (
        <div className='userRegister_mainView'>
            <section className='userRegister_section1'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <p>¿Cómo te vinculas a la vivienda?</p>
            </section>
            <section className='userRegister_section2'>
                <div className='register_scale_appear'>
                    <p>Inquilino</p>
                    <button onClick={handle_usertype} name='inquilino' className={`${userType === 'inquilino' ? 'register_selected_option' : 'div_off'}`}>
                        <img name='inquilino' src={rent} alt="" />
                    </button>
                </div>
                <div className='register_scale_appear'>
                    <p>Propietario</p>
                    <button onClick={handle_usertype} name='propietario' className={`${userType === 'propietario' ? 'register_selected_option' : 'div_off'}`}>
                        <img name='propietario' src={owner} alt="" />
                    </button>
                </div>
            </section>
            <section className='userRegister_section3 register_opacity_appear'>
                <button onClick={prev_page}>
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

export default ResidentType;
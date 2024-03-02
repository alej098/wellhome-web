import { useState } from 'react';
import logo from '../../../assets/icons/WellHomeLogo01.svg'
import place_img from '../../../assets/icons/construccion.png'
import rent from '../../../assets/icons/alquilar.png'
import owner from '../../../assets/icons/dueno.png'
import check from '../../../assets/icons/marca-de-verificacion.png'

function Owner_register({ currentPage, setCurrentPage, setPrevPage, prevPage }) {
    const [userType, setUserType] = useState('owner_inquilino');

    function next_page() {
        setCurrentPage(userType);
        setPrevPage(currentPage);
    }

    function prev_page() {
        setCurrentPage('condominium');
        setPrevPage('owner_register');
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
            </section>
            <section className='userRegister_section2'>
                <div className='register_scale_appear'>
                    <p>Inquilino</p>
                    <button onClick={handle_usertype} name='owner_inquilino' className={`${userType === 'owner_inquilino' ? 'register_selected_option' : 'div_off'}`}>
                        <img name='owner_inquilino' src={rent} alt="" />
                    </button>
                </div>
                <div className='register_scale_appear'>
                    <p>Propietario</p>
                    <button onClick={handle_usertype} name='owner_propietario' className={`${userType === 'owner_propietario' ? 'register_selected_option' : 'div_off'}`}>
                        <img name='owner_propietario' src={owner} alt="" />
                    </button>
                </div>
            </section>
            <section className='userRegister_section3 register_opacity_appear'>
                <button onClick={prev_page}>
                    <i class="fa-solid fa-chevron-left"></i>
                    <p>Atrás</p>
                </button>
                <button onClick={next_page} className={`${userType ? '' : 'button_not_allowed'}`}>
                    <p>Siguiente</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </section>
        </div>
    );
}

export default Owner_register;
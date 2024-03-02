import logo from '../../../assets/icons/WellHomeLogo01.svg'
import resident from '../../../assets/icons/residente2.png'
import condominium from '../../../assets/icons/condominium.png'
import { useState } from 'react';

function GeneralRegister({ currentPage, setCurrentPage, setPrevPage }) {
    const [userType, setUserType] = useState('token_page');

    function next_page() {
        setPrevPage('general');
        if (userType) {
            setCurrentPage(userType);
        }
        setPrevPage(currentPage);
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
                <p>Crea una cuenta como residente o dueño de un condominio</p>
            </section>
            <section className='userRegister_section2'>
                <div className='register_scale_appear'>
                    <p>Residente</p>
                    <button onClick={handle_usertype} name='token_page' className={`${userType === 'token_page' ? 'register_selected_option' : 'div_off'}`}>
                        <img name='token_page' src={resident} alt="" />
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
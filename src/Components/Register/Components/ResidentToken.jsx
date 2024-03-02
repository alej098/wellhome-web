import { useState } from 'react';
import logo from '../../../assets/icons/WellHomeLogo01.svg'
import place_img from '../../../assets/icons/construccion.png'
import rent from '../../../assets/icons/alquilar.png'
import owner from '../../../assets/icons/dueno.png'
import check from '../../../assets/icons/marca-de-verificacion.png'

function ResidentToken({ currentPage, setCurrentPage, setPrevPage, prevPage }) {
    const token_prueba = 'ABC123-DEF456-GHI789';
    const place = {
        place: 'Edificio Montemar',
        apartment: '133',
        img: place_img
    };
    const [tokenInput, setTokenInput] = useState(null);
    const [access, setAccess] = useState(prevPage === 'inquilino' || prevPage === 'propietario');
    const [invalidToken, setInvalidToken] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState('inquilino');
    const [input_animation, setInput_animation] = useState(false);

    function token_input_change(e) {
        const value = e.target.value;
        setTokenInput(value);
        if (!value.trim().length) {
            setInvalidToken(false);
        }
    }

    function token_validation() {
        if (tokenInput && tokenInput.trim().length) {
            setLoading(true);
            setTimeout(() => {
                /* if (tokenInput === token_prueba) {
                    setAccess(true);
                    setInvalidToken(false);
                } */
                if (tokenInput) {
                    setAccess(true);
                    setInvalidToken(false);
                }
                else {
                    setAccess(false);
                    setInvalidToken(true);
                }
                setLoading(false);
            }, 3000);
        }
        else {
            setTokenInput('');
            // loop para la animación
            setInput_animation(true);
            // Remueve la clase después de un tiempo para poder aplicarla nuevamente
            setTimeout(() => {
                setInput_animation(false);
            }, 600); // mismo tiempo que dura la animación en ejecutarse
        }
    }

    function next_page() {
        if (!access) {
            token_validation();
        }
        else {
            setCurrentPage(userType);
        }
        setPrevPage(currentPage);
    }

    function prev_page() {
        setCurrentPage('general');
        setPrevPage('token_page');
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') next_page();
    };

    function handle_usertype(e) {
        setUserType(e.target.name);
    }

    return (
        <div className='userRegister_mainView'>
            <section className='userRegister_section1'>
                <div>
                    <img src={logo} alt="" />
                </div>
                {!access ?
                    <p className='register_opacity_appear'>Ingresa el token de acceso</p>
                    :
                    <div id='userRegister_access_granted'>
                        <img src={check} alt="" />
                        <div>
                            <img src={place.img} alt="" />
                            <p id='placeName'>{place.place}</p>
                        </div>
                        <p>{`Apartamento: ${place.apartment}`}</p>
                    </div>
                }
                {loading &&
                    <div className='userRegister_loadingToken'>
                        <div className='register_loader'></div>
                        <p id='loading_text'>Cargando...</p>
                    </div>
                }
                {(!access && !loading) &&
                    <input onChange={token_input_change} onKeyDown={handleKeyPress} value={tokenInput} type="text" placeholder='ABC123-DEF456-GHI789' className={`userRegister_inputToken ${input_animation ? 'input_animation' : ''}`} />
                }
                {(invalidToken && tokenInput && tokenInput.trim().length && !loading) &&
                    <p className='register_invalid_token'>Token inválido</p>
                }
                {!access &&
                    <p className='userRegister_token_description'>
                        Si tu condominio está inscrito en Welhome, solicita a tu administrador el token de acceso.
                    </p>
                }
            </section>
            {access &&
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
            }
            <section className='userRegister_section3 register_opacity_appear'>
                <button onClick={prev_page}>
                    <i class="fa-solid fa-chevron-left"></i>
                    <p>Atrás</p>
                </button>
                <button onClick={next_page} className={`${(tokenInput && tokenInput.trim().length) || access ? '' : 'button_not_allowed'}`}>
                    <p>Siguiente</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </section>
        </div>
    );
}

export default ResidentToken;
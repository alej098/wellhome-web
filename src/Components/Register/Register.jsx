import { useState } from 'react';
import GeneralRegister from './Components/GeneralRegister';
import ResidentRegister from './Components/ResidentRegister';
import ResidentToken from './Components/ResidentToken';
import CondoRegister from './Components/CondoRegister';
import Owner_register from './Components/Owner_register';
import imgClose from '../../assets/icons/circle-xmark-regular.svg';
import { useNavigate } from 'react-router-dom';

function Register({ setRegisterModal }) {
    const [currentPage, setCurrentPage] = useState('general');
    const [prevPage, setPrevPage] = useState(null);
    const navigate = useNavigate();

    function close_modal() {
        navigate('/');
    }

    return (
        <div className="register__mainDiv">
            <div className='register__subMainDiv1'>
                <div onClick={close_modal} className='userRegister_close_icon'>
                    <img src={imgClose} alt="" />
                </div>
                <div className="register__subMainDiv2">
                    {currentPage === 'general' && <GeneralRegister setCurrentPage={setCurrentPage} currentPage={currentPage} setPrevPage={setPrevPage} prevPage={prevPage} />}

                    {/* Residentes/Inquilinos */}
                    {currentPage === 'token_page' && <ResidentToken setCurrentPage={setCurrentPage} currentPage={currentPage} setPrevPage={setPrevPage} prevPage={prevPage} />}
                    {(currentPage === 'inquilino' || currentPage === 'propietario') && <ResidentRegister countType='resident' setCurrentPage={setCurrentPage} currentPage={currentPage} setPrevPage={setPrevPage} prevPage={prevPage} />}

                    {/* Condominio */}
                    {(currentPage === 'condominium') && <CondoRegister setCurrentPage={setCurrentPage} currentPage={currentPage} setPrevPage={setPrevPage} prevPage={prevPage} />}
                    {(currentPage === 'owner_register') && <Owner_register setCurrentPage={setCurrentPage} currentPage={currentPage} setPrevPage={setPrevPage} prevPage={prevPage} />}
                    {(currentPage === 'owner_inquilino' || currentPage === 'owner_propietario') && <ResidentRegister countType='owner' message='Complete los datos para generar sus credenciales de administración' setCurrentPage={setCurrentPage} currentPage={currentPage} setPrevPage={setPrevPage} prevPage={prevPage} />}
                </div>
            </div>
        </div>
    );
}

export default Register;
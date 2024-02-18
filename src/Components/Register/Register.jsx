import { useState } from 'react';
import GeneralRegister from './Components/GeneralRegister'
import ResidentRegister from './Components/ResidentRegister'
import ResidentToken from './Components/ResidentToken'
import imgClose from '../../assets/icons/circle-xmark-regular.svg'

function Register({ setRegisterModal }) {
    const [currentPage, setCurrentPage] = useState('general');
    const [prevPage, setPrevPage] = useState(null);

    function close_modal() {
        setRegisterModal(false);
    }

    return (
        <div className="register__mainDiv">
            <div className='register__subMainDiv1'>
                <div onClick={close_modal} className='userRegister_close_icon'>
                    <img src={imgClose} alt="" />
                </div>
                <div className="register__subMainDiv2">
                    {currentPage === 'general' && <GeneralRegister setCurrentPage={setCurrentPage} setPrevPage={setPrevPage} prevPage={prevPage} />}
                    {currentPage === 'token_page' && <ResidentToken setCurrentPage={setCurrentPage} setPrevPage={setPrevPage} prevPage={prevPage} />}
                    {(currentPage === 'inquilino' || currentPage === 'propietario') && <ResidentRegister setCurrentPage={setCurrentPage} currentPage={currentPage} setPrevPage={setPrevPage} prevPage={prevPage} />}
                </div>
            </div>
        </div>
    );
}

export default Register;
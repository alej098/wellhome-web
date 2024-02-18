import React, {useState} from 'react'
import {Link as ScrollLink} from 'react-scroll'
import wellHomeSmallLogo from '../assets/WellHomeLogo06.svg'
import wellHomeLongLogo from '../assets/WellHomeLogo05.svg'
import menuLogo from '../assets/icons/menu.svg'
// import Main_NavBar_MobileMenu from './Main_NavBar_MobileMenu'

const Main_navBar = () => {

  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className='navBar__container'>
      <div className='navBar__container__left'>
        <div className='navBar__container__left__smallLogo'>
          <ScrollLink to='mainHome-inicio' smooth={true} duration={300} offset={-100}>
            <img id='smallLogo' src={wellHomeSmallLogo} alt="WellHome Logo" />
            <img id='longLogo' src={wellHomeLongLogo} alt="WellHome Logo" />
          </ScrollLink>
        </div>
      </div>
      
      <div className='navBar__container__right'>

        <div className='navBar__container__right__menuIcon' onClick={toggleMobileMenu}>
          <img src={menuLogo} alt="Menu" />
        </div>

        <div className={`navBar__container__right__menu ${isMobileMenuVisible ? "open" : ""}`}>
          <ul>
            <li id='menu1'>
              <ScrollLink to='mainHome-inicio' smooth={true} duration={300} offset={-100}>
                Inicio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='mainHome-about' smooth={true} duration={300} offset={-100}>
                Nosotros
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='mainHome-pricing' smooth={true} duration={300} offset={-100}>
                Precios
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='mainHome-faqs' smooth={true} duration={300} offset={-100}>
                Faqs
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='main_footer' smooth={true} duration={300} offset={-100}>
                Contacto
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='' smooth={true} duration={300} offset={-100}>
                Login
              </ScrollLink>
            </li>
          </ul>
        </div>

        
      </div>
      
    </div>
  )
}

export default Main_navBar
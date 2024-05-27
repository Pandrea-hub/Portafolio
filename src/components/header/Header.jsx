import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  // Aca renderizamos el header, donde va el titulo, imagen e informacion del contacto
  return (
    <header>
      <div className="container header_container">
        <h5>Hola, mi nombre es</h5>
        <h1>Andrea Diaz</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='Imagen de Andrea Diaz'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
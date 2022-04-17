import React from 'react'
import './footer.css'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'


function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Andrea Diaz</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Sobre mi</a></li>
        <li><a href='#experience'>Experiencia</a></li>
        <li><a href='#services'>Servicios</a></li>
        <li><a href='#portfolio'>Portafolio</a></li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>


      <div className='footer__socials'>
        <a href='https://github.com/Pandrea-hub'><AiOutlineGithub/></a>
        <a href='https://twitter.com/AndreaVivi12'><AiOutlineTwitter/></a>
        <a href='https://www.linkedin.com/in/andrea-viviana-diaz-fonseca-7aa269214/'><BsLinkedin/></a>
        <a href='https://www.instagram.com/andreavivi12_/'><GrInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials & Online Tutorials</small>
      </div>
      
    </footer>
  )
}

export default Footer
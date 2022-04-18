import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {SiWhatsapp} from 'react-icons/si'



function Contact() {

  

  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact_container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>andreavividf12@gmail.com</h5>
            <a href='mailto:andreavividf12@gmail.com' target='_blank'>Mandar mensaje</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>@AndreVivi12</h5>
            <a href='https://m.me/andrevivi12' target='_blank'>Mandar mensaje</a>
          </article>

          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+573192331874</h5>
            <a href='https://api.whatsapp.com/send?phone=+573192331874' target='_blank'>Mandar mensaje</a>
          </article>
        </div>
        <form action="https://formspree.io/f/xjvlalkj" method="post">
          <input name="Email" id="email" type="email" placeholder='Tu Email' required />
          <textarea name="Escribe tu mensaje aquí"></textarea>
          <button type="submit" className='btn btn-primary'>Mandar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
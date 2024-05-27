import React from 'react'
import cv from '../../assets/cv.pdf'


function CTA() {
  // CTA : Call to Action a mi contacto
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Descargar CV</a>
        <a href='#contact' className='btn btn-primary'>Contacto</a>
    </div>
  )
}

export default CTA
import React from 'react'
import './experience.css'
import {HiCheckCircle} from 'react-icons/hi'

function Experience() {
  return (
    <section id='experience'>
      <h5>Historial de mis habilidades</h5>
      <h2>Mi experiencia</h2>


      <div className="container experience__container">

        <div className='experience__fronted'>
          <h3>Desarrollo Front-end</h3>
          <div className='experience__content'>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>.Net Core</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>

        </div>
        

        <div className='experience__backend'>

          <h3>Desarrollo Back-end</h3>
          <div className='experience__content'>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>PostgreSql</h4>
                <small className='text-light'>Básico</small>
              </div> 
            </article>

            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>

        
        </div> 
      </div>
    </section>
  )
}

export default Experience
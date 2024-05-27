import React from "react";
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

function Services() {

  // Aca se comentara algunas aptitudes destacables en mi forma de trabajo
  return (
    <section id="services">
      <h5>Lo que ofrezco</h5>
      <h2>Skills</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service__head">
            <h3>Software Developer</h3>
          </div>
          <ul className="service__list">
            
          <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Desarrollo de servicios de Apis para que cualquier cliente pueda consumirlo 
                de manera optima, especialmente usando la arquitectura de microservicios.
              </p>
            </li>


            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Generar codigo de alta calidad que sea escalable en un futuro cumpliendo los patrones de diseños según la necesidad,
                junto con tests unitarios y test automatizados 
              </p>
            </li>


            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Conectar la aplicación web con un servidor para que esta sea
                dinámica y pueda interactuar con el usuario usando librerias como React o
                frameworks como ASP.Net Core.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Utilizar metodologias de observalidad para el trafico, utilizando herramientas como Datadog, New Relic y Kibana. 
                También manejo mecanismos para que un proyecto tenga resilencia en caso de que un servicio interno falle, como es el patrón Circuit Breaker. 
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Gran trabajadora</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Capaz de relacionarse y entenderse con su equipo de trabajo para
                hacer un entorno de trabajo agradable y ameno donde se potencie la
                comunicación y ayuda              
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Deja todo en la cancha, trabaja fuerte para dar el máximo esfuerzo
                en cada trabajo             
              </p>
            </li>
            
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Respeta las normas y está atenta a los cambios que le sugieren y
                siempre acepta el cambio como un reto         
              </p>
            </li>
            
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Sabe trabajar a presión cuando hay grandes retos ya que siempre
                busca la mejor solución a cualquier problema              
              </p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  );
}

export default Services;

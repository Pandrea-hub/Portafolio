import React from "react";
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

function Services() {
  return (
    <section id="services">
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Capaz de desarrollar aplicaciones web con librerías como react,
                frameworks como ASP.Net Core con lenguajes de programación como
                JavaScript y C#
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Hacer de la página web interactiva para que el usuario se sienta
                cómodo y tenga una gran experiencia
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Conectar la aplicación web con un servidor para que esta sea
                dinámica y pueda interactuar con el usuario
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>
                Que la aplicación web pueda tener las mismas funcionalidades sin
                importar el tamaño del dispositivo que el usuario esté usando
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

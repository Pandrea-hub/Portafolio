import React from "react";
import "./about.css";
import me from "../../assets/about-me.png";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFillAwardFill } from "react-icons/bs";

function 
About() {
  // Aca tenemos mas detalles sobre mi persona


  // Empece mi carrera desde el 2022 por lo cual
  // si queremos calcular el total, simplemente obtenemos el año actual y le restamos el inicial
  var year = new Date().getFullYear();
  let yearExperience = year - 2022; 
  return (
    <section id="about">
      <h5>Mas detalles</h5>
      <h2>Sobre mí</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="Imagen sobre mí" />
          </div>
        </div>

        <div className="about__content">
          <div className="about_cards">
            <article className="about__card">
              <BsBriefcaseFill className="about__icon" />
              <h5>Experiencia</h5>
              <small>{yearExperience} + años de experiencia</small>
            </article>

            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h5>Proyectos</h5>
              <small>Clones y Retos</small>
            </article>
          </div>

          <p>
            Soy desarrolladora de aplicaciones web enfocada en teconologia backend
            especialmente con temas relacionados a Rest APIs, SOAP APIs, y microservicios,
            busco la mejor manera de crear y/o optimizar aplicaciones con ayuda de patrones
            de diseños y con las ultimas tecnologias, tengo experiencia en lenguajes como Golang,
            Kotlin, C++ y JavaScript, tambien me gustan los temas relacionados a observabilidad con herramientas
            como Datadog y New Relic. 
          </p>

          <a href="#contact" className="btn btn-primary">Contáctame</a>


        </div>
      </div>
    </section>
  );
}

export default About;

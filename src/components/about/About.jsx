import React from "react";
import "./about.css";
import me from "../../assets/about-me.png";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFillAwardFill } from "react-icons/bs";

function About() {
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
              <small>Mar-Jun 2022</small>
            </article>

            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h5>Proyectos</h5>
              <small>Clones y Retos</small>
            </article>
          </div>

          <p>
            Desarrolladora de aplicaciones web con conocimientos sobre
            maquetación en HTML y CSS de manera responsiva partiendo del
            principio Mobile First, tengo conocimientos sobre JavaScript, C#, se
            usar la libreria React y Node.js, adicionalmente cuento con
            conocimientos de patrones de arquitectura como MVC con el framework
            .Net Core para el desarrollo de aplicaciones web
          </p>

          <a href="#contact" className="btn btn-primary">Contáctame</a>


        </div>
      </div>
    </section>
  );
}

export default About;

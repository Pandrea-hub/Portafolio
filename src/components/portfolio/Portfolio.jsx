import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portafolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portafolio5.jpg'
import IMG6 from '../../assets/potafolio6.jpg'

/*
const data=[
  {
    id:1,
    image: IMG1,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/17919781-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:2,
    image: IMG2,
    title:'Figma dashboard UI kit for data design web apps',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18013189-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id:3,
    image: IMG3,
    title:'Figma dashboard UI kit for data design web apps',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/17845733-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id:4,
    image: IMG4,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/17845674-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:5,
    image: IMG5,
    title:'Figma dashboard UI kit for data design web apps',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id:6,
    image: IMG6,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/17428309-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]
*/



function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo</h5>
      <h2>Portafolio</h2>
    

      <div className="container portfolio__container">


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portafolio 1" />
          </div>
          <div className="portfolio__item-image"></div>
          <h3>Clon Mercado Libre con React</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Pandrea-hub/Clon-Meli" target="_blank"className="btn">GitHub</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Portafolio 2" />
          </div>
          <div className="portfolio__item-image"></div>
          <h3>Reto Node JS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Pandrea-hub/generador-juegos"target="_blank" className="btn">GitHub</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Portafolio 3" />
          </div>
          <div className="portfolio__item-image"></div>
          <h3>Trabajo</h3>
          <div className="portfolio__item-cta">
            <a href="https://dribbble.com/pandreahub" target="_blank" className="btn btn-primary" >Live Demo</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Portafolio 4" />
          </div>
          <div className="portfolio__item-image"></div>
          <h3>Movie Store</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Pandrea-hub/movie-store" target="_blank" className="btn" >GitHub</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Portafolio 5" />
          </div>
          <div className="portfolio__item-image"></div>
          <h3>Proyecto Mobile First</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Pandrea-hub/Batatabit" target="_blank" className="btn">GitHub</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Portafolio 6" />
          </div>
          <div className="portfolio__item-image"></div>
          <h3>Rick and Morty</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Pandrea-hub/rick-and-morty" target="_blank" className="btn">GitHub</a>
          </div>
        </article>



      </div>


    </section>
  )
}

export default Portfolio
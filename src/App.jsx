import * as React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { Fragment } from 'react';





const App = () =>{
    // Aca definimos los componentes que seran renderizados en nuestro portafolio  

    return (
        <Fragment>
        
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </Fragment>
    )
}


export default App
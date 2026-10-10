import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const Home = () => {
  useReveal(); // Inicializa las animaciones al montar la pantalla

  return (
    <section className="hero">
      <div className="container hero-content">
        <p className="hero-eyebrow reveal">Ingeniero en Mecatrónica · Ciudad de México</p>
        <h1 className="hero-title reveal">
          Emiliano <em>Molina Valdés</em>
        </h1>
        <p className="hero-subtitle reveal">
          Ingeniero en Mecatrónica por el Instituto Politécnico Nacional, especializado en el desarrollo integral de soluciones tecnológicas...
        </p>
        <div className="hero-actions reveal">
          <Link to="/unit" className="btn btn-primary">Ver trayectoria</Link>
          <a href="mailto:emilianomolinav@gmail.com" className="btn btn-ghost">Contacto</a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
};

export default Home;
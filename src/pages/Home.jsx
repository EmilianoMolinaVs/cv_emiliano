import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const Home = () => {
  useReveal();

  return (
    <section className="hero">
      <div className="container hero-content">
        <p className="hero-eyebrow reveal">Ingeniero en Mecatrónica · Ciudad de México</p>

        <h1 className="hero-title reveal">
          Emiliano <em>Molina Valdés</em>
        </h1>

        <div className="reveal">
          <p className="hero-subtitle">
            Ingeniero en Mecatrónica con mención honorífica por el Instituto Politécnico Nacional, especializado en robótica y sistemas inteligentes. Mi trayectoria abarca el ciclo completo de producto: desde el diseño mecánico 3D y análisis estructural, hasta el diseño de hardware, firmware e integración automatizada en lazos de control.
          </p>
          <p className="hero-subtitle">
            Hoy en día creo ecosistemas conectados en UNIT Electronics. Desarrollando hardware a la medida, firmware de validación para sistemas embebidos, y las interfaces web (frontend) necesarias para la automatización de pruebas en la línea de producción, garantizando la trazabilidad y calidad del producto.
          </p>
        </div>

        <div className="skills-container reveal" style={{ marginBottom: '2.5rem' }}>
          <span className="skill-chip">Hardware & Firmware</span>
          <span className="skill-chip">Diseño 3D</span>
          <span className="skill-chip">Automatización</span>
          <span className="skill-chip">Redes Neuronales</span>
        </div>

        <div className="hero-actions reveal">
          <Link to="/unit" className="btn btn-primary">Trabajo Actual</Link>
          <Link to="/thesis" className="btn btn-ghost">Tesis y Manufactura</Link>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
};

export default Home;
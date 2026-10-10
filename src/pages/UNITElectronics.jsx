import React from 'react';
import { useReveal } from '../hooks/useReveal';

const Unit = () => {
  useReveal(); // Animaciones para esta pantalla

  return (
    <section className="section section-page">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">01</span>
          <h2 className="section-title">Trabajo Actual</h2>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-period">Sept 2025 — Presente</div>
          <div className="timeline-body">
            <h3 className="timeline-role">Ingeniero de Pruebas/ Test Engineering</h3>
            <p className="timeline-company">UNIT Electronics</p>
            <div className="timeline-description">
              <ul className="project-list">
                <li>Desarrollo de firmware en C/C++/MicroPython (arquitecturas ARM Cortex, ESP32 y AVR)...</li>
                {/* Resto de tu lista... */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unit;
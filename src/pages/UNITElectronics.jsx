import React from 'react';
import { useReveal } from '../hooks/useReveal';

const Unit = () => {
  useReveal();

  return (
    <section className="section section-page" id="unit">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">01</span>
          <h2 className="section-title">Trabajo Actual</h2>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-period">Sept 2025 — Presente</div>
          <div className="timeline-body">
            <h3 className="timeline-role">Ingeniero de Pruebas / Test Engineering</h3>
            <p className="timeline-company">UNIT Electronics</p>

            <p className="timeline-description" style={{ marginBottom: '2rem' }}>
              Especialista en la integración completa de sistemas para la validación y automatización de ejecución de pruebas. Mi enfoque abarca desde el diseño de hardware especializado hasta el desarrollo de software de validación, para asegurar la calidad del producto en toda la línea de producción.
            </p>

            <div className="timeline-description">
              <ul className="project-list">
                <li>
                  <strong>Modelado 3D y Mecánica:</strong> Diseño de arneses de prueba y estructuras mecánicas para el alojamiento preciso de los paneles de PCB, permitiendo al personal de fabricación ejecutar operaciones automatizadas de flasheo de firmware, testeo de GPIOs, validación de protocolos de comunicación y pruebas de potencia de manera rápida y segura.
                </li>
                <li>
                  <strong>Diseño de Hardware:</strong> Desarrollo e implementación de electrónica de control y potencia para la automatización de pruebas de calidad en las estaciones de la línea de producción.
                </li>
                <li>
                  <strong>Desarrollo de Firmware:</strong> Programación de firmware de validación en C/C++ y MicroPython para diversas arquitecturas, incluyendo ARM Cortex, ESP32 y AVR.
                </li>
                <li>
                  <strong>Desarrollo web:</strong> Diseño y desarrollo de interfaces web intuitivas que facilitan la interacciónde los operadores con los sistemas automatizados.
                </li>
                <li>
                  <strong>Trazabilidad:</strong> Integración y gestión de sistemas automatizados garantizando un registro preciso de la trazabilidad continua de todos los lotes de productos fabricados.
                </li>
              </ul>
            </div>

            <div className="skills-container" style={{ marginTop: '2.5rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <span className="btn-ghost" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', borderRadius: '4px', cursor: 'default' }}>C/C++ & MicroPython</span>
              <span className="btn-ghost" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', borderRadius: '4px', cursor: 'default' }}>ARM Cortex, ESP32, AVR</span>
              <span className="btn-ghost" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', borderRadius: '4px', cursor: 'default' }}>Diseño de PCBs</span>
              <span className="btn-ghost" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', borderRadius: '4px', cursor: 'default' }}>React & Tailwind CSS</span>
              <span className="btn-ghost" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', borderRadius: '4px', cursor: 'default' }}>Python & Backend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unit;
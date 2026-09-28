import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      {/* HEADER */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="name">EMILIANO MOLINA VALDÉS</h1>
          <h2 className="title">Ingeniero en Mecatrónica | Software & Hardware Engineer</h2>
          <div className="contact-info">
            <span>emilianomolinav@gmail.com</span>
            <span className="separator">•</span>
            <span>(+52) 55 1455 1838</span>
            <span className="separator">•</span>
            <span>Ciudad de México, México</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* RESUMEN */}
        <section className="section">
          <h3 className="section-title">Resumen Profesional</h3>
          <p className="summary-text">
            Ingeniero en Mecatrónica con mención honorífica por el IPN, especializado en diseño mecánico 3D, electrónica de potencia y sistemas de control[cite: 1]. Experiencia en el desarrollo integral de prototipos, desde el diseño CAD hasta la programación y validación[cite: 1]. Actualmente especializado en el desarrollo de hardware (PCBs), firmware para microcontroladores (ESP32, arquitecturas ARM) y el diseño de interfaces web modernas, logrando una integración completa entre soluciones físicas y plataformas de software.
          </p>
        </section>

        {/* EXPERIENCIA ACTUAL E HISTÓRICA */}
        <section className="section">
          <h3 className="section-title">Experiencia Profesional</h3>
          
          <div className="experience-item">
            <div className="experience-header">
              <div className="role-company">
                <h4>Ingeniero de Proyectos / Test Engineering</h4>
                <span className="company">UNIT Electronics</span>
              </div>
              <span className="date">Septiembre 2025 – Presente</span>
            </div>
            <ul className="achievements">
              <li>Desarrollo de scripts de automatización y firmware de pruebas para microcontroladores (ESP32, RP2040, RP2350, ATmega328P, PY32).</li>
              <li>Diseño de circuitos impresos (PCBs), creación de esquemáticos, footprints y modelado de layout 3D utilizando Autodesk Fusion 360.</li>
              <li>Creación de interfaces web y frontends para sistemas internos utilizando React, TypeScript y Tailwind CSS.</li>
              <li>Implementación de agentes locales en Python y gestión de repositorios mediante Git/GitLab para control de versiones.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="role-company">
                <h4>Ingeniero de Proyecto de Tesis</h4>
                <span className="company">UPIITA - CIDETEC - IPN</span>
              </div>
              <span className="date">Enero 2024 – Julio 2025</span>
            </div>
            <ul className="achievements">
              <li>Desarrollo y fabricación de prótesis transtibial[cite: 1].</li>
              <li>Diseñé el modelo mecánico 3D de la prótesis en CAD, validando geometría y realizando análisis estructurales por elementos finitos[cite: 1].</li>
              <li>Manufacturé componentes con maquinaria CNC y convencional logrando precisión de ±0.25 mm[cite: 1].</li>
              <li>Programé los sistemas de control en tiempo real e implementé una red neuronal multicapa para el análisis de datos, mejorando la respuesta de seguimiento angular en un 85%[cite: 1].</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="role-company">
                <h4>Técnico de Manufactura Mecánica</h4>
                <span className="company">SeTma & Com</span>
              </div>
              <span className="date">Junio 2023 – Diciembre 2023</span>
            </div>
            <ul className="achievements">
              <li>Operé torno, fresadora y troqueladora para manufacturar zapatas industriales cumpliendo estándares de calidad[cite: 1].</li>
              <li>Verifiqué tolerancias dimensionales con instrumentos de metrología, asegurando desviaciones menores a ±0.25 mm[cite: 1].</li>
            </ul>
          </div>
        </section>

        {/* EDUCACIÓN */}
        <section className="section">
          <h3 className="section-title">Educación</h3>
          <div className="education-item">
            <div className="education-header">
              <h4>Ingeniería en Mecatrónica</h4>
              <span className="date">Agosto 2020 – Julio 2025</span>
            </div>
            <span className="institution">Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA), IPN[cite: 1]</span>
            <p className="education-details">Promedio final: 9.57 | Certificado – Mención honorífica[cite: 1]</p>
          </div>
        </section>

        {/* HABILIDADES */}
        <section className="section">
          <h3 className="section-title">Habilidades Técnicas</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Desarrollo & Software</h4>
              <div className="tags">
                <span>React</span>
                <span>JavaScript / TypeScript</span>
                <span>Python</span>
                <span>C / C++</span>
                <span>Git / GitLab</span>
                <span>LaTeX</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Hardware & Firmware</h4>
              <div className="tags">
                <span>ESP32</span>
                <span>RP2040 / RP2350</span>
                <span>ATmega328P</span>
                <span>Diseño de PCBs</span>
                <span>Soldadura SMD/THT</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>CAD & Simulación</h4>
              <div className="tags">
                <span>Autodesk Fusion 360</span>
                <span>SolidWorks[cite: 1]</span>
                <span>MATLAB / Simulink[cite: 1]</span>
                <span>Impresión 3D</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
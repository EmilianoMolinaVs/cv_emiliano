import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Manejo del borde del header al hacer scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // Animaciones de revelado (Intersection Observer)
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach((element) => revealObserver.unobserve(element));
    };
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav container">
          <a href="#home" className="nav-brand">E<span className="accent">.</span>Molina</a>

          <button
            className="nav-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-expanded={isNavOpen}
          >
            <span></span><span></span><span></span>
          </button>

          <ul className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => setIsNavOpen(false)}>Inicio</a></li>
            <li><a href="#unit" className="nav-link" onClick={() => setIsNavOpen(false)}>Trabajo Actual</a></li>
            <li><a href="#thesis" className="nav-link" onClick={() => setIsNavOpen(false)}>Tesis</a></li>
            <li><a href="#research" className="nav-link" onClick={() => setIsNavOpen(false)}>Investigación</a></li>
            <li><a href="#education" className="nav-link" onClick={() => setIsNavOpen(false)}>Educación</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="container hero-content">
            <p className="hero-eyebrow reveal">Ingeniero en Mecatrónica · Ciudad de México</p>
            <h1 className="hero-title reveal">
              Emiliano <em>Molina Valdés</em>
            </h1>
            <p className="hero-subtitle reveal">
              Ingeniero en Mecatrónica por el Instituto Politécnico Nacional, especializado en el desarrollo integral de soluciones tecnológicas. Mi experiencia abarca desde el diseño y modelado 3D, hasta la programación y validación de prototipos funcionales. Actualmente, me desenvuelvo en la integración completa de sistemas, desarrollando hardware especializado, firmware para sistemas embebidos y software frontend y backend para su control y automatización.
            </p>
            <div className="hero-actions reveal">
              <a href="#unit" className="btn btn-primary">Ver trayectoria</a>
              <a href="mailto:emilianomolinav@gmail.com" className="btn btn-ghost">Contacto</a>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <span></span>
          </div>
        </section>

        {/* UNIT ELECTRONICS */}
        <section className="section" id="unit">
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
                    <li>Desarrollo de firmware en C/C++/MicroPython (arquitecturas ARM Cortex, ESP32 y AVR) orientado a la automatización de pruebas y validación de microcontroladores en banco de pruebas.</li>
                    <li>Diseño e implementación de hardware de control y electrónica de potencia a medida para optimizar la automatización en las estaciones de la línea de producción.</li>
                    <li>Desarrollo de interfaces web (Frontend) intuitivas utilizando React, TypeScript y Tailwind CSS, para la correcta integración de los operadores de la línea con los sistemas de validación de manera eficiente.</li>
                    <li>Integración y gestión de sistemas Backend, garantizando el registro preciso y la trazabilidad continua de los lotes de productos fabricados.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESIS Y MANUFACTURA */}
        <section className="section section-alt" id="thesis">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-number">02</span>
              <h2 className="section-title">Tesis & Manufactura</h2>
            </div>

            <ol className="timeline">
              <li className="timeline-item reveal">
                <div className="timeline-period">Ene 2024 — Jul 2025</div>
                <div className="timeline-body">
                  <h3 className="timeline-role">Desarrollo de Prótesis Transtibial</h3>
                  <p className="timeline-company">UPIITA - CIDETEC - IPN</p>

                  {/* Imagen movida dentro del cuerpo del proyecto y con clase específica */}
                  <div className="thesis-image-container">
                    <img
                      src={`${import.meta.env.BASE_URL}img/Protesis_Final.png`}
                      alt="Modelo final de prótesis transtibial"
                      className="thesis-image"
                    />
                  </div>

                  <div className="timeline-description">
                    <ul className="project-list">
                      <li>Diseñé el modelo mecánico 3D de la prótesis en CAD, validando geometría y movimiento para evitar interferencias y asegurar un desplazamiento correcto.</li>
                      <li>Realicé análisis estructurales por elementos finitos, verificando que la estructura trabajara al 18% de su capacidad máxima, con un factor de seguridad superior al requerido.</li>
                      <li>Manufacturé componentes con maquinaria CNC y convencional logrando precisión de ±0.25 mm.</li>
                      <li>Programé los sistemas de control y adquisición de datos en tiempo real, optimizando el mecanismo de marcha y reduciendo el error máximo en un 15%.</li>
                      <li>Implementé una red neuronal multicapa para el análisis de datos, mejorando la respuesta de seguimiento angular en un 85%.</li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="timeline-item reveal">
                <div className="timeline-period">Jun 2023 — Dic 2023</div>
                <div className="timeline-body">
                  <h3 className="timeline-role">Técnico de Manufactura Mecánica</h3>
                  <p className="timeline-company">SeTma & Com</p>
                  <div className="timeline-description">
                    <ul className="project-list">
                      <li>Verifiqué tolerancias dimensionales con instrumentos de metrología, asegurando desviaciones menores a ±0.25 mm.</li>
                      <li>Operé torno, fresadora y troqueladora para manufacturar zapatas industriales cumpliendo estándares de calidad y plazos de fabricación.</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* INVESTIGACIÓN */}
        <section className="section" id="research">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-number">03</span>
              <h2 className="section-title">Proyectos de Investigación</h2>
            </div>

            <div className="projects-grid">
              <article className="project-card reveal">
                <div className="project-index">INV·01</div>
                <h3 className="project-title">Estructuras fotovoltaicas arbóreas</h3>

                {/* Contenedor de la imagen */}
                {/* Galería de imágenes (Alineación horizontal) */}
                <div className="images-gallery">
                  <div className="project-image-container">
                    <img
                      src={`${import.meta.env.BASE_URL}img/S1.png`}
                      alt="Estructura fotovoltaica vista 1"
                      className="project-image"
                    />
                  </div>

                  <div className="project-image-container">
                    <img
                      src={`${import.meta.env.BASE_URL}img/FF.png`}
                      alt="Estructura fotovoltaica vista principal"
                      className="project-image"
                    />
                  </div>

                  <div className="project-image-container">
                    <img
                      src={`${import.meta.env.BASE_URL}img/A2.png`}
                      alt="Estructura fotovoltaica vista 2"
                      className="project-image"
                    />
                  </div>
                </div>

                <div className="project-description">
                  <ul className="project-list">
                    <li>Desarrollo de un algoritmo en Python para modelar y analizar estructuras fotovoltaicas con distintas configuraciones de hojas y ramas.</li>
                    <li>Identificación de la configuración con mayor eficiencia en conversión energética.</li>
                    <li>Implementación de un sistema de seguimiento solar simulado para estimar la eficiencia según fecha y ubicación.</li>
                    <li>Presentación de los resultados en el Encuentro Nacional de Investigación del IPN 2023 y en SMCTSM 2023 XVI / 2024 XVII.</li>
                  </ul>
                </div>
              </article>

              <article className="project-card reveal">
                <div className="project-index">INV·02</div>
                <h3 className="project-title">Convertidor CA-CD para horno VAR</h3>
                <div className="project-description">
                  <ul className="project-list">
                    <li>Diseñé un sistema de control retroalimentado para un rectificador trifásico en un horno de alto vacío industrial.</li>
                    <li>Estabilicé la potencia de salida con una variación máxima de ±2%.</li>
                    <li>Reduje el tiempo de respuesta del sistema en un 15% mediante tiristores.</li>
                    <li>Mejoré la eficiencia energética del proceso en un 10%.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EDUCACIÓN Y SKILLS */}
        <section className="section section-alt" id="education">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-number">04</span>
              <h2 className="section-title">Educación & Habilidades</h2>
            </div>

            <div className="about-grid">
              <div className="about-text reveal">
                <div className="education-block">
                  <h3 className="timeline-role">Ingeniería en Mecatrónica</h3>
                  <p className="timeline-company">Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas UPIITA, IPN (Agosto 2020 – Julio 2025).</p>
                  <p className="accent-text">Promedio final: 9.57. Certificado – Mención honorífica.</p>
                </div>
                <div className="education-block mt-3">
                  <h3 className="timeline-role">Técnico en Mantenimiento Industrial</h3>
                  <p className="timeline-company">Centro de Estudios Científicos y Tecnológicos No. 7, CECyT IPN (Agosto 2017 – Julio 2020).</p>
                  <p className="accent-text">Promedio final: 9.22.</p>
                </div>
              </div>

              <div className="skills-grid reveal">
                <div className="skill-group">
                  <h3 className="skill-group-title">Software & Firmware</h3>
                  <ul className="skill-list">
                    <li>C, C++, Python, MATLAB, Simulink, Wolfram Mathematica, Ensamblador.</li>
                    <li>React, TypeScript, Tailwind CSS, Git/GitLab</li>
                    <li>Programación de ESP32, ARM Cortex, AVR</li>
                  </ul>
                </div>
                <div className="skill-group mt-2">
                  <h3 className="skill-group-title">Hardware & Diseño</h3>
                  <ul className="skill-list">
                    <li>SolidWorks (diseño y análisis 3D), Autodesk AutoCAD, Fusion, Inventor, SketchUp.</li>
                    <li>Simulación con Proteus y Multisim; diseño y fabricación de PCBs en Autodesk Fusion.</li>
                    <li>Soldadura THT y SMD.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p className="footer-brand">E<span className="accent">.</span>Molina</p>
          <ul className="footer-links">
            <li><a href="https://github.com/EmilianoMolinaVs">GitHub</a></li>
            <li><a href="mailto:emilianomolinav@gmail.com">emilianomolinav@gmail.com</a></li>
          </ul>
          <p className="footer-note">© {new Date().getFullYear()} Emiliano Molina Valdés</p>
        </div>
      </footer>
    </>
  );
}

export default App;
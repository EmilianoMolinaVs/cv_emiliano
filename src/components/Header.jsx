import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsNavOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          E<span className="accent">.</span>Molina
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-expanded={isNavOpen}
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Inicio</NavLink></li>
          <li><NavLink to="/unit" className="nav-link" onClick={closeMenu}>Trabajo Actual</NavLink></li>
          <li><NavLink to="/thesis" className="nav-link" onClick={closeMenu}>Tesis</NavLink></li>
          <li><NavLink to="/research" className="nav-link" onClick={closeMenu}>Investigación</NavLink></li>
          <li><NavLink to="/education" className="nav-link" onClick={closeMenu}>Educación</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
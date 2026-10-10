import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p className="footer-brand">E<span className="accent">.</span>Molina</p>
        <ul className="footer-links">
          <li><a href="https://github.com/EmilianoMolinaVs" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="mailto:emilianomolinav@gmail.com">emilianomolinav@gmail.com</a></li>
        </ul>
        <p className="footer-note">© {new Date().getFullYear()} Emiliano Molina Valdés</p>
      </div>
    </footer>
  );
};

export default Footer;
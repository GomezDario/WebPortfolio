// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Importa el archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/" className="link">MiPortfolio</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about" className="link">Sobre mí</Link>
        </li>
        <li>
          <Link to="/projects" className="link">Proyectos</Link>
        </li>
        <li>
          <Link to="/contact" className="link">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

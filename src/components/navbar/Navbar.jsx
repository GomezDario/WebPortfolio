// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply the dark-mode class to the body when darkMode is true
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

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
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;

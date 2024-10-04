// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepages/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Define aquí tus rutas si tienes más páginas */}
      <Routes>
        {/* Aquí puedes agregar más rutas como About, Projects, Contact */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>Sobre mí</div>} />
        <Route path="/projects" element={<div>Proyectos</div>} />
        <Route path="/contact" element={<div>Contacto</div>} />
      </Routes>
    </Router>
  );
};

export default App;


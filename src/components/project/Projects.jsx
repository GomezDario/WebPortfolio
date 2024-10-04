import React from 'react';
import './Projects.css'; // Archivo CSS para los estilos del componente

const Projects = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Una aplicación web construida con React y Node.js para gestionar tareas.',
      github: 'https://github.com/usuario/proyecto1'
    },
    {
      title: 'Proyecto 2',
      description: 'Una API REST desarrollada en Java utilizando Spring Boot.',
      github: 'https://github.com/usuario/proyecto2'
    },
    {
      title: 'Proyecto 3',
      description: 'Aplicación de e-commerce con integración de pasarela de pagos.',
      github: 'https://github.com/usuario/proyecto3'
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div className="projects-container">
      <h1>Mis Proyectos</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';

// Componente de proyecto individual
function Proyecto({ titulo, descripcion, enlace }) {
  return (
    <div className="proyecto">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {enlace && (
        <a href={enlace} target="_blank" rel="noopener noreferrer">
          Ver Proyecto en Github
        </a>
      )}
    </div>
  );
}

// Componente principal de proyectos
function Proyectos() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-container">
        <Proyecto
          titulo="Proyecto 1"
          descripcion="Página con login que permite cambiar contraseña:"
          enlace="https://github.com/cristhian-restrepo/proyecto2.git"
        />
        <Proyecto
          titulo="Proyecto 2"
          descripcion="Descripción breve del proyecto."
        />
        {/* Puedes agregar más proyectos aquí */}
      </div>
    </section>
  );
}

export default Proyectos;

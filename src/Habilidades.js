import React from 'react';

function Habilidades() {
  return (
    <section id="habilidades">
      <h2>Habilidades</h2>
      <div className="habilidades-container">
        <div className="habilidades-duras">
          <h3>Habilidades Duras</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Desarrollo Web</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        <div className="habilidades-blandas">
          <h3>Habilidades Blandas</h3>
          <ul>
            <li>Comunicación</li>
            <li>Trabajo en Equipo</li>
            <li>Creatividad</li>
            <li>Resolución de Problemas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;

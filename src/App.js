import React from 'react';
import './App.css';
import Resumen from './Resumen';
import Habilidades from './Habilidades';
import Proyectos from './Proyectos';
import InformacionAdicional from './InformacionAdicional';
import Contador from './Contador'; // Importamos el contador

function App() {
  return (
    <div className="App">
      {/* Encabezado */}
      <header>
        <h1>Mi Portafolio</h1>
      </header>

      {/* Imagen Principal */}
      <section id="imagen-principal">
        <img src="empleado.png" alt="Imagen Principal" />
      </section>

      {/* Resumen */}
      <Resumen />

      {/* Habilidades */}
      <Habilidades />

      {/* Contador */}
      <Contador /> {/* Agregamos el contador aquí */}

      {/* Proyectos */}
      <Proyectos />

      {/* Información Adicional */}
      <InformacionAdicional />
    </div>
  );
}

export default App;

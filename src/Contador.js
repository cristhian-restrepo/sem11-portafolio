import React, { useState } from 'react';

function Contador() {
  // Definimos una variable de estado 'contador' y una función para actualizarla
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Función para decrementar el contador
  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador">
      <h3>Contador: {contador}</h3>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;

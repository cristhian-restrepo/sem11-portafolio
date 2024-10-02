import React from 'react';

function InformacionAdicional() {
  return (
    <footer>
      <div id="informacion-adicional">
        <h2>Qué es git ignore:</h2>
        <p>
          .gitignore es un archivo especial en Git que le dice al sistema de control de versiones qué archivos o carpetas no debe rastrear o incluir en los commits.
        </p>
        <p>El paso a paso a seguir para utilizar este recurso es el siguiente:</p>
        <ol>
          <li>Crear el archivo .gitignore.</li>
          <li>
            Escribir los nombres de las carpetas y tipos de archivos a ignorar (por ejemplo, <code>*.png</code>, <code>*.jpg</code>, etc.).
          </li>
          <li>Guardar el archivo .gitignore.</li>
          <li>
            Si los archivos o carpetas ya están siendo rastreados, ejecutar <code>git rm -r --cached</code> seguido del nombre de la carpeta o archivo.
          </li>
          <li>Hacer commit de los cambios.</li>
          <li>Subir el proyecto a GitHub.</li>
        </ol>
      </div>
    </footer>
  );
}

export default InformacionAdicional;

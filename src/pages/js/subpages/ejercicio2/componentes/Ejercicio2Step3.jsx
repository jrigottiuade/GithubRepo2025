import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const Ejercicio2Step3 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Parte 3: Creamos la función que renderiza las cards</h1>

      <p>
        Seguí estos pasos, debes llegar al código que ves debajo:
      </p>


      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Crear una función llamada renderizarPaquetes(paquetes)</li>
        <li>Esta función recibe como argumento el array paquetes a iterar</li>
        <li>
          Dentro de la función crear el objeto que maneja el contenedor principal: const contenedor = document.querySelector(".paquetes-container");
        </li>
        <li>Usar el metodo forEach para iterar cada uno de los elementos del array paquetes</li>
        <li>Imprimir en la consola cada paquete para asegurarnos que el ciclo funciona</li>
        <li>Debes llegar a este código:</li>
      </ul>

      <DisplayCode code={`
function renderizarPaquetes(paquetes) {
  const contenedor = document.querySelector(".paquetes-container");

  paquetes.forEach(paquete => {
    console.log(paquete)
  });
}

// Ejecutar al cargar
renderizarPaquetes(paquetes);
        `} language="js" />
    </div>
  );
};

export default Ejercicio2Step3;

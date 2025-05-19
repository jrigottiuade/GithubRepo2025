import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const Ejercicio1Step2 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Parte 1: Arrays</h1>

      <p className="pb-5">Dado el siguiente array de referencia con destinos turísticos:</p>

      <DisplayCode code={`
const paquetes = ["Bariloche", "Mendoza", "Ushuaia", "Salta", "Iguazú"];`} language="js"/>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Agregar el array a tu archivo Js.</li>
        <li>Usar un ciclo while para iterar el array y mostrar los destinos en
          consola
        </li>
        <li>Luego iterar el mismo array, pero ahora con las variantes que vimos
          del ciclo for (for clásico, for in y for of){" "}
        </li>
        <li>Agregá un nuevo destino al final usando el método push()</li>
        <li>Agregá un destino al inicio del array con el método unshift()</li>
        <li>Eliminá el último destino agregado con el método pop()</li>
        <li>Ordenar los destinos alfabéticamente usando sort() - evaluar reverse()</li>
        <li>Buscar si existe un destino específico usando includes()</li>
        <li>Encontrar la posición del destino "Ushuaia" usando indexOf()</li>
      </ul>
    </div>
  );
};

export default Ejercicio1Step2;

import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const Ejercicio1Step4 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Parte 3: Dom</h1>

      <p>
        Apliquemos lo visto sobre manejo de DOM para darle funcionalidad a los botones del HTML
      </p>


      <p className="title-h2-underline pt-5">DOM 1 - Mostrar paquetes</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Capturar el evento del boton con id mostrar-btn</li>
        <li>Agregar un eventListener para el evento click</li>
        <li>Llamar a la función funcionIterarArray(paquetes) pasandole como argumento la lista de paquetes para que la muestre por consola</li>
      </ul>

      <p className="title-h2-underline pt-5">DOM 2 - Insertar paquetes</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Capturar el evento del formulario con id agregar-form</li>
        <li>Agregar un eventListener para el evento submit de ese formulario</li>
        <li>Agregar e.preventDefault() para evitar el refresh de la página al hacer click en el boton del formulario</li>
        <li>Obtener el valor del input con el destino que se quiere agregar usando e.target.elements["nuevo-paquete"].value.trim()</li>
        <li>Llamar a la función funcionInsertarDestino, pasar como argumentos: paquetes y el value obtenido arriba</li>
        <li>Usando el retorno de esa función, informa en consola el estado de la acción, exitoso o error</li>
        <li>Usar el método reset() para limpiar el formulario.</li>
      </ul>

      <p className="title-h2-underline pt-5">DOM 3 - Buscar paquetes</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Capturar el evento del formulario con id buscar-form</li>
        <li>Agregar un eventListener para el evento submit de ese formulario</li>
        <li>Agregar e.preventDefault() para evitar el refresh de la página al hacer click en el boton del formulario</li>
        <li>Obtener el valor del input con el destino que se quiere buscar usando e.target.elements["buscar-paquete"].value.trim()</li>
        <li>Llamar a la función funcionBuscarDestino, pasar como argumentos: paquetes y el value obtenido arriba</li>
        <li>Informar en consola lo que retorana la función</li>
        <li>Usar el método reset() para limpiar el formulario.</li>
      </ul>
    </div>
  );
};

export default Ejercicio1Step4;

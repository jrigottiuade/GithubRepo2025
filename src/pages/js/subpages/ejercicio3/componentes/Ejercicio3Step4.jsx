import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const Ejercicio3Step4 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Parte 4: Completar la configuración del button en el script.js</h1>

      <p className="title-h2-underline pt-5">Al momento de cargar la página y renderizar el botón favoritos, debemos validar si tiene un estado guardado en el local storage</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Usamos la función esFavorito con un operador ternario para que tenga un valor dinámico</li>
      </ul>
      <DisplayCode code={`
 button_favorito.textContent = esFavorito(paquete.id) ? "Quitar favorito" : "Agregar favorito";
        `} language="js" />

      <p className="title-h2-underline pt-5">Agregar un addEventListener al boton que actualice el estado del local storage y también el estado del botón</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Agregar addEventListener sobre el evento "click" que llame a la función handleFavorito pasando el id de la card</li>
        <li>Usar nuevamente el operador ternario para actualizar el botón luego del evento</li>
      </ul>
      <DisplayCode code={`
    button_favorito.addEventListener("click", () => {
      handleFavoritos(paquete.id);
      button_favorito.textContent = esFavorito(paquete.id)
        ? "Quitar favorito"
        : "Agregar favorito";
    });
        `} language="js" />

    </div>
  );
};

export default Ejercicio3Step4;

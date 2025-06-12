import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const Ejercicio3Step2 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Parte 2: Button favorito a la card</h1>

      <p className="pb-5">Agregamos el button al archivo script.js - se sugiere agregarlo debajo del h2 </p>

      <DisplayCode code={`
    const button_favorito = document.createElement('button');
    button_favorito.classList.add("btn-favorito")
    button_favorito.textContent = "Favorito"
    `} language="js" />

    <p className="pb-5">Se deberia ver renderizado pero no tiene ninguna funcionalidad</p>
    </div>
  );
};

export default Ejercicio3Step2;

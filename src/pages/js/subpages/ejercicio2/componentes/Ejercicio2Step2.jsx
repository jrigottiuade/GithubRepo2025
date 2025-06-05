import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const Ejercicio2Step2 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Parte 2: Array de paquetes a renderizar</h1>

      <p className="pb-5">Agrega al archivo js este array de objetos. Cada objeto del array representar un paquete que luego vamos a renderizar.</p>

      <DisplayCode code={`
const paquetes = [
  {
    titulo: "Europa Express",
    descripcion: "10 días recorriendo las principales ciudades europeas",
    precio: 3600,
    imagen: "images/paquetes_europa.jpg"
  },
  {
    titulo: "Caribe All-Inclusive",
    descripcion: "7 días en un resort con todo incluido",
    precio: 2900,
    imagen: "images/paquetes_caribe.jpg"
  },
  {
    titulo: "Aventura en Patagonia",
    descripcion: "5 días explorando la naturaleza",
    precio: 1500,
    imagen: "images/paquetes_patagonia.jpg"
  }
];`} language="js" />
    </div>
  );
};

export default Ejercicio2Step2;

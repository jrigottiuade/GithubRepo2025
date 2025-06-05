import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const Ejercicio2Step4 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Parte 4: Agregamos el contenido a renderizar</h1>

      <p>
        Segui cada consigna de manejo del DOM
      </p>


      <p className="title-h2-underline pt-5">DOM 1 - Crear contenedor de la tarjeta</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Borramos el console.log() y completamos el forEach con este código</li>
        <li>Creamos el container de la tarjeta</li>
        <li>Le agregamos la class card-container que tenemos definida en el css</li>
        <li>Tu código debe quedar así:</li>
      </ul>
      <DisplayCode code={`
    // Crear contenedor de la tarjeta
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
        `} language="js" />

      <p className="title-h2-underline pt-5">DOM 2 - Crear la tarjeta</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Continuamos ahora con la card y le aplicamos la class card</li>
        <li>Tu código debe quedar así:</li>
      </ul>
      <DisplayCode code={`
    // Crear la tarjeta
    const card = document.createElement("div");
    card.classList.add("card");
        `} language="js" />


      <p className="title-h2-underline pt-5">DOM 3 - Crear la imágen</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Ahora creamos la imágen</li>
        <li>Completamos el src y el alt</li>
        <li>Tu código debe quedar así:</li>
      </ul>
      <DisplayCode code={`
    // Imagen
    const img = document.createElement("img");
    img.src = paquete.imagen;
    img.alt = paquete.titulo;
        `} language="js" />


      <p className="title-h2-underline pt-5">DOM 4 - Contenido de la card</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Ahora creamos el contenido de la card</li>
        <li>Completamos títulos y subtítulos</li>
        <li>Tu código debe quedar así:</li>
      </ul>
<DisplayCode
  code={`
    // Contenido de la tarjeta
    const contenido = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = paquete.titulo;

    const p1 = document.createElement("p");
    p1.textContent = paquete.descripcion;

    const p2 = document.createElement("p");
    p2.textContent = "Desde";

    const p3 = document.createElement("p");
    p3.innerHTML = \`<strong>\${paquete.precio} USD</strong>\`;
  `}
  language="js"
/>

      <p className="title-h2-underline pt-5">DOM 5 - Armamos la jerarquía de nodos</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Ausamos el método appendChild() en forma secuencial</li>
        <li>Agregamos al objeto contenido el h2, seguimos por p1, p2, p3</li>
        <li>Agregamos la imágen y el contenido a la card</li>
        <li>Luego la card al cardContainer</li>
        <li>Finalmente, la cardContainer al contenedor</li>
        <li>Tu código debe quedar así:</li>
      </ul>
<DisplayCode
  code={`
    // Armar jerarquía de nodos
    contenido.appendChild(h2);
    contenido.appendChild(p1);
    contenido.appendChild(p2);
    contenido.appendChild(p3);

    card.appendChild(img);
    card.appendChild(contenido);
    cardContainer.appendChild(card);
    contenedor.appendChild(cardContainer);
  `}
  language="js"
/>


    </div>
  );
};

export default Ejercicio2Step4;

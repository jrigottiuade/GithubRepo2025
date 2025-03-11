import React from "react";

const HandsOn1Intro = () => {
  return (
    <div className="h-screen">
      <h1 className="title-h1-underline">
        Hands-on: Construcción de una Landing Page para una Agencia de Viajes
      </h1>
      <p>
        Eres un desarrollador web y una agencia de turismo te ha contactado para
        crear una landing page donde los clientes puedan conocer los destinos y
        paquetes turísticos que ofrecen.
      </p>

      <h2 className="title-h2-underline pt-5">Objetivos</h2>
      <ul>
        <li className="pt-1">
          1. Preparar nuestro IDE - Visual Studio Code
        </li>
        <li className="pt-1">2. Crear un archivo HTML</li>
        <li className="pt-1">3. Especificar el DOCTYPE y configurar los metadatos en el head</li>
        <li className="pt-1">4. Estructurar el body utilizando etiquetas semánticas header, nav,
          section y footer.
        </li>
        <li className="pt-1">5. Inspeccionar el código desde el navegador.</li>
      </ul>
    </div>
  );
};

export default HandsOn1Intro;

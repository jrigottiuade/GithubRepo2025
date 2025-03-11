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
      <ul className="list-decimal list-inside space-y-1">
        <li>
          Preparar nuestro IDE - Visual Studio Code
        </li>
        <li>Crear un archivo HTML</li>
        <li>Estructurar el body utilizando etiquetas semánticas header, nav,
          section y footer.
        </li>
        <li>Inspeccionar el código desde el navegador.</li>
      </ul>
    </div>
  );
};

export default HandsOn1Intro;

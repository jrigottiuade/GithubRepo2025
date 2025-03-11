import React from "react";

const HandsOn1Step4 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">
        Inspeccionar el código desde el navegador
      </h1>
      <p>
        Desde el navegador, presionamos F12 para abrir el Modo de Desarrollador,
        de forma de poder explorar el código y eventualmente depurar y analizar
        una página web en tiempo real.
      </p>
      <p>Podes copiar y pegar el código o generarlo vos mismo.</p>
      <ul className="list-decimal list-inside space-y-1 pt-10">
        <li>Elements Inspeccionar y modificar el HTML y CSS.</li>
        <li>Console Ejecutar comandos JavaScript y ver errores.</li>
        <li>Network Ver solicitudes HTTP y tiempos de carga.</li>
        <li>Performance Analizar el rendimiento de la página.</li>
        <li>Sources Depurar y ver archivos JavaScript.</li>
        <li>
          Application Inspeccionar almacenamiento local, cookies y más.
        </li>
        <li>Security Analizar certificados SSL y conexiones seguras.</li>
      </ul>
      <img
        className="pt-5"
        src="images/html_hands_on_1/html_hands_on_1_img_5.jpg"
        alt=""
      />
    </div>
  );
};

export default HandsOn1Step4;

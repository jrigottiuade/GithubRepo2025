import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";
import { useEjercicio3 } from "../hooks/useEjercicio3";

const Ejercicio3Step1 = () => {
  const { codigoHtml, codigoCss, codigoJs1, codigoJs2, codigoJs3 } = useEjercicio3()
  return (
    <div>
      <h1 className="title-h1-underline">Parte 1: Armamos los archivos</h1>
      <p className="pb-5">
        En una carpeta llamada "js_ejercicio_3" crea los archivos html, css y js a partir del código provisto debajo
      </p>

      <p>Archivo index.html</p>
      <DisplayCode code={codigoHtml} language="html" />
      <p>Archivo style.css</p>
      <DisplayCode code={codigoCss} language="css" />
      <p>Archivo array_paquetes.js</p>
      <DisplayCode code={codigoJs1} language="js" />
      <p>Archivo script.js</p>
      <DisplayCode code={codigoJs2} language="js" />
      <p>Archivo local_storage.js</p>
      <DisplayCode code={codigoJs3} language="js" />

    </div>
  );
};

export default Ejercicio3Step1;

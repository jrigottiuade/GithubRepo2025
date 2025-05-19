import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";
import { useEjercicio1 } from "../hooks/useEjercicio1";

const Ejercicio1Step1 = () => {
    const {codigoHtml, codigoCss} = useEjercicio1()
  return (
    <div>
      <h1 className="title-h1-underline">Armamos los archivos</h1>
      <p className="pb-5">
        En una carpeta llamada "js_ejercicio_1" crea 3 archivos html, css y js y nombralos como quieras. Luego copia y pega los siguientes
        códigos base. No olvides de linkear los archivos css y js al html.
      </p>

      <DisplayCode  code={codigoHtml} language="html"/>
      <DisplayCode  code={codigoCss} language="css"/>

    </div>
  );
};

export default Ejercicio1Step1;

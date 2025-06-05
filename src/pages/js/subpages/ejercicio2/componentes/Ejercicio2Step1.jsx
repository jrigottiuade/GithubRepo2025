import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";
import { useEjercicio2 } from "../hooks/useEjercicio2";

const Ejercicio2Step1 = () => {
    const {codigoHtml, codigoCss} = useEjercicio2()
  return (
    <div>
      <h1 className="title-h1-underline">Parte 1: Armamos los archivos</h1>
      <p className="pb-5">
        En una carpeta llamada "js_ejercicio_2" crea 3 archivos html, css y js y nombralos como quieras. Luego copia y pega los siguientes
        códigos base. No olvides de linkear los archivos css y js al html.
      </p>

      <DisplayCode  code={codigoHtml} language="html"/>
      <DisplayCode  code={codigoCss} language="css"/>

    </div>
  );
};

export default Ejercicio2Step1;

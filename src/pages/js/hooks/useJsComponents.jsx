import React, { useState } from "react";
import JsCodeSnippetsView from "../subpages/codeSnippets/view/JsCodeSnippetsView"
import JsEjercicio1 from "../subpages/ejercicio1/view/JsEjercicio1";
import JsEjercicio2 from "../subpages/ejercicio2/view/JsEjercicio2";
import JsEjercicio3 from "../subpages/ejercicio3/view/JsEjercicio3";

export const useJsComponents = () => {
  const [jsSelectedComponent, setJsSelectedComponent] =
    useState("Code Snippets");

  const jsComponents = {
    "Code Snippets": <JsCodeSnippetsView />,
    "Ejercicio 1": <JsEjercicio1 />,
    "Ejercicio 2": <JsEjercicio2 />,
    "Ejercicio 3": <JsEjercicio3 />,
  };
  return { jsSelectedComponent, setJsSelectedComponent, jsComponents };
};

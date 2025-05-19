import React, { useState } from "react";
import JsCodeSnippetsView from "../subpages/codeSnippets/view/JsCodeSnippetsView"
import JsEjercicio1 from "../subpages/ejercicio1/view/JsEjercicio1";

export const useJsComponents = () => {
  const [jsSelectedComponent, setJsSelectedComponent] =
    useState("Code Snippets");

  const jsComponents = {
    "Code Snippets": <JsCodeSnippetsView />,
    "Ejercicio 1": <JsEjercicio1 />,
  };
  return { jsSelectedComponent, setJsSelectedComponent, jsComponents };
};

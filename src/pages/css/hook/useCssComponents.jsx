import { useState } from "react";
import CssComponent1 from "../components/CssComponent1";
import CssComponent2 from "../components/CssComponent2";
import CssComponent3 from "../components/CssComponent3";

export const useCssComponents = () => {
  const cssComponents = {
    Ejemplos: <CssComponent1 />,
    Ejercicios: <CssComponent2 />,
    "Code Snippets": <CssComponent3 />,
  };

  const [cssSelectedComponent, setCssSelectedComponent] = useState("Ejemplos");

  return { cssSelectedComponent, setCssSelectedComponent, cssComponents };
};

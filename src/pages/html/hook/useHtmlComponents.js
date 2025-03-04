import { useState } from "react";
import HtmlComponent1 from "../components/HtmlComponent1";
import HtmlComponent2 from "../components/HtmlComponent2";

export const useHtmlComponents = () => {
  const htmlComponents = {
    "Componente 1": <HtmlComponent1 />,
    "Componente 2": <HtmlComponent2 />,
  };

  const [selectedComponent, setSelectedComponent] = useState("Componente 1");

  return { htmlComponents, selectedComponent, setSelectedComponent };
};

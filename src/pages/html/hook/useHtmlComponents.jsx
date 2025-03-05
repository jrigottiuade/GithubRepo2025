import { useState } from "react";
import HtmlComponent1 from "../components/HtmlComponent1";
import HtmlComponent2 from "../components/HtmlComponent2";
import HtmlComponent3 from "../components/HtmlComponent3";

export const useHtmlComponents = () => {
  const htmlComponents = {
    "Code Snippets": <HtmlComponent1 />,
    "Hands on": <HtmlComponent2 />,
    "Miscelaneas": <HtmlComponent3 />,
  };

  const [htmlSelectedComponent, setHtmlSelectedComponent] = useState("Code Snippets");

  return { htmlSelectedComponent, setHtmlSelectedComponent, htmlComponents };
};

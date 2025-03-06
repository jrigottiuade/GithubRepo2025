import { useState } from "react";
import HtmlCodeSnippets from "../components/HtmlCodeSnippets";
import HtmlHandsOn from "../components/HtmlHandsOn";
import HtmlMiscelaneas from "../components/HtmlMiscelaneas";

export const useHtmlComponents = () => {
  const htmlComponents = {
    "Code Snippets": <HtmlCodeSnippets />,
    "Hands on": <HtmlHandsOn />,
    "Miscelaneas": <HtmlMiscelaneas />,
  };

  const [htmlSelectedComponent, setHtmlSelectedComponent] = useState("Code Snippets");

  return { htmlSelectedComponent, setHtmlSelectedComponent, htmlComponents };
};

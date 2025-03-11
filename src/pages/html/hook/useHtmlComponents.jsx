import { useState } from "react";
import HtmlCodeSnippetsView from "../subPages/codeSnippets/view/HtmlCodeSnippetsView";
import HtmlHandsOn1View from "../subPages/handsOn1/view/HtmlHandsOn1View";
import HtmlMiscelaneasView from "../subPages/miscelaneas/view/HtmlMiscelaneasView";

export const useHtmlComponents = () => {
  const [htmlSelectedComponent, setHtmlSelectedComponent] =
    useState("Code Snippets");

  const htmlComponents = {
    "Code Snippets": <HtmlCodeSnippetsView />,
    "Hands-on #1": <HtmlHandsOn1View />,
    "Miscelaneas": <HtmlMiscelaneasView />,
  };

  return { htmlSelectedComponent, setHtmlSelectedComponent, htmlComponents };
};

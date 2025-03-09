import { useState } from "react";
import HtmlCodeSnippetsView from "../subPages/codeSnippets/view/HtmlCodeSnippetsView";
import HtmlHandsOnView from "../subPages/handsOn/view/HtmlHandsOnView";
import HtmlMiscelaneasView from "../subPages/miscelaneas/view/HtmlMiscelaneasView";

export const useHtmlComponents = () => {
  const [htmlSelectedComponent, setHtmlSelectedComponent] =
    useState("Code Snippets");

  const htmlComponents = {
    "Code Snippets": <HtmlCodeSnippetsView />,
    "Hands on": <HtmlHandsOnView />,
    Miscelaneas: <HtmlMiscelaneasView />,
  };

  return { htmlSelectedComponent, setHtmlSelectedComponent, htmlComponents };
};

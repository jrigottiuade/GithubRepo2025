import { useState } from "react";
import CssCodeSnippetsView from "../subPages/codeSnippets/view/CssCodeSnippetsView";
import CssHandsOn1View from "../subPages/handsOn1/view/CssHandsOn1View"

export const useCssComponents = () => {
  const [cssSelectedComponent, setCssSelectedComponent] = useState("Code Snippets");

  const cssComponents = {
    "Code Snippets": <CssCodeSnippetsView />,
    "Hands on 1": <CssHandsOn1View />
  };

  return { cssSelectedComponent, setCssSelectedComponent, cssComponents };
};

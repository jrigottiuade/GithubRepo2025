import { useState } from "react";
import VscodeInstalacionView from "../subPages/instalacion/view/VscodeInstalacionView";
import VscodeMiscelaneasView from "../subPages/MIscelaneas/view/VscodeMiscelaneasView";

export const useVscodeComponents = () => {
  const [vscodeSelectedComponent, setVscodeSelectedComponent] =
    useState("Instalacion");

  const vscodeComponents = {
    "Instalacion": <VscodeInstalacionView />,
    "Miscelaneas" : <VscodeMiscelaneasView />
  };

  return {
    vscodeSelectedComponent,
    setVscodeSelectedComponent,
    vscodeComponents,
  };
};

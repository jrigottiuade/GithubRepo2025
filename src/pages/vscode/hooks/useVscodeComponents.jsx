import { useState } from "react";
import VscodeInstalacionView from "../subPages/instalacion/view/VscodeInstalacionView";
import VscodePluginsView from "../subPages/plugins/view/VscodePluginsView";
import AsistentesIaView from "../subPages/asistentesIA/view/AsistentesIaView";

export const useVscodeComponents = () => {
  const [vscodeSelectedComponent, setVscodeSelectedComponent] =
    useState("Instalacion");

  const vscodeComponents = {
    "Instalacion": <VscodeInstalacionView />,
    "Plugins" : <VscodePluginsView />,
    "Asistentes IA" : <AsistentesIaView />
  };

  return {
    vscodeSelectedComponent,
    setVscodeSelectedComponent,
    vscodeComponents,
  };
};

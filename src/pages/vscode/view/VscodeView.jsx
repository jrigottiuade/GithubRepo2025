import React from "react";
import SidebarLayout from "../../../core/layout/SidebarLayout";
import { useVscodeComponents } from "../hooks/useVscodeComponents";

const VscodeView = () => {
  const {
    vscodeSelectedComponent,
    setVscodeSelectedComponent,
    vscodeComponents,
  } = useVscodeComponents();
  return (
    <SidebarLayout
      selectedComponent={vscodeSelectedComponent}
      setSelectedComponent={setVscodeSelectedComponent}
      components={vscodeComponents}
    ></SidebarLayout>
  );
};

export default VscodeView;

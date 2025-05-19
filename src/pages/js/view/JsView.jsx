import React from "react";
import { useJsComponents } from "../hooks/useJsComponents";
import SidebarLayout from '../../../core/layout/SidebarLayout'

const JsView = () => {
  const { jsSelectedComponent, setJsSelectedComponent, jsComponents } =
    useJsComponents();

  return (
    <SidebarLayout
      selectedComponent={jsSelectedComponent}
      setSelectedComponent={setJsSelectedComponent}
      components={jsComponents}
    ></SidebarLayout>
  );
};

export default JsView;

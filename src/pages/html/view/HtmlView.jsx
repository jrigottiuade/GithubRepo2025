import React, { useState } from "react";
import { useHtmlComponents } from "../hook/useHtmlComponents";
import SidebarLayout from "../../../core/layout/SidebarLayout";

const HtmlView = () => {
  const { htmlSelectedComponent, setHtmlSelectedComponent, htmlComponents } =
    useHtmlComponents();

  return <SidebarLayout 
  selectedComponent={htmlSelectedComponent}
  setSelectedComponent={setHtmlSelectedComponent}
  components={htmlComponents}
  ></SidebarLayout>;
};

export default HtmlView;

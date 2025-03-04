import React, { useState } from "react";
import HtmlSidebar from "../components/HtmlSidebar";
import { useHtmlComponents } from "../hook/useHtmlComponents";

const HtmlView = () => {
  const { selectedComponent, setSelectedComponent, htmlComponents } =
    useHtmlComponents();

  return (
    <div className="flex ">
      <div>
        <HtmlSidebar
          htmlComponents={htmlComponents}
          setSelectedComponent={setSelectedComponent}
        />
      </div>
      <div>{htmlComponents[selectedComponent]}</div>
    </div>
  );
};

export default HtmlView;

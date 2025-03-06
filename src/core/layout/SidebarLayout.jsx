import React from "react";

const SidebarLayout = ({
  selectedComponent,
  setSelectedComponent,
  components,
}) => {
  return (
    <div className="flex">
      <div className="sidebar w-[200px] flex flex-col h-screen bg-neutral-200 pt-5">
        {Object.keys(components).map((key) => (
          <button
            className="py-2 px-5 hover:bg-gray-400 text-start"
            key={key}
            onClick={() => setSelectedComponent(key)}
          >
            <span>{key}</span>
          </button>
        ))}
      </div>
      <div className="component flex-1 overflow-auto p-5">{components[selectedComponent]}</div>
    </div>
  );
};

export default SidebarLayout;

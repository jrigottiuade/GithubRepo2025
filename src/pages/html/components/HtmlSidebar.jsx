import React from "react";

const HtmlSidebar = ({htmlComponents, setSelectedComponent}) => {
  return (
    <div className="flex flex-col h-screen bg-neutral-200 p-5">
      <h3>Sidebar</h3>
      {Object.keys(htmlComponents).map((key)=> (
        <button 
        className="pt-2"
        key={key}
        onClick={()=>setSelectedComponent(key)}>
            <span>{key}</span>
        </button>
      ))}
    </div>
  );
};

export default HtmlSidebar;

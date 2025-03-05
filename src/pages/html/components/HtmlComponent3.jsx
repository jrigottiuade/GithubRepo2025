import React from "react";
import DisplayCode from "../../../components/code/DisplayCode"

// CODE SNIPPETS
const HtmlComponent3 = () => {
  const sampleCode = `<div class="container">\n  <p>Hello World</p>\n</div>`;


  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">HTML Code Snippet</h2>
      <DisplayCode code={sampleCode} language="html" />
    </div>
  );
};

export default HtmlComponent3;

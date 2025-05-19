import React from "react";

import { UseJsCodeSnippets } from "../hooks/UseJsCodeSnippets";
import DisplayCode from "../../../../../components/code/DisplayCode";

const JsCodeSnippetsView = () => {
  const { codeSnippets } = UseJsCodeSnippets();

  return (
    <div>
      {codeSnippets.map((codeSnippet) => (
        <div key={codeSnippet.id} className="mb-6">
          <h1 className="text-xl font-bold mb-4">{codeSnippet.title}</h1>
          {codeSnippet.codeHtml && (
            <DisplayCode code={codeSnippet.codeHtml} language="html" />
          )}
          {codeSnippet.codeCss && (
            <DisplayCode code={codeSnippet.codeCss} language="css" />
          )}
          {codeSnippet.codeJs && (
            <DisplayCode code={codeSnippet.codeJs} language="js" />
          )}

          {/* Rendering Comments */}
          {codeSnippet.comments.map((comment, index) => (
            <p key={index} className="text-gray-600 italic">
              {comment}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default JsCodeSnippetsView;

import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";
import { UseCssCodeSnippets } from "../hooks/UseCssCodeSnippets";

const CssCodeSnippetsView = () => {
  const { codeSnippets } = UseCssCodeSnippets();
  return (
    <div>
      {codeSnippets.map((codeSnippet) => (
        <div key={codeSnippet.id} className="mb-6">
          <h1 className="text-xl font-bold mb-4">{codeSnippet.title}</h1>
          <DisplayCode code={codeSnippet.codeHtml} language="html" />
          {codeSnippet.codeCss && (
            <DisplayCode code={codeSnippet.codeCss} language="css" />
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

export default CssCodeSnippetsView;

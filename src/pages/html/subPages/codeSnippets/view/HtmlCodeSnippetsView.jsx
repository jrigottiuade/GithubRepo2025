import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";
import {useHtmlCodeSnippets} from "../hooks/useHtmlCodeSnippets"

// CODE SNIPPETS
const HtmlCodeSnippetsView = () => {
  const { codeSnippets } = useHtmlCodeSnippets();

  return (
    <div>
      {codeSnippets.map((codeSnippet) => (
        <div key={codeSnippet.id} className="mb-6">
          <h2 className="text-xl font-bold mb-4">{codeSnippet.title}</h2>
          <DisplayCode code={codeSnippet.code} language="html" />

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

export default HtmlCodeSnippetsView;

import React from "react";
import DisplayCode from "../../../components/code/DisplayCode";
import { useHtmlComponentsContent } from "../hook/useHtmlComponentsContent";

// CODE SNIPPETS
const HtmlComponent1 = () => {
  const { codeSnippets } = useHtmlComponentsContent();

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

export default HtmlComponent1;

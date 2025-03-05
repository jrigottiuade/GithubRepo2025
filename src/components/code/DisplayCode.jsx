import { useState } from "react";

const DisplayCode = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reinicia el estado después de 2s
    });
  };

  return (
    <div className="relative bg-gray-900 text-gray-100 p-4 rounded-lg shadow-md overflow-x-auto">
      {/* Botón de Copiar */}
      <button
        onClick={copyToClipboard}
        className={
            copied
            ? "absolute top-2 right-2 bg-gray-700 text-white p-2 rounded-md transition"
            : "absolute top-2 right-2 bg-gray-500 hover:bg-gray-300  text-white p-2 rounded-md transition"
        }
      >
        <span className="material-icons">content_copy</span>{" "}
      </button>

      {/* Muestra el código con formato */}
      <pre className="overflow-x-auto p-2 text-[14px]">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default DisplayCode;

import { useState } from "react";
import CopyIcon from "../../icons/CopyIcon";
import CheckIcon from "../../icons/CheckIcon";

const DisplayCode = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reinicia el estado después de 2s
    });
  };

  return (
    <div className="relative bg-gray-900 text-gray-100 p-4 rounded-lg shadow-md overflow-x-auto mb-3">
      <p className="absolute top-2 left-5 text-sm bg-gray-700 px-2 rounded-xl">{language}</p>
      {/* Botón de Copiar */}
      <button
        onClick={copyToClipboard}
        className={
          copied
            ? "absolute top-2 right-5 flex"
            : "absolute top-2 right-5 flex cursor-pointer"
        }
      >
        {copied ? <CheckIcon width={15} /> : <CopyIcon width={15} />}
        <span className="ps-1 text-xs">{copied ? "Copiado" : "Copiar"}</span>
      </button>

      {/* Muestra el código con formato */}
      <pre className="overflow-x-auto p-2 text-[14px]">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default DisplayCode;

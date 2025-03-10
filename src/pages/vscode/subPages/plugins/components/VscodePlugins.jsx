import React from "react";

const VscodePlugins = () => {
  return (
    <div>
      <h1 className="title-h1">⚙️ Plugins básicos sugeridos para VSCode</h1>

      <p>
        Si trabajas con HTML, CSS y JavaScript en VSCode, estos plugins te
        ayudarán a mejorar tu productividad.
      </p>

      {/* Plugin 1 - Live Server */}
      <section>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">
            🔴 Live Server
          </h2>
          <p className="mt-2">
            <strong>Funcionalidad:</strong> Permite ver los cambios en tiempo
            real en el navegador sin necesidad de recargar manualmente la
            página.
          </p>
          <p className="mt-2">
            <strong>Instalación:</strong>
          </p>
          <ul className="list-decimal ml-6 mt-2 text-gray-700">
            <li>
              Abre VSCode y ve a la pestaña de <strong>Extensiones</strong>{" "}
              (`Ctrl + Shift + X`).
            </li>
            <li>
              Busca <strong>Live Server</strong> e instálalo.
            </li>
            <li>
              Para activarlo, abre un archivo <code>.html</code>, haz clic
              derecho y selecciona <strong>"Open with Live Server"</strong>.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Atajo rápido:</strong>
          </p>
          <pre className="bg-gray-200 p-3 rounded-md text-sm font-mono">
            Alt + L, Alt + O
          </pre>
        </div>
      </section>

      {/* Plugin 2 - Prettier */}
      <section>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">✨ Prettier</h2>
          <p className="mt-2">
            <strong>Funcionalidad:</strong> Formatea automáticamente tu código
            en **HTML, CSS y JavaScript**, asegurando que sea limpio y legible.
          </p>
          <p className="mt-2">
            <strong>Instalación:</strong>
          </p>
          <ul className="list-decimal ml-6 mt-2 text-gray-700">
            <li>
              Abre VSCode y ve a la pestaña de <strong>Extensiones</strong>.
            </li>
            <li>
              Busca <strong>Prettier - Code formatter</strong> e instálalo.
            </li>
            <li>
              Ve a <strong>Configuración</strong> (`Ctrl + ,`) y activa{" "}
              <code>"formatOnSave": true</code>.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Atajo rápido:</strong>
          </p>
          <pre className="bg-gray-200 p-3 rounded-md text-sm font-mono">
            Shift + Alt + F
          </pre>
        </div>
      </section>
    </div>
  );
};

export default VscodePlugins;

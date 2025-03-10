import React from "react";

const VscodeInstalacion = () => {
  return (
    <div>
      {/* INSTALACION EN WINDOWS */}
      <section>
        <h1 className="title-h1">🔧 Instalación de VSCode en Windows</h1>

        <p>
          Segui estos pasos para instalar Visual Studio Code en Windows de
          manera rápida y sencilla.
        </p>

        {/* Paso 1 */}
        <div className="mt-6">
          <h2 className="title-h2"><span className="icon-numeral">1</span>Descargar VSCode</h2>
          <p className="mt-2">1. Ve a la página oficial de descarga:</p>
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            👉 Descargar Visual Studio Code
          </a>
          <p>
            2. Haz clic en <strong>"Download for Windows"</strong>.
          </p>
          <p>
            3. Espera a que se descargue el archivo <code>.exe</code>.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="mt-6">
          <h2 className="title-h2">Instalar VSCode</h2>
          <p className="mt-2">1. Abre el archivo descargado.</p>
          <p>2. Acepta los términos de licencia.</p>
          <p>3. Elige la carpeta de instalación.</p>
          <p>4. Marca las siguientes opciones recomendadas:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>✅ Agregar "Abrir con Code" al menú de archivos.</li>
            <li>✅ Agregar "Abrir con Code" al menú de carpetas.</li>
            <li>✅ Registrar el editor como predeterminado.</li>
          </ul>
          <p>
            5. Haz clic en <strong>"Instalar"</strong> y espera.
          </p>
        </div>
      </section>

      {/* INSTALACION EN MAC */}
      <section>
        <h1 className="title-h1 mt-10">
          🍏 Instalación de VSCode en macOS
        </h1>

        <p>
          Sigue estos pasos para instalar Visual Studio Code en tu Mac de manera
          sencilla.
        </p>

        {/* Paso 1 */}
        <div className="mt-6">
          <h2 className="title-h2">
            <span className="icon-numeral">1</span> Descargar VSCode
          </h2>
          <p className="mt-2">1. Ve a la página oficial de descarga:</p>
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            👉 Descargar Visual Studio Code
          </a>
          <p>
            2. Descarga el archivo <strong>.zip</strong> para macOS.
          </p>
          <p>3. Espera a que finalice la descarga.</p>
        </div>

        {/* Paso 2 */}
        <div className="mt-6">
          <h2 className="title-h2">
            <span className="icon-numeral">2</span>Instalar VSCode
          </h2>
          <p className="mt-2">
            1. Abre la carpeta de descargas y extrae el archivo{" "}
            <code>.zip</code>.
          </p>
          <p>
            2. Mueve la aplicación <strong>Visual Studio Code</strong> a la
            carpeta <code>Aplicaciones</code>.
          </p>
        </div>

        {/* Paso 3 */}
        <div className="mt-6">
          <h2 className="title-h2">
            <span className="icon-numeral">3</span>Habilitar el comando <code>code</code> en la terminal
          </h2>
          <p className="mt-2">Para poder abrir VSCode desde la terminal:</p>
          <ol className="list-decimal ml-6 mt-2 text-gray-700">
            <li>Abre Visual Studio Code.</li>
            <li>
              Presiona <code>Cmd + Shift + P</code> para abrir la paleta de
              comandos.
            </li>
            <li>
              Escribe{" "}
              <strong>"Shell Command: Install 'code' command in PATH"</strong> y
              selecciona la opción.
            </li>
          </ol>
          <p className="mt-2">
            Ahora puedes abrir VSCode desde la terminal con el comando:
          </p>
          <pre className="bg-gray-200 p-3 rounded-md text-sm font-mono mt-2">
            code .
          </pre>
        </div>


      </section>
    </div>
  );
};

export default VscodeInstalacion;

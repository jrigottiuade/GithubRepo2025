import React from "react";

const AsistentesIa = () => {
  return (
    <div>
      {/* GITHUB COPILOT */}
      <section>
        <h1 className="title-h1">🤖 GitHub Copilot en VSCode</h1>
        <p>
          GitHub Copilot es una herramienta de inteligencia artificial que ayuda
          a escribir código más rápido y con mayor precisión en Visual Studio
          Code.
        </p>

        {/* Funcionalidad */}
        <div className="mt-6">
          <h2 className="title-h2">
            <span className="icon-numeral">1</span>¿Qué hace?
          </h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>🚀 Sugiere líneas y funciones completas de código.</li>
            <li>
              🧠 Aprende del contexto del archivo en el que estás trabajando.
            </li>
            <li>
              🔍 Compatible con múltiples lenguajes como JavaScript, Python,
              Java, C++, etc.
            </li>
          </ul>
        </div>

        {/* Instalación */}
        <div className="mt-6">
          <h2 className="title-h2">
            <span className="icon-numeral">2</span>Instalación en VSCode
          </h2>
          <ul className="list-decimal ml-6 mt-2 text-gray-700">
            <li>
              Abre VSCode y ve a la pestaña de <strong>Extensiones</strong>{" "}
              (`Ctrl + Shift + X`).
            </li>
            <li>
              Busca <strong>GitHub Copilot</strong> e instálalo.
            </li>
            <li>
              Inicia sesión con tu cuenta de <strong>GitHub</strong>.
            </li>
            <li>Activa Copilot en el archivo donde trabajes.</li>
          </ul>
        </div>

        {/* Uso */}
        <div className="mt-6">
          <h2 className="title-h2">
            <span className="icon-numeral">3</span>¿Cómo usarlo?
          </h2>
          <p className="mt-2">
            A medida que escribes código, Copilot sugiere autocompletados en
            gris claro. Puedes:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              ✅ Presionar <code>Tab</code> para aceptar una sugerencia.
            </li>
            <li>
              ❌ Presionar <code>Esc</code> para ignorarla.
            </li>
            <li>
              🔁 Usar <code>Ctrl + Enter</code> para ver más sugerencias.
            </li>
          </ul>
        </div>

        {/* Costo */}
        <div className="mt-6">
          <h2 className="title-h2">
            <span className="icon-numeral">4</span>Costo
          </h2>
          <p className="mt-2">
            GitHub Copilot es un servicio de pago con una prueba gratuita de 30
            días. - ✅ <strong>Gratis</strong> para estudiantes y proyectos de
            código abierto. - 💳 <strong>Pago</strong> para otros usuarios con
            suscripción mensual/anual.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AsistentesIa;

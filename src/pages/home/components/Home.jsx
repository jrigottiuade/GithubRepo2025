import React from "react";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      {/* Título */}
      <h1 className="title-h1">
        📚 Diseño y Desarrollo Web
      </h1>

      {/* Información general */}
      <div className="text-gray-700">
        <p>
          Esta materia ofrece una introducción práctica al desarrollo web,
          abordando desde los fundamentos de{" "}
          <strong>HTML, CSS y JavaScript</strong> hasta técnicas modernas de
          diseño y usabilidad.
        </p>
      </div>

      {/* Días de cursada */}
      <div className="mt-6">
        <h2 className="title-h2">
          📅 Días de Cursada
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>
            📌 <strong>Jueves</strong> - 18:30 a 22:00 hs
          </li>
        </ul>
      </div>

      {/* Objetivos */}
      <div className="mt-6">
        <h2 className="title-h2">
          🎯 Objetivos del Curso
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>✅ Comprender los fundamentos del desarrollo web.</li>
          <li>✅ Aprender a maquetar con HTML y estilizar con CSS.</li>
          <li>✅ Aplicar JavaScript para la interactividad.</li>
          <li>✅ Desarrollar un proyecto final integrador.</li>
        </ul>
      </div>

      {/* Docentes */}
      <div className="mt-6">
        <h2 className="title-h2">👨‍🏫 Docentes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>
            🎓 <strong>Profesor:</strong>Alejandro Potente
          </li>
          <li>
            🧑‍💻 <strong>Jefe de Trabajos Prácticos:</strong>Juan Pablo Rigotti
          </li>
        </ul>
      </div>

      {/* Mensaje final */}
      <div className="mt-8 p-4 bg-blue-100 text-blue-900 rounded-lg text-center">
        🚀 ¡Bienvenidos al curso! Prepárense para aprender y desarrollar
        proyectos increíbles.
      </div>
    </div>
  );
};

export default Home;

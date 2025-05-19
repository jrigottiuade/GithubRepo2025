import Ejercicio1Intro from "../componentes/Ejercicio1Intro";
import Ejercicio1Step1 from "../componentes/Ejercicio1Step1";
import Ejercicio1Step2 from "../componentes/Ejercicio1Step2";
import Ejercicio1Step3 from "../componentes/Ejercicio1Step3";

export const useEjercicio1 = () => {
  const ejercicio1Components = [
    <Ejercicio1Intro />,
    <Ejercicio1Step1 />,
    <Ejercicio1Step2 />,
    <Ejercicio1Step3 />,
  ];

  const codigoHtml = `
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio 1: Paquetes Turísticos</title>
</head>
<body>
  <h1>Ejercicio 1: Paquetes Turísticos</h1>
  <button id="mostrar-btn">Mostrar Paquetes en Consola</button>

  <form id="agregar-form">
    <input type="text" id="nuevo-paquete" placeholder="Nuevo paquete turístico" required />
    <button type="submit">Agregar Paquete</button>
  </form>

  <form id="buscar-form">
    <input type="text" id="buscar-paquete" placeholder="Buscar paquete" required />
    <button type="submit">Buscar Paquete</button>
  </form>

</body>
</html>`;

  const codigoCss = `body {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    background-color: #f9f9f9;
  }
  h1 {
    text-align: center;
  }
  button,
  input[type="submit"] {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
  }
  input[type="text"] {
    width: calc(100% - 2rem);
    padding: 0.5rem;
    margin-top: 0.5rem;
  }
`;

  return {
    ejercicio1Components,
    codigoHtml,
    codigoCss,
  };
};

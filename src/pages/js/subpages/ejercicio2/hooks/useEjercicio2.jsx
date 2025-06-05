import Ejercicio2Intro from "../componentes/Ejercicio2Intro";
import Ejercicio2Step1 from "../componentes/Ejercicio2Step1";
import Ejercicio2Step2 from "../componentes/Ejercicio2Step2";
import Ejercicio2Step3 from "../componentes/Ejercicio2Step3";
import Ejercicio2Step4 from "../componentes/Ejercicio2Step4";
import Ejercicio2Step5 from "../componentes/Ejercicio2Step5";

export const useEjercicio2 = () => {
  const ejercicio2Components = [
    <Ejercicio2Intro />,
    <Ejercicio2Step1 />,
    <Ejercicio2Step2 />,
    <Ejercicio2Step3 />,
    <Ejercicio2Step4 />,
    <Ejercicio2Step5 />
  ];

  const codigoHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section id="paquetes">
        <h2 class="mt-5">Paquetes Turísticos</h2>
        <div class="paquetes-container"></div>
    </section>

    <script src="script.js"></script>
</body>

</html>`;

  const codigoCss = `* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

:root {
    --primary: #1e3a8a;
    /* Azul oscuro */
    --secondary: #3b82f6;
    /* Azul vibrante */
    --light: #f0f4f8;
    /* Fondo claro */
    --dark: #1f2937;
    /* Gris oscuro */
    --accent: #60a5fa;
    /* Azul cielo */
    --orange: #fa9f60;
    --black: #000;
}

body {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
}
#paquetes h2 {
    text-align: center;
}

.paquetes-container {
    display: flex;

}

.paquetes-container {
    width: 80%;
    max-width: 900px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 1rem;
}

.paquetes-container .card-container {
    width: 33%;
    padding: 5px;
}

.paquetes-container .card-container .card {
    width: 100%;
    height: 300px;
    background-color: var(--light);
    color: var(--dark);
    padding: 0;

}

.paquetes-container .card-container img {
    width: 100%;
    height: 100px;
}

.paquetes-container .card-container div {
    padding: 5px;
}

.paquetes-container .card-container div h2 {
    height: 80px;
}

.paquetes-container .card-container div p:first-of-type {
    height: 70px;
}

.paquetes-container .card-container div p:nth-of-type(2) {
    font-size: 12px;
}

.paquetes-container .card-container div p:nth-of-type(3) {
    font-size: 18px;
}



/* Utilities */
/* Margins */
.mt-1 { margin-top: 5px; }
.mt-2 { margin-top: 10px; }
.mt-3 { margin-top: 15px; }
.mt-4 { margin-top: 20px; }
.mt-5 { margin-top: 25px; }

.mr-1 { margin-right: 5px; }
.mr-2 { margin-right: 10px; }
.mr-3 { margin-right: 15px; }
.mr-4 { margin-right: 20px; }
.mr-5 { margin-right: 25px; }

.mb-1 { margin-bottom: 5px; }
.mb-2 { margin-bottom: 10px; }
.mb-3 { margin-bottom: 15px; }
.mb-4 { margin-bottom: 20px; }
.mb-5 { margin-bottom: 25px; }

.ml-1 { margin-left: 5px; }
.ml-2 { margin-left: 10px; }
.ml-3 { margin-left: 15px; }
.ml-4 { margin-left: 20px; }
.ml-5 { margin-left: 25px; }

/* Padding */
.pt-1 { padding-top: 5px; }
.pt-2 { padding-top: 10px; }
.pt-3 { padding-top: 15px; }
.pt-4 { padding-top: 20px; }
.pt-5 { padding-top: 25px; }

.pr-1 { padding-right: 5px; }
.pr-2 { padding-right: 10px; }
.pr-3 { padding-right: 15px; }
.pr-4 { padding-right: 20px; }
.pr-5 { padding-right: 25px; }

.pb-1 { padding-bottom: 5px; }
.pb-2 { padding-bottom: 10px; }
.pb-3 { padding-bottom: 15px; }
.pb-4 { padding-bottom: 20px; }
.pb-5 { padding-bottom: 25px; }

.pl-1 { padding-left: 5px; }
.pl-2 { padding-left: 10px; }
.pl-3 { padding-left: 15px; }
.pl-4 { padding-left: 20px; }
.pl-5 { padding-left: 25px; }

`;

  return {
    ejercicio2Components,
    codigoHtml,
    codigoCss,
  };
};

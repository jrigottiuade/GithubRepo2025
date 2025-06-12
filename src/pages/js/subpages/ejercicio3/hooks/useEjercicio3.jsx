import Ejercicio3Intro from "../componentes/Ejercicio3Intro";
import Ejercicio3Step1 from "../componentes/Ejercicio3Step1";
import Ejercicio3Step2 from "../componentes/Ejercicio3Step2";
import Ejercicio3Step3 from "../componentes/Ejercicio3Step3";
import Ejercicio3Step4 from "../componentes/Ejercicio3Step4";
import Ejercicio3Step5 from "../componentes/Ejercicio3Step5";

export const useEjercicio3 = () => {
  const ejercicio2Components = [
    <Ejercicio3Intro />,
    <Ejercicio3Step1 />,
    <Ejercicio3Step2 />,
    <Ejercicio3Step3 />,
    <Ejercicio3Step4 />,
    <Ejercicio3Step5 />
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
    width: 80%;
    max-width: 900px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 1rem;
}

.paquetes-container .card-container {
    width: 33%;
    padding: 5px;
}

.paquetes-container .card-container .card {
    width: 100%;
    height: 350px;
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

.paquetes-container .card-container .btn-favorito {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    background-color: #eee;
    color: #e63946; /* rojo apagado */
    border: 1px solid #e63946;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;
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

const codigoJs1 = `const paquetes = [
  {
    id: 1,
    titulo: "Europa Express",
    descripcion: "10 días recorriendo las principales ciudades europeas",
    precio: 3600,
    imagen: "images/paquetes_europa.jpg"
  },
  {
    id: 2,
    titulo: "Caribe All-Inclusive",
    descripcion: "7 días en un resort con todo incluido",
    precio: 2900,
    imagen: "images/paquetes_caribe.jpg"
  },
  {
    id: 3,
    titulo: "Aventura en Patagonia",
    descripcion: "5 días explorando la naturaleza",
    precio: 1500,
    imagen: "images/paquetes_patagonia.jpg"
  },
  {
    id: 4,
    titulo: "Iguazú y Cataratas",
    descripcion: "4 días descubriendo una de las maravillas naturales del mundo",
    precio: 1200,
    imagen: "images/paquetes_iguazu.jpg"
  },
  {
    id: 5,
    titulo: "Salta y Jujuy Colonial",
    descripcion: "6 días recorriendo el norte argentino entre cerros y tradiciones",
    precio: 1350,
    imagen: "images/paquetes_salta.jpg"
  },
  {
    id: 6,
    titulo: "Bariloche y los Lagos",
    descripcion: "5 días entre montañas, lagos y chocolates",
    precio: 1400,
    imagen: "images/paquetes_bariloche.jpg"
  }
];
`
const codigoJs2 = `
function renderizarPaquetes(paquetes) {
  const contenedor = document.querySelector(".paquetes-container");

  paquetes.forEach(paquete => {
    // Crear contenedor de la tarjeta
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    // Crear la tarjeta
    const card = document.createElement("div");
    card.classList.add("card");

    // Imagen
    const img = document.createElement("img");
    img.src = paquete.imagen;
    img.alt = paquete.titulo;

    // Contenido de la tarjeta
    const contenido = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = paquete.titulo;

    const button_favorito = document.createElement('button');
    button_favorito.classList.add("btn-favorito")
    button_favorito.textContent = esFavorito(paquete.id) ? "Quitar favorito" : "Agregar favorito"
    // if (esFavorito(paquete.id)) {
    //   button_favorito.textContent = "Quitar favorito"
    // } else {
    //   button_favorito.textContent = "Agregar favorito"
    // }
      button_favorito.addEventListener("click", () => {
      handleFavoritos(paquete.id);
      button_favorito.textContent = esFavorito(paquete.id)
        ? "Quitar favorito"
        : "Agregar favorito";
    });

    const p1 = document.createElement("p");
    p1.textContent = paquete.descripcion;

    const p2 = document.createElement("p");
    p2.textContent = "Desde";

    const p3 = document.createElement("p");
    p3.innerHTML = \`<strong>\${paquete.precio} USD</strong>\`;

    // Armar jerarquía de nodos
    
    contenido.appendChild(h2);
    contenido.appendChild(button_favorito);
    contenido.appendChild(p1);
    contenido.appendChild(p3);
    contenido.appendChild(p2);
    

  
    card.appendChild(contenido);
    card.appendChild(img);
    cardContainer.appendChild(card);
    contenedor.appendChild(cardContainer);
  });
}

// Ejecutar al cargar
renderizarPaquetes(paquetes);

`

const codigoJs3 = `
// 1. Intentamos recuperar los favoritos guardados o arrancamos con uno vacío
let paquetes_favoritos = JSON.parse(localStorage.getItem("paquetes_favoritos")) || [];


function handleFavoritos(idPaquete) {
    if (paquetes_favoritos.includes(idPaquete)) {
        const index = paquetes_favoritos.indexOf(idPaquete);
        if (index !== -1) {
            paquetes_favoritos.splice(index, 1);
            localStorage.setItem("paquetes_favoritos", JSON.stringify(paquetes_favoritos));
            console.log(\`Paquete con ID \${idPaquete} removido de favoritos.\`);
        }
    } else {
        paquetes_favoritos.push(idPaquete);
        localStorage.setItem("paquetes_favoritos", JSON.stringify(paquetes_favoritos));
        console.log(\`Paquete con ID \${idPaquete} agregado a favoritos.\`);
    }
}

function esFavorito(idPaquete) {
    if (paquetes_favoritos.includes(idPaquete)) {
        console.log("Es favorito")
        return true
    } else {
        console.log("No Es favorito")
        return false
    }
}
`

  return {
    ejercicio2Components,
    codigoHtml,
    codigoCss,
    codigoJs1,
    codigoJs2,
    codigoJs3
  };
};

import { comment } from "postcss";

export const UseJsCodeSnippets = () => {
  const codeSnippets = [
    {
      title: "Declaración de variables con var, let y const",
      codeJs: `
// Declaración con var (ámbito de función)
function ejemploVar() {
  var mensaje = "Hola desde var";
  if (true) {
    var mensaje = "Var se redeclara dentro del mismo ámbito";
    console.log("Dentro del if:", mensaje);
  }
  console.log("Fuera del if:", mensaje); // Se ve afectado por la redeclaración
}

// Declaración con let (ámbito de bloque)
function ejemploLet() {
  let mensaje = "Hola desde let";
  if (true) {
    let mensaje = "Let tiene ámbito de bloque";
    console.log("Dentro del if:", mensaje);
  }
  console.log("Fuera del if:", mensaje); // No se ve afectado
}

// Declaración con const (constante)
function ejemploConst() {
  const mensaje = "Hola desde const";
  console.log("Mensaje inicial:", mensaje);
  
  // mensaje = "Intentando cambiar el valor"; // Error: no se puede reasignar
}
      `,
      comments: [
        "var tiene ámbito global o de función, mientras que let de bloque",
        "ejecutar el código modelo y ver cómo se modifica el string mensaje dentro de la función y del bloque if",
        "notar que con const no se puede redeclarar la variable",
      ],
    },
    {
      title: "prompt y alert para ingreso y salida de datos",
      codeJs: `
// Pide el nombre al usuario
let nombre = prompt("¿Cómo te llamás?");

// Muestra un saludo con alert
alert("¡Hola, " + nombre + "! Bienvenido/a al sitio.");

        `,
      comments: [
        "prompt permite al usuario ingresar datos y alert muestra mensajes emergentes",
        "ejecutar el código modelo y ver cómo se pide el nombre y luego se muestra un saludo",
        "usar console.log para mostrar el nombre en la consola",
        "notar que promt retorna un tipo de dato string",
      ],
    },
    {
      title:
        "Conversión de tipos de datos, parseInt, parseFloar, String y typeof",
      codeJs: `
// El usuario ingresa su edad (valor string)
let edadTexto = prompt("¿Qué edad tenés?");

// Convertimos a número entero
let edadNumero = parseInt(edadTexto);

// Mostramos el resultado con su tipo
alert("Tu edad como número entero es: " + edadNumero + " (tipo: " + typeof edadNumero + ")");

// Ahora pedimos un precio con decimales
let precioTexto = prompt("Ingresá un precio con decimales (ej: 199.99):");

// Convertimos a número flotante
let precioNumero = parseFloat(precioTexto);

// Mostramos el resultado
alert("Precio como número flotante: " + precioNumero + " (tipo: " + typeof precioNumero + ")");

// Ahora convertimos un número a string
let precioComoTexto = String(precioNumero);
alert("Ahora el precio es texto: " + precioComoTexto + " (tipo: " + typeof precioComoTexto + ")");

        `,
      comments: [
        "parseInt convierte un string a un número entero",
        "parseFloat convierte un string a un número decimal",
        "mientras vean números, convertirán hasta ver otro valor no numérico",
        "al convertir una cadena sin número inicial, devuelven NaN",
        "String convierte un número a un string",
        "typeof muestra el tipo de dato de una variable",
      ],
    },
    {
      title: "Condicionales I: if - else",
      codeJs: `
        // Pedimos la edad al usuario
let edad = prompt("¿Qué edad tenés?");

// Convertimos el valor ingresado a número
edad = parseInt(edad);

// Evaluamos la edad usando condicionales
if (edad >= 18) {
  alert("Sos mayor de edad. Podés ingresar.");
} else {
  alert("Sos menor de edad. Acceso denegado.");
}
`,
      comments: [
        "if (condición) → ejecuta el bloque si la condición es verdadera",
        "else → se ejecuta si la condición anterior no se cumple",
        "El uso de parseInt es importante porque prompt devuelve un string y queremos comparar números.",
      ],
    },
    {
      title: "Condicionales II: variante con if - else",
      codeJs: `
        let edad = parseInt(prompt("¿Qué edad tenés?"));

if (edad < 13) {
  alert("Sos un niño/a.");
} else if (edad >= 13 && edad < 18) {
  alert("Sos un/a adolescente.");
} else {
  alert("Sos un adulto.");
}
`,
      comments: ["else if vuelve a evaluar una codición si la del if es false"],
    },
    {
      title: "Condicionales III: switch",
      codeJs: `
let destino = prompt("Elegí un destino: Bariloche, Salta, Mendoza, Iguazú").toLowerCase();

switch (destino) {
  case "bariloche":
    alert("Seleccionaste Bariloche: montañas y chocolate.");
    break;
  case "salta":
    alert("Seleccionaste Salta: historia y cultura.");
    break;
  case "mendoza":
    alert("Seleccionaste Mendoza: vino y montaña.");
    break;
  default:
    alert("Destino no reconocido. Probá con otro.");
}
`,
      comments: [
        "destino es la variable a evaluar",
        "case evalúa, como si fuera un if, si la variable toma ese valor",
        "break termina la evaluación del switch",
        "en caso que ningún case encuentre coincidencia, ejecuta el bloque dentro de default",
      ],
    },
    {
      title: "Condicionales IV: opearador ternario",
      codeJs: `
let edad = parseInt(prompt("¿Qué edad tenés?"));

let mensaje = (edad >= 18) 
  ? "✅ Podés ingresar, sos mayor de edad." 
  : "⛔ No podés ingresar, sos menor.";

alert(mensaje);
`,
      comments: [
        "Sintáxis: condición ? valor_si_verdadero : valor_si_falso;",
        "Para asignar valores rápidamente según una condición",
        "Para mostrar mensajes cortos",
        "Evitá usarlo si la lógica es compleja: ahí es mejor un if...else tradicional"
      ],
    },
    {
      title: "Comparación débil o abstracta",
      codeJs: `
5 == "5"      // ✅ true (convierte "5" a número)
0 == false    // ✅ true
null == undefined // ✅ true
`,
      comments: [
        "Se llama comparación con conversión de tipo (loose equality)",
        "Convierte los valores a un mismo tipo antes de comparar",
        "Puede reproducir resultados inesperados",
      ],
    },
    {
      title: "Comparación estricta",
      codeJs: `
5 === "5"     // ❌ false (número vs string)
0 === false   // ❌ false
null === undefined // ❌ false
`,
      comments: [
        "Se llama comparación estricta (strict equality)",
        "No realiza conversión de tipo: compara valor y tipo",
        "✅ Recomendado usar === en la mayoría de los casos para evitar errores sutiles",
      ],
    },
    {
      title: "Ciclos I: While",
      codeJs: `
let contador = 1;

while (contador <= 5) {
  console.log("Iteración número " + contador);
  contador++;
}       
`,
      comments: [
        "Evalúa la condición antes de ejecutar el bloque",
        "Si la condición es falsa desde el inicio, el bloque no se ejecuta nunca.",
      ],
    },
    {
      title: "Ciclos II: Do While",
      codeJs: `
let contador = 1;

do {
  console.log("Iteración número " + contador);
  contador++;
} while (contador <= 5);
`,
      comments: [
        "Evalúa la condición después de ejecutar el bloque",
        "El bloque se ejecuta al menos una vez, incluso si la condición no se cumple",
      ],
    },
    {
      title: "Ciclos III: For (clásico)",
      codeJs: `
for (let i = 1; i <= 5; i++) {
  console.log("Iteración número " + i);
}`,
      comments: [
        "Tiene tres partes: inicio, condición, incremento",
        "Ideal cuando se sabe cuántas veces hay que repetir",
      ],
    },
    {
      title:
        "Ciclos IV - For...in ( para recorrer índices de un array o propiedades de un objeto )",
      codeJs: `
let destinos = ["Bariloche", "Salta", "Iguazú"];

for (let indice in destinos) {
  console.log("Índice:", indice, "- Destino:", destinos[indice]);
}
`,
      comments: [
        "Itera sobre índices del array",
        "Útil para acceder al índice y al valor",
      ],
    },
    {
      title:
        "Ciclos V: For...of (para recorrer directamente los valores de un array)",
      codeJs: `
let destinos = ["Bariloche", "Salta", "Iguazú"];

for (let destino of destinos) {
  console.log("Destino:", destino);
}`,
      comments: [
        "Itera directamente sobre los elementos del array",
        "Más legible y expresivo cuando no necesitás el índice",
      ],
    },
    {
      title: "Array simple con strings",
      codeJs: `
let destinos = ["Bariloche", "Salta", "Mendoza", "Iguazú"];

console.log("Primer destino:", destinos[0]);
console.log("Cantidad de destinos:", destinos.length);
`,
      comments: ["Ideal para introducir: índice, .length, lectura básica."],
    },
    {
      title: "Array de objetos",
      codeJs: `
let paquetes = [
  { destino: "Bariloche", precio: 120000 },
  { destino: "Salta", precio: 98000 },
  { destino: "Mendoza", precio: 105000 }
];

console.log("Primer paquete:", paquetes[0].destino, "-", paquetes[0].precio);
`,
      comments: [
        "Ideal para arrays más complejos, estructura de datos y render futuro",
      ],
    },
    {
      titlle: "Métodos de Arrays",
      codeJs: `
let destinos = ["Bariloche", "Salta", "Mendoza", "Iguazú"];

console.log("Lista original:", destinos);

// Agregar un elemento al final
destinos.push("Ushuaia");
console.log("Con Ushuaia al final:", destinos);

// Eliminar el último elemento
destinos.pop();
console.log("Después de eliminar el último:", destinos);

// Agregar al principio
destinos.unshift("El Calafate");
console.log("Con El Calafate al inicio:", destinos);

// Eliminar el primero
destinos.shift();
console.log("Después de eliminar el primero:", destinos);

// Buscar un elemento
console.log("¿Incluye Mendoza?", destinos.includes("Mendoza")); // true

// Encontrar el índice
console.log("Índice de Salta:", destinos.indexOf("Salta")); // 1

// Ordenar alfabéticamente
destinos.sort();
console.log("Ordenados alfabéticamente:", destinos);

// Invertir el orden
destinos.reverse();
console.log("Orden inverso:", destinos);

// Filtrar destinos con más de 6 letras
let largos = destinos.filter(destino => destino.length > 6);
console.log("Destinos largos:", largos);

// Transformar a mayúsculas
let enMayusculas = destinos.map(destino => destino.toUpperCase());
console.log("En mayúsculas:", enMayusculas);
`,
      comments: [
        "Métodos mutables (push, pop, shift, unshift, sort, reverse)",
        "Métodos de búsqueda (includes, indexOf)",
        "Métodos inmutables y de transformación (filter, map)",
      ],
    },
    {
      title: "Funciones I: Function Declaration (o Function Statement)",
      codeJs: `
saludar(); // ✅ funciona

function saludar() {
  console.log("Hola desde una Function Declaration");
}
`,
      comments: ["Se puede llamar antes de declararse."],
    },
    {
      title: "Funciones II: Function Expression (expresión de función)",
      codeJs: `
const despedir = function () {
  console.log("Chau desde una Function Expression");
};

despedir(); // ✅
`,
      comments: [
        "Se guarda en una variable. No se puede usar antes de declararla.",
      ],
    },
    {
      title: "Funciones III: Arrow Function (función flecha)",
      codeJs: `
const calcularIva = (precio) => {
  return precio * 0.21;
};

console.log("IVA sobre $1000:", calcularIva(1000));
`,
      comments: [
        "Forma moderna, más compacta. No tiene su propio this",
        "También puede escribirse en una sola linea",
        "const calcularIvaRapido = precio => precio * 0.21;",
      ],
    },
  ];

  return { codeSnippets };
};

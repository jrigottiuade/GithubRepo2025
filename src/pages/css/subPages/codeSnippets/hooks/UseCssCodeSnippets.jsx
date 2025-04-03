import { comment } from "postcss";

export const UseCssCodeSnippets = () => {
  const codeSnippets = [
    {
      title: "Estilos en linea",
      codeHtml: `
<h1>Un encabezado sin formato</h1>
<h2 style="color: red;">Encabezado con formato CSS</h2>

<p>Párrafo sin formatear</p>
<p style="color: green;">Párrafo formateado</p>
`,
      comments: [
        "En el primer ejemplo una etiqueta h1 sin formato y un h2 con formato en linea, a través del uso del atributo style",
        "En el segundo ejemplo vemos una etiqueta p sin formato y luego otra con formato en linea",
      ],
    },
    {
      title: "Estilos en el head",
      codeHtml: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Primera Página</title>
  <style>
  h2 {
    color: red
  }
  </style>
</head>

<body>
<h1>Un encabezado sin formato</h1>
<h2>Encabezado con formato CSS</h2>
</body>
</html>`,
      comments: [
        "Dentro del head agregamos las etiquetas de apertura y cierre <style> y dentro escribimos las reglas CSS usando el selector h2 para aplicar estilo a la etiqueta h2",
      ],
    },
    {
      title: "Estilos en archivo externo",
      codeHtml: `
<!-- Documento HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Un encabezado sin formato</h1>
    <h2>Encabezado con formato CSS</h2>
</body>
</html>
`,
      codeCss: `/* Documento CSS con el nombre style.css*/

h2 {
  color: red;
}`,
      comments: [
        'En el fragmento HTML vemos la etiqueta <link rel="stylesheet" href="style.css"> invoca el documento CSS del segundo fragmento',
        "En el documento CSS usamos el selector h2 para indicar a que elemento del HTML vamos a aplicar la regla CSS",
      ],
    },
    {
      title: "Selectores de etiqueta",
      codeHtml: `
<!-- Documento HTML -->

<h2>Encabezado con formato CSS</h2>`,
      codeCss: `
/* Documento CSS */

h2 {
  color: red;
}`,
      comments: [
        "el nombre del selector es el de la etiqueta sin <>, se aplica directamente a todas las etiquetas de ese nombre",
      ],
    },
    {
      title: "Selectores de clase",
      codeHtml: `
<!-- Documento HTML -->

<p class="azul">párrafo en color azul</p>
<p>otro párrafo</p>
      `,
      codeCss: `
/* Documento CSS */

.azul{
         color: #0000FF;
}
`,
      comments: [
        "el nombre del selector comienza con . y se aplica con el atributo class (sin el . solo el nombre).",
      ],
    },
    {
      title: "Selectores de identificador",
      codeHtml: `
<!-- Documento HTML -->

<h2 id="rojo">Título</h2>
<h2>Otro título</h2>`,
      codeCss: `
/* Documento CSS */

#rojo{
  color: red;
}`,
      comments: [
        "el nombre del selector comienza con # y se aplica a la etiqueta con el atributo id (sin el # solo con el nombre).",
      ],
    },
    {
      title: "Selectores combinados",
      codeHtml: `
<!-- Documento HTML -->

<div>
  <p>Hola a <em>todos</em></p>
</div>
  <p>Chau a <em>todos</em></p>`,
      codeCss: `
/* Documento CSS */

div p em {
  color: red;
}`,
      comments: [],
    },
    {
      title: "Propiedades font para títulos y párrafos",
      codeHtml: `
<!-- Documento HTML -->

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ejemplo de Fuentes</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1 class="titulo">Bienvenidos a mi sitio</h1>
  <p class="descripcion">Este es un ejemplo de cómo aplicar reglas de fuente usando CSS externo.</p>
</body>
</html>
      `,
      codeCss: `
/* Documento CSS */

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.titulo {
  font-family: 'Georgia', serif;
  font-size: 32px;
  font-weight: bold;
}

.descripcion {
  font-style: italic;
  font-size: 18px;
  font-variant: small-caps;
}
      `,
      comments: [
        "font-family: define la familia tipográfica",
        "font-size: tamaño de la fuente",
        "font-weight: grosor (normal, bold, etc.)",
        "font-style: estilo (italic, oblique)",
        "font-variant: variantes tipográficas como small-caps",
      ],
    },
    {
      title: "Propiedades text para títulos y párrafos",
      codeHtml: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ejemplo de Estilos de Texto</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1 class="subrayado">Texto con subrayado</h1>
  <p class="tachado">Texto con línea tachada</p>
  <p class="sobrelinea">Texto con sobrelínea</p>
  <p class="sin-decoracion">Texto sin decoración</p>

  <h2 class="mayusculas">texto en mayúsculas</h2>
  <h2 class="minusculas">TEXTO EN MINÚSCULAS</h2>
  <h2 class="capitalizado">texto capitalizado por palabra</h2>

  <p class="alineado-izq">Texto alineado a la izquierda.</p>
  <p class="alineado-der">Texto alineado a la derecha.</p>
  <p class="centrado">Texto centrado.</p>
  <p class="justificado">Este es un párrafo justificado que ocupa varias líneas para poder observar cómo se alinea el texto a ambos márgenes, haciendo que luzca como un bloque.</p>

  <p class="indentado">Este texto tiene una tabulación en la primera línea. Si el texto excede el ancho del contenedor y se hace una segunda línea, no es afectada por este valor.</p>
</body>
</html>
`,
      codeCss: `
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.subrayado {
  text-decoration: underline;
  color: #1a73e8;
}

.tachado {
  text-decoration: line-through;
  color: #d93025;
}

.sobrelinea {
  text-decoration: overline;
  color: #188038;
}

.sin-decoracion {
  text-decoration: none;
  color: #5f6368;
}

.mayusculas {
  text-transform: uppercase;
  color: #e37400;
}

.minusculas {
  text-transform: lowercase;
  color: #6a1b9a;
}

.capitalizado {
  text-transform: capitalize;
  color: #c2185b;
}

.alineado-izq {
  text-align: left;
  color: #004d40;
}

.alineado-der {
  text-align: right;
  color: #0d47a1;
}

.centrado {
  text-align: center;
  color: #6d4c41;
}

.justificado {
  text-align: justify;
  color: #263238;
}

.indentado {
  text-indent: 40px;
  color: #37474f;
}
`,
      comments: [
        "text-decoration: Tipo de subrayado (underline, line-through, overline, none)",
        "text-transform: mayúsculas/minúsculas (uppercase, lowercase, capitalize, none)",
        "text-align: Alineación del texto (left, right, center, justify)",
        "text-indent: Tabulación de la primera línea. Si el texto excede el ancho del contenedor y se hace una segunda línea, no es afectada por este valor",
        "line-height: Interlineado (alto de cada línea de texto)",
        "color: Color de fuente (se puede aplicar por el nombre en inglés, por su valor hexadecimal o mediante la función rbg( ) de CSS [rgb(255, 0, 0)] )",
      ],
    },
    {
      title: "Propiedades de vínculos",
      codeHtml: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ejemplo de Enlaces</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Estilos de Enlaces</h1>

  <p><a href="https://www.google.com" class="enlace-basico">Enlace básico</a></p>
  <p><a href="https://www.uade.edu.ar" class="enlace-sin-subrayado">Sin subrayado</a></p>
  <p><a href="https://www.youtube.com/" class="enlace-negrita">Enlace en negrita</a></p>
  <p><a href="https://developer.mozilla.org" class="enlace-hover">Hover con cambio de color</a></p>
  <p><a href="https://chat.openai.com" class="enlace-externo" target="_blank">Abrir en nueva pestaña</a></p>
  <p><a href="https://jsnation.com/" class="enlace-visitado">Enlace visitado</a></p>
</body>
</html>`,
      codeCss: `
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.enlace-basico {
  color: blue;
  text-decoration: underline;
}

.enlace-sin-subrayado {
  color: darkred;
  text-decoration: none;
}

.enlace-negrita {
  color: teal;
  font-weight: bold;
}

.enlace-hover {
  color: darkorange;
  text-decoration: none;
}

.enlace-hover:hover {
  color: red;
  text-decoration: underline;
}

.enlace-externo {
  color: darkblue;
  text-decoration: underline;
}

.enlace-visitado:visited {
  color: purple;
}
`,
      comments: [
        "Los enlaces no heredan el color ni el subrayado del texto global: son azules y subrayados por defecto.",
        "Para cambiarlos, se debe aplicar una regla CSS que los seleccione directamente.",
        "Esa regla afectará al enlace en su estado normal, sin interacción del usuario.",
        "Es común aplicar estilos a los enlaces en su estado normal y también en :hover.",
        ":hover funciona en cualquier elemento con el mouse encima, no solo en enlaces (por ejemplo: p:hover).",
      ],
    },
    {
      title: "Propiedades de caja en un elemento de bloque",
      codeHtml: `    
<h2>Propiedades de caja en un elemento de bloque</h2>
<p class="bloque">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore impedit
  voluptate nostrum quis at dolorem, necessitatibus iste, eum maxime quae,
  eos quasi. Minus eos, delectus laboriosam culpa voluptate ducimus
  accusamus?
</p>`,
      codeCss: `
.bloque {
  background-color: lightblue;
  width: 300px;
  height: 100px;
  border: 2px solid blue;
  padding: 20px;
  margin: 20px;
}`,
      comments: [
        "El párrafo respeta width y height",
        "El borde, el padding y el margen se aplican en todas las direcciones",
        "Ocupa todo el ancho disponible si no se le asigna width",
      ],
    },
    {
      title: "Propiedades de caja en un elemento en línea",
      codeHtml: `
<h2>Propiedades de caja en un elemento de línea</h2>
<p>Este es un <span class="linea">span con estilo de caja</span> dentro de un párrafo.</p>
`,
      codeCss: `
.linea {
  background-color: lightgreen;
  width: 300px;      /* No tiene efecto */
  height: 100px;     /* No tiene efecto */
  border: 2px solid green;
  padding: 20px;     /* Solo se aplica horizontalmente */
  margin: 20px;      /* El margen vertical no se respeta */
}
`,
      comments: [
        "El span no respeta width y height (porque es en línea)",
        "border y padding solo afectan horizontalmente",
        "El margin superior e inferior no genera espacio vertical",
      ],
    },
    {
      title:
        "Propiedades de caja en un elemento en línea con display: inline-block",
      codeHtml: `
<h2>Propiedades de caja en un elemento de línea</h2>
<p>
  Este es un <span class="linea linea-bloque">span con estilo de caja</span> dentro de un párrafo.
</p>`,
      codeCss: `
linea {
  background-color: lightgreen;
  width: 300px;      /* No tiene efecto */
  height: 100px;     /* No tiene efecto */
  border: 2px solid green;
  padding: 20px;     /* Solo se aplica horizontalmente */
  margin: 20px;      /* El margen vertical no se respeta */
}

.linea-bloque {
  display: inline-block;
}
      `,
      comments: [
        "Si agregamos la clase linea-bloque con la propiedad inline-block entonces el elemento en línea se convierte en bloque",
      ],
    },
    {
      title: "box-sizing: content-box (por defecto)",
      codeHtml: `
<h2>box-sizing: content-box (valor por defecto)</h2>
<div class="caja content-box">Caja con content-box</div>
`,
      codeCss: `
.caja {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid blue;
  background-color: lightblue;
  margin-bottom: 20px;
  color: #000;
}

/* Por defecto no es necesario, pero se puede poner explícito */
.content-box {
  box-sizing: content-box;
}
`,
      comments: [
        "width total = 200 + (20x2 padding) + (5x2 border) = 250px",
        "height total = 100 + (20x2 padding) + (5x2 border) = 150px",
      ],
    },
    {
      title: "box-sizing: border-box",
      codeHtml: `
<h2>box-sizing: border-box</h2>
<div class="caja border-box">Caja con border-box</div>
`,
      codeCss: `
.caja {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid blue;
  background-color: lightblue;
  margin-bottom: 20px;
  color: #000;
}

/* Por defecto no es necesario, pero se puede poner explícito */
.border-box {
  box-sizing: border-box;
}
`,
      comments: [
        "width total = 200px exactos, ya que el padding y border están incluidos",
        "Visualmente más compacta, pero con mismo contenido visible.",
      ],
    },
  ];

  return { codeSnippets };
};

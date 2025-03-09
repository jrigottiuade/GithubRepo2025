export const useHtmlCodeSnippets = () => {
  const codeSnippets = [
    {
      title: "Estructura HTML",
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Primera Página</title>
</head>
<body>
  <h1>¡Hola Mundo!</h1>
</body>
</html>
`,
      comments: [
        "<!DOCTYPE html>: Indica que usamos HTML5.",
        '<html lang="en">: Define el idioma (se puede cambiar a "es" para español).',
        "<meta>: Configura la codificación y viewport para dispositivos móviles.",
        "<title>: Define el título que aparece en la pestaña del navegador.",
      ],
    },
    {
      title: "Encabezados",
      code: `
<h1>Este es un título principal</h1>
<h2>Subtítulo</h2>
<h3>Otro nivel de título</h3>
<h4>Más pequeño</h4>
<h5>Aún más pequeño</h5>
<h6>El más pequeño</h6>
`,
      comments: [
        "<h1> a <h6>: Representan distintos niveles de encabezados en HTML.",
        "<h1> es el más grande y suele ser el título principal.",
        "<h6> es el más pequeño, usado para subtítulos de menor importancia.",
      ],
    },

    {
      title: "Párrafos",
      code: `
<p>Este es un párrafo de texto. Aquí puedes escribir contenido para tu página.</p>
<p>Los párrafos ayudan a estructurar el contenido de manera clara.</p>
`,
      comments: [
        "Se usa <p> para definir textos con saltos de línea automáticos.",
        "Permite mejorar la legibilidad de la página.",
      ],
    },
    {
      title: "Enlaces",
      code: `<a href="https://www.google.com" target="_blank">Ir a Google</a>
`,
      comments: [
        'href="URL" → Define la dirección a la que apunta el enlace.',
        'target="_blank" → Hace que el enlace se abra en una nueva pestaña.',
      ],
    },
    {
      title: "Imagen Básica",
      code: `<img src="https://via.placeholder.com/150" alt="Imagen de ejemplo">
`,
      comments: [
        "La forma más sencilla de insertar una imagen en HTML.",
        'src="URL" → Define la ubicación de la imagen.',
        'alt="Texto descriptivo" → Importante para accesibilidad y SEO.',
      ],
    },
    {
      title: "Imagen con Pie de Foto",
      code: `<figure>
  <img src="imagen.jpg" alt="Descripción de la imagen">
  <figcaption>Esta es una imagen con un pie de foto.</figcaption>
</figure>
`,
      comments: [
        "Usado para imágenes con descripción o contenido relevante.",
        "<figure> → Agrupa la imagen y su descripción.",
        "<figcaption> → Define el texto descriptivo.",
        "Más semántico que solo usar <p> debajo de <img>."
      ],
    },
    {
      title: "Imágenes Responsivas",
      code: `<img 
  src="imagen-pequena.jpg" 
  srcset="imagen-grande.jpg 1200w, imagen-mediana.jpg 800w, imagen-pequena.jpg 400w" 
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Imagen adaptable">
`,
      comments: [
        "Muestra diferentes imágenes según el tamaño de la pantalla.",
        'srcset="imagen.jpg 1200w, otra.jpg 800w" → Define imágenes según el tamaño de pantalla.',
        'sizes="(max-width: 600px) 100vw, 50vw" → Usa la imagen según el ancho disponible.'
      ],
    },
    {
      title: "Carga Diferida de Imágenes",
      code: `<img src="imagen.jpg" alt="Cargando imagen de forma diferida" loading="lazy">

`,
      comments: [
        "Mejora el rendimiento al cargar imágenes solo cuando aparecen en pantalla.",
        'loading="lazy" → Retrasa la carga hasta que la imagen esté cerca de ser vista.'
      ],
    },
    {
      title: "Campos de Entrada",
      code: `<input type="email" placeholder="Correo electrónico">
<input type="password" placeholder="Contraseña">
<input type="checkbox"> Acepto los términos
<input type="radio" name="gender" value="male"> Hombre
<input type="radio" name="gender" value="female"> Mujer
`,
      comments: [
        'type="text" → Campo de texto.',
        'placeholder="..." → Texto de ayuda dentro del campo.',
      ],
    },
    {
      title: "Menú Desplegable",
      code: `<select>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>
`,
      comments: [
        "<option> → Define las opciones del menú.",
        'value="..." → Valor que se enviará al formulario.'
      ],
    },
    {
      title: "Texto en Línea span",
      code: `<p>Este es un <span style="color: red;">texto en rojo</span> dentro de un párrafo.</p>
`,
      comments: [
        "<span> no agrega saltos de línea, solo modifica partes del texto."
      ],
    },
    {
      title: "Negrita y Cursiva",
      code: `<p>Este es un <strong>texto importante</strong> y este es un <em>texto enfatizado</em>.</p>
`,
      comments: [
        "Para resaltar el texto semánticamente",
        "<strong> → Texto en negrita con importancia semántica.",
        "<em> → Texto en cursiva con énfasis."
      ],
    },
    {
      title: "Líneas y Saltos de Línea",
      code: `<p>Primer párrafo.</p>
<hr>
<p>Segundo párrafo separado por una línea.</p>
<p>Texto con <br> un salto de línea.</p>
`,
      comments: [
        "Controlan el espaciado en la página.",
        "<hr> → Línea horizontal divisoria.",
        "<br> → Salto de línea sin crear un nuevo párrafo."
      ],
    },
    {
      title: "Menú de Navegación",
      code: `<nav>
  <ul>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="about.html">Acerca de</a></li>
    <li><a href="contact.html">Contacto</a></li>
  </ul>
</nav>
`,
      comments: [
        " Define un área de navegación.",
        "<nav> agrupa enlaces de navegación.",
        "Se usa comúnmente en menús de sitios web."
      ],
    },
    {
      title: "Pie de Página",
      code: `<footer>
  <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
`,
      comments: [
        "Define información del pie de página.",
        "<footer> se usa en la parte inferior del sitio.",
        "Puede contener créditos, enlaces o información legal."
      ],
    },
    {
      title: "Lista Desordenada",
      code: `<ul>
  <li>Manzana</li>
  <li>Banana</li>
  <li>Naranja</li>
</ul>
`,
      comments: [
        "Crea una lista con viñetas (puntos).",
        "<ul> → Define una lista desordenada.",
        "<li> → Cada elemento de la lista.",
        "Los navegadores muestran puntos (bullets) por defecto.",
        "list-style-type: none; → Elimina los puntos de la lista."
      ],
    },
    {
      title: "Lista Ordenada",
      code: `<ol>
  <li>Precalentar el horno.</li>
  <li>Mezclar los ingredientes.</li>
  <li>Hornear por 30 minutos.</li>
</ol>
`,
      comments: [
        "Crea una lista numerada.",
        "<ol> → Define una lista ordenada (números).",
        "<li> → Cada elemento es un paso o ítem numerado."
      ],
    },
    {
      title: "Estructura Básica de un Formulario",
      code: `<form action="/submit" method="POST">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Correo Electrónico:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Enviar</button>
</form>
`,
      comments: [
        "Un formulario con campos de texto y un botón de envío.",
        "<form> → Contenedor del formulario.",
        'action="/submit" → URL a la que se enviarán los datos.',
        'method="POST" → Método de envío (también puede ser GET).',
        '<input type="text"> → Campo de texto.',
        '<input type="email"> → Campo exclusivo para correos electrónicos.',
        'required → Campo obligatorio.',
        '<button type="submit"> → Botón para enviar el formulario.'
      ],
    },
    {
      title: "",
      code: ``,
      comments: [],
    },
  ];

  return { codeSnippets };
};

import React from "react";

const HandsOn1Step2 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Crear el index.html</h1>
      <p>
        Ahora vamos a crear nuestro archivo index.html, escribir la estructura
        básica de HTML 5 para luego configurar los metadatos en el head y
        agregar nuestro primer título en el body. Finalmente utilizaremos el Plugin Live
        Server para visualizar nuestra página en el navegador.
      </p>
      <ul className="list-decimal list-inside space-y-1 pt-10">
        <li>Crear en tu PC la carpeta Html Hands On 1</li>
        <li>
          Desde el VSCode, ir a Archivo, Abrir carpeta y selecciona la carpeta
          creada en el punto 1
        </li>
        <li>
          Desde el explorador, hace click en el icono correspondiente y crea el
          archivo "index.html"
        </li>
        <li>
          Desde la ventana del archivo creado escribi ! y presiona la tecla TAB,
          veras que se autocompleta la estructua básica de HTML 5
        </li>
        <li>
          En la linea 2, selecciona el idioma español cambiando "en" por "es"
        </li>
        <li>
          En la linea 6, cambia el título de tu página, reemplazando Document de
          la etiqueta title por HTML Hands On 1 o lo que vos elijas
        </li>
        <li>Presiona CTRL + S para guardar</li>
        <li>
          Dentro del body, crea una etiqueta h1 y dentro escribi Agencia de
          Viajes o lo que vos elijas
        </li>
        <li>
          Desde la barra de tareas inferior del VSCode presiona en el ìcono Live
          Server para visualizar la web en tu navegador predeterminado
        </li>
      </ul>
      <img
        className="pt-3"
        src="images/html_hands_on_1/html_hands_on_1_img_2.jpg"
        alt=""
      />
      <img
        className="pt-3"
        src="images/html_hands_on_1/html_hands_on_1_img_3.jpg"
        alt=""
      />
    </div>
  );
};

export default HandsOn1Step2;

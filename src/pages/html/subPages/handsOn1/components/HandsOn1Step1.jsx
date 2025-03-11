import React from "react";

const HandsOn1Step1 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Preparar el Visual Studio Code</h1>
      <p>Vamos a prepar nuestro IDE Visual Studio Code, agregando algunos Plugins</p>
      <ul className="list-decimal list-inside space-y-1 pt-10">
        <li>Abrir Visual Studio Code</li>
        <li>
          Si necesitas cambiar el idioma a español, presiona CTRL + SHIFT + P.
          Desde el prompt escribi "Configure Language Display" y selecciona el
          idioma.
        </li>
        <li>
          Instalar las extensiones recomendadas: Live Server y Prettier como se
          explica en la sección VSCode - Plugins
        </li>
        <li>Validar la instalación como muestra la figura</li>
      </ul>
      <img
        className="max-w-[400px] pt-5"
        src="images/html_hands_on_1/html_hands_on_1_img_1.jpg"
        alt=""
      />
    </div>
  );
};

export default HandsOn1Step1;

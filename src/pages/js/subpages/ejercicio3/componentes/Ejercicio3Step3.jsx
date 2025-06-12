import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const Ejercicio3Step3 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Parte 3: Trabajamos con el local storage</h1>

      <p>
        Seguí los siguientes pasos:
      </p>


      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Leemos el local storage, si no encontramos la clave paquetes_favoritos, entonces la creamos</li>

        <DisplayCode code={`
// 1. Intentamos recuperar los favoritos guardados o arrancamos con uno vacío
let paquetes_favoritos = JSON.parse(localStorage.getItem("paquetes_favoritos")) || [];
        `} language="js" />

        <li>Creamos la función esFavorito que retorna true si encuentra el id del paquete en el local storage o false si no lo encuentra</li>
        <DisplayCode code={`
// 2. Esta función evalúa si el id pasado como argumento esta o no en el local storage
function esFavorito(idPaquete) {
    if (paquetes_favoritos.includes(idPaquete)) {
        console.log("Es favorito")
        return true
    } else {
        console.log("No Es favorito")
        return false
    }
}
        `} language="js" />

        <li>Creamos la función handleFavorito que actualiza el estado en el local storage agregando o quitando el id según haga click en agregar o quitar de favoritos</li>
        <DisplayCode code={`
// 3. Creamos la función que actualiza el local storage, agregando o quitando el id en función del clik sobre el button
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
        `} language="js" />
      </ul>


    </div>
  );
};

export default Ejercicio3Step3;

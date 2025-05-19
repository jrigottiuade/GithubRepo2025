import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const Ejercicio1Step3 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Parte 2: Funciones</h1>

      <p>
        Tomando como referencia el array y el código generado en la parte 1,
        vamos a generar funciones de acuerdo a las siguientes consignas:
      </p>

      <p className="title-h2-underline pt-5">Consgina 1</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Crear una función llamada mostrarDestinos()</li>
        <li>Esta función no recibe ningún argumento</li>
        <li>
          Dentro de la función usar un ciclo a tu preferencia, de manera que
          itere el array y muestre los elementos en consola
        </li>
        <li>Invocar a la función y validar que cumpla la consigna</li>
      </ul>

      <p className="title-h2-underline pt-5">Consgina 2</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>Crear una función llamada iterarArray(paquetes)</li>
        <li>Esta función recibe como argumento el array paquetes a iterar</li>
        <li>
          Dentro de la función usar un ciclo a tu preferencia, de manera que
          itere el array y muestre los elementos en consola
        </li>
        <li>Invocar a la función y validar que cumpla la consigna</li>
      </ul>

      <p className="title-h2-underline pt-5">Consgina 3</p>
      <ul className="list-decimal list-inside space-y-2 text-gray-800">
        <li>
          Crear una función llamada insertarDestino(paquetes, destino, posición)
        </li>
        <li>Esta función recibe 3 argumentos</li>
        <li>Primer argumento: el array que se quiere modificar</li>
        <li>Segundo argumento: el destino a agregar</li>
        <li>
          Tercer argumento: la posición donde se quiere agregar el destino a
          través del índice
        </li>
        <li>
          Si la función no recibiera el tercer argumento, asumir por defecto que
          es al final
        </li>
        <li>
          La función deberá retornar true si el destino fue insertado
          exitosamente
        </li>
        <li>Invocar a la función y validar que cumpla la consigna</li>
      </ul>
    </div>
  );
};

export default Ejercicio1Step3;

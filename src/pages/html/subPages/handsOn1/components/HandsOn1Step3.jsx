import React from "react";
import DisplayCode from "../../../../../components/code/DisplayCode";

const HandsOn1Step3 = () => {
  return (
    <div>
      <h1 className="title-h1-underline">Generar el body</h1>
      <p>
        Ahora vamos a crear el contenido de nuestra página utilizando etiquetas
        semanticas. Comenzaremos por el header, que incluira el nav, y luego las
        secciones como se describen. Finalmente crearemos el footer.
      </p>
      <p>Podes copiar y pegar el código o generarlo vos mismo.</p>
      <ul className="list-decimal list-inside space-y-3 pt-10">
        <li>
          Creamos el header y nav
          <DisplayCode
            code={`    <header>
        <nav>
            <h1>Explora el Mundo</h1>
            <ul>
                <li><a href="#destinos">Destinos</a></li>
                <li><a href="#paquetes">Paquetes</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>`}
          />
        </li>
        <li>
          Creamos una section para los Destinos
          <DisplayCode
            code={`    <section id="destinos">
        <h2>Destinos Populares</h2>
        <div>
            <p><strong>París, Francia:</strong> Descubre la ciudad del amor.</p>
            <p><strong>Roma, Italia:</strong> Historia y cultura en cada esquina.</p>
            <p><strong>Maldivas:</strong> Playas paradisíacas para relajarte.</p>
        </div>
    </section>`}
          />
        </li>
        <li>
          Otra section para los Paquetes
          <DisplayCode
            code={`    <section id="paquetes">
        <h2>Paquetes Turísticos</h2>
        <div>
            <p><strong>Europa Express:</strong> 10 días recorriendo las principales ciudades europeas.</p>
            <p><strong>Caribe All-Inclusive:</strong> 7 días en un resort con todo incluido.</p>
            <p><strong>Aventura en Patagonia:</strong> 5 días explorando la naturaleza.</p>
        </div>
    </section>`}
          />
        </li>
        <li>
          Continuamos con la section para los Testimonios
          <DisplayCode
            code={`    <section id="testimonios">
        <h2>Testimonios de Clientes</h2>
        <div>
            <p><strong>Laura G.:</strong> "¡La mejor experiencia de mi vida! Todo estuvo perfectamente organizado."</p>
            <p><strong>Carlos M.:</strong> "Gracias a la agencia pude cumplir mi sueño de viajar a Europa."</p>
        </div>
    </section>`}
          />
        </li>
        <li>
          Una ultima section para Contacto
          <DisplayCode
            code={`    <section id="contacto">
        <h2>Contacto</h2>
        <p>Déjanos un mensaje y te ayudaremos a planear tu próximo viaje.</p>
    </section>`}
          />
        </li>
        <li>
          Finalmente el footer
          <DisplayCode
            code={`    <footer>
        <p>&copy; 2025 - Agencia de Viajes "Explora el Mundo"</p>
    </footer>`}
          />
        </li>
        <li>Como el Live Server sigue corriendo, veremos que a medida que efectuamos cambios en nuestro código HTML los mismos se replican en el navegador. Tu código reflejado en el navegador debe lucir asi:</li>
      </ul>
      <img className="pt-5" src="images/html_hands_on_1/html_hands_on_1_img_4.jpg" alt="" />
    </div>
  );
};

export default HandsOn1Step3;

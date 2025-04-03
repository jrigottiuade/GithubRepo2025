import React, { useState } from "react";
import { HtmlMiscelaneasContext } from "../context/HtmlMiscelaneasContext";

const HtmlMiscelaneasProvider = ({ children }) => {

    const linksMiscelaneas = [
        {
            id: "1",
            category: "Etiquetas HTML y su semántica",
            title: "MDN Web Docs (Mozilla) – Referencia de Elementos HTML",
            link: "https://developer.mozilla.org/es/docs/Web/HTML/Element",
            commets: [
                "La referencia más detallada de todos los elementos HTML.",
                "Proporciona descripciones, ejemplos y compatibilidad con navegadores."
            ]
        },
        {
            id: "2",
            category: "Etiquetas HTML y su semántica",
            title: "W3Schools – Elementos HTML",
            link: "https://www.w3schools.com/tags/default.asp",
            commets: [
                "Ideal para principiantes, con ejemplos prácticos.",
                "Incluye un editor en vivo para probar etiquetas."
            ]
        },
        {
            id: "3",
            category: "Etiquetas HTML y su semántica",
            title: "Especificación de HTML5 – WHATWG",
            link: "https://html.spec.whatwg.org/multipage/",
            commets: [
                "La documentación oficial de HTML5.",
                "Mejor para desarrolladores avanzados que buscan detalles técnicos."
            ]
        },
        {
            id: "4",
            category: "Etiquetas HTML y su semántica",
            title: "Can I Use – Compatibilidad de HTML y CSS en navegadores",
            link: "https://caniuse.com/",
            commets: ["Muestra qué elementos y atributos HTML son compatibles con cada navegador."]
        },
        {
            id: "5",
            category: "Etiquetas HTML y su semántica",
            title: "HTML Reference de HTML.com",
            link: "https://html.com/tags/",
            commets: ["Lista de etiquetas HTML con descripciones breves y ejemplos."]
        },
        {
            id: "5",
            category: "Challenges",
            title: "Frontend Mentor",
            link: "https://www.frontendmentor.io/challenges",
            commets: ["Adquirí habilidades realizado estos desafíos."]
        },
        {
            id: "6",
            category: "Playgrounds",
            title: "JSFiddle",
            link: "https://jsfiddle.net/",
            commets: ["Permite trabajar con HTML, CSS y JavaScript, con opción de agregar bibliotecas externas."]
        },
        {
            id: "7",
            category: "Playgrounds",
            title: "Codepen",
            link: "https://codepen.io/",
            commets: ["Popular para prototipos front-end con una comunidad activa."]
        },
        {
            id: "8",
            category: "Playgrounds",
            title: "JSBin",
            link: "https://jsbin.com",
            commets: ["Similar a JSFiddle, permite probar JavaScript y ver resultados en vivo."]
        },
        {
            id: "9",
            category: "Playgrounds",
            title: "Liveweave",
            link: "https://liveweave.com/",
            commets: ["Editor en línea con soporte para Bootstrap y otras librerías."]
        },
        {
            id: "10",
            category: "Playgrounds",
            title: "Playcode",
            link: "https://playcode.io",
            commets: ["Editor rápido para JavaScript, con soporte para Vue, React, y más."]
        },
        {
            id: "11",
            category: "Playgrounds",
            title: "Codesandbox",
            link: "https://codesandbox.io/",
            commets: ["Ideal para React, Vue, Angular y otras librerías con entorno de desarrollo completo."]
        },
        {
            id: "12",
            category: "Playgrounds",
            title: "Stackblitz",
            link: "https://stackblitz.com/",
            commets: ["Similar a CodeSandbox, permite desarrollar apps en Angular, React, Vue y más."]
        },
        {
            id: "13",
            category: "Playgrounds",
            title: "Codeshare",
            link: "https://codeshare.io/",
            commets: ["Editor en línea para compartir código en tiempo real, ideal para pair programming."]
        },
        {
            id: "14",
            category: "Playgrounds",
            title: "Floobits",
            link: "https://codeshare.io/",
            commets: ["Integración con editores como VS Code para colaboración en vivo."]
        }
    ]

    const [linksMiscelaneasFiltered, setLinksMiscelaneasFiltered] = useState(linksMiscelaneas);

    // Obtener categorías únicas
    const uniqueCategories = [
        ...new Set(linksMiscelaneas.map((item) => item.category)),
    ];

    return (
        <HtmlMiscelaneasContext.Provider value={{ uniqueCategories, linksMiscelaneas, linksMiscelaneasFiltered, setLinksMiscelaneasFiltered }}>
            {children}
        </HtmlMiscelaneasContext.Provider>
    );
};

export default HtmlMiscelaneasProvider;
const content = document.getElementById("content");

const pages = {
  inicio: `
    <h2>Bienvenido al blog de Estructura de Datos y Algoritmos</h2>
    <p>Selecciona un tema en la barra de navegación para comenzar.</p>
  `,
  recurrencia: `
    <h2>Recurrencia y Árboles</h2>
    <p>La recurrencia es un concepto esencial en programación...</p>
  `,
  fundamentos: `
    <h2>Fundamentos de Programación</h2>
    <p>Aprender los fundamentos de programación es clave para todo desarrollador...</p>
  `,
  arreglos: `
    <h2>Arreglos</h2>
    <p>Los arreglos son estructuras lineales que permiten almacenar múltiples elementos...</p>
  `,
  poo: `
    <h2>Programación Orientada a Objetos</h2>
    <p>La POO permite modelar el mundo real mediante clases y objetos...</p>
  `,
  microeconomia: `
    <h2>Microeconomía</h2>
    <p>La microeconomía estudia el comportamiento de los agentes individuales...</p>
  `
};

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    content.innerHTML = pages[page];
  });
});
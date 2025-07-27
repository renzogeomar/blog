

const pages = {
  inicio: `
    <h2>Bienvenido al blog de Estructura de Datos y Algoritmos</h2>
    <p>Selecciona un tema en la barra de navegación para comenzar.</p>
  `,
  recurrencia: `
    <h2>Recurrencia</h2>
    <p>La recursividad permite resolver problemas complejos al dividirlos en versiones más simples...</p>
  `,
  abb: `
    <h2>Árbol Binario de Búsqueda (ABB)</h2>
    <p>Un ABB es un árbol donde los valores menores están a la izquierda y los mayores a la derecha...</p>
  `,
  avl: `
    <h2>Árbol AVL</h2>
    <p>Es un ABB balanceado que realiza rotaciones para mantener el equilibrio...</p>
  `,
  splay: `
    <h2>Splay Tree</h2>
    <p>Árbol autoajustable que mueve nodos recientemente accedidos a la raíz...</p>
  `,
  b: `
    <h2>Árbol B</h2>
    <p>Estructura multi-hijos usada en sistemas de almacenamiento externo...</p>
  `,
  bplus: `
    <h2>Árbol B+</h2>
    <p>Extensión del árbol B donde solo las hojas almacenan los datos reales...</p>
  `,
  bstar: `
    <h2>Árbol B*</h2>
    <p>Optimización del árbol B+ que redistribuye nodos antes de dividir...</p>
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


const content = document.getElementById("content");
document.querySelectorAll(".navbar a[data-page]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    content.innerHTML = pages[page];
  });
});
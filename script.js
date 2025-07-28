

const pages = {
  inicio: `
    <h2>Bienvenido al blog de Estructura de Datos y Algoritmos</h2>
    <p>Selecciona un tema en la barra de navegación para comenzar.</p>
  `,
  recurrencia: `
  <h2>📘 Recurrencia</h2>

  <p>
    La <strong>recurrencia</strong> es una técnica utilizada en programación para resolver problemas dividiéndolos en subproblemas más pequeños del mismo tipo.
    Se basa en el principio de la <strong>división y conquista</strong>, y se implementa principalmente mediante funciones recursivas.
  </p>

  <h3>🧠 ¿Qué es una función recursiva?</h3>
  <p>
    Una función recursiva es aquella que se llama a sí misma durante su ejecución. 
    Para que la recursión no se vuelva infinita, debe tener una <strong>condición base</strong> que detenga las llamadas.
  </p>

  <h4>Ejemplo clásico: Factorial</h4>
  <pre><code class="language-js">
  function factorial(n) {
    if (n === 0) return 1;       // Caso base
    return n * factorial(n - 1); // Llamada recursiva
  }
  console.log(factorial(5)); // 120
  </code></pre>

  <h3>📐 Fórmulas de recurrencia</h3>
  <p>
    En análisis de algoritmos, la recurrencia permite expresar el tiempo de ejecución de algoritmos recursivos. 
    Un ejemplo típico es el caso del algoritmo de ordenamiento MergeSort:
  </p>
  <p>
    <code>T(n) = 2T(n/2) + O(n)</code>  
  </p>
  <p>
    Esta fórmula representa que dividimos el problema en 2 subproblemas de tamaño <code>n/2</code> (cada uno toma T(n/2)) 
    y luego combinamos los resultados en tiempo O(n).
  </p>

  <h3>📊 Método para resolver recurrencias</h3>
  <ul>
    <li><strong>Expansión o Sustitución:</strong> Expandes la fórmula varias veces hasta detectar un patrón.</li>
    <li><strong>Árbol de recurrencia:</strong> Dibujas el árbol de llamadas recursivas y sumas los costos por nivel.</li>
    <li><strong>Teorema Maestro:</strong> Reglas que permiten resolver muchas recurrencias comunes en algoritmos "divide y vencerás".</li>
  </ul>

  <h3>📌 Teorema Maestro</h3>
  <p>
    Permite resolver recurrencias de la forma:
    <code>T(n) = aT(n/b) + O(n^d)</code>
  </p>
  <p>
    - Si <code>a &lt; b^d</code> → <code>T(n) = O(n^d)</code><br>
    - Si <code>a = b^d</code> → <code>T(n) = O(n^d log n)</code><br>
    - Si <code>a &gt; b^d</code> → <code>T(n) = O(n^{log_b a})</code>
  </p>

  <h3>🌳 Relación con estructuras de árboles</h3>
  <p>
    La recursividad se usa naturalmente en estructuras jerárquicas como los <strong>árboles binarios</strong>.
    Cada subárbol puede ser considerado como un problema más pequeño del mismo tipo.
  </p>

  <h4>Ejemplo: Recorrido en preorden</h4>
  <pre><code class="language-js">
  function preorden(nodo) {
    if (!nodo) return;
    console.log(nodo.valor);
    preorden(nodo.izquierda);
    preorden(nodo.derecha);
  }
  </code></pre>

  <h3>📌 Ejemplo visual de recursión</h3>
  <pre>
            fibonacci(4)
             /        \\
        fib(3)         fib(2)
        /   \\         /   \\
     fib(2) fib(1)  fib(1) fib(0)
     /    \\
  fib(1) fib(0)
  </pre>
  <p>
    Como puedes ver, un mismo subproblema (fib(1)) se repite muchas veces. Por eso, en estos casos es mejor usar <strong>memorización</strong> o programación dinámica.
  </p>

  <h3>🧮 Importancia en algoritmos</h3>
  <p>La recursividad es clave para:</p>
  <ul>
    <li>Backtracking (Sudoku, N-Queens)</li>
    <li>Dividir y conquistar (MergeSort, QuickSort)</li>
    <li>Procesar estructuras jerárquicas (árboles, grafos)</li>
    <li>Algoritmos recursivos como Fibonacci, Torres de Hanoi, etc.</li>
  </ul>

  <h3>✅ Ventajas y desventajas</h3>
  <ul>
    <li><strong>Ventajas:</strong> Código más limpio, natural para problemas jerárquicos.</li>
    <li><strong>Desventajas:</strong> Consumo de memoria (stack), puede causar desbordamiento si no se controla bien.</li>
  </ul>

  <p style="margin-top: 20px;">
    La recursividad es una herramienta poderosa que, bien aplicada, permite resolver problemas de forma elegante. 
    Dominarla es clave en la programación avanzada y estructuras de datos.
  </p>
`,
  abb: `
  <h2>🌳 Árbol Binario de Búsqueda (ABB / BST)</h2>

  <p>
    Un <strong>Árbol Binario de Búsqueda (ABB)</strong> es una estructura de datos jerárquica donde cada nodo puede tener como máximo dos hijos: 
    uno izquierdo y uno derecho. Es un tipo especial de árbol binario que mantiene sus elementos ordenados de forma que:
  </p>

  <ul>
    <li>Todo valor en el subárbol izquierdo es <strong>menor</strong> que el valor del nodo.</li>
    <li>Todo valor en el subárbol derecho es <strong>mayor</strong> que el valor del nodo.</li>
  </ul>

  <h3>🧱 Propiedades</h3>
  <ul>
    <li>Los valores están organizados para permitir búsquedas eficientes.</li>
    <li>Puede estar balanceado o desbalanceado (un árbol desbalanceado se comporta como una lista).</li>
    <li>Altura ideal: <code>O(log n)</code> en el mejor caso.</li>
  </ul>

  <h3>🔍 Operaciones básicas</h3>

  <h4>1. Inserción</h4>
  <p>
    Se compara el valor a insertar con el nodo actual:
    <ul>
      <li>Si es menor, se va al subárbol izquierdo.</li>
      <li>Si es mayor, al derecho.</li>
    </ul>
    El proceso es recursivo hasta encontrar una posición nula donde se inserta.
  </p>

  <pre><code class="language-js">
function insertar(nodo, valor) {
  if (!nodo) return { valor, izquierda: null, derecha: null };
  if (valor < nodo.valor) {
    nodo.izquierda = insertar(nodo.izquierda, valor);
  } else {
    nodo.derecha = insertar(nodo.derecha, valor);
  }
  return nodo;
}
  </code></pre>

  <h5>🌱 Ejemplo visual de inserción</h5>
  <p>Insertar el valor <strong>65</strong> en el siguiente árbol:</p>
  <pre>
         50
        /  \\
      30    70
     / \\   / 
   20  40  60
  </pre>
  <p>→ 65 es mayor que 50 → mayor que 70 ❌ → menor que 70 ✅ → mayor que 60 → se inserta a la derecha de 60:</p>
  <pre>
         50
        /  \\
      30    70
     / \\   / \\
   20  40  60  80
               \\
                65
  </pre>

  <h4>2. Búsqueda</h4>
  <p>Similar a la inserción, pero se detiene cuando encuentra el valor o llega a un nodo nulo.</p>

  <pre><code class="language-js">
function buscar(nodo, valor) {
  if (!nodo || nodo.valor === valor) return nodo;
  if (valor < nodo.valor) return buscar(nodo.izquierda, valor);
  return buscar(nodo.derecha, valor);
}
  </code></pre>

  <h4>3. Eliminación</h4>
  <p>Existen tres casos:</p>
  <ul>
    <li><strong>1. Nodo sin hijos:</strong> se elimina directamente.</li>
    <li><strong>2. Nodo con un solo hijo:</strong> se reemplaza con su hijo.</li>
    <li><strong>3. Nodo con dos hijos:</strong> se reemplaza con su <em>sucesor inorden</em> (el menor del subárbol derecho).</li>
  </ul>

  <h5>🪓 Ejemplo visual de eliminación</h5>
  <p>Eliminar el nodo <strong>50</strong> en el árbol siguiente:</p>
  <pre>
         50
        /  \\
      30    70
     / \\   / \\
   20  40  60 80
  </pre>
  <p>
    El nodo 50 tiene dos hijos. Buscamos su sucesor inorden: el menor valor del subárbol derecho → <strong>60</strong>.  
    Reemplazamos 50 por 60, y eliminamos 60 del subárbol derecho:
  </p>
  <pre>
         60
        /  \\
      30    70
     / \\     \\
   20  40     80
  </pre>

  <h3>🌀 Recorridos</h3>
  <ul>
    <li><strong>Inorden (Izq-Raíz-Der):</strong> entrega los valores ordenados.</li>
    <li><strong>Preorden (Raíz-Izq-Der):</strong> útil para copiar el árbol.</li>
    <li><strong>Postorden (Izq-Der-Raíz):</strong> usado en eliminación de nodos.</li>
  </ul>

  <h3>⏱️ Complejidad</h3>
  <table border="1" cellpadding="5">
    <tr>
      <th>Operación</th>
      <th>Mejor caso</th>
      <th>Peor caso (desbalanceado)</th>
    </tr>
    <tr>
      <td>Inserción</td>
      <td>O(log n)</td>
      <td>O(n)</td>
    </tr>
    <tr>
      <td>Búsqueda</td>
      <td>O(log n)</td>
      <td>O(n)</td>
    </tr>
    <tr>
      <td>Eliminación</td>
      <td>O(log n)</td>
      <td>O(n)</td>
    </tr>
  </table>

  <h3>✅ Aplicaciones</h3>
  <ul>
    <li>Gestión de bases de datos en memoria.</li>
    <li>Índices de búsqueda rápida.</li>
    <li>Sistemas donde se requiera mantener el orden.</li>
  </ul>

  <h3>🧠 Conclusión</h3>
  <p>
    El Árbol Binario de Búsqueda es una de las estructuras más importantes en programación. 
    Es la base de muchas estructuras avanzadas (como AVL, Splay y Red-Black Tree), y es fundamental comprender su funcionamiento 
    para dominar algoritmos eficientes en estructuras jerárquicas.
  </p>
  `,
  avl: `
  <h2>🌲 Árbol AVL (Adelson-Velsky y Landis)</h2>

  <p>
    Un <strong>Árbol AVL</strong> es un <em>árbol binario de búsqueda autobalanceado</em>. 
    Fue el primer tipo de árbol balanceado propuesto, por Adelson-Velsky y Landis en 1962.
    La principal propiedad del árbol AVL es que mantiene su <strong>balance</strong> en cada inserción o eliminación,
    garantizando una altura logarítmica.
  </p>

  <h3>📏 Factor de balance</h3>
  <p>
    Se define como la diferencia de alturas entre el subárbol izquierdo y el derecho:
    <code>FB = altura(izq) - altura(der)</code>.
    Un nodo está <strong>balanceado</strong> si su FB ∈ { -1, 0, 1 }.
  </p>

  <h3>⚙️ Operaciones principales</h3>

  <h4>1. Inserción</h4>
  <p>
    Igual que en un ABB, pero después de insertar, se actualizan los factores de balance
    desde la hoja hacia arriba. Si algún nodo queda desbalanceado (FB fuera del rango), se realiza una <strong>rotación</strong>.
  </p>

  <h5>🌀 Tipos de rotaciones</h5>
  <ul>
    <li><strong>Rotación simple a la derecha:</strong> desbalance izquierda-izquierda (LL).</li>
    <li><strong>Rotación simple a la izquierda:</strong> desbalance derecha-derecha (RR).</li>
    <li><strong>Rotación doble derecha-izquierda:</strong> desbalance derecha-izquierda (RL).</li>
    <li><strong>Rotación doble izquierda-derecha:</strong> desbalance izquierda-derecha (LR).</li>
  </ul>

  <h5>🌱 Ejemplo visual: Inserción desbalance LL</h5>
  <p>Insertamos <strong>10</strong>, <strong>5</strong> y <strong>2</strong>:</p>
  <pre>
      10
     /
    5
   /
  2
  </pre>
  <p>El árbol se desbalancea (FB = 2). Se hace rotación simple a la derecha:</p>
  <pre>
      5
     / \\
    2  10
  </pre>

  <h4>2. Eliminación</h4>
  <p>
    Igual que en ABB, pero después de eliminar, se revisa si algún nodo quedó desbalanceado
    y se aplican rotaciones correctivas.
  </p>

  <h5>🪓 Ejemplo visual: Eliminación con rebalanceo</h5>
  <p>
    Árbol antes de eliminar 30:
  </p>
  <pre>
      40
     /  \\
   30    50
  / 
20
  </pre>
  <p>Eliminamos 30:</p>
  <pre>
      40
     /  \\
   20    50
  </pre>
  <p>FB(40) = -1 → balanceado ✅</p>

  <h4>3. Búsqueda</h4>
  <p>
    Igual que en ABB, se compara recursivamente. AVL garantiza búsquedas en <strong>O(log n)</strong>.
  </p>

  <pre><code class="language-js">
function buscarAVL(nodo, valor) {
  if (!nodo || nodo.valor === valor) return nodo;
  if (valor < nodo.valor) return buscarAVL(nodo.izquierda, valor);
  return buscarAVL(nodo.derecha, valor);
}
  </code></pre>

  <h3>⏱️ Complejidad</h3>
  <table border="1" cellpadding="5">
    <tr>
      <th>Operación</th>
      <th>Complejidad</th>
    </tr>
    <tr>
      <td>Inserción</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Eliminación</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Búsqueda</td>
      <td>O(log n)</td>
    </tr>
  </table>

  <h3>✅ Ventajas</h3>
  <ul>
    <li>Mantiene el árbol balanceado automáticamente.</li>
    <li>Rendimiento consistente, sin degradación como en ABB.</li>
    <li>Ideal para estructuras donde hay muchas inserciones y búsquedas frecuentes.</li>
  </ul>

  <h3>🚫 Desventajas</h3>
  <ul>
    <li>Las rotaciones pueden ser costosas si hay muchas inserciones/eliminaciones.</li>
    <li>Más complejo de implementar que un ABB básico.</li>
  </ul>

  <h3>📚 Aplicaciones</h3>
  <ul>
    <li>Gestión de bases de datos en memoria.</li>
    <li>Índices ordenados.</li>
    <li>Compiladores y analizadores léxicos.</li>
  </ul>

  <h3>📌 Conclusión</h3>
  <p>
    El árbol AVL es una herramienta poderosa cuando se requiere mantener un alto rendimiento en estructuras dinámicas.
    Su capacidad de mantenerse balanceado lo hace ideal para casos con múltiples operaciones donde el orden importa.
  </p>
  `,
  splay: `
  <h2>🌳 Splay Tree (Árbol de acceso autoajustable)</h2>

  <p>
    Un <strong>Splay Tree</strong> es un <em>árbol binario de búsqueda autoajustable</em> que realiza una operación llamada 
    <strong>splay</strong> cada vez que un nodo es accedido (búsqueda, inserción o eliminación).
    Esta operación lleva el nodo accedido hasta la raíz mediante una serie de <em>rotaciones</em>,
    de forma que los nodos accedidos recientemente queden más cercanos a la raíz, optimizando futuros accesos.
  </p>

  <h3>🌀 ¿Qué es el "Splaying"?</h3>
  <p>
    Es el proceso de llevar un nodo al tope del árbol usando una serie de rotaciones (zig, zig-zig, zig-zag) dependiendo de su posición relativa.
    Se busca mejorar el tiempo de acceso promedio en estructuras con patrones de acceso repetitivos.
  </p>

  <h4>📏 Tipos de rotaciones</h4>
  <ul>
    <li><strong>Zig:</strong> cuando el nodo es hijo directo de la raíz.</li>
    <li><strong>Zig-Zig:</strong> el nodo y su padre están en el mismo lado (izquierda-izquierda o derecha-derecha).</li>
    <li><strong>Zig-Zag:</strong> el nodo y su padre están en lados opuestos.</li>
  </ul>

  <h3>⚙️ Operaciones principales</h3>

  <h4>1. Inserción</h4>
  <p>
    Se inserta como en un ABB. Luego se aplica splay al nodo insertado para llevarlo a la raíz.
  </p>

  <h5>🌱 Ejemplo visual: Inserción</h5>
  <p>Insertamos 10, luego 5, luego 2:</p>
  <pre>
      10
     /
    5
   /
  2
  </pre>
  <p>Después del splay, 2 queda en la raíz:</p>
  <pre>
      2
       \\
        5
         \\
         10
  </pre>

  <h4>2. Búsqueda</h4>
  <p>
    Si el nodo existe, se sube a la raíz con splaying. Si no existe, el último nodo visitado se sube a la raíz.
  </p>

  <h4>3. Eliminación</h4>
  <p>
    Primero se hace splay sobre el nodo a eliminar para moverlo a la raíz. Luego, se eliminan sus hijos
    y se reorganiza el árbol combinando los subárboles izquierdo y derecho.
  </p>

  <h5>🪓 Ejemplo visual: Eliminación</h5>
  <p>Árbol antes de eliminar <code>5</code>:</p>
  <pre>
      10
     /
    5
   /
  2
  </pre>
  <p>Hacemos splay sobre 5:</p>
  <pre>
      5
     / \\
    2  10
  </pre>
  <p>Eliminamos 5 → unir subárboles izquierdo y derecho:</p>
  <pre>
      2
       \\
        10
  </pre>

  <h3>⏱️ Complejidad</h3>
  <table border="1" cellpadding="5">
    <tr>
      <th>Operación</th>
      <th>Complejidad amortizada</th>
    </tr>
    <tr>
      <td>Inserción</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Eliminación</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Búsqueda</td>
      <td>O(log n)</td>
    </tr>
  </table>

  <h3>✅ Ventajas</h3>
  <ul>
    <li>Mejora el acceso a nodos que se usan frecuentemente.</li>
    <li>No necesita almacenar información adicional como altura o balance.</li>
    <li>Fácil de implementar en comparación con AVL o Red-Black Trees.</li>
  </ul>

  <h3>🚫 Desventajas</h3>
  <ul>
    <li>El peor caso puede tener complejidad O(n) si el árbol se degenera temporalmente.</li>
    <li>Operaciones individuales pueden ser costosas, aunque el rendimiento promedio es bueno.</li>
  </ul>

  <h3>📚 Aplicaciones</h3>
  <ul>
    <li>Gestión de caché (por frecuencia de acceso).</li>
    <li>Compresión adaptativa (como en algoritmos tipo move-to-front).</li>
    <li>Árboles de búsqueda en estructuras de datos dinámicas.</li>
  </ul>

  <h3>📌 Conclusión</h3>
  <p>
    El Splay Tree es ideal cuando algunos elementos se acceden mucho más que otros. Su comportamiento adaptativo
    lo hace eficiente para patrones de acceso no uniformes.
  </p>
  `,
  b: `
  <h2>🌳 Árbol B (B-Tree)</h2>

  <p>
    Un <strong>Árbol B</strong> es una estructura de datos en forma de árbol balanceado multiclave. 
    Es ampliamente utilizado en sistemas de bases de datos y sistemas de archivos para permitir búsquedas, inserciones y eliminaciones eficientes en grandes volúmenes de datos almacenados en disco.
  </p>

  <h3>🔧 Características</h3>
  <ul>
    <li>Cada nodo puede contener múltiples claves y tener múltiples hijos.</li>
    <li>Todos los nodos hoja están en el mismo nivel.</li>
    <li>Los nodos se mantienen ordenados y balanceados automáticamente.</li>
    <li>Un Árbol B de orden <code>m</code> puede tener como máximo <code>m-1</code> claves y <code>m</code> hijos por nodo.</li>
  </ul>

  <h3>📂 Aplicaciones</h3>
  <ul>
    <li>Sistemas de archivos (como NTFS, HFS+).</li>
    <li>Bases de datos (como PostgreSQL, MySQL InnoDB).</li>
    <li>Índices en almacenamiento externo donde el acceso a disco es costoso.</li>
  </ul>

  <h3>⚙️ Operaciones</h3>

  <h4>1. Inserción</h4>
  <p>
    Las claves se insertan en los nodos hoja. Si un nodo se llena (alcanza <code>m-1</code> claves), se divide
    y la clave del medio se mueve al nodo padre, garantizando que el árbol permanezca balanceado.
  </p>

  <h5>🌱 Ejemplo visual: Inserción en un Árbol B de orden 3</h5>
  <p>Insertamos 10, 20, 5:</p>
  <pre>
    [5 | 10 | 20]
  </pre>
  <p>Insertamos 30 → se divide el nodo:</p>
  <pre>
        [10]
       /    \\
    [5]    [20 | 30]
  </pre>

  <h4>2. Búsqueda</h4>
  <p>
    Se realiza una búsqueda binaria dentro del nodo actual y se sigue al subárbol adecuado.
    Debido al número reducido de niveles, esta operación es muy eficiente.
  </p>

  <h4>3. Eliminación</h4>
  <p>
    Si una clave es eliminada y el nodo queda con menos de <code>⌈(m/2)⌉ - 1</code> claves, 
    se realiza una fusión o redistribución con los hermanos para mantener las reglas del árbol.
  </p>

  <h5>🪓 Ejemplo visual: Eliminación</h5>
  <p>Árbol antes de eliminar 10:</p>
  <pre>
        [10]
       /    \\
    [5]    [20 | 30]
  </pre>
  <p>Eliminamos 10 → se reorganiza:</p>
  <pre>
    [5 | 20 | 30]
  </pre>

  <h3>⏱️ Complejidad</h3>
  <table border="1" cellpadding="5">
    <tr>
      <th>Operación</th>
      <th>Tiempo</th>
    </tr>
    <tr>
      <td>Búsqueda</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Inserción</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Eliminación</td>
      <td>O(log n)</td>
    </tr>
  </table>

  <h3>✅ Ventajas</h3>
  <ul>
    <li>Excelente rendimiento en acceso a disco o memoria secundaria.</li>
    <li>Balance automático sin necesidad de rotaciones.</li>
    <li>Manejo eficiente de grandes volúmenes de datos.</li>
  </ul>

  <h3>🚫 Desventajas</h3>
  <ul>
    <li>Complejidad en su implementación.</li>
    <li>En memoria RAM, los árboles binarios balanceados pueden ser más rápidos.</li>
  </ul>

  <h3>📌 Conclusión</h3>
  <p>
    El Árbol B es ideal para sistemas donde el acceso a disco es costoso, 
    como bases de datos y sistemas de archivos. Su diseño permite minimizar
    el número de lecturas/escrituras, manteniendo un árbol balanceado de forma eficiente.
  </p>
  `,
  bplus: `
  <h2>🌳 Árbol B+ (B-Plus Tree)</h2>

  <p>
    Un <strong>Árbol B+</strong> es una extensión del Árbol B, utilizado principalmente en bases de datos y sistemas de archivos. 
    A diferencia del Árbol B, en el B+ todas las claves están en las hojas y las hojas están enlazadas entre sí para permitir un recorrido eficiente.
  </p>

  <h3>🧬 Diferencias clave con el Árbol B</h3>
  <ul>
    <li>En el B+, las <strong>claves internas</strong> solo sirven como guías de búsqueda, no almacenan datos reales.</li>
    <li>Todas las <strong>claves reales y datos</strong> se encuentran en los nodos hoja.</li>
    <li>Las hojas están <strong>enlazadas secuencialmente</strong>, facilitando el recorrido ordenado.</li>
  </ul>

  <h3>🔧 Características</h3>
  <ul>
    <li>Árbol balanceado: todas las hojas están en el mismo nivel.</li>
    <li>Facilita búsquedas, inserciones y eliminaciones eficientes.</li>
    <li>Ideal para rangos y recorridos secuenciales.</li>
  </ul>

  <h3>⚙️ Operaciones</h3>

  <h4>1. Inserción</h4>
  <p>
    Las claves se insertan en los nodos hoja. Si se sobrepasa el límite de claves permitido, el nodo hoja se divide.
    La clave media se promociona al nodo padre (índice) sin duplicar el dato.
  </p>

  <h5>🌱 Ejemplo visual: Inserción</h5>
  <p>Insertamos 5, 10, 15 en un árbol de orden 3:</p>
  <pre>
    [5 | 10 | 15]  → nodo hoja
  </pre>
  <p>Insertamos 20 → se divide:</p>
  <pre>
      [10]
      /   \\
   [5]  [15 | 20]
  </pre>
  <p>Todos los datos están en hojas. El nodo raíz (10) es guía de búsqueda.</p>

  <h4>2. Búsqueda</h4>
  <p>
    Se busca desde la raíz hasta el nodo hoja adecuado. Luego, se hace una búsqueda secuencial en las hojas.
  </p>

  <h4>3. Eliminación</h4>
  <p>
    Se elimina directamente de las hojas. Si una hoja queda por debajo del mínimo, se redistribuye o se fusiona.
    Las claves guía en los nodos internos se ajustan si es necesario.
  </p>

  <h5>🪓 Ejemplo visual: Eliminación</h5>
  <p>Antes de eliminar 15:</p>
  <pre>
      [10]
      /   \\
   [5]  [15 | 20]
  </pre>
  <p>Eliminamos 15:</p>
  <pre>
      [10]
      /   \\
   [5]   [20]
  </pre>

  <h3>🔗 Enlace entre hojas</h3>
  <p>
    Las hojas están enlazadas de izquierda a derecha, facilitando operaciones como recorridos en rango y paginación:
  </p>
  <pre>
  [5] → [10] → [15] → [20]
  </pre>

  <h3>⏱️ Complejidad</h3>
  <table border="1" cellpadding="5">
    <tr>
      <th>Operación</th>
      <th>Tiempo</th>
    </tr>
    <tr>
      <td>Búsqueda</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Inserción</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Eliminación</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Recorrido por rango</td>
      <td>O(k + log n)</td>
    </tr>
  </table>

  <h3>✅ Ventajas</h3>
  <ul>
    <li>Ideal para búsqueda por rangos o acceso secuencial.</li>
    <li>Mayor eficiencia en consultas en bases de datos.</li>
    <li>Menor altura en comparación al árbol B en ciertas implementaciones.</li>
  </ul>

  <h3>🚫 Desventajas</h3>
  <ul>
    <li>Mayor uso de espacio en nodos hoja.</li>
    <li>Implementación ligeramente más compleja que el árbol B.</li>
  </ul>

  <h3>📌 Conclusión</h3>
  <p>
    El Árbol B+ mejora al Árbol B al separar las claves guía de los datos reales y conectar las hojas.
    Esto permite operaciones rápidas y eficientes, especialmente útiles para sistemas que manejan grandes volúmenes de información.
  </p>
  `,
  bstar: `
  <h2>🌲 Árbol B* (B-Star Tree)</h2>

  <p>
    El <strong>Árbol B*</strong> es una mejora sobre el Árbol B y B+, diseñado para hacer un uso más eficiente del espacio y reducir el número de divisiones o splits durante la inserción. Se utiliza en sistemas de bases de datos, archivos indexados y sistemas donde la eficiencia del almacenamiento es crucial.
  </p>

  <h3>🔍 ¿En qué se diferencia del Árbol B?</h3>
  <ul>
    <li>En lugar de dividir un nodo lleno inmediatamente, el Árbol B* intenta <strong>redistribuir</strong> las claves con su hermano adyacente (normalmente el derecho).</li>
    <li>Solo se realiza una división si ni el nodo actual ni el hermano pueden aceptar más claves.</li>
    <li>Cuando se divide, se crean <strong>tres nodos a partir de dos</strong>, a diferencia del B y B+ donde se crean dos a partir de uno.</li>
    <li>Con esto se logra un <strong>70% de llenado mínimo</strong> (mayor eficiencia de espacio).</li>
  </ul>

  <h3>⚙️ Operaciones</h3>

  <h4>1. Inserción</h4>
  <p>
    Si el nodo está lleno, se intenta redistribuir con el nodo hermano. Si no es posible, se realiza una división más controlada entre el nodo actual, su hermano y uno nuevo. Esto permite mantener mejor balance y reducir la altura del árbol.
  </p>

  <h5>🌱 Ejemplo visual: Inserción con redistribución</h5>
  <p>Supongamos que tenemos dos nodos hoja:</p>
  <pre>
  [10 | 20 | 30]   [40 | 50 | 60]
  </pre>
  <p>Queremos insertar <code>25</code>. En vez de dividir un nodo, redistribuimos:</p>
  <pre>
  [10 | 20]   [25 | 30 | 40 | 50 | 60]
  </pre>
  <p>Y luego se reorganiza para balancear si es necesario.</p>

  <h4>2. Búsqueda</h4>
  <p>La búsqueda funciona como en el árbol B: se comienza en la raíz y se sigue descendiendo por el subárbol correspondiente según la clave hasta llegar a una hoja.</p>

  <h4>3. Eliminación</h4>
  <p>
    Al eliminar una clave, si un nodo queda con pocas claves, se intenta primero redistribuir con hermanos antes de fusionar.
    Esto mantiene el árbol más balanceado y eficiente.
  </p>

  <h5>🪓 Ejemplo visual: Eliminación</h5>
  <p>Antes de eliminar:</p>
  <pre>
      [30]
     /    \\
  [10 20] [40 50]
  </pre>
  <p>Eliminamos <code>20</code>. Redistribuimos:</p>
  <pre>
      [30]
     /    \\
  [10 40] [50]
  </pre>

  <h3>📈 Complejidad</h3>
  <table border="1" cellpadding="5">
    <tr>
      <th>Operación</th>
      <th>Complejidad</th>
    </tr>
    <tr>
      <td>Búsqueda</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Inserción</td>
      <td>O(log n)</td>
    </tr>
    <tr>
      <td>Eliminación</td>
      <td>O(log n)</td>
    </tr>
  </table>

  <h3>✅ Ventajas</h3>
  <ul>
    <li>Mayor eficiencia de espacio (70% mínimo de llenado).</li>
    <li>Menor número de divisiones y fusiones.</li>
    <li>Altura más baja comparado con B y B+ en algunos casos.</li>
  </ul>

  <h3>🚫 Desventajas</h3>
  <ul>
    <li>Implementación más compleja debido a redistribuciones y divisiones de 3 nodos.</li>
    <li>No tan común como el B+ en bases de datos modernas.</li>
  </ul>

  <h3>📌 Conclusión</h3>
  <p>
    El Árbol B* es una estructura poderosa y eficiente que busca minimizar el uso del disco y optimizar el espacio.
    Su redistribución inteligente y menor cantidad de divisiones lo hacen ideal en escenarios de almacenamiento donde el acceso rápido y compacto es esencial.
  </p>
  `,
  fundamentos: `
  <h2>🧠 Fundamentos de Programación</h2>

  <p>
    Los fundamentos de programación son los principios básicos necesarios para entender, diseñar y construir programas informáticos.
    Dominar estos conceptos es esencial para cualquier programador, sin importar el lenguaje que utilice.
  </p>

  <h3>🔤 1. Algoritmos</h3>
  <p>
    Un <strong>algoritmo</strong> es una secuencia finita y ordenada de pasos que resuelve un problema o realiza una tarea específica.
  </p>
  <pre>
  Ejemplo: Algoritmo para sumar dos números
  1. Leer A
  2. Leer B
  3. Sumar A + B → Resultado
  4. Mostrar Resultado
  </pre>

  <h3>🔢 2. Tipos de Datos</h3>
  <p>Los tipos de datos definen qué tipo de valores puede almacenar una variable. Algunos ejemplos:</p>
  <ul>
    <li><code>int</code>: números enteros</li>
    <li><code>float</code>: números con decimales</li>
    <li><code>char</code>: caracteres</li>
    <li><code>string</code>: cadenas de texto</li>
    <li><code>boolean</code>: verdadero o falso</li>
  </ul>

  <h3>📦 3. Variables y Constantes</h3>
  <ul>
    <li><strong>Variable</strong>: espacio en memoria cuyo valor puede cambiar (ej. <code>x = 10</code>)</li>
    <li><strong>Constante</strong>: su valor no cambia durante la ejecución (ej. <code>PI = 3.1416</code>)</li>
  </ul>

  <h3>📐 4. Operadores</h3>
  <ul>
    <li><strong>Aritméticos</strong>: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
    <li><strong>Relacionales</strong>: <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code></li>
    <li><strong>Lógicos</strong>: <code>&&</code>, <code>||</code>, <code>!</code></li>
  </ul>

  <h3>🔁 5. Estructuras de Control</h3>
  <h4>Condicionales</h4>
  <pre>
  if (edad &gt;= 18) {
    mostrar("Eres mayor de edad");
  } else {
    mostrar("Eres menor de edad");
  }
  </pre>

  <h4>Bucles</h4>
  <pre>
  for (int i = 0; i &lt; 5; i++) {
    mostrar(i);
  }

  while (condicion) {
    // repetir mientras se cumpla la condición
  }
  </pre>

  <h3>📦 6. Funciones</h3>
  <p>
    Una función es un bloque de código reutilizable que realiza una tarea específica. Recibe parámetros y puede devolver un valor.
  </p>
  <pre>
  int suma(int a, int b) {
    return a + b;
  }
  </pre>

  <h3>🧮 7. Ejemplo completo</h3>
  <p>Función para determinar si un número es primo:</p>
  <pre>
  boolean esPrimo(int n) {
    if (n &lt;= 1) return false;
    for (int i = 2; i &lt; n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  </pre>

  <h3>📘 Conclusión</h3>
  <p>
    Los fundamentos de programación son la base sobre la cual se construyen programas más complejos.
    Entender bien los algoritmos, tipos de datos, estructuras de control y funciones es crucial para desarrollarse como programador.
  </p>
  `,
  arreglos: `
  <h2>📚 Arreglos en Java</h2>

  <p>
    En Java, un <strong>arreglo</strong> es una estructura de datos que almacena múltiples elementos del mismo tipo
    en posiciones contiguas de memoria. Los arreglos tienen un tamaño fijo, lo que significa que una vez creado no puede cambiar su tamaño.
  </p>

  <h3>🔢 Características principales</h3>
  <ul>
    <li>Acceso rápido por índice (tiempo constante: O(1))</li>
    <li>Tamaño fijo definido al momento de la creación</li>
    <li>Todos los elementos son del mismo tipo</li>
  </ul>

  <h3>💡 Declaración y uso</h3>
  <pre><code class="language-java">
// Declaración y asignación
int[] numeros = new int[5];
numeros[0] = 10;
numeros[1] = 20;

// Inicialización directa
String[] nombres = { "Ana", "Luis", "Carlos" };
System.out.println(nombres[1]); // Luis
  </code></pre>

  <h3>📌 Operaciones comunes</h3>

  <h4>1. Recorrido</h4>
  <pre><code class="language-java">
int[] datos = {10, 20, 30};
for (int i = 0; i < datos.length; i++) {
    System.out.println("Elemento " + i + ": " + datos[i]);
}
  </code></pre>

  <h4>2. Búsqueda</h4>
  <pre><code class="language-java">
int[] datos = {5, 8, 12, 20};
int objetivo = 12;
boolean encontrado = false;

for (int i = 0; i < datos.length; i++) {
    if (datos[i] == objetivo) {
        encontrado = true;
        System.out.println("Encontrado en índice: " + i);
        break;
    }
}
if (!encontrado) {
    System.out.println("No encontrado");
}
  </code></pre>

  <h4>3. Modificación</h4>
  <p>Cambiar el valor en una posición:</p>
  <pre><code class="language-java">
int[] edades = {18, 21, 25};
edades[1] = 22; // Ahora edades = {18, 22, 25}
  </code></pre>

  <h3>🧠 Tipos de arreglos</h3>
  <ul>
    <li><strong>Unidimensional</strong>: <code>int[] numeros = new int[5];</code></li>
    <li><strong>Bidimensional</strong>: <code>int[][] matriz = new int[3][3];</code></li>
    <li><strong>Multidimensional</strong>: también existen arreglos de 3 o más dimensiones</li>
  </ul>

  <h3>🧮 Ejemplo práctico: promedio de calificaciones</h3>
  <pre><code class="language-java">
double[] notas = {15.5, 17.0, 14.8, 16.3};
double suma = 0;

for (int i = 0; i < notas.length; i++) {
    suma += notas[i];
}
double promedio = suma / notas.length;
System.out.println("Promedio: " + promedio);
  </code></pre>

  <h3>📘 Conclusión</h3>
  <p>
    Los arreglos en Java son estructuras fundamentales que permiten organizar datos de forma eficiente.
    Aunque su tamaño fijo puede limitar la flexibilidad, son rápidos y fáciles de usar, y sirven como base para estructuras más avanzadas 
    como listas, pilas o colas.
  </p>
  `,
  poo: `
  <h2>👨‍💻 Programación Orientada a Objetos (POO) en Java</h2>

  <p>
    La <strong>Programación Orientada a Objetos</strong> (POO) es un paradigma de programación que modela el software a través de <em>objetos</em>, que combinan datos (atributos) y comportamientos (métodos).
  </p>

  <h3>📦 ¿Qué es un objeto?</h3>
  <p>
    Un objeto es una instancia de una clase. Representa una entidad del mundo real, como un estudiante, una factura, un coche, etc.
  </p>

  <h3>🏗️ ¿Qué es una clase?</h3>
  <p>
    Una clase es un molde o plantilla que define las características y comportamientos que tendrán los objetos.
  </p>

  <pre><code class="language-java">
public class Persona {
    String nombre;
    int edad;

    public void saludar() {
        System.out.println("Hola, mi nombre es " + nombre);
    }
}
  </code></pre>

  <h3>🎯 Crear objetos</h3>
  <pre><code class="language-java">
public class Test {
    public static void main(String[] args) {
        Persona p1 = new Persona();
        p1.nombre = "Lucía";
        p1.edad = 21;
        p1.saludar();  // Output: Hola, mi nombre es Lucía
    }
}
  </code></pre>

  <h3>🌟 Los 4 pilares de la POO</h3>

  <h4>1. Encapsulamiento</h4>
  <p>Oculta los detalles internos de un objeto, exponiendo solo lo necesario mediante métodos públicos.</p>
  <pre><code class="language-java">
public class Cuenta {
    private double saldo;

    public void depositar(double monto) {
        if (monto > 0) saldo += monto;
    }

    public double getSaldo() {
        return saldo;
    }
}
  </code></pre>

  <h4>2. Abstracción</h4>
  <p>Permite enfocarse en lo esencial de un objeto y omitir los detalles complejos.</p>
  <pre><code class="language-java">
abstract class Animal {
    public abstract void hacerSonido();
}

class Perro extends Animal {
    public void hacerSonido() {
        System.out.println("Guau!");
    }
}
  </code></pre>

  <h4>3. Herencia</h4>
  <p>Permite que una clase hija herede atributos y métodos de una clase padre.</p>
  <pre><code class="language-java">
class Vehiculo {
    String marca;

    public void encender() {
        System.out.println("Encendiendo vehículo...");
    }
}

class Auto extends Vehiculo {
    int puertas;

    public void tocarBocina() {
        System.out.println("¡Beep beep!");
    }
}
  </code></pre>

  <h4>4. Polimorfismo</h4>
  <p>Permite usar una misma interfaz o método para diferentes tipos de objetos.</p>
  <pre><code class="language-java">
Animal a = new Perro(); // Puede ser también Gato, Vaca, etc.
a.hacerSonido(); // Comportamiento varía según el tipo real del objeto
  </code></pre>

  <h3>🧠 Beneficios de la POO</h3>
  <ul>
    <li>Modularidad y reutilización del código</li>
    <li>Facilidad de mantenimiento y escalabilidad</li>
    <li>Mayor claridad y organización en proyectos grandes</li>
  </ul>

  <h3>🧪 Ejercicio</h3>
  <p>
    Crea una clase <code>Alumno</code> que tenga los atributos <code>nombre</code> y <code>nota</code>, y un método que diga si está aprobado (nota &ge; 11).
  </p>

  <pre><code class="language-java">
public class Alumno {
    String nombre;
    double nota;

    public boolean estaAprobado() {
        return nota >= 11;
    }
}
  </code></pre>

  <h3>📘 Conclusión</h3>
  <p>
    La Programación Orientada a Objetos es esencial para el desarrollo moderno en Java, ya que facilita la creación de software organizado, escalable y reutilizable.
  </p>
<h3>📊 Diagrama UML: Herencia, Asociación y Composición</h3>
<div class="uml-diagram">
  <!-- Herencia base -->
  <div class="uml-class">
    <div class="uml-title">Animal</div>
    <div class="uml-section">+ nombre: String</div>
    <div class="uml-section">+ hacerSonido(): void</div>
  </div>
  <div class="arrow">&#8595;</div>
  <div class="uml-children">
    <div class="uml-class">
      <div class="uml-title">Perro</div>
      <div class="uml-section">+ hacerSonido(): void</div>
    </div>
    <div class="uml-class">
      <div class="uml-title">Gato</div>
      <div class="uml-section">+ hacerSonido(): void</div>
    </div>
  </div>

  <!-- Asociación -->
  <div class="relation-title">Asociación</div>
  <div class="uml-association">
    <div class="uml-class">
      <div class="uml-title">Persona</div>
      <div class="uml-section">+ nombre: String</div>
    </div>
    <div class="assoc-arrow">──▶</div>
    <div class="uml-class">
      <div class="uml-title">Telefono</div>
      <div class="uml-section">+ numero: String</div>
    </div>
  </div>

  <!-- Composición -->
  <div class="relation-title">Composición</div>
  <div class="uml-association">
    <div class="uml-class">
      <div class="uml-title">Auto</div>
      <div class="uml-section">+ modelo: String</div>
    </div>
    <div class="assoc-arrow">◆──▶</div>
    <div class="uml-class">
      <div class="uml-title">Motor</div>
      <div class="uml-section">+ tipo: String</div>
    </div>
  </div>
</div>
  `,
  microeconomia: `
  <h2>📚 Microeconomía</h2>
  <p>La microeconomía es una rama de la economía que estudia el comportamiento individual de los agentes económicos, como los consumidores, las empresas y los mercados, y cómo interactúan para asignar recursos escasos.</p>

  <h3>🔹 Temas principales</h3>

  <h4>1. Oferta y Demanda</h4>
  <p><strong>Demanda:</strong> Cantidad de un bien que los consumidores están dispuestos a comprar a distintos precios.</p>
  <p><strong>Oferta:</strong> Cantidad de un bien que los productores están dispuestos a vender a distintos precios.</p>
  <p><strong>Ley de la demanda:</strong> a mayor precio, menor cantidad demandada.<br>
     <strong>Ley de la oferta:</strong> a mayor precio, mayor cantidad ofrecida.</p>

  <pre>
Precio ↑
   |     \\ 
   |      \\     Demanda
   |       \\\\
   |--------\\\\--------------
   |        // Oferta
   |       //
   |      //
   |     //
   |_______________________→ Cantidad
  </pre>

  <h4>2. Elasticidad</h4>
  <p><strong>Elasticidad precio de la demanda:</strong> mide cuánto cambia la cantidad demandada ante una variación en el precio.</p>
  <p><strong>Fórmula:</strong> Elasticidad = (% variación en cantidad) / (% variación en precio)</p>
  <ul>
    <li>Elástica (&gt; 1): sensible al precio</li>
    <li>Inelástica (&lt; 1): poco sensible</li>
    <li>Unitaria (= 1): proporción igual</li>
  </ul>

  <h4>3. Teoría del consumidor</h4>
  <ul>
    <li><strong>Preferencias:</strong> se representan con curvas de indiferencia.</li>
    <li><strong>Restricción presupuestaria:</strong> lo que el consumidor puede pagar según su ingreso.</li>
    <li><strong>Óptimo del consumidor:</strong> punto donde la curva de indiferencia es tangente a la restricción presupuestaria.</li>
  </ul>

  <h4>4. Teoría de la empresa</h4>
  <ul>
    <li><strong>Producción:</strong> cómo las empresas transforman insumos en productos.</li>
    <li><strong>Costos:</strong> fijos, variables, totales, marginales.</li>
    <li><strong>Regla:</strong> Máximo beneficio ocurre cuando <code>Ingreso Marginal = Costo Marginal</code>.</li>
  </ul>

  <h4>5. Estructuras de mercado</h4>
  <table border="1" cellpadding="5" cellspacing="0">
    <tr>
      <th>Tipo</th>
      <th>N° de empresas</th>
      <th>Producto</th>
      <th>Ejemplo</th>
    </tr>
    <tr>
      <td>Competencia perfecta</td>
      <td>Muchas</td>
      <td>Homogéneo</td>
      <td>Agricultura</td>
    </tr>
    <tr>
      <td>Monopolio</td>
      <td>Una</td>
      <td>Único</td>
      <td>Agua potable</td>
    </tr>
    <tr>
      <td>Oligopolio</td>
      <td>Pocas</td>
      <td>Homogéneo / Diferenciado</td>
      <td>Telecomunicaciones</td>
    </tr>
    <tr>
      <td>Competencia monopolística</td>
      <td>Muchas</td>
      <td>Diferenciado</td>
      <td>Restaurantes</td>
    </tr>
  </table>

  <h3>🔸 Aplicación en programación</h3>
  <p>Aunque pueda parecer ajena, la microeconomía es útil en programación para:</p>
  <ul>
    <li>Simular mercados (juegos, algoritmos económicos)</li>
    <li>Modelar precios dinámicos</li>
    <li>Aplicaciones fintech</li>
    <li>Optimizar recursos en sistemas distribuidos</li>
  </ul>
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
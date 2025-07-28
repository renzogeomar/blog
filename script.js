

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
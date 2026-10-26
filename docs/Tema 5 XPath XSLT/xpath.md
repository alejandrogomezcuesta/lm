# XPath

## 1. Qué es XPath

XPath (*XML Path Language*) es un lenguaje que permite localizar y seleccionar partes concretas de un documento XML escribiendo el camino que hay que seguir hasta ellas. Fue desarrollado por el W3C y se usa también en XSLT, XQuery, en pruebas automáticas y en *web scraping*.

Para XPath, un documento XML es un **árbol de nodos**. El elemento principal del documento es la raíz, y de ella cuelgan sus elementos hijos. Cada hijo puede tener a su vez más hijos, y así sucesivamente. Una expresión XPath indica por qué ramas del árbol hay que moverse, y los **ejes** señalan en qué dirección se avanza en cada paso.

En este documento se estudian los tres ejes más básicos:

| Eje | Símbolo | Qué hace |
| --- | --- | --- |
| Hijo | `/` | Baja un nivel, a los hijos directos |
| Descendiente | `//` | Baja a cualquier profundidad |
| Padre | `..` | Sube un nivel, al elemento que contiene al actual |

## 2. Documento XML de ejemplo

Todos los ejemplos y ejercicios de este documento usan el mismo XML. Guárdalo en un archivo llamado [`biblioteca.xml`](biblioteca.xml) para poder probar cada expresión.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <seccion>
        <nombre>Novela</nombre>
        <libro id="l1" categoria="novela" anio="1949">
            <titulo>1984</titulo>
            <autor>George Orwell</autor>
        </libro>
        <libro id="l2" categoria="novela" anio="1925">
            <titulo>El Gran Gatsby</titulo>
            <autor>F. Scott Fitzgerald</autor>
        </libro>
    </seccion>
    <seccion>
        <nombre>Ensayo</nombre>
        <libro id="l3" categoria="ensayo" anio="1929">
            <titulo>Una habitación propia</titulo>
            <autor>Virginia Woolf</autor>
        </libro>
    </seccion>
</biblioteca>
```

La estructura es la siguiente:

- La raíz es `biblioteca`, que contiene dos elementos `seccion`.
- Cada `seccion` contiene un `nombre` y uno o varios `libro`.
- Cada `libro` contiene un `titulo` y un `autor`.
- Cada `libro` tiene los atributos `id`, `categoria` y `anio`.
- En total hay 2 secciones, 3 libros, 3 títulos, 3 autores y 2 nombres de sección.

## 3. Eje hijo: `/`

El eje hijo selecciona los **hijos directos** de un nodo, es decir, los elementos que están exactamente un nivel por debajo. Cuando la expresión empieza por `/`, el primer paso parte de la raíz del documento, así que lo primero que se escribe es el nombre del elemento raíz. Después, cada `/` añade un paso hacia abajo y hay que nombrar todos los elementos intermedios, sin saltarse ninguno.

### Ejemplos resueltos

| Expresión | Qué selecciona | Resultado |
| --- | --- | --- |
| `/biblioteca` | El elemento raíz | 1 nodo: `biblioteca` |
| `/biblioteca/seccion` | Los hijos `seccion` de la raíz | 2 nodos: la sección Novela y la sección Ensayo |
| `/biblioteca/seccion/nombre` | El nombre de cada sección | 2 nodos: «Novela» y «Ensayo» |
| `/biblioteca/seccion/libro` | Los libros de todas las secciones | 3 nodos: los tres `libro` |
| `/biblioteca/seccion/libro/titulo` | El título de cada libro | 3 nodos: «1984», «El Gran Gatsby» y «Una habitación propia» |
| `/biblioteca/seccion/libro/autor` | El autor de cada libro | 3 nodos: «George Orwell», «F. Scott Fitzgerald» y «Virginia Woolf» |
| `/biblioteca/seccion/libro[@categoria='novela']/titulo` | Los títulos de los libros cuya categoría es «novela» | 2 nodos: «1984» y «El Gran Gatsby» |

### Expresiones que no devuelven nada

Una expresión es válida aunque no encuentre ningún nodo. Estos casos sirven para comprobar que has entendido la estructura del documento:

| Expresión | Resultado | Motivo |
| --- | --- | --- |
| `/seccion` | Vacío | La raíz es `biblioteca`, no `seccion` |
| `/biblioteca/libro` | Vacío | Los `libro` no cuelgan de `biblioteca`, sino de `seccion` |
| `/biblioteca/nombre` | Vacío | Los `nombre` cuelgan de `seccion` |
| `/biblioteca/seccion/titulo` | Vacío | Los `titulo` cuelgan de `libro`, no de `seccion` |

**Regla práctica:** con el eje hijo hay que conocer la ruta completa. Si falta un nivel intermedio, la expresión no devuelve nada.

## 4. Eje descendiente: `//`

El eje descendiente selecciona los nodos **a cualquier profundidad**: hijos, nietos, bisnietos y así sucesivamente. Permite saltarse los niveles intermedios, de modo que no hace falta conocer la ruta completa hasta el elemento que se busca. Si la expresión empieza por `//`, la búsqueda se hace en todo el documento.

### Ejemplos resueltos: `//` al principio de la expresión

| Expresión | Qué selecciona | Resultado |
| --- | --- | --- |
| `//seccion` | Todas las secciones, estén donde estén | 2 nodos: Novela y Ensayo |
| `//libro` | Todos los libros | 3 nodos: los tres `libro` |
| `//titulo` | Todos los títulos | 3 nodos: «1984», «El Gran Gatsby» y «Una habitación propia» |
| `//autor` | Todos los autores | 3 nodos: «George Orwell», «F. Scott Fitzgerald» y «Virginia Woolf» |
| `//nombre` | Todos los nombres de sección | 2 nodos: «Novela» y «Ensayo» |
| `//biblioteca` | El elemento raíz, que también se encuentra | 1 nodo: `biblioteca` |

Compara `//titulo` con `/biblioteca/seccion/libro/titulo`: las dos devuelven los mismos 3 nodos, pero la primera es mucho más corta porque no necesita nombrar los niveles intermedios.

### Ejemplos resueltos: `//` en mitad de la expresión

El eje descendiente también puede usarse después de otros pasos. Así se fija el principio de la ruta y se deja libre el resto.

| Expresión | Qué hace | Resultado |
| --- | --- | --- |
| `/biblioteca//libro` | Parte de la raíz y busca libros a cualquier profundidad | 3 nodos: los tres `libro` |
| `/biblioteca//titulo` | Parte de la raíz y busca títulos a cualquier profundidad | 3 nodos: los tres `titulo` |
| `/biblioteca/seccion//autor` | Baja hasta las secciones y busca autores por debajo | 3 nodos: los tres `autor` |

### Ejemplos resueltos: combinación con el eje hijo

Lo más habitual es localizar un elemento con `//` y bajar desde él con `/`.

| Expresión | Qué hace | Resultado |
| --- | --- | --- |
| `//seccion/nombre` | Busca las secciones y baja a su nombre | 2 nodos: «Novela» y «Ensayo» |
| `//libro/titulo` | Busca los libros y baja a su título | 3 nodos: los tres `titulo` |
| `//seccion/libro/autor` | Busca las secciones y baja a libro y a autor | 3 nodos: los tres `autor` |
| `//libro[@id='l3']/titulo` | Busca el libro con `id="l3"` y baja a su título | 1 nodo: «Una habitación propia» |

### Una trampa habitual

`//` encuentra elementos a cualquier profundidad, pero un `/` posterior sigue exigiendo hijo directo. Por eso `//biblioteca/libro` no devuelve nada: los `libro` no son hijos directos de `biblioteca`, sino de `seccion`. Para encontrarlos desde `biblioteca` hay que usar `//biblioteca//libro`, o más sencillo, `//libro`.

## 5. Eje padre: `..`

El eje padre **sube un nivel** y selecciona el elemento que contiene al nodo actual. Normalmente se usa después de haber localizado un nodo con `//` o con `/`, para recuperar el elemento del que cuelga.

El resultado de una expresión XPath es un conjunto de nodos, así que **no se repiten**. Si dos libros pertenecen a la misma sección, esa sección aparece una sola vez en el resultado.

### Ejemplos resueltos: subir un nivel

| Expresión | Qué hace | Resultado |
| --- | --- | --- |
| `//titulo/..` | Busca los títulos y sube al elemento que los contiene | 3 nodos: los tres `libro` |
| `//autor/..` | Busca los autores y sube al elemento que los contiene | 3 nodos: los tres `libro` |
| `//libro/..` | Busca los libros y sube a su sección | 2 nodos: las dos `seccion` (la sección Novela se cuenta una sola vez, aunque tenga dos libros) |
| `//nombre/..` | Busca los nombres y sube a su sección | 2 nodos: las dos `seccion` |
| `//seccion/..` | Busca las secciones y sube al elemento que las contiene | 1 nodo: `biblioteca` |
| `/biblioteca/seccion/libro/..` | Con ruta absoluta, baja hasta los libros y sube a sus secciones | 2 nodos: las dos `seccion` |

### Ejemplos resueltos: subir varios niveles

Se pueden encadenar varios `..` para subir más de un nivel.

| Expresión | Qué hace | Resultado |
| --- | --- | --- |
| `//titulo/../..` | Del título sube al libro y del libro a la sección | 2 nodos: las dos `seccion` |
| `//titulo/../../..` | Sube tres niveles desde el título | 1 nodo: `biblioteca` |
| `//autor/../../..` | Sube tres niveles desde el autor | 1 nodo: `biblioteca` |

### Ejemplos resueltos: subir y volver a bajar

La combinación más útil de `..` consiste en **subir y bajar por otra rama** para llegar a un elemento «hermano» del nodo de partida, es decir, otro hijo del mismo padre.

| Expresión | Qué hace | Resultado |
| --- | --- | --- |
| `//autor/../titulo` | Parte de cada autor, sube a su libro y baja a su título | 3 nodos: «1984», «El Gran Gatsby» y «Una habitación propia» |
| `//titulo/../autor` | Parte de cada título, sube a su libro y baja a su autor | 3 nodos: «George Orwell», «F. Scott Fitzgerald» y «Virginia Woolf» |
| `//libro/../nombre` | Parte de cada libro, sube a su sección y baja a su nombre | 2 nodos: «Novela» y «Ensayo» |
| `//nombre/../libro` | Parte de cada nombre de sección, sube a la sección y baja a sus libros | 3 nodos: los tres `libro` |
| `//nombre/../libro/titulo` | Igual que la anterior, pero baja un paso más hasta los títulos | 3 nodos: «1984», «El Gran Gatsby» y «Una habitación propia» |

## 6. Nodos de comprobación o búsqueda

Los predicados son condiciones escritas entre corchetes que permiten filtrar los nodos encontrados. En esta sección se usan para comprobar atributos, texto, posición y valores. La ruta sigue utilizando únicamente los ejes `/`, `//` y `..`; `@nombre` sirve aquí para comprobar el valor de un atributo dentro de un predicado, no como un paso adicional de navegación.

### Atributos

Se escribe `@` seguido del nombre del atributo. Si se añade una comparación, solo se seleccionan los elementos cuyo atributo cumple la condición.

| Expresión | Qué selecciona | Resultado |
| --- | --- | --- |
| `//libro[@id='l1']` | El libro cuyo identificador es `l1` | 1 nodo: el libro «1984» |
| `//libro[@categoria='novela']/titulo` | Los títulos de los libros de categoría «novela» | 2 nodos: «1984» y «El Gran Gatsby» |
| `//libro[@anio > 1940]/titulo` | Los títulos de los libros publicados después de 1940 | 1 nodo: «1984» |
| `//libro[@categoria='novela' and @anio < 1940]/titulo` | Los títulos que cumplen ambas condiciones | 1 nodo: «El Gran Gatsby» |
| `//libro[@categoria='novela' or @categoria='ensayo']/titulo` | Los títulos que cumplen al menos una condición | 3 nodos: los tres títulos |

### Texto, posición y comodín

| Expresión | Qué comprueba | Resultado |
| --- | --- | --- |
| `//titulo[text()='1984']` | Que el texto del título sea exactamente «1984» | 1 nodo: «1984» |
| `//libro[1]/titulo` | La posición del libro entre los hijos de cada sección | 2 nodos: «1984» y «Una habitación propia» |
| `//libro[2]/titulo` | La posición del libro entre los hijos de cada sección | 1 nodo: «El Gran Gatsby» |
| `//libro/*` | `*` representa cualquier elemento hijo de `libro` | 6 nodos: los títulos y autores de los tres libros |

Los operadores `=`, `<` y `>` comparan valores; `and` exige que se cumplan ambas condiciones y `or` que se cumpla al menos una. Los predicados no cambian los ejes usados para recorrer el documento.

## 7. Rutas absolutas y relativas

Una ruta XPath puede ser absoluta o relativa según desde dónde empiece.

- **Ruta absoluta:** empieza por `/` y parte de la raíz del documento. Por ejemplo, `/biblioteca/seccion/libro/titulo`. Se evalúa igual sin importar cuál sea el nodo actual.
- **Ruta relativa:** no empieza por `/` y parte del **nodo actual**, el nodo en el que se está situado. Por ejemplo, `libro/titulo`. El resultado depende de cuál sea el nodo actual.

Las rutas que empiezan por `//` también parten de la raíz del documento, aunque no hace falta conocer la ruta completa.

### Ejemplos con distintos nodos actuales

| Nodo actual | Expresión relativa | Resultado |
| --- | --- | --- |
| `seccion` | `nombre` | El nombre de esa sección |
| `seccion` | `libro/titulo` | Los títulos de los libros de esa sección |
| `seccion` | `..` | `biblioteca` |
| `seccion` | `../seccion` | Las dos `seccion` (sube a `biblioteca` y baja de nuevo a sus secciones) |
| `libro` | `titulo` | El título de ese libro |
| `libro` | `..` | La sección a la que pertenece ese libro |
| `libro` | `../nombre` | El nombre de la sección a la que pertenece ese libro |
| `biblioteca` | `libro/titulo` | Vacío: los `libro` no son hijos directos de `biblioteca` |

La ruta relativa `libro/titulo` solo funciona si el nodo actual es el que contiene directamente a `libro`. Una ruta absoluta o una que empiece por `//` funciona siempre.

## 8. Cómo comprobar las expresiones en Visual Studio Code

Puedes ejecutar consultas XPath sobre tu documento con Visual Studio Code y la extensión gratuita **XML Tools de Josh Johnson**.

### Instalar la extensión

1. Abre Visual Studio Code.
2. Entra en la vista de Extensiones: haz clic en el icono cuadrado de la barra lateral o pulsa `Ctrl+Shift+X`.
3. Escribe «XML Tools» en el buscador de extensiones.
4. Pulsa **Instalar** en la extensión «XML Tools de Josh Johnson».

### Evaluar una expresión

1. Abre el archivo `biblioteca.xml` en Visual Studio Code. Si no lo tienes, créalo con el contenido de la sección 2. El cursor debe estar dentro de este archivo, porque la consulta se evalúa sobre el documento activo.
2. Abre la Paleta de Comandos con `Ctrl+Shift+P`.
3. Escribe «XML Tools» y elige la opción **Evaluate XPath**. También puedes usar directamente el atajo `Ctrl+Shift+Alt+X`.
4. Escribe la expresión que quieres probar, por ejemplo `//titulo/..`, y confirma.
5. La extensión muestra los nodos que coinciden con la expresión.

### Cómo practicar

- Antes de ejecutar una expresión, escribe en un papel qué nodos crees que devolverá y cuántos. Después ejecútala y compara.
- Prueba también las expresiones que no devuelven nada, como `/biblioteca/libro`, para comprobar que el resultado vacío es el esperado.
- Prueba filtros de atributos como `//libro[@categoria='novela']/titulo` y comprueba qué cambia al sustituir el valor.
- Si una expresión da un resultado distinto del que esperabas, repasa el árbol del documento: ¿de qué elemento cuelga cada nodo?

### Problemas conocidos de la extensión

- Si haces varias consultas seguidas en la misma consola, a veces aparecen errores. En ese caso, cierra la consola y vuelve a abrirla.
- Algunas funciones de XPath no están reconocidas por la extensión. No afecta a los ejes `/`, `//` y `..`, que funcionan sin problemas.

### Alternativa online

También puedes probar las expresiones en una herramienta online, por ejemplo la de [freeformatter.com](https://www.freeformatter.com/xpath-tester.html). Busca «XPath Tester» en un buscador, pega el XML, escribe la expresión y la herramienta muestra el resultado.

## 9. Ejercicios

Usa el documento `biblioteca.xml` de la sección 2. Escribe cada expresión usando únicamente los ejes `/`, `//` y `..`, y comprueba el resultado en Visual Studio Code. Las soluciones están al final.

### A. Eje hijo

1. Selecciona el elemento raíz.
2. Selecciona todas las comenzando el xpath con `/`.
3. Selecciona los nombres de las secciones comenzando el xpath con `/`.
4. Selecciona los autores de todos los libros comenzando el xpath con `/`.

### B. Eje descendiente

5. Selecciona todos los libros con la expresión más corta posible.
6. Selecciona todos los nombres de sección con la expresión más corta posible.
7. Selecciona todos los autores partiendo de la raíz `biblioteca` y usando `//` para el resto de la ruta.
8. Selecciona todos los títulos. Usa `//` para localizar los libros y `/` para bajar hasta el título.

### C. Eje padre

9. Selecciona las secciones partiendo de los libros.
10. Selecciona el elemento raíz partiendo de los nombres de sección.
11. Selecciona los libros partiendo de los autores.
12. Selecciona los nombres de sección partiendo de los títulos.

### D. Ejes combinados

13. Selecciona el autor de cada libro partiendo de su título.
14. Selecciona los títulos de los libros partiendo de los nombres de sección.
15. Indica qué devuelve cada una de estas expresiones y por qué: `/biblioteca/titulo`, `//biblioteca/titulo` y `//titulo`.
16. Explica con tus palabras qué hace la expresión `//autor/../../nombre` y cuántos nodos devuelve.
17. La expresión `/biblioteca/libro/titulo` no devuelve ningún nodo. Escribe dos formas correctas de seleccionar los títulos de los libros.

### E. Atributos y predicados

18. Selecciona el libro cuyo atributo `id` vale `l2`.
19. Selecciona los títulos de los libros de categoría «ensayo».
20. Selecciona los títulos de los libros cuyo año sea anterior a 1940.
21. Selecciona los títulos de los libros de categoría «novela» y publicados antes de 1940.
22. Selecciona el título cuyo texto sea exactamente «1984».
23. Selecciona los títulos que pertenecen al primer libro de cada sección.

### Soluciones

| Nº | Expresión | Resultado |
| --- | --- | --- |
| 1 | `/biblioteca` | 1 nodo: `biblioteca` |
| 2 | `/biblioteca/seccion` | 2 nodos: las dos `seccion` |
| 3 | `/biblioteca/seccion/nombre` | 2 nodos: «Novela» y «Ensayo» |
| 4 | `/biblioteca/seccion/libro/autor` | 3 nodos: «George Orwell», «F. Scott Fitzgerald» y «Virginia Woolf» |
| 5 | `//libro` | 3 nodos: los tres `libro` |
| 6 | `//nombre` | 2 nodos: «Novela» y «Ensayo» |
| 7 | `/biblioteca//autor` | 3 nodos: los tres `autor` |
| 8 | `//libro/titulo` | 3 nodos: «1984», «El Gran Gatsby» y «Una habitación propia» |
| 9 | `//libro/..` | 2 nodos: las dos `seccion` |
| 10 | `//nombre/../..` | 1 nodo: `biblioteca`. El primer `..` sube a la sección y el segundo a la raíz. |
| 11 | `//autor/..` | 3 nodos: los tres `libro` |
| 12 | `//titulo/../../nombre` | 2 nodos: «Novela» y «Ensayo». Del título se sube al libro, del libro a la sección y se baja a su nombre. |
| 13 | `//titulo/../autor` | 3 nodos: «George Orwell», «F. Scott Fitzgerald» y «Virginia Woolf» |
| 14 | `//nombre/../libro/titulo` | 3 nodos: «1984», «El Gran Gatsby» y «Una habitación propia» |
| 15 | Ver el apartado siguiente | Ver el apartado siguiente |
| 16 | Ver el apartado siguiente | 2 nodos |
| 17 | `/biblioteca/seccion/libro/titulo` y `//libro/titulo` (también vale `//titulo`) | 3 nodos: los tres `titulo` |
| 18 | `//libro[@id='l2']` | 1 nodo: el libro «El Gran Gatsby» |
| 19 | `//libro[@categoria='ensayo']/titulo` | 1 nodo: «Una habitación propia» |
| 20 | `//libro[@anio < 1940]/titulo` | 2 nodos: «El Gran Gatsby» y «Una habitación propia» |
| 21 | `//libro[@categoria='novela' and @anio < 1940]/titulo` | 1 nodo: «El Gran Gatsby» |
| 22 | `//titulo[text()='1984']` | 1 nodo: «1984» |
| 23 | `//libro[1]/titulo` | 2 nodos: «1984» y «Una habitación propia» |

**Ejercicio 15.**

- `/biblioteca/titulo` no devuelve nada, porque los `titulo` no son hijos directos de `biblioteca`.
- `//biblioteca/titulo` tampoco devuelve nada: `//` encuentra `biblioteca`, pero el `/` siguiente exige que `titulo` sea hijo directo suyo.
- `//titulo` devuelve los 3 títulos, porque busca `titulo` a cualquier profundidad.

**Ejercicio 16.** La expresión busca todos los autores, sube de cada autor a su libro, sube de cada libro a su sección y desde la sección baja a su `nombre`. Devuelve 2 nodos, «Novela» y «Ensayo», porque los nodos no se repiten aunque haya varios autores en la misma sección.

# Ejercicios XML (Soluciones)

## ¿Dónde están los ficheros que mencionan los ejercicios?

[https://drive.google.com/drive/folders/1d8YP1CA-zS67-Y-2rMl62KI4zDPG6sKs?usp=drive_link](https://drive.google.com/drive/folders/1d8YP1CA-zS67-Y-2rMl62KI4zDPG6sKs?usp=drive_link)

## Ejercicio

Usa el fichero “beatles.xml” en una web como [https://codebeautify.org/xmlviewer](https://codebeautify.org/xmlviewer) y echa un vistazo a las opciones que encuentras:

- XML tree
- Minify
- Beauty/Format

Utiliza el complemento *XML de Red Hat* de *Visual Studio Code* para conseguir lo mismo.

## Ejercicio 2

Corrige este documento XML e indica las razones por las que está mal. Da una solución.

### Solución

```xml
<?xml version="1.0" encoding="UTF-8"?>
<vehicles>
  <land>
    <vehicle>bike</vehicle>
    <vehicle>car</vehicle>
    <vehicle>tractor</vehicle>
  </land>
  <aquatic>
    <vehicle>canoe</vehicle>
  </aquatic>
  <air>
    <vehicle>plane</vehicle>
    <vehicle>helicopter</vehicle>
  </air>
</vehicles>
```

Razones del error:
- faltaba la declaración XML correcta
- no había una raíz única
- las etiquetas no estaban cerradas correctamente
- los nombres de las etiquetas tenían errores de sintaxis

## Ejercicio 3

Corrige este documento XML e indica las razones por las que está mal. Da una solución.

### Solución

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<singers>
  <singer>
    <firstName>Paul</firstName>
    <lastName>McCartney</lastName>
  </singer>
  <singer>
    <firstName>Aretha</firstName>
    <lastName>Franklin</lastName>
  </singer>
</singers>
```

Razones del error:
- el atributo `standalone` debe ir con nombre y valor, no como texto suelto
- la etiqueta `<singer>` tenía una estructura incompleta
- la etiqueta `<firstName>` se cerró como `<firstname>` con mayúsculas inconsistentes
- la etiqueta `< / name>` es inválida
- la raíz final no estaba bien cerrada

## Ejercicio 4

Dada esta información, represéntala como un fichero XML, teniendo en cuenta lo que dice cada apartado.

1) Utiliza cada columna como un elemento XML.
2) Usa *name* y *country* como elementos. Utiliza *continent* como atributo del elemento *country*.

| nombre | país | continente |
| :---- | :---- | :---- |
| Nueva Delhi | India | Asia |
| Lisboa | Portugal | Europa |
| Tánger | Marruecos | África |

### Solución

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cities>
  <city>
    <name>Nueva Delhi</name>
    <country continent="Asia">India</country>
  </city>
  <city>
    <name>Lisboa</name>
    <country continent="Europa">Portugal</country>
  </city>
  <city>
    <name>Tánger</name>
    <country continent="África">Marruecos</country>
  </city>
</cities>
```

## Ejercicio 5

Dada esta información, represéntala como un fichero XML, teniendo en cuenta lo que dice cada apartado.

1) Utiliza cada columna como un elemento XML.
2) La primera columna es una entidad. Las columnas *day*, *month* y *year* son atributos.

| hecho | día | mes | año |
| :---- | :---- | :---- | :---- |
| IBM presenta el PC | 12 | 8 | 1981 |
| Google se funda | 4 | 9 | 1998 |
| Facebook se funda | 4 | 2 | 2004 |

### Solución

```xml
<?xml version="1.0" encoding="UTF-8"?>
<events>
  <event>
    <fact>IBM presenta el PC</fact>
    <date day="12" month="8" year="1981"/>
  </event>
  <event>
    <fact>Google se funda</fact>
    <date day="4" month="9" year="1998"/>
  </event>
  <event>
    <fact>Facebook se funda</fact>
    <date day="4" month="2" year="2004"/>
  </event>
</events>
```

## Ejercicio 6

Sin utilizar atributos, crea un documento XML que describa las siguientes páginas web.

| IES Antonio Machado
Instituto de Secundaria en Sevilla
[http://www.iestriana.com/](http://www.iestriana.com/) |
| :---- |
| **Wikipedia**
La enciclopedia libre.
[http://www.wikipedia.org/](http://www.wikipedia.org/) |
| **W3C**
El consorcio que define la web: World Wide Web.
[http://www.w3.org/](http://www.w3.org/) |

### Solución

```xml
<?xml version="1.0" encoding="UTF-8"?>
<websites>
  <website>
    <name>IES Antonio Machado</name>
    <description>Instituto de Secundaria en Sevilla</description>
    <url>http://www.iestriana.com/</url>
  </website>
  <website>
    <name>Wikipedia</name>
    <description>La enciclopedia libre.</description>
    <url>http://www.wikipedia.org/</url>
  </website>
  <website>
    <name>W3C</name>
    <description>El consorcio que define la web: World Wide Web.</description>
    <url>http://www.w3.org/</url>
  </website>
</websites>
```

## Ejercicio 7

Crea un fichero XML que represente las notas de los alumnos de un profesor que al menos imparte dos asignaturas y tiene 3 alumnos en cada asignatura.

### Solución

```xml
<?xml version="1.0" encoding="UTF-8"?>
<teacher>
  <subject name="Matemáticas">
    <student>
      <name>Ana</name>
      <grade>8.5</grade>
    </student>
    <student>
      <name>Pedro</name>
      <grade>7.8</grade>
    </student>
    <student>
      <name>Laura</name>
      <grade>9.1</grade>
    </student>
  </subject>
  <subject name="Historia">
    <student>
      <name>Juan</name>
      <grade>7.3</grade>
    </student>
    <student>
      <name>Sofía</name>
      <grade>8.9</grade>
    </student>
    <student>
      <name>Tomás</name>
      <grade>6.7</grade>
    </student>
  </subject>
</teacher>
```

## Ejercicio 8

Crea un fichero XML que represente la ruta de un autobús. Debes guardar el nombre de la ruta, las paradas y el tiempo que se tarda en llegar a cada parada desde la anterior.

### Solución

```xml
<?xml version="1.0" encoding="UTF-8"?>
<busRoute>
  <name>Ruta A</name>
  <stop timeFromPrevious="0">
    <name>Estación</name>
  </stop>
  <stop timeFromPrevious="8">
    <name>Plaza Mayor</name>
  </stop>
  <stop timeFromPrevious="6">
    <name>Hospital</name>
  </stop>
  <stop timeFromPrevious="10">
    <name>Universidad</name>
  </stop>
</busRoute>
```

## Ejercicio 9

Crea un fichero XML que represente un libro de recetas. Al menos debe haber dos recetas. Cada receta debe contener los ingredientes y los pasos del proceso.

### Solución

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cookbook>
  <recipe>
    <title>Tortilla de patatas</title>
    <ingredients>
      <ingredient quantity="4">patatas</ingredient>
      <ingredient quantity="2">huevos</ingredient>
      <ingredient quantity="1">cebolla</ingredient>
      <ingredient quantity="50 ml">aceite</ingredient>
    </ingredients>
    <steps>
      <step>Pelar y cortar las patatas.</step>
      <step>Freír la cebolla y las patatas.</step>
      <step>Mezclar con los huevos batidos.</step>
      <step>Cuajar en la sartén y darle la vuelta.</step>
    </steps>
  </recipe>

  <recipe>
    <title>Ensalada César</title>
    <ingredients>
      <ingredient quantity="1">lechuga</ingredient>
      <ingredient quantity="2">pechugas de pollo</ingredient>
      <ingredient quantity="1 taza">croutons</ingredient>
      <ingredient quantity="1">aderezo César</ingredient>
    </ingredients>
    <steps>
      <step>Lavar la lechuga y trocearla.</step>
      <step>Preparar el pollo a la plancha.</step>
      <step>Mezclar todos los ingredientes.</step>
      <step>Aliñar con el aderezo y servir.</step>
    </steps>
  </recipe>
</cookbook>
```

## Ejercicio 10

Dibuja el árbol de relaciones entre entidades que podríamos tener en las soluciones de los ejercicios 7, 8 y 9.

### Solución

```xml
<?xml version="1.0" encoding="UTF-8"?>
<relationships>
  <teacher>
    <name>Profesor</name>
    <subject>
      <name>Asignatura</name>
      <student>
        <name>Alumno</name>
        <grade>Nota</grade>
      </student>
    </subject>
  </teacher>

  <busRoute>
    <name>Ruta</name>
    <stop>
      <name>Parada</name>
      <timeFromPrevious>Tiempo desde la anterior</timeFromPrevious>
    </stop>
  </busRoute>

  <cookbook>
    <recipe>
      <title>Receta</title>
      <ingredient>
        <name>Ingrediente</name>
        <quantity>Cantidad</quantity>
      </ingredient>
      <step>Pasos</step>
    </recipe>
  </cookbook>
</relationships>
```

En resumen, los tres ejercicios se pueden modelar como jerarquías de entidades:
- profesor → asignaturas → alumnos → notas
- ruta de autobús → paradas → tiempos
- libro de recetas → recetas → ingredientes y pasos

# Ejercicios DTD

## ¿Dónde están los ficheros que mencionan los ejercicios?

[https://drive.google.com/drive/folders/1d8YP1CA-zS67-Y-2rMl62KI4zDPG6sKs?usp=drive_link](https://drive.google.com/drive/folders/1d8YP1CA-zS67-Y-2rMl62KI4zDPG6sKs?usp=drive_link)

## Elementos sin atributos

Los siguientes documentos no son válidos porque contienen uno o dos errores (los errores no están en la DTD interna: están en el XML). Corrige los errores y comprueba con Visual Studio Code y la extensión XML de Red Hat que ya son documentos válidos.

### Ejercicio 1-1

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE numbers [
  <!ELEMENT numbers (#PCDATA)>
]>

<numbers>
  <number>25</number>
</numbers>
```

### Ejercicio 1-2

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE letters [
  <!ELEMENT letters (letter)>
  <!ELEMENT letter (#PCDATA)>
]>

<letters>
  <letter>m</letter>
  <letter>e</letter>
</letters>
```

### Ejercicio 1-3

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE colors [
  <!ELEMENT colors (color*)>
  <!ELEMENT color (#PCDATA)>
]>

<colors>
  <color>dark blue</color>
  <color>yellow</color>
</colors>
```

### Ejercicio 1-4

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE flowers [
  <!ELEMENT flowers (flower+)>
  <!ELEMENT flower (#PCDATA)>
]>

<flowers>
  <flower>rosa</flower>
  <flower>tulipán</flower>
</flowers>
```

### Ejercicio 1-5

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE animals [
  <!ELEMENT animals (animal*)>
  <!ELEMENT animal (#PCDATA)>
]>

<animals>
  <animal>perro</animal>
  <animal>gato</animal>
</animals>
```

### Ejercicio 1-6

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE writers [
  <!ELEMENT writers (writer*)>
  <!ELEMENT writer (name, birth)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT birth (#PCDATA)>
]>

<writers>
  <writer>
    <name>Mario Vargas Llosa</name>
    <birth>28 de marzo de 1936</birth>
  </writer>
  <writer>
    <name>Milan Kundera</name>
    <birth>1 de abril de 1929</birth>
  </writer>
</writers>
```

### Ejercicio 1-7

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE musicians [
  <!ELEMENT musicians (musician*)>
  <!ELEMENT musician ((name | alias), birthDate)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT alias (#PCDATA)>
  <!ELEMENT birthDate (#PCDATA)>
]>

<musicians>
  <musician>
    <name>Antonio Vivaldi</name>
    <alias>El Prístino Naranja</alias>
    <birthDate>4 de marzo de 1678</birthDate>
  </musician>
  <musician>
    <name>Johann Sebastian Bach</name>
    <alias>El Calvo Viejo</alias>
    <birthDate>21 de marzo de 1685</birthDate>
  </musician>
</musicians>
```

### Ejercicio 1-8

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE agenda [
  <!ELEMENT agenda (contact*)>
  <!ELEMENT contact (name, landPhone*, mobilePhone+)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT landPhone (#PCDATA)>
  <!ELEMENT mobilePhone (#PCDATA)>
]>

<agenda>
  <contact>
    <name>Ayuntamiento</name>
    <landPhone>010</landPhone>
  </contact>
  <contact>
    <name>Emergencias</name>
    <landPhone>112 (Unión Europea)</landPhone>
    <mobilePhone>Desconocido</mobilePhone>
    <landPhone>911 (EE. UU.)</landPhone>
  </contact>
</agenda>
```

### Ejercicio 1-9

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE solarSystem [
  <!ELEMENT solarSystem (body*)>
  <!ELEMENT body (planet | satellite | asteroid)>
  <!ELEMENT planet (#PCDATA)>
  <!ELEMENT satellite (#PCDATA)>
  <!ELEMENT asteroid (#PCDATA)>
]>

<solarSystem>
  <body>
    <planet>Tierra</planet>
    <satellite>Luna</satellite>
  </body>
  <body>
    <asteroid>Ceres</asteroid>
  </body>
</solarSystem>
```

## Elementos sin atributos (DTD interna)

Los siguientes documentos no son válidos porque contienen errores en la DTD interna. Corrige los errores y comprueba con XML Copy Editor que ya son documentos válidos. En la mayoría de los casos hay varias maneras de corregir la DTD; intenta elegir la más sencilla.

### Ejercicio 2-1

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE favourites [
  <!ELEMENT favourites (bookmark)>
  <!ELEMENT bookmark (name, uri)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT uri (#PCDATA)>
]>

<favourites>
  <bookmark>
    <name>W3C</name>
    <uri>http://www.w3.org/</uri>
  </bookmark>
  <bookmark>
    <name>Web Hypertext Application Technology Working Group (WHATWG)</name>
    <uri>http://www.whatwg.org/</uri>
  </bookmark>
</favourites>
```

### Ejercicio 2-2

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE anniversaires [
  <!ELEMENT anniversaires (anniversaire+)>
  <!ELEMENT anniversaire (date, fact)>
  <!ELEMENT date (#PCDATA)>
  <!ELEMENT fact (#PCDATA)>
]>

<anniversaires>
  <anniversaire>
    <date>20 de julio de 1969</date>
    <fact>El hombre llega a la Luna.</fact>
  </anniversaire>
  <anniversaire>
    <date>12 de octubre de 1492</date>
    <fact>Llegada de Colón a América.</fact>
  </anniversaire>
  <anniversaire>
    <date>6 de abril de 1909</date>
    <fact>Llegada de Robert Peary al Polo Norte.</fact>
  </anniversaire>
</anniversaires>
```

### Ejercicio 2-3

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE airports [
  <!ELEMENT airports (airport*)>
  <!ELEMENT airport (name, closed?)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT closed EMPTY>
]>

<airports>
  <airport>
    <name>Berlín Schönefeld (SFX)</name>
  </airport>
  <airport>
    <name>Berlín Tempelhof (THF)</name>
    <closed/>
  </airport>
</airports>
```

### Ejercicio 2-4

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE flights [
  <!ELEMENT flights (flight*)>
  <!ELEMENT flight (source, target)>
  <!ELEMENT source (#PCDATA)>
  <!ELEMENT target (#PCDATA)>
]>

<flights>
  <flight>
    <source>Valencia (VLC)</source>
    <target>Londres Heathrow (LHR)</target>
  </flight>
  <flight>
    <source>París Charles de Gaulle (CDG)</source>
    <target>Berlín Schönefeld (SFX)</target>
  </flight>
</flights>
```

### Ejercicio 2-5

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE spanishKings [
  <!ELEMENT spanishKings (king*, queen*)>
  <!ELEMENT king (name, father, mother)>
  <!ELEMENT queen (name, father, mother)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT father (#PCDATA)>
  <!ELEMENT mother (#PCDATA)>
]>

<spanishKings>
  <king>
    <name>Felipe III</name>
    <father>Felipe II</father>
    <mother>Ana de Austria</mother>
  </king>
  <queen>
    <name>Juana la Loca</name>
    <father>Fernando el Católico</father>
    <mother>Isabel la Católica</mother>
  </queen>
  <king>
    <name>Carlos I</name>
    <father>Felipe el Hermoso</father>
    <mother>Juana la Loca</mother>
  </king>
</spanishKings>
```

### Ejercicio 2-6

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE countries [
  <!ELEMENT countries (country*)>
  <!ELEMENT country (name, europeanUnion?, nato?)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT europeanUnion EMPTY>
  <!ELEMENT nato EMPTY>
]>

<countries>
  <country>
    <name>España</name>
    <europeanUnion/>
    <nato/>
  </country>
  <country>
    <name>Noruega</name>
    <nato/>
  </country>
  <country>
    <name>Austria</name>
    <europeanUnion/>
  </country>
</countries>
```

### Ejercicio 2-7

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE colors [
  <!ELEMENT colors (color*)>
  <!ELEMENT color (nameSvg, code)>
  <!ELEMENT nameSvg (#PCDATA)>
  <!ELEMENT code (rgb | cmyk)>
  <!ELEMENT rgb (#PCDATA)>
  <!ELEMENT cmyk (#PCDATA)>
]>

<colors>
  <color>
    <nameSvg>Púrpura</nameSvg>
    <code>
      <rgb>#800080</rgb>
    </code>
  </color>
  <color>
    <nameSvg>Púrpura</nameSvg>
    <code>
      <cmyk>#00FF007F</cmyk>
    </code>
  </color>
</colors>
```

### Ejercicio 2-8

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE accounting [
  <!ELEMENT accounting (note*)>
  <!ELEMENT note ((incoming | expense)?, date, amount, concept)>
  <!ELEMENT incoming EMPTY>
  <!ELEMENT expense EMPTY>
  <!ELEMENT date (#PCDATA)>
  <!ELEMENT amount (#PCDATA)>
  <!ELEMENT concept (#PCDATA)>
]>

<accounting>
  <note>
    <incoming/>
    <date>24 de febrero de 2011</date>
    <amount>1800,00 €</amount>
    <concept>Salario</concept>
  </note>
  <note>
    <expense/>
    <date>28 de febrero de 2011</date>
    <amount>74,25 €</amount>
    <concept>Factura de la luz</concept>
  </note>
</accounting>
```

### Ejercicio 2-9

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE messages [
  <!ELEMENT messages (message+)>
  <!ELEMENT message (from, for, hour, text)>
  <!ELEMENT from (#PCDATA)>
  <!ELEMENT for (#PCDATA)>
  <!ELEMENT hour (#PCDATA)>
  <!ELEMENT text (#PCDATA | strong)*>
  <!ELEMENT strong (#PCDATA)>
]>

<messages>
  <message>
    <from>Pepe (pepe@example.com)</from>
    <for>Juan (juan@example.com)</for>
    <hour>28/02/2011 17:48:23,61</hour>
    <text>¿Hola, Juan, qué haces?</text>
  </message>
  <message>
    <from>Juan (juan@example.com)</from>
    <for>Pepe (pepe@example.com)</for>
    <hour>28/02/2011 17:54:20,87</hour>
    <text>Aquí, estudiando <strong>XML</strong>.</text>
  </message>
</messages>
```

## Elementos con atributos

Los siguientes documentos no son válidos porque contienen uno o dos errores (los errores no están en la DTD interna). Corrige los errores y comprueba con XML Copy Editor que ya son documentos válidos.

### Ejercicio 3-1

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE person [
  <!ELEMENT person EMPTY>
  <!ATTLIST person name CDATA #IMPLIED>
]>

<person dni="03141592E"/>
```

### Ejercicio 3-2

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE movie [
  <!ELEMENT movie EMPTY>
  <!ATTLIST movie title CDATA #IMPLIED>
  <!ATTLIST movie genre CDATA #IMPLIED>
]>

<movie title="Stagecoach" genre="western"/>
```

### Ejercicio 3-3

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE paintings [
  <!ELEMENT paintings (painting*)>
  <!ELEMENT painting EMPTY>
  <!ATTLIST painting title ID #REQUIRED>
  <!ATTLIST painting author CDATA #REQUIRED>
]>

<paintings>
  <painting title="Adan_y_Eva" author="Alberto Durero"/>
  <painting title="Adan_y_Eva_2" author="Lucas Cranach, el Viejo"/>
</paintings>
```

### Ejercicio 3-4

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE shoppingList [
  <!ELEMENT shoppingList (item*)>
  <!ELEMENT item EMPTY>
  <!ATTLIST item name CDATA #REQUIRED>
  <!ATTLIST item amount CDATA #REQUIRED>
]>

<shoppingList>
  <item name="milk" amount="12 litros"/>
  <item name="bread" amount="3 piezas"/>
</shoppingList>
```

### Ejercicio 3-5

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE football [
  <!ELEMENT football (player*)>
  <!ELEMENT player EMPTY>
  <!ATTLIST player name CDATA #REQUIRED>
  <!ATTLIST player code ID #REQUIRED>
]>

<football>
  <player name="Alfredo Di Stéfano" code="p1"/>
  <player name="Edson Arantes do Nascimento, Pelé" code="p2"/>
  <player name="Diego Armando Maradona" code="p3"/>
  <player name="Johan Cruyff" code="p4"/>
</football>
```

### Ejercicio 3-6

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE football [
  <!ELEMENT football ((player | team)*)>
  <!ELEMENT player EMPTY>
  <!ATTLIST player name CDATA #REQUIRED>
  <!ATTLIST player code ID #REQUIRED>
  <!ELEMENT team EMPTY>
  <!ATTLIST team name CDATA #REQUIRED>
  <!ATTLIST team players IDREFS #IMPLIED>
]>

<football>
  <player name="Alfredo Di Stéfano" code="ads"/>
  <player name="Edison Arantes do Nascimento" code="ean"/>
  <player name="Diego Armando Maradona" code="dam"/>
  <player name="Johan Cruyff" code="jc"/>
  <team name="Società Sportiva Calcio Napoli" players="dam"/>
  <team name="Fútbol Club Barcelona" players="jc dam"/>
</football>
```

## Elementos con atributos (DTD interna)

Los siguientes documentos no son válidos porque contienen errores en la DTD interna. Corrige los errores y comprueba con XML Copy Editor que ya son documentos válidos. Hay varias formas de corregir la DTD; elige la más simple.

### Ejercicio 4-1

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE book [
  <!ELEMENT book EMPTY>
  <!ATTLIST book author CDATA #REQUIRED>
]>

<book author="Mario Vargas Llosa"/>
```

### Ejercicio 4-2

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE inventors [
  <!ELEMENT inventors (inventor*)>
  <!ELEMENT inventor EMPTY>
  <!ATTLIST inventor invention CDATA #REQUIRED>
  <!ATTLIST inventor name CDATA #REQUIRED>
]>

<inventors>
  <inventor name="Robert Adler" invention="Mando a distancia"/>
  <inventor name="László József Bíró" invention="Bolígrafo"/>
  <inventor name="Josephine Garis Cochran" invention="Lavavajillas"/>
  <inventor name="Fuego" invention="Fuego"/>
</inventors>
```

### Ejercicio 4-3

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE thingsToDo [
  <!ELEMENT thingsToDo (thing+)>
  <!ELEMENT thing (#PCDATA)>
  <!ATTLIST thing date CDATA #REQUIRED>
  <!ATTLIST thing deadline CDATA #REQUIRED>
]>

<thingsToDo>
  <thing date="20 de febrero de 2011" deadline="1 de marzo de 2011">Ejercicios de DTD</thing>
  <thing date="21 de febrero de 2011" deadline="5 de marzo de 2011">Tema de XSLT</thing>
</thingsToDo>
```

### Ejercicio 4-4

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE resolutions [
  <!ELEMENT resolutions (resolucion+)>
  <!ELEMENT resolucion EMPTY>
  <!ATTLIST resolucion name CDATA #REQUIRED>
  <!ATTLIST resolucion height CDATA #REQUIRED>
  <!ATTLIST resolucion width CDATA #REQUIRED>
]>

<resolutions>
  <resolucion name="VGA" height="480" width="640"/>
  <resolucion name="XGA" height="1024" width="768"/>
  <resolucion name="HD 1080" height="1920" width="1080"/>
</resolutions>
```

### Ejercicio 4-5

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mortadeloAlbums [
  <!ELEMENT mortadeloAlbums (album*)>
  <!ELEMENT album EMPTY>
  <!ATTLIST album name CDATA #REQUIRED>
  <!ATTLIST album date CDATA #REQUIRED>
]>

<mortadeloAlbums>
  <album name="El sulfato atómico" date="1969"/>
  <album name="La caja de diez cerrojos" date="1971"/>
  <album name="El otro yo del profesor Bacterio" date="1973"/>
  <album name="Los cacharros majaretas" date="1974"/>
</mortadeloAlbums>
```

## Creación de DTDs

### Ejercicio 5-1 (equivale al ejercicio 6)

Queremos definir un lenguaje de marcado para representar los resultados de una liga de fútbol. La información que queremos guardar para cada partido es:

- nombre del equipo local
- nombre del equipo visitante
- goles marcados por el equipo local
- goles marcados por el equipo visitante

Escribe tres documentos que incluyan los siguientes resultados:

- Nottingham Preesa: 0 - Inter de Mitente: 1
- Vodka Juniors: 3 - Sparta da Risa: 3
- Water of Munich: 4 - Esteaua is from the tap: 2

Cada documento incluirá una DTD distinta para representar ese lenguaje de marcado:

1. DTD sin atributos, solo etiquetas (archivo: Exercise5-1.xml)
2. DTD con los goles como atributos (archivo: Exercise5-2.xml)
3. DTD en la que toda la información se almacena como atributos (archivo: Exercise5-3.xml)

### Ejercicio 5-2 (equivale al ejercicio 6)

Usa el archivo “beatles.xml”. Crea una DTD para validar el archivo anterior con el nombre “Exercise6.dtd”.

Guarda una copia de “beatles.xml” con la modificación para incluir la referencia a la DTD y llámala “Exercise6.xml”.

### Ejercicio 5-3 (equivale al ejercicio 7)

Crea una DTD para validar los documentos XML que creaste para el ejercicio 4 de la tarea LM_UD1_T1.

Para cada punto, haz una copia del archivo original modificando su contenido para incluir la referencia a la DTD. A continuación se indica el nombre que debe tener el documento DTD.

| Nombre | País | Continente |
| :---- | :---- | :---- |
| Nueva Delhi | India | Asia |
| Lisboa | Portugal | Europa |
| Tánger | Egipto | África |

1) Usa cada columna como una etiqueta (xml-doc: Exercise7-a.xml, dtd-doc: Exercise7-a.dtd)
2) Usa *continent* como atributo de *country* (xml-doc: Exercise7-b.xml, dtd-doc: Exercise7-b.dtd)

### Ejercicio 5-4 (equivale al ejercicio 8)

Crea una DTD para validar los documentos XML que creaste para el ejercicio 5 de la tarea LM_UD1_T1.

Para cada punto, haz una copia del archivo original modificando su contenido para incluir la referencia a la DTD.

| Descripción del hecho histórico | Día | Mes | Año |
| :---- | :---- | :---- | :---- |
| IBM presenta el PC | 12 | 8 | 1981 |
| Google se funda | 4 | 9 | 1998 |
| Facebook se funda | 4 | 2 | 2004 |

1) Usa cada columna como una etiqueta (xml-doc: Exercise8-a.xml, dtd-doc: Exercise8-a.dtd)
2) Crea un nuevo documento XML donde una de esas columnas sea un atributo de otra (xml-doc: Exercise8-b.xml, dtd-doc: Exercise8-b.dtd)

### Ejercicio 5-5 (equivale al ejercicio 9)

Crea una DTD para validar el documento XML que creaste para el ejercicio 6 de la tarea LM_UD1_T1 y llámala “Exercise9.dtd”.

Sin usar atributos, crea un documento XML que describa una lista de marcadores de páginas web. La información de cada página es el nombre, una breve descripción y su URL. Los datos de los marcadores son los que aparecen en la siguiente tabla.

| IES Antonio Machado
Instituto Antonio Machado.
[https://www.iesamachado.es/](https://www.iesamachado.es/) |
| :---- |
| **Wikipedia**
La enciclopedia libre.
[http://www.wikipedia.org/](http://www.wikipedia.org/) |
| **W3C**
El consorcio de la World Wide Web.
[http://www.w3.org/](http://www.w3.org/) |

No olvides incluir una copia modificada del archivo original “Exercise9.xml” con la referencia a su documento DTD.


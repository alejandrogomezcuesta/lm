# XSLT Teoría

[Tutorial de Eniun de XSLT](https://www.eniun.com/tutorial-xslt/).

De este tutorial, solo vamos a ver el elemento **`6.1. Elemento <xsl:value-of>`** y ninguno otro.

## Ejercicios para practicar

[Descárgate este fichero](biblioteca-xslt.zip).

Descomprímelo y abre la carpeta descomprimida con Visual Studio Code.

## Esquema de cómo funciona `<xsl:template>`

```mermaid
flowchart TD
    A["Inicio: nodo_actual = '/'"] --> B{"¿Existe xsl:template que coincida con nodo_actual?"}

    %% RAMA NO EXISTE PLANTILLA (Regla implícita)
    B -- NO --> C1{"¿nodo_actual contiene texto?"}

    C1 -- SÍ --> C2[Se imprime el valor del texto]
    C1 -- NO --> C3["Se ejecuta implícitamente xsl:apply-templates sobre los hijos directos"]

    C3 --> C5{"¿El nodo tiene hijos?"}
    C5 -- SÍ --> C6[nodo_actual = primer hijo directo]
    C6 --> B
    C5 -- NO --> C4

    %% RAMA SÍ EXISTE PLANTILLA
    B -- SÍ --> D1["Ejecutar contenido de la plantilla (HTML, xsl:value-of, xsl:for-each, etc.)"]

    D1 --> D2{"¿Qué tipo de xsl:apply-templates contiene la plantilla?"}

    D2 -- "Sin select" --> D3["Avanza a los hijos directos del nodo_actual"]
    D3 --> C5

    D2 -- "Con select='...'" --> D4["Evalúa la expresión XPath y selecciona los nodos resultantes"]
    D4 --> D5[nodo_actual = nodo seleccionado por select]
    D5 --> B

    D2 -- "No contiene" --> C10["Se detiene el recorrido: se ignoran los hijos de nodo_actual"]
    C10 --> C4

    %% NAVEGACIÓN Y RETORNO
    C2 --> C4{"¿Hay más nodos pendientes en la pila de ejecución?"}
    C4 -- SÍ --> C7[nodo_actual = siguiente nodo pendiente]
    C7 --> B

    C4 -- NO --> E([Fin del procesamiento])
```

## Diferentes salidas para `<xsl:stylesheet>`

Texto plano

```xml
<xsl:output method="text" encoding="UTF-8"/>
```

HTML

```xml
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
```

XML

```xml
<xsl:output method="xml" encoding="UTF-8" indent="yes"/>
```


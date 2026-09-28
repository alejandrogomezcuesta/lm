# Publica tu propio servicio RSS

## Introducción

En esta práctica crearás un feed RSS, lo publicarás en un servidor Ubuntu con Apache en AWS y lo seguirás desde un lector de RSS.

> **Importante:** usaremos una instancia EC2 (una máquina virtual) y Apache. No crearemos un contenedor Docker. En esta práctica, subir los archivos "al servidor" significa copiarlos al directorio que Apache publica en la web.

## Objetivos

- Crear una instancia Ubuntu accesible desde Internet y asignarle una dirección IP pública estática.
- Crear un feed RSS 2.0 con al menos cuatro noticias originales y publicarlo en Apache.
- Comprobar el feed con el validador oficial y suscribirse a él desde Feedly.

## Paso 1. Prepara el servidor Ubuntu en AWS

### 1.1. Crea una instancia EC2

1. Entra en la consola de AWS y abre **EC2**. Comprueba que estás en la región que vas a utilizar; los recursos se crean por región.
2. Pulsa **Launch instance** y asigna un nombre, por ejemplo, `servidor-rss-1asir`.
3. En **Application and OS Images**, selecciona una imagen oficial **Ubuntu Server LTS** (por ejemplo, Ubuntu Server 24.04 LTS).
4. Elige un tipo de instancia pequeño permitido por la cuenta del centro. Las condiciones de la capa gratuita y los precios pueden cambiar; confirma con tu profesor qué cuenta y tipo debes usar.
5. Crea un par de claves para conectarte por SSH. Descarga el fichero `.pem`, guárdalo en un lugar seguro y no lo compartas ni lo subas a Classroom.
6. En la configuración de red, crea o selecciona un grupo de seguridad con estas reglas de entrada:
   - **SSH**, puerto `22`, origen **My IP**. No abras SSH a todo Internet (`0.0.0.0/0`).
   - **HTTP**, puerto `80`, origen `Anywhere-IPv4` (`0.0.0.0/0`), para que el feed y la página sean públicos.
7. Inicia la instancia y espera a que su estado sea **Running** y sus comprobaciones estén correctas.

### 1.2. Asígnale una IP estática

La IP pública automática puede cambiar si se detiene y vuelve a iniciar la instancia. Para mantener una dirección fija, reserva y asocia una **Elastic IP**:

1. En EC2, abre **Network & Security > Elastic IPs** y pulsa **Allocate Elastic IP address**.
2. Selecciona la dirección reservada y elige **Actions > Associate Elastic IP address**.
3. Selecciona la instancia `servidor-rss-1asir` y confirma la asociación.
4. Copia la dirección IPv4 pública asignada. En los ejemplos siguientes, sustituye `IP_PUBLICA` por esa dirección.

AWS puede cobrar por direcciones IPv4 públicas y otros recursos, según la cuenta y las tarifas vigentes. Revisa los costes con tu profesor y no dejes recursos encendidos después de la práctica sin autorización.

### 1.3. Conéctate por SSH e instala Apache

Abre bash en tu ordenador, desde la carpeta donde guardaste el fichero `.pem`. Sustituye el nombre de la clave y la IP por los tuyos. La cuenta predeterminada de Ubuntu en la imagen de AWS es `ubuntu`.

```bash
# Abre una sesión segura en la instancia usando la clave privada y la IP pública estática.
ssh -i .\asir-rss.pem ubuntu@IP_PUBLICA
```

Si aparece una pregunta sobre la autenticidad del servidor, escribe `yes` solo si la IP corresponde a tu instancia. Ya dentro de Ubuntu, ejecuta:

```bash
# Actualiza la lista de paquetes disponibles en Ubuntu.
sudo apt update
# Instala el servidor web Apache sin pedir confirmación interactiva.
sudo apt install apache2 -y
# Configura Apache para iniciarse automáticamente y lo pone en marcha ahora.
sudo systemctl enable --now apache2
# Muestra el estado de Apache para comprobar que está activo.
sudo systemctl status apache2 --no-pager
```

Abre `http://IP_PUBLICA` en el navegador. Si ves la página predeterminada de Apache, el servidor responde. Si no carga, revisa que Apache esté activo y que el grupo de seguridad permita tráfico HTTP por el puerto 80.

## Paso 2. Crea el fichero RSS

Un feed RSS es un documento XML que describe una fuente y sus noticias. En clase seguimos el [tutorial de RSS de Eniun](https://www.eniun.com/tutorial-rss/); consúltalo para repasar los elementos y el formato.

Puedes escoger, por ejemplo, tecnología y ciberseguridad, videojuegos, deportes, música, medioambiente, ciencia, viajes o noticias de tu centro. Redacta **al menos cuatro noticias completas**: cada una debe tener un título claro y una descripción comprensible, con varios datos o ideas y buena ortografía. Puedes usar una IA u otra herramienta como apoyo, pero revisa y adapta el resultado: el feed debe ser coherente y el contenido no debe copiar artículos ajenos.

Guarda el fichero como `feed.xml`, con codificación UTF-8. Este ejemplo trata sobre tecnología sostenible. Las direcciones `https://ejemplo.com/...` son marcadores de posición: sustitúyelas por enlaces válidos relacionados con tus noticias. Mantén los cuatro elementos `<item>` y cambia sus textos por tus propias noticias.

```xml
<!-- Declararación de fichero XML. -->
<?xml version="1.0" encoding="UTF-8"?>
<!-- Declara el elemento raíz RSS y su versión. -->
<rss version="2.0">
  <!-- Agrupa los datos generales del canal y todas sus noticias. -->
  <channel>
    <!-- Indica el nombre del canal que verán los lectores RSS. -->
    <title>Aula ASIR: tecnología sostenible</title>
    <!-- Indica la página principal relacionada con el canal; sustituye el dominio de ejemplo. -->
    <link>https://ejemplo.com/</link>
    <!-- Resume el tema del canal en una frase. -->
    <description>Ideas y noticias sobre tecnología responsable creadas por el alumnado de ASIR.</description>
    <!-- Declara el idioma principal del contenido. -->
    <language>es-es</language>
    <!-- Identifica de forma única y estable la primera noticia. -->
    <item>
      <!-- Presenta el tema de la primera noticia. -->
      <title>El centro inicia una campaña para alargar la vida de los equipos</title>
      <!-- Enlaza con una página relacionada; reemplaza esta dirección de ejemplo. -->
      <link>https://ejemplo.com/noticias/reutilizar-equipos</link>
      <!-- Desarrolla la noticia con contexto y detalles, no solo con una frase vacía. -->
      <description>El alumnado de ASIR ha propuesto revisar los ordenadores del centro antes de sustituirlos. La iniciativa incluye inventariar los equipos, detectar averías sencillas y documentar qué componentes pueden reutilizarse. El objetivo es reducir residuos electrónicos y conocer mejor el mantenimiento del hardware.</description>
      <!-- Asigna a esta noticia un identificador único que no dependa de que el enlace sea una página real. -->
      <guid isPermaLink="false">aula-asir-tecnologia-sostenible-01</guid>
    <!-- Cierra la primera noticia. -->
    </item>
    <!-- Identifica de forma única y estable la segunda noticia. -->
    <item>
      <!-- Presenta el tema de la segunda noticia. -->
      <title>Un grupo de estudiantes mide el consumo de un servidor de pruebas</title>
      <!-- Enlaza con una página relacionada; reemplaza esta dirección de ejemplo. -->
      <link>https://ejemplo.com/noticias/consumo-servidor</link>
      <!-- Explica qué se hizo, cómo se observó y qué se aprendió. -->
      <description>Durante una práctica, varios estudiantes compararon el consumo de un servidor encendido sin carga con el de otro que ejecutaba servicios de prueba. Registraron las mediciones y debatieron cómo influyen la configuración y el tiempo de funcionamiento. Como siguiente paso, prepararán una guía para apagar los recursos que no se estén utilizando.</description>
      <!-- Asigna a esta noticia un identificador único dentro del feed. -->
      <guid isPermaLink="false">aula-asir-tecnologia-sostenible-02</guid>
    <!-- Cierra la segunda noticia. -->
    </item>
    <!-- Identifica de forma única y estable la tercera noticia. -->
    <item>
      <!-- Presenta el tema de la tercera noticia. -->
      <title>El taller de reparación recupera periféricos para el aula</title>
      <!-- Enlaza con una página relacionada; reemplaza esta dirección de ejemplo. -->
      <link>https://ejemplo.com/noticias/taller-perifericos</link>
      <!-- Describe la actividad, sus participantes y su resultado. -->
      <description>El taller de reparación del centro ha puesto a prueba teclados y ratones que estaban apartados por fallos menores. Tras limpiarlos, revisar sus conexiones y registrar las incidencias, varios periféricos han podido volver a utilizarse en el aula. La actividad también ha servido para practicar diagnósticos básicos y trabajar con seguridad.</description>
      <!-- Asigna a esta noticia un identificador único dentro del feed. -->
      <guid isPermaLink="false">aula-asir-tecnologia-sostenible-03</guid>
    <!-- Cierra la tercera noticia. -->
    </item>
    <!-- Identifica de forma única y estable la cuarta noticia. -->
    <item>
      <!-- Presenta el tema de la cuarta noticia. -->
      <title>La clase publica recomendaciones para reducir residuos electrónicos</title>
      <!-- Enlaza con una página relacionada; reemplaza esta dirección de ejemplo. -->
      <link>https://ejemplo.com/noticias/residuos-electronicos</link>
      <!-- Completa la noticia con recomendaciones concretas y una conclusión. -->
      <description>Después de investigar qué ocurre con los aparatos electrónicos al final de su vida útil, la clase ha elaborado recomendaciones para elegir, mantener y reciclar dispositivos. Entre las propuestas están reparar antes de reemplazar, borrar los datos personales antes de entregar un equipo y utilizar puntos de recogida autorizados. El grupo compartirá la guía con otros cursos.</description>
      <!-- Asigna a esta noticia un identificador único dentro del feed. -->
      <guid isPermaLink="false">aula-asir-tecnologia-sostenible-04</guid>
    <!-- Cierra la cuarta noticia. -->
    </item>
  <!-- Cierra el canal. -->
  </channel>
<!-- Cierra el documento RSS. -->
</rss>
```

Los comentarios `<!-- ... -->` son comentarios XML: ayudan a entender la plantilla y no aparecen como noticias en el lector. Si escribes un ampersand (`&`) dentro de un valor XML, cámbialo por `&amp;`; por ejemplo, `Ciencia &amp; tecnología`.

## Paso 3. Sube los ficheros al servidor por SSH

Guarda `feed.xml` en una carpeta de tu ordenador. Abre la terminal en esa carpeta. El siguiente comando copia ambos archivos a la carpeta personal del usuario `ubuntu` de la instancia:

```bash
# Copia el fichero feed.xml a la carpeta personal de Ubuntu.
scp -i asir-rss.pem feed.xml ubuntu@IP_PUBLICA:~
```

Ahora en el servidor ubuntu donde se está ejecutando Apache, conéctate con SSH (si no estabas ya conectado) y cambia el usuario y grupo del fichero así como sus permisos:

```bash
# Nos conectamos al contenedor de ubuntu
ssh -i asir-rss.pem ubuntu@IP_PUBLICA
```

Dentro del contenedor movemos el fichero `feed.xml` y lo configuramos para que Apache pueda trabajar con él.

```bash
# Mueve el fichero `feed.xml` a la carpeta donde de Apache
sudo mv ~/feed.xml /var/www/html/feed.xml
# Cambia el usuario dueño y el grupo
sudo chown www-data:www-data /var/www/html/feed.xml
# Cambia los permisos
sudo chmod 644 /var/www/html/feed.xml
```

Comprueba en el navegador que `http://IP_PUBLICA/` muestra tu página y que `http://IP_PUBLICA/feed.xml` abre el feed. Si ya existía un `index.html` de Apache, el segundo comando lo reemplaza en la instancia.

## Paso 4. Valida el feed XML

1. Abre el [W3C Feed Validation Service](https://validator.w3.org/feed/).
2. Introduce la dirección pública completa de tu feed: `http://IP_PUBLICA/feed.xml`.
3. Pulsa **Check**. El validador debe poder acceder al archivo y no mostrar errores de formato.
4. Si hay errores, lee el mensaje y corrige `feed.xml` en tu ordenador. Vuelve a subirlo con el comando `scp` y el comando SSH de instalación del paso 3, y valida la dirección de nuevo.

Si el validador no puede descargar el feed, prueba primero la dirección en una ventana privada del navegador y revisa que la instancia siga encendida, Apache esté activo y el puerto 80 esté abierto. No subas una captura de un feed que todavía tenga errores sin corregir.

## Paso 5. Publica también `index.html`

Descarga la [plantilla `index.html`](plantilla/index.html) incluida con esta práctica. Es una página sencilla que enlaza el feed desde el `<head>` mediante la línea solicitada:

```html
<!-- Anuncia a los navegadores y lectores dónde está el feed RSS de la página. -->
<link rel="alternate" title="RSS" href="feed.xml" type="application/rss+xml" />
```

El atributo `href="feed.xml"` indica que el feed está junto a la página. Por eso, en el paso 3 ambos se copian a `/var/www/html/`. Si cambias el nombre o la ubicación del feed, actualiza también `href` para que coincida.

Como hicimos con el fichero `feed.xml`, ahora tenemos que subir este otro fichero `index.html` y configurar su usuario, grupo y permisos.

```bash
# Nos conectamos al contenedor de ubuntu
ssh -i asir-rss.pem ubuntu@IP_PUBLICA
```

Dentro del contenedor movemos el fichero `feed.xml` y lo configuramos para que Apache pueda trabajar con él.

```bash
# Mueve el fichero `index.html` a la carpeta donde de Apache
sudo mv ~/index.html /var/www/html/index.html
# Cambia el usuario dueño y el grupo
sudo chown www-data:www-data /var/www/html/index.html
# Cambia los permisos
sudo chmod 644 /var/www/html/index.html

## Paso 6. Sigue tu propio feed desde Feedly

1. Entra en [Feedly](https://feedly.com/) y crea una cuenta o inicia sesión.
2. Usa **Add content** o la opción equivalente para añadir una fuente. La interfaz puede cambiar ligeramente.
3. Pega la dirección directa `http://IP_PUBLICA/feed.xml` y selecciona el resultado que corresponde a tu canal.
4. Pulsa **Follow** y elige una carpeta, por ejemplo, `Práctica RSS ASIR`.
5. Abre esa carpeta y comprueba que aparecen tus cuatro noticias. Puedes actualizar el feed después y volver a cargarlo para observar cómo llegan las novedades.

Si Feedly no encuentra el feed al pegar la dirección directa, prueba con la página `http://IP_PUBLICA/`, que anuncia el feed mediante la línea `link` del paso anterior. El servidor debe estar accesible públicamente para que Feedly pueda leerlo.

Otros lectores que puedes probar son [Inoreader](https://www.inoreader.com/), [NewsBlur](https://www.newsblur.com/), Mozilla Thunderbird, NetNewsWire y FreshRSS. FreshRSS se instala en un servidor propio, mientras que los demás ofrecen distintas aplicaciones o servicios para organizar suscripciones.

## Entrega en Classroom

Envía estos tres elementos:

- El fichero `feed.xml` que has publicado.
- El fichero `index.html` que has publicado.
- Una captura de pantalla de Feedly donde se vea el nombre de tu fuente y las noticias recibidas.

Antes de entregar, confirma que el feed se abre desde Internet, supera la validación XML y aparece en Feedly. **No entregues ni compartas el fichero `.pem`**, porque es una clave privada de acceso al servidor.

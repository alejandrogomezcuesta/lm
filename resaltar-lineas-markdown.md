# Resaltar líneas en mardown

```python hl_lines="2 5-7" linenums="1"
def saludar(nombre):
    # Esta línea estará iluminada (línea 2)
    mensaje = f"Hola, {nombre}"
    
    # Estas líneas (5 a 7) también saldrán iluminadas
    if nombre == "Ana":
        print("¡Hola Ana!")
    return mensaje
```

* **`linenums="1"`**: Activa los números de línea empezando en la línea 1.
* **`hl_lines="2 5-7"`**: Resalta la línea 2 y el rango de la 5 a la 7.

---

### B. Añadir títulos al bloque de código

Puedes añadir un nombre de archivo o título a la caja de código con `title="..."`:

```markdown
```js title="app.js" hl_lines="1" linenums="1"
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Servidor listo'));
```

---

## 3. Ejemplo visual del resultado

El renderizado final en tu sitio web MkDocs mostrará:

1. Una caja estilizada con un botón para **copiar el código** al portapapeles.
2. La columna izquierda con **números de línea fijos**.
3. Un fondo con contraste **brillante/iluminado** únicamente en las líneas seleccionadas en `hl_lines`.
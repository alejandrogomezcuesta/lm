document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("a");
  
  links.forEach(function(link) {
    // Comprueba si el enlace es externo
    if (link.hostname && link.hostname !== window.location.hostname) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // Evita duplicar el icono si el enlace ya contiene una imagen
      if (!link.querySelector("img") && !link.querySelector("svg")) {
        // Crea el contenedor del icono
        var icon = document.createElement("span");
        icon.className = "external-link-icon";
        // SVG simple de una flecha saliendo de un cuadro
        icon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px; vertical-align: middle; display: inline-block;">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        `;
        
        // Inserta el icono al final del texto del enlace
        link.appendChild(icon);
      }
    }
  });
});
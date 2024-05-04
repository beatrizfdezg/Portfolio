'use strict'

document.addEventListener('DOMContentLoaded', function() {
  const texto = document.querySelectorAll('.texto');
  const h2 = document.querySelectorAll('.h2');

  // Iterar sobre cada elemento h2
  h2.forEach((cadaH2, i) => {
      // Agregar evento de clic a cada h2
      h2[i].addEventListener('mouseover', () => {
          // Recorrer todo el texto
          texto.forEach((cadatexto, j) => {
              // Quitar clase activo de todos los elementos texto
              texto[j].classList.remove('activo');
          });
          // Añadir clase activo solo al elemento texto correspondiente al h2 clicado
          texto[i].classList.add('activo');
      });
  });
});


document.addEventListener('mousemove', function(event) {
    var customCursor = document.getElementById('customCursor');
    customCursor.style.left = event.clientX + 'px';
    customCursor.style.top = event.clientY + 'px';
  });
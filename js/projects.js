'use strict';

// Función para alternar la visibilidad del contenido de la tarjeta
function toggleCardContent(element) {
    // Encuentra el contenido de la tarjeta más cercano al elemento pasado como argumento
    var cardContent = element.closest('.card').querySelector('.card_content');
    // Alterna la clase 'visible' en el contenido de la tarjeta para mostrar u ocultar el contenido
    cardContent.classList.toggle('visible');
}


// Añade un event listener al evento 'mousemove' en todo el documento
document.addEventListener('mousemove', function(event) {

    // Obtiene el elemento del cursor personalizado por su id
    var customCursor = document.getElementById('customCursor');

     // Actualiza las coordenadas del cursor personalizado para que coincidan con las coordenadas del evento del mouse
    customCursor.style.left = event.clientX + 'px';
    customCursor.style.top = event.clientY + 'px';
  });
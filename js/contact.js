'use strict'

// Añade un event listener que se activa cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function() {

  // Selecciona el elemento del carrusel y las imágenes dentro del carrusel
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length; // Obtiene el número total de imágenes en el carrusel
    let currentIndex = 0; // Inicializa el índice de la imagen actual
    const slideWidth = images[0].clientWidth; // Obtiene el ancho de una imagen del carrusel
    

    // Función para pasar a la siguiente diapositiva
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalImages; // Calcula el índice de la siguiente imagen (se reinicia al llegar al final)
      carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`; // Aplica una transformación CSS para desplazar el carrusel a la siguiente imagen
    }
    // Establece un intervalo para cambiar de diapositiva cada 3 segundos (ajusta el intervalo según sea necesario)
    setInterval(nextSlide, 3000); 
  });


  // Añade un event listener al evento 'mousemove' en todo el documento
  document.addEventListener('mousemove', function(event) {
    // Obtiene el elemento del cursor personalizado por su id
    var customCursor = document.getElementById('customCursor');
     // Actualiza las coordenadas del cursor personalizado para que coincidan con las coordenadas del evento del mouse
    customCursor.style.left = event.clientX + 'px';
    customCursor.style.top = event.clientY + 'px';
  });

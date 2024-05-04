"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Esperamos a que el DOM esté completamente cargado
  let header = document.getElementById("header");

   // Seleccionamos los elementos por su id
  let forma1 = document.getElementById("forma1");
  let transparente = document.getElementById("transparente");
  let forma2 = document.getElementById("forma2");
  let slogan = document.getElementById("slogan");

  let forma3 = document.getElementById("forma3");
  let forma4 = document.getElementById("forma4");

    // Añadimos un event listener al evento scroll de la ventana
  window.addEventListener("scroll", function () {
     // Función que se ejecuta cuando se hace scroll
    let value = window.scrollY; // Obtiene la posición de desplazamiento vertical

    // Actualizamos las propiedades de los elementos en función del desplazamiento
    transparente.style.marginLeft = value * 0.5 + "px";
    forma1.style.left = value * -5 + "px";
    forma2.style.left = value * -5 + "px";

    slogan.style.marginBottom = value * -1 + "px";
    forma3.style.left = value * -5 + "px";
    header.style.marginTop = value * 0.4 + "px";
    forma4.style.marginLeft = value * 4 + "px";
  });

  // Seleccionamos la navegación
  const navigation = document.querySelector("nav");
// Añadimos un event listener al botón de menú
  document.querySelector(".menu").onclick = function () {
    // Función que se ejecuta al hacer clic en el botón de menú
    this.classList.toggle("active"); // Alterna la clase "active" en el botón de menú
    navigation.classList.toggle("active"); // Alterna la clase "active" en la navegación
  };
});

/*TRANSICIONES*/

document.addEventListener("DOMContentLoaded", function () {
  // Esperamos a que el DOM esté completamente cargado
  const enlaces = document.querySelectorAll(".menulist a");

  // Añade un event listener a cada enlace
  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
       // Función que se ejecuta al hacer clic en un enlace
      e.preventDefault();// Previene el comportamiento predeterminado del enlace
      let href = this.getAttribute("href"); // Obtiene el atributo href del enlace

      console.log(href);

      // Aplica una transición al cuerpo de la página antes de redireccionar
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href; // Redirecciona a la URL del enlace
      }, 1000); // Espera 1 segundo antes de redireccionar
    });
  });
});


// Muestra un cursor personalizado que sigue el movimiento del ratón
document.addEventListener("mousemove", function (event) {
  var customCursor = document.getElementById("customCursor");
  customCursor.style.left = event.clientX + "px";
  customCursor.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  // Espera a que el DOM esté completamente cargado
  const icono = document.getElementById("hamburguesa"); // Selecciona el icono de menú
  const menuItem = document.getElementsByClassName("menulist")[0]; // Selecciona la lista de menú
  const header = document.getElementById("header"); // Selecciona el encabezado

  // Función para alternar la visualización del menú en pantallas pequeñas
  function toggleMenu() {
    if (window.innerWidth <= 480) {
        menuItem.style.display =menuItem.style.display === "block" ? "none" : "block";
    }
  }

  // Añade un event listener al icono de menú
  icono.addEventListener("click", toggleMenu);

  // Añade un event listener al evento de redimensionamiento de la ventana
  window.addEventListener("resize", function () {
    if (window.innerWidth > 480) {
      menuItem.style.display = "flex";
    } else if (menuItem.style.display === "flex") {
      menuItem.style.display = "none";
    }
  });

});

"Use strict";
document.addEventListener('DOMContentLoaded', function() {
    $('#section-menu-desplegable').addClass("ocultar");
    $('#section-btn-abrirmenu').addClass("ocultar");
});
let contenedor = document.getElementById('contenedor-ajax');
$('#img-btn-abrirmenu').on('click', abrirmenu);
$('#img-btn-cerrarmenu').on('click', cerrarmenu);
$('.btn-nav-home').on('click', loadHome);
$('.btn-nav-tendencia').on('click', loadTendencias);
$('.btn-nav-blog').on('click', loadBlog);

/*          NAVEGACION MOBILE        */
/*DESPLEGAR MENU*/
function abrirmenu() {
    $(this).toggleClass("ocultar");
    $('#section-menu-desplegable').toggleClass("ocultar");
    $('#img-btn-cerrarmenu').toggleClass("ocultar");
    $('#section-menu-desplegable').children('ul').toggleClass("ocultar");

    $('#section-menu-desplegable').toggleClass("menu-desplegable");
}
/*CERRAR MENU*/
function cerrarmenu() {
    $('#section-menu-desplegable').toggleClass("menu-desplegable");
    $('#img-btn-cerrarmenu').toggleClass("btn-cerrarmenu");

    $('#img-btn-abrirmenu').toggleClass("ocultar");
    $('#section-menu-desplegable').toggleClass("ocultar");
    $(this).toggleClass("ocultar");
    $('#section-menu-desplegable').children('ul').toggleClass("ocultar");
}
/*          NAVEGACION DESKTOP Y MOBILE    ||   AJAX - PARTIAL RENDER  */
function loadHome(event) {
    event.preventDefault();
    fetch('../Aenima_Prueba_Maquetador/home.html').then(
        function(response) {
            if (response.ok) {
                response.text().then(
                    function(text) {
                        contenedor.innerHTML = text;
                        cerrarmenu();
                    }
                )
            }
        }
    ).catch(function(response) {
        contenedor.innerHTML = '<h1>Error- Fallo conexión</h1>';
    })
}

function loadTendencias(event) {
    event.preventDefault();
    fetch('https://sofiamarzari.github.io/Aenima-Prueba-FrontEnd-Maquetador/tendencias.html').then(
        function(response) {
            if (response.ok) {
                response.text().then(
                    function(text) {
                        contenedor.innerHTML = text;
                        cerrarmenu();
                    }
                )
            }
        }
    ).catch(function(response) {
        contenedor.innerHTML = '<h1>Error- Fallo conexión</h1>';
    })
}

function loadBlog(event) {
    event.preventDefault();
    fetch('../Aenima_Prueba_Maquetador/blog.html').then(
        function(response) {
            if (response.ok) {
                response.text().then(
                    function(text) {
                        contenedor.innerHTML = text;
                        cerrarmenu();
                    }
                )
            }
        }
    ).catch(function(response) {
        contenedor.innerHTML = '<h1>Error- Fallo conexión</h1>';
    })
}
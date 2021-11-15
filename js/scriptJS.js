"Use strict";
document.addEventListener('DOMContentLoaded', function() {
    $('#section-menu-desplegable').addClass("ocultar");
    $('#section-btn-abrirmenu').addClass("ocultar");
});
let contenedor = document.getElementById('contenedor-ajax');

/*          NAVEGACION MOBILE        */

/*DESPLEGAR MENU*/
$('#img-btn-abrirmenu').on('click', function() {
    $(this).addClass("ocultar");
    $('#section-menu-desplegable').removeClass("ocultar");
    $('#img-btn-cerrarmenu').removeClass("ocultar");
    $('#section-menu-desplegable').children('ul').removeClass("ocultar");

    $('#section-menu-desplegable').addClass("menu-desplegable");
});
/*CERRAR MENU*/
$('#img-btn-cerrarmenu').on('click', cerrarmenu);

function cerrarmenu() {
    $('#section-menu-desplegable').removeClass("menu-desplegable");
    $('#img-btn-cerrarmenu').removeClass("btn-cerrarmenu");

    $('#img-btn-abrirmenu').removeClass("ocultar");
    $('#section-menu-desplegable').addClass("ocultar");
    $(this).addClass("ocultar");
    $('#section-menu-desplegable').children('ul').addClass("ocultar");
}
/*          NAVEGACION DESKTOP Y MOBILE      */

/*      AJAX - PARTIAL RENDER */
$('.btn-nav-home').on('click', loadHome);
$('.btn-nav-tendencia').on('click', loadTendencias);
$('.btn-nav-blog').on('click', loadBlog);

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
    fetch('../Aenima_Prueba_Maquetador/tendencias.html').then(
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
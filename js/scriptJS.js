"Use strict";
document.addEventListener('DOMContentLoaded', function() {
    $('#section-menu-desplegable').addClass("ocultar");
    $('#section-btn-abrirmenu').addClass("ocultar");
});


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
var anunciosSuperiores = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("anuncios-superiores");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  anunciosSuperiores++;
  if (anunciosSuperiores > x.length) {anunciosSuperiores = 1}
  x[anunciosSuperiores-1].style.display = "block";
  setTimeout(carousel, 7000); // Change image every 7 seconds
}

var anunciosSuperioresMovil = 0;
carouselMovil();

function carouselMovil() {
  var i;
  var x = document.getElementsByClassName("anuncios-superiores-movil");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  anunciosSuperioresMovil++;
  if (anunciosSuperioresMovil > x.length) {anunciosSuperioresMovil = 1}
  x[anunciosSuperioresMovil-1].style.display = "block";
  setTimeout(carouselMovil, 7000); // Change image every 7 seconds
}

// INDICE
// ELEMENTOS MADRE: linea 16
// 

$(document).ready(function() {

  // PRIMORDIALES
  $("#homepageLink").attr("href", "/");
  $("#logoNavbar").attr("src", "/i_temas/Logo Lernist.png")
  $(".Inicio").text("Inicio");
  $("#tematicasLink").text("Cursos");
  $("#tematicasLink").attr("href", "/cursos.html")
  $("#certificacionesLink").text("Certificaciones");
  $("#certificacionesLink").attr("href", "/certificaciones.html")
  $("#utilidadesLink").text("Promociones");
  $("#utilidadesLink").attr("href", "/utilidades.html")
  $("#articulosLink").text("Artículos");
  $("#articulosLink").attr("href", "/articulos.html")
  $("#testsLink").hide();
  $("#testsLink").text("Quizzes");
  $("#testsLink").attr("href", "/tests.html")

  $("#fraseFooter").text("Aprende cosas Increíbles, con contenido Increíble.");
  $("#footerTikTok").attr("href", "https://vm.tiktok.com/ZMLYUTDbg/");
  $("#footerYoutube").attr("href", "https://www.youtube.com/channel/UCXXbchWLUS34DLQDh6obXKA");
  $("#footerInstagram").attr("href", "https://www.instagram.com/Lernist_Oficial/");
  $("#footerFacebook").attr("href", "https://www.facebook.com/LernistOficial");
  $("#footerTwitter").attr("href", "https://twitter.com/Lernist_Oficial");
  $("#footerContacto").attr("href", "/contacto.html");
  $("#footerContacto").text("Contacto");
  $("#footerNosotros").attr("href", "/nosotros.html");
  $("#footerNosotros").text("Nosotros");
  $("#footerPrivacidad").attr("href", "/privacidad.html");
  $("#footerPrivacidad").text("Privacidad");
  $("#footerAnunciantes").attr("href", "");
  $("#footerAnunciantes").text("Anunciantes");
  $("#footerAnunciantes").hide();

  $("#menuHamburguesa").click(function() {
    $(".menuPrincipal").slideToggle(400);
    $(".bar1").toggleClass("change-bar1");
    $(".bar2").toggleClass("change-bar2");
    $(".bar3").toggleClass("change-bar3");
  });

  // ELEMENTOS MADRE
  $("#titulo-lecciones").text("Navega por el curso:");
  $("#VideosBotonPrevious").attr("src", "/i_temas/previous.png");
  $("#VideosBotonPreviousText").text("Anterior");
  $("#VideosBotonNext").attr("src", "/i_temas/next.png");
  $("#VideosBotonNextText").text("Siguiente");
  $("#VideosMensajeInicio").text("¡El curso comienza aquí!");
  $("#VideosMensajeFinal").text("¡Haz terminado el curso!");
  
});
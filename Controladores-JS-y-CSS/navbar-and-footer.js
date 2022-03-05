$(document).ready(function() {

  $("#homepageLink").attr("href", "/");
  $("#logoNavbar").attr("src", "/i_temas/Logo Lernist.png")
  $(".Inicio").text("Inicio");
  $("#cursosLink").text("Cursos");
  $("#cursosLink").attr("href", "/cursos.html")
  $("#certificacionesLink").text("Certificaciones");
  $("#certificacionesLink").attr("href", "/certificaciones.html")
  $("#promocionesLink").text("Utilidades");
  $("#promocionesLink").attr("href", "/utilidades.html")
  $("#articulosLink").text("Artículos");
  $("#articulosLink").attr("href", "/articulos.html")
  $("#quizzesLink").hide();
  $("#quizzesLink").text("Quizzes");
  $("#quizzesLink").attr("href", "/quizzes.html")
  $("#enseñarLink").hide();
  $("#enseñarLink").text("Enseñar");
  $("#enseñarLink").attr("href", "/enseñar.html")

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
});
$(document).ready(function() {

  $("#homepageLink").attr("href", "/");
  $("#logoNavbar").attr("src", "/i_temas/Logo Lernist.png")
  $(".Inicio").text("Inicio");
  $("#programasLink").text("Programas de Estudio");
  $("#programasLink").attr("href", "/programas-de-estudio.html")
  //$("#certificacionesLink").text("Certificaciones");
  //$("#certificacionesLink").attr("href", "/certificaciones.html")
  $("#bibliotecaLink").text("Biblioteca");
  $("#bibliotecaLink").attr("href", "/biblioteca.html")
  $("#articulosLink").text("Colecciones");
  $("#articulosLink").attr("href", "/colecciones.html")
  $("#quizzesLink").text("Quizzes");
  $("#quizzesLink").attr("href", "/quizzes.html")

  $("#fraseFooter").text("Aprende cosas Increíbles, con contenido Increíble.");
  $("#footerTikTok").attr("href", "https://www.tiktok.com/@lernist.com");
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
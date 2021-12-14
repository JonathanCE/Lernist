$(document).ready(function() {

  // PRIMORDIALES
  $("#homepageLink").attr("href", "/");
  $("#logoNavbar").attr("src", "/i_temas/Logo Lernist.png")
  $(".Inicio").text("Inicio");
  $("#aprenderLink").text("Cursos");
  $("#aprenderLink").attr("href", "/aprender.html")
  $("#articulosLink").text("Artículos");
  $("#articulosLink").attr("href", "/articulos.html")
  $("#quizzesLink").text("Quizzes");
  $("#quizzesLink").attr("href", "/quizzes.html")
  $("#enseñarLink").hide();
  $("#enseñarLink").text("Enseñar");
  $("#enseñarLink").attr("href", "/enseñar.html")

  $("#fraseFooter").text("Aprende cosas Increíbles, con contenido Increíble.");
  $("#footerFacebook").attr("href", "https://www.facebook.com/LernistOficial");
  $("#footerTwitter").attr("href", "https://twitter.com/Lernist_Oficial");
  $("#footerInstagram").attr("href", "https://www.instagram.com/Lernist_Oficial/");
  $("#footerContacto").attr("href", "/contacto.html");
  $("#footerContacto").text("Contacto");
  $("#footerNosotros").attr("href", "/nosotros.html");
  $("#footerNosotros").text("Nosotros");
  $("#footerAnunciantes").attr("href", "");
  $("#footerAnunciantes").text("Anunciantes");
  $("#footerAnunciantes").hide();

  $("#menuHamburguesa").click(function() {
    $(".menuPrincipal").slideToggle(400);
    $(".bar1").toggleClass("change-bar1");
    $(".bar2").toggleClass("change-bar2");
    $(".bar3").toggleClass("change-bar3");
  });


  $(".lecciones").hide();

  $(".sub1").click(function() {
    $(".le1").slideToggle(400);
  });

  $(".sub2").click(function() {
    $(".le2").slideToggle(400);
  });

  $(".sub3").click(function() {
    $(".le3").slideToggle(400);
  });

  $(".sub4").click(function() {
    $(".le4").slideToggle(400);
  });

  $(".sub5").click(function() {
    $(".le5").slideToggle(400);
  });

  $(".sub6").click(function() {
    $(".le6").slideToggle(400);
  });

  $(".sub7").click(function() {
    $(".le7").slideToggle(400);
  });

  $(".sub8").click(function() {
    $(".le8").slideToggle(400);
  });

  $(".sub9").click(function() {
    $(".le9").slideToggle(400);
  });

  $(".sub10").click(function() {
    $(".le10").slideToggle(400);
  });

  $(".sub11").click(function() {
    $(".le11").slideToggle(400);
  });

  $(".sub12").click(function() {
    $(".le12").slideToggle(400);
  });

  $(".sub13").click(function() {
    $(".le13").slideToggle(400);
  });

  $(".sub14").click(function() {
    $(".le14").slideToggle(400);
  });

  $(".sub15").click(function() {
    $(".le15").slideToggle(400);
  });
});
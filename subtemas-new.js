$(document).ready(function() {

  $("#homepageLink").attr("href", "/");
  $("#logoNavbar").attr("src", "/i_temas/Logo Lernist.png")
  $(".Inicio").text("Inicio");
  $("#aprenderLink").text("Aprender");
  $("#aprenderLink").attr("href", "/aprender.html")
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
}); 
  

$(document).ready(function() {

  // PRIMORDIALES
  $("#homepageLink").attr("href", "/");
  $("#logoNavbar").attr("src", "/i_temas/Logo Lernist.png")
  $(".Inicio").text("Inicio");
  $("#aprenderLink").text("Aprender");
  $("#aprenderLink").attr("href", "/aprender.html")
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


  $(".videos").hide();

  $(".le1").click(function() {
    $(".vi1").slideToggle(400);
  });

  $(".le2").click(function() {
    $(".vi2").slideToggle(400);
  });

  $(".le3").click(function() {
    $(".vi3").slideToggle(400);
  });

  $(".le4").click(function() {
    $(".vi4").slideToggle(400);
  });

  $(".le5").click(function() {
    $(".vi5").slideToggle(400);
  });

  $(".le6").click(function() {
    $(".vi6").slideToggle(400);
  });

  $(".le7").click(function() {
    $(".vi7").slideToggle(400);
  });

  $(".le8").click(function() {
    $(".vi8").slideToggle(400);
  });

  $(".le9").click(function() {
    $(".vi9").slideToggle(400);
  });

  $(".le10").click(function() {
    $(".vi10").slideToggle(400);
  });

  $(".le11").click(function() {
    $(".vi11").slideToggle(400);
  });
});
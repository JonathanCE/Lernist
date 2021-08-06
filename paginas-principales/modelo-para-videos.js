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

  // ELEMENTOS MADRE
  $(".videos").hide();
  $(".datos-video").hide();
  $("#titulo-lecciones").text("Navega por el curso:");
  $(".paaVideosLeccionBotonMas").text("+"); // este codigo se podria repetir para todos los videos de Lernist
  $("#VideosBotonPrevious").attr("src", "/i_temas/previous.png");
  $("#VideosBotonPreviousText").text("Anterior");
  $("#VideosBotonNext").attr("src", "/i_temas/next.png");
  $("#VideosBotonNextText").text("Siguiente");
  $("#VideosMensajeInicio").text("¡El curso comienza aquí!");
  $("#VideosMensajeFinal").text("¡Haz terminado el curso!");

  // TITULO DE CURSO
  // TITULO DE CURSO

  // LECCIONES
  $("#idNameLeccion").text("Parte o Leccion");

  // TITULOS DE MENU ACORDION (lecciones y partes)
  $("#idTituloAcordion").text("Titulo de leccion");
  $("#idTituloAcordion1").text("Titulo de leccion");
  $("#idTituloAcordion2").text("Titulo de leccion");
  $("#idTituloAcordion3").text("Titulo de leccion");
  // Ejemplo:
  $("#paaVideosMateLeccionAritmetica").text("Aritmética");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // 'NOMBRE DE PARTE DEL CURSO'
  $("#idName1Menu").attr("href", "url al video").text("1. ");
  $("#idName2Menu").attr("href", "url al video").text("2. ");
  $("#idName3Menu").attr("href", "url al video").text("3. ");
  $("#idName4Menu").attr("href", "url al video").text("4. ");
  $("#idName5Menu").attr("href", "url al video").text("5. ");
  $("#idName6Menu").attr("href", "url al video").text("6. ");
  $("#idName7Menu").attr("href", "url al video").text("7. ");
  $("#idName8Menu").attr("href", "url al video").text("8. ");
  $("#idName9Menu").attr("href", "url al video").text("9. ");
  $("#idName10Menu").attr("href", "url al video").text("10. ");
  // Sig. Leccion
  $("#idName14Menu").attr("href", "url al video").text("14. Tipos de discurso: narrativo, descriptivo, argumentativo");
  // Sig. Leccion
  $("#idName15Menu").attr("href", "url al video").text("15. Figuras literarias o retóricas");

  // OTRA PARTE (en caso que se necesite)
  $("#paaVideosMate1Menu").attr("href", "url al video").text("1. Jerarquía de las Operaciones | Super fácil");
  $("#paaVideosMate2Menu").attr("href", "url al video").text("2. Ley de los signos | Super fácil");
  $("#paaVideosMate3Menu").attr("href", "url al video").text("3. Si te parecen difícil las fracciones debes ver este video");
  $("#paaVideosMate4Menu").attr("href", "url al video").text("4. Operaciones combinadas con fracciones");
  $("#paaVideosMate5Menu").attr("href", "url al video").text("5. Números decimales introducción");
  $("#paaVideosMate6Menu").attr("href", "url al video").text("6. ¿Qué son los números decimales?");
  $("#paaVideosMate7Menu").attr("href", "url al video").text("7. Convertir fraccion a decimal | Super fácil");
  $("#paaVideosMate8Menu").attr("href", "url al video").text("8. Como leer números decimales | Super fácil");
  $("#paaVideosMate9Menu").attr("href", "url al video").text("9. Suma y resta de números decimales");
  $("#paaVideosMate10Menu").attr("href", "url al video").text("10. Lenguaje algebraico | Parte 1");

  // DATOS DE CADA VIDEO
  $("#idName1Titulo").text("1. Titulo del Video");
  $("#url1Video").attr("src", "url del video");
  $("#idName1BotonAnterior").attr("href", "url del video anterior");
  $("#idName1BotonSiguiente").attr("href", "url del video siguiente");

  // ACERCA DE
  $("#creadorPAAVideo").text("Creador del video");
  $("#creadorVideoTexto1").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto2").text("Lernist.com no es el propietario de este video. Distribuimos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");

  $("#descripcionCursoPAAVideo").text("Descripción del video");

  $("#tipsCursoPAA").text("Tips para el curso"); // Tips para el curso
  $("#tipsCursoPAATexto").text("En partes del curso como en matemáticas, notarás que dos videos cubren el mismo tema o"
                              + " concepto, esto es a propósito, para darte a ti la elección de tu preferencia, además que"
                              + " así tienes más opciones de estudio por si un tema te parece algo complicado y necesitas"
                              + " verlo un poco más.");

  $("#descripcionCursoPAA").text("Descripción del curso"); // Descripcion del curso
  $("#descripcionCursoPAATexto").text("El curso de estudio para el examen PAA esta diseñado para enseñarte todos los conocimientos"
                                      + " necesarios para lograr una super calificación en el examen. A lo largo de las lecciones y videos"
                                      + " que lo componen, aprenderás y pondrás en practica habilidades de lectura, redacción y matemáticas,"
                                      + " explicadas de la mano de expertos y de una forma clara y rápida.");
  
  $("#duracionCursoPAA").text("Duración y cantidad de videos del curso");
  $("#duracionCursoPAATexto").text("- 88 videos");

  // uso de variables para insertar link de canales y nombre de un creador - ejemplos:
  var DC = "Daniel Carreon.";
  var DCLink = "https://www.youtube.com/channel/UCwScwtu5zVqc_wHtRx9XvDA";
  var PA = "Profe Alex.";
  var PALink = "https://www.youtube.com/channel/UCanMxWvOoiwtjLYm08Bo8QQ";
  // link al canal y nombre del creador del video
  $("#creadorVideoPAALecturaLink1").attr("href", "https://www.youtube.com/channel/UCqod258jC_Cn8UIW5g0LqqA").text("Wayraeduca.");
  // descripcion de cada video
  $("#descripcionCursoPAAVideo1Texto").text("-");

  // TITULO DEL CURSO
  // TITULO DEL CURSO

  // ANIMACION PARA MENU VIDEO-INFO
  $(".video-info-title").click(function() {
    $(".datos-video").slideToggle(400);
  });
  // ANIMACION PARA MENU ACORDION
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

  $(".le12").click(function() {
    $(".vi12").slideToggle(400);
  });

  $(".le13").click(function() {
    $(".vi13").slideToggle(400);
  });

  $(".le14").click(function() {
    $(".vi14").slideToggle(400);
  });

  $(".le15").click(function() {
    $(".vi15").slideToggle(400);
  });

  $(".le16").click(function() {
    $(".vi16").slideToggle(400);
  });

  $(".le17").click(function() {
    $(".vi17").slideToggle(400);
  });

  $(".le18").click(function() {
    $(".vi18").slideToggle(400);
  });

  $(".le19").click(function() {
    $(".vi19").slideToggle(400);
  });

  $(".le20").click(function() {
    $(".vi20").slideToggle(400);
  });

  $(".le21").click(function() {
    $(".vi21").slideToggle(400);
  });

  $(".le22").click(function() {
    $(".vi22").slideToggle(400);
  });

  $(".le23").click(function() {
    $(".vi23").slideToggle(400);
  });

  $(".le24").click(function() {
    $(".vi24").slideToggle(400);
  });

  $(".le25").click(function() {
    $(".vi25").slideToggle(400);
  });

  $(".le26").click(function() {
    $(".vi26").slideToggle(400);
  });

  $(".le27").click(function() {
    $(".vi27").slideToggle(400);
  });

  $(".le28").click(function() {
    $(".vi28").slideToggle(400);
  });

  $(".le29").click(function() {
    $(".vi29").slideToggle(400);
  });

  $(".le30").click(function() {
    $(".vi30").slideToggle(400);
  });
});
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

  // ELEMENTOS MADRE
  $(".videos").hide();
  $(".datos-video").hide();
  $("#titulo-lecciones").text("Navega por el curso:");
  $(".leccionBotonMas").text("+"); // este codigo se podria repetir para todos los videos de Lernist
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
  $("#tituloAcordion1").text("Titulo de leccion");
  $("#tituloAcordion2").text("Titulo de leccion");
  $("#tituloAcordion3").text("Titulo de leccion");
  $("#tituloAcordion4").text("Titulo de leccion");
  // Ejemplo:
  $("#paaVideosMateLeccionAritmetica").text("Aritmética");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // 'NOMBRE DE PARTE DEL CURSO'
  $("#videoAcordion1").attr("href", "url al video").text("1. ");
  $("#videoAcordion2").attr("href", "url al video").text("2. ");
  $("#videoAcordion3").attr("href", "url al video").text("3. ");

  // Sig. Leccion
  $("#videoAcordion4").attr("href", "url al video").text("4. Tipos de discurso: narrativo, descriptivo, argumentativo");

  // OTRA PARTE (en caso que se necesite)
  $("#paaVideosMate1Menu").attr("href", "url al video").text("1. Jerarquía de las Operaciones | Super fácil");
  $("#paaVideosMate2Menu").attr("href", "url al video").text("2. Ley de los signos | Super fácil");
  $("#paaVideosMate3Menu").attr("href", "url al video").text("3. Si te parecen difícil las fracciones debes ver este video");
  $("#paaVideosMate4Menu").attr("href", "url al video").text("4. Operaciones combinadas con fracciones");
  $("#paaVideosMate5Menu").attr("href", "url al video").text("5. Números decimales introducción");

  // DATOS DE CADA VIDEO
  $("#tituloVideo1").text("1. ");
  $("#urlVideo1").attr("src", "https://www.youtube.com/embed/TPmlD6demPk?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video1LinkAnterior").attr("href", ""); // video anterior
  $("#video1LinkSiguiente").attr("href", ""); // video siguiente

  // ACERCA DE
  $("#creadorVideo").text("Creador del video");
  $("#creadorVideoTexto1").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto2").text("Lernist.com no es el propietario de este video. Distribuimos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");

  $("#descripcionCursoVideo").text("Descripción del video");

  $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
  $("#tipsCursoTexto").text("En partes del curso como en matemáticas, notarás que dos videos cubren el mismo tema o"
                              + " concepto, esto es a propósito, para darte a ti la elección de tu preferencia, además que"
                              + " así tienes más opciones de estudio por si un tema te parece algo complicado y necesitas"
                              + " verlo un poco más.");

  $("#descripcionCurso").text("Descripción del curso"); // Descripcion del curso
  $("#descripcionCursoTexto").text("El curso de estudio para el examen PAA esta diseñado para enseñarte todos los conocimientos"
                                      + " necesarios para lograr una super calificación en el examen. A lo largo de las lecciones y videos"
                                      + " que lo componen, aprenderás y pondrás en practica habilidades de lectura, redacción y matemáticas,"
                                      + " explicadas de la mano de expertos y de una forma clara y rápida.");
  
  $("#duracionCurso").text("Duración y cantidad de videos del curso");
  $("#duracionCursoTexto").text("- 88 videos");

  // uso de variables para insertar link de canales y nombre de un creador - ejemplos:
  var DC = "Daniel Carreon.";
  var DCLink = "https://www.youtube.com/channel/UCwScwtu5zVqc_wHtRx9XvDA";
  var PA = "Profe Alex.";
  var PALink = "https://www.youtube.com/channel/UCanMxWvOoiwtjLYm08Bo8QQ";
  // link al canal y nombre del creador del video
  $("#creadorVideoLink1").attr("href", "https://www.youtube.com/channel/UCqod258jC_Cn8UIW5g0LqqA").text("Wayraeduca.");
  // descripcion de cada video
  $("#descripcionCursoVideo1Texto").text("-");

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



// BLOQUES DE CODIGO UTILES

// TITULOS DE MENU ACORDION (lecciones y partes) - hasta 30 lecciones
  $("#tituloAcordion1").text("");
  $("#tituloAcordion2").text("");
  $("#tituloAcordion3").text("");
  $("#tituloAcordion4").text("");
  $("#tituloAcordion5").text("");
  $("#tituloAcordion6").text("");
  $("#tituloAcordion7").text("");
  $("#tituloAcordion8").text("");
  $("#tituloAcordion9").text("");
  $("#tituloAcordion10").text("");
  $("#tituloAcordion11").text("");
  $("#tituloAcordion12").text("");
  $("#tituloAcordion13").text("");
  $("#tituloAcordion14").text("");
  $("#tituloAcordion15").text("");
  $("#tituloAcordion16").text("");
  $("#tituloAcordion17").text("");
  $("#tituloAcordion18").text("");
  $("#tituloAcordion19").text("");
  $("#tituloAcordion20").text("");
  $("#tituloAcordion21").text("");
  $("#tituloAcordion22").text("");
  $("#tituloAcordion23").text("");
  $("#tituloAcordion24").text("");
  $("#tituloAcordion25").text("");
  $("#tituloAcordion26").text("");
  $("#tituloAcordion27").text("");
  $("#tituloAcordion28").text("");
  $("#tituloAcordion29").text("");
  $("#tituloAcordion30").text("");

  // VIDEOS MENU ACORDION - hasta 100 videos
  // LeccionName
  $("#videoAcordion1").attr("href", "video1.html").text("1. ");
  $("#videoAcordion2").attr("href", "video2.html").text("2. ");
  $("#videoAcordion3").attr("href", "video3.html").text("3. ");
  $("#videoAcordion4").attr("href", "video4.html").text("4. ");
  $("#videoAcordion5").attr("href", "video5.html").text("5. ");
  $("#videoAcordion6").attr("href", "video6.html").text("6. ");
  $("#videoAcordion7").attr("href", "video7.html").text("7. ");
  $("#videoAcordion8").attr("href", "video8.html").text("8. ");
  $("#videoAcordion9").attr("href", "video9.html").text("9. ");
  $("#videoAcordion10").attr("href", "video10.html").text("10. ");
  $("#videoAcordion11").attr("href", "video11.html").text("11. ");
  $("#videoAcordion12").attr("href", "video12.html").text("12. ");
  $("#videoAcordion13").attr("href", "video13.html").text("13. ");
  $("#videoAcordion14").attr("href", "video14.html").text("14. ");
  $("#videoAcordion15").attr("href", "video15.html").text("15. ");
  $("#videoAcordion16").attr("href", "video16.html").text("16. ");
  $("#videoAcordion17").attr("href", "video17.html").text("17. ");
  // Leccion - separador
  $("#videoAcordion18").attr("href", "video18.html").text("18. ");
  $("#videoAcordion19").attr("href", "video19.html").text("19. ");
  $("#videoAcordion20").attr("href", "video20.html").text("20. ");
  $("#videoAcordion21").attr("href", "video21.html").text("21. ");
  $("#videoAcordion22").attr("href", "video22.html").text("22. ");
  $("#videoAcordion23").attr("href", "video23.html").text("23. ");
  $("#videoAcordion24").attr("href", "video24.html").text("24. ");
  $("#videoAcordion25").attr("href", "video25.html").text("25. ");
  $("#videoAcordion26").attr("href", "video26.html").text("26. ");
  $("#videoAcordion27").attr("href", "video27.html").text("27. ");
  $("#videoAcordion28").attr("href", "video28.html").text("28. ");
  $("#videoAcordion29").attr("href", "video29.html").text("29. ");
  $("#videoAcordion30").attr("href", "video30.html").text("30. ");
  $("#videoAcordion31").attr("href", "video31.html").text("31. ");
  $("#videoAcordion32").attr("href", "video32.html").text("32. ");
  $("#videoAcordion33").attr("href", "video33.html").text("33. ");
  $("#videoAcordion34").attr("href", "video34.html").text("34. ");
  $("#videoAcordion35").attr("href", "video35.html").text("35. ");
  $("#videoAcordion36").attr("href", "video36.html").text("36. ");
  $("#videoAcordion37").attr("href", "video37.html").text("37. ");
  $("#videoAcordion38").attr("href", "video38.html").text("38. ");
  $("#videoAcordion39").attr("href", "video39.html").text("39. ");
  $("#videoAcordion40").attr("href", "video40.html").text("40. ");
  $("#videoAcordion41").attr("href", "video41.html").text("41. ");
  $("#videoAcordion42").attr("href", "video42.html").text("42. ");
  $("#videoAcordion43").attr("href", "video43.html").text("43. ");
  $("#videoAcordion44").attr("href", "video44.html").text("44. ");
  $("#videoAcordion45").attr("href", "video45.html").text("45. ");
  $("#videoAcordion46").attr("href", "video46.html").text("46. ");
  $("#videoAcordion47").attr("href", "video47.html").text("47. ");
  $("#videoAcordion48").attr("href", "video48.html").text("48. ");
  $("#videoAcordion49").attr("href", "video49.html").text("49. ");
  $("#videoAcordion50").attr("href", "video50.html").text("50. ");
  $("#videoAcordion51").attr("href", "video51.html").text("51. ");
  $("#videoAcordion52").attr("href", "video52.html").text("52. ");
  $("#videoAcordion53").attr("href", "video53.html").text("53. ");
  $("#videoAcordion54").attr("href", "video54.html").text("54. ");
  $("#videoAcordion55").attr("href", "video55.html").text("55. ");
  // Leccion - separador
  $("#videoAcordion56").attr("href", "video56.html").text("56. ");
  $("#videoAcordion57").attr("href", "video57.html").text("57. ");
  $("#videoAcordion58").attr("href", "video58.html").text("58. ");
  $("#videoAcordion59").attr("href", "video59.html").text("59. ");
  $("#videoAcordion60").attr("href", "video60.html").text("60. ");
  $("#videoAcordion61").attr("href", "video61.html").text("61. ");
  $("#videoAcordion62").attr("href", "video62.html").text("62. ");
  $("#videoAcordion63").attr("href", "video63.html").text("63. ");
  $("#videoAcordion64").attr("href", "video64.html").text("64. ");
  $("#videoAcordion65").attr("href", "video65.html").text("65. ");
  $("#videoAcordion66").attr("href", "video66.html").text("66. ");
  $("#videoAcordion67").attr("href", "video67.html").text("67. ");
  $("#videoAcordion68").attr("href", "video68.html").text("68. ");
  $("#videoAcordion69").attr("href", "video69.html").text("69. ");
  $("#videoAcordion70").attr("href", "video70.html").text("70. ");
  $("#videoAcordion71").attr("href", "video71.html").text("71. ");
  $("#videoAcordion72").attr("href", "video72.html").text("72. ");
  $("#videoAcordion73").attr("href", "video73.html").text("73. ");
  $("#videoAcordion74").attr("href", "video74.html").text("74. ");
  $("#videoAcordion75").attr("href", "video75.html").text("75. ");
  $("#videoAcordion76").attr("href", "video76.html").text("76. ");
  $("#videoAcordion77").attr("href", "video77.html").text("77. ");
  $("#videoAcordion78").attr("href", "video78.html").text("78. ");
  $("#videoAcordion79").attr("href", "video79.html").text("79. ");
  $("#videoAcordion80").attr("href", "video80.html").text("80. ");
  $("#videoAcordion81").attr("href", "video81.html").text("81. ");
  $("#videoAcordion82").attr("href", "video82.html").text("82. ");
  $("#videoAcordion83").attr("href", "video83.html").text("83. ");
  $("#videoAcordion84").attr("href", "video84.html").text("84. ");
  $("#videoAcordion85").attr("href", "video85.html").text("85. ");
  $("#videoAcordion86").attr("href", "video86.html").text("86. ");
  $("#videoAcordion87").attr("href", "video87.html").text("87. ");
  $("#videoAcordion88").attr("href", "video88.html").text("88. ");
  $("#videoAcordion89").attr("href", "video89.html").text("89. ");
  $("#videoAcordion90").attr("href", "video90.html").text("90. ");
  $("#videoAcordion91").attr("href", "video91.html").text("91. ");
  $("#videoAcordion92").attr("href", "video92.html").text("92. ");
  $("#videoAcordion93").attr("href", "video93.html").text("93. ");
  $("#videoAcordion94").attr("href", "video94.html").text("94. ");
  $("#videoAcordion95").attr("href", "video95.html").text("95. ");
  $("#videoAcordion96").attr("href", "video96.html").text("96. ");
  $("#videoAcordion97").attr("href", "video97.html").text("97. ");
  $("#videoAcordion98").attr("href", "video98.html").text("98. ");
  $("#videoAcordion99").attr("href", "video99.html").text("99. ");
  $("#videoAcordion100").attr("href", "video100.html").text("100. ");

  // DATOS DE CADA VIDEO - hasta 100 videos
  $("#tituloVideo1").text("1. ");
  $("#urlVideo1").attr("src", "https://www.youtube.com/embed/XV5PiV2-91U?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video1LinkAnterior").attr("href", ""); // video anterior
  $("#video1LinkSiguiente").attr("href", "video2.html"); // video siguiente

  $("#tituloVideo2").text("2. ");
  $("#urlVideo2").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video2LinkAnterior").attr("href", "video1.html"); // video anterior
  $("#video2LinkSiguiente").attr("href", "video3.html"); // video siguiente

  $("#tituloVideo3").text("3. ");
  $("#urlVideo3").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video3LinkAnterior").attr("href", "video2.html"); // video anterior
  $("#video3LinkSiguiente").attr("href", "video4.html"); // video siguiente

  $("#tituloVideo4").text("4. ");
  $("#urlVideo4").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video4LinkAnterior").attr("href", "video3.html"); // video anterior
  $("#video4LinkSiguiente").attr("href", "video5.html"); // video siguiente

  $("#tituloVideo5").text("5. ");
  $("#urlVideo5").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video5LinkAnterior").attr("href", "video4.html"); // video anterior
  $("#video5LinkSiguiente").attr("href", "video6.html"); // video siguiente

  $("#tituloVideo6").text("6. ");
  $("#urlVideo6").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video6LinkAnterior").attr("href", "video5.html"); // video anterior
  $("#video6LinkSiguiente").attr("href", "video7.html"); // video siguiente

  $("#tituloVideo7").text("7. ");
  $("#urlVideo7").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video7LinkAnterior").attr("href", "video6.html"); // video anterior
  $("#video7LinkSiguiente").attr("href", "video8.html"); // video siguiente

  $("#tituloVideo8").text("8. ");
  $("#urlVideo8").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video8LinkAnterior").attr("href", "video7.html"); // video anterior
  $("#video8LinkSiguiente").attr("href", "video9.html"); // video siguiente

  $("#tituloVideo9").text("9. ");
  $("#urlVideo9").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video9LinkAnterior").attr("href", "video8.html"); // video anterior
  $("#video9LinkSiguiente").attr("href", "video10.html"); // video siguiente

  $("#tituloVideo10").text("10. ");
  $("#urlVideo10").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video10LinkAnterior").attr("href", "video9.html"); // video anterior
  $("#video10LinkSiguiente").attr("href", "video11.html"); // video siguiente

  $("#tituloVideo11").text("11. ");
  $("#urlVideo11").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video11LinkAnterior").attr("href", "video10.html"); // video anterior
  $("#video11LinkSiguiente").attr("href", "video12.html"); // video siguiente

  $("#tituloVideo12").text("12. ");
  $("#urlVideo12").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video12LinkAnterior").attr("href", "video11.html"); // video anterior
  $("#video12LinkSiguiente").attr("href", "video13.html"); // video siguiente

  $("#tituloVideo13").text("13. ");
  $("#urlVideo13").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video13LinkAnterior").attr("href", "video12.html"); // video anterior
  $("#video13LinkSiguiente").attr("href", "video14.html"); // video siguiente

  $("#tituloVideo14").text("14. ");
  $("#urlVideo14").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video14LinkAnterior").attr("href", "video13.html"); // video anterior
  $("#video14LinkSiguiente").attr("href", "video15.html"); // video siguiente

  $("#tituloVideo15").text("15. ");
  $("#urlVideo15").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video15LinkAnterior").attr("href", "video14.html"); // video anterior
  $("#video15LinkSiguiente").attr("href", "video16.html"); // video siguiente

  $("#tituloVideo16").text("16. ");
  $("#urlVideo16").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video16LinkAnterior").attr("href", "video15.html"); // video anterior
  $("#video16LinkSiguiente").attr("href", "video17.html"); // video siguiente

  $("#tituloVideo17").text("17. ");
  $("#urlVideo17").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video17LinkAnterior").attr("href", "video16.html"); // video anterior
  $("#video17LinkSiguiente").attr("href", "video18.html"); // video siguiente

  $("#tituloVideo18").text("18. ");
  $("#urlVideo18").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video18LinkAnterior").attr("href", "video17.html"); // video anterior
  $("#video18LinkSiguiente").attr("href", "video19.html"); // video siguiente

  $("#tituloVideo19").text("19. ");
  $("#urlVideo19").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video19LinkAnterior").attr("href", "video18.html"); // video anterior
  $("#video19LinkSiguiente").attr("href", "video20.html"); // video siguiente

  $("#tituloVideo20").text("20. ");
  $("#urlVideo20").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video20LinkAnterior").attr("href", "video19.html"); // video anterior
  $("#video20LinkSiguiente").attr("href", "video21.html"); // video siguiente

  $("#tituloVideo21").text("21. ");
  $("#urlVideo21").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video21LinkAnterior").attr("href", "video20.html"); // video anterior
  $("#video21LinkSiguiente").attr("href", "video22.html"); // video siguiente

  $("#tituloVideo22").text("22. ");
  $("#urlVideo22").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video22LinkAnterior").attr("href", "video21.html"); // video anterior
  $("#video22LinkSiguiente").attr("href", "video23.html"); // video siguiente

  $("#tituloVideo23").text("23. ");
  $("#urlVideo23").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video23LinkAnterior").attr("href", "video22.html"); // video anterior
  $("#video23LinkSiguiente").attr("href", "video24.html"); // video siguiente

  $("#tituloVideo24").text("24. ");
  $("#urlVideo24").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video24LinkAnterior").attr("href", "video23.html"); // video anterior
  $("#video24LinkSiguiente").attr("href", "video25.html"); // video siguiente

  $("#tituloVideo25").text("25. ");
  $("#urlVideo25").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video25LinkAnterior").attr("href", "video24.html"); // video anterior
  $("#video25LinkSiguiente").attr("href", "video26.html"); // video siguiente

  $("#tituloVideo26").text("26. ");
  $("#urlVideo26").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video26LinkAnterior").attr("href", "video25.html"); // video anterior
  $("#video26LinkSiguiente").attr("href", "video27.html"); // video siguiente

  $("#tituloVideo27").text("27. ");
  $("#urlVideo27").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video27LinkAnterior").attr("href", "video26.html"); // video anterior
  $("#video27LinkSiguiente").attr("href", "video28.html"); // video siguiente

  $("#tituloVideo28").text("28. ");
  $("#urlVideo28").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video28LinkAnterior").attr("href", "video27.html"); // video anterior
  $("#video28LinkSiguiente").attr("href", "video29.html"); // video siguiente

  $("#tituloVideo29").text("27. ");
  $("#urlVideo29").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video29LinkAnterior").attr("href", "video28.html"); // video anterior
  $("#video29LinkSiguiente").attr("href", "video30.html"); // video siguiente

  $("#tituloVideo30").text("30. ");
  $("#urlVideo30").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video30LinkAnterior").attr("href", "video29.html"); // video anterior
  $("#video30LinkSiguiente").attr("href", "video31.html"); // video siguiente

  $("#tituloVideo31").text("31. ");
  $("#urlVideo31").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video31LinkAnterior").attr("href", "video30.html"); // video anterior
  $("#video31LinkSiguiente").attr("href", "video32.html"); // video siguiente

  $("#tituloVideo32").text("32. ");
  $("#urlVideo32").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video32LinkAnterior").attr("href", "video31.html"); // video anterior
  $("#video32LinkSiguiente").attr("href", "video33.html"); // video siguiente

  $("#tituloVideo33").text("33. ");
  $("#urlVideo33").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video33LinkAnterior").attr("href", "video32.html"); // video anterior
  $("#video33LinkSiguiente").attr("href", "video34.html"); // video siguiente

  $("#tituloVideo34").text("34. ");
  $("#urlVideo34").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video34LinkAnterior").attr("href", "video33.html"); // video anterior
  $("#video34LinkSiguiente").attr("href", "video35.html"); // video siguiente

  $("#tituloVideo35").text("35. ");
  $("#urlVideo35").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video35LinkAnterior").attr("href", "video34.html"); // video anterior
  $("#video35LinkSiguiente").attr("href", "video36.html"); // video siguiente

  $("#tituloVideo36").text("36. ");
  $("#urlVideo36").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video36LinkAnterior").attr("href", "video35.html"); // video anterior
  $("#video36LinkSiguiente").attr("href", "video37.html"); // video siguiente

  $("#tituloVideo37").text("37. ");
  $("#urlVideo37").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video37LinkAnterior").attr("href", "video36.html"); // video anterior
  $("#video37LinkSiguiente").attr("href", "video38.html"); // video siguiente

  $("#tituloVideo38").text("38. ");
  $("#urlVideo38").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video38LinkAnterior").attr("href", "video37.html"); // video anterior
  $("#video38LinkSiguiente").attr("href", "video39.html"); // video siguiente

  $("#tituloVideo39").text("39. ");
  $("#urlVideo39").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video39LinkAnterior").attr("href", "video38.html"); // video anterior
  $("#video39LinkSiguiente").attr("href", "video40.html"); // video siguiente

  $("#tituloVideo40").text("40. ");
  $("#urlVideo40").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video40LinkAnterior").attr("href", "video39.html"); // video anterior
  $("#video40LinkSiguiente").attr("href", "video41.html"); // video siguiente

  $("#tituloVideo41").text("41. ");
  $("#urlVideo41").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video41LinkAnterior").attr("href", "video40.html"); // video anterior
  $("#video41LinkSiguiente").attr("href", "video42.html"); // video siguiente

  $("#tituloVideo42").text("42. ");
  $("#urlVideo42").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video42LinkAnterior").attr("href", "video41.html"); // video anterior
  $("#video42LinkSiguiente").attr("href", "video43.html"); // video siguiente

  $("#tituloVideo43").text("43. ");
  $("#urlVideo43").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video43LinkAnterior").attr("href", "video42.html"); // video anterior
  $("#video43LinkSiguiente").attr("href", "video44.html"); // video siguiente

  $("#tituloVideo44").text("44. ");
  $("#urlVideo44").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video44LinkAnterior").attr("href", "video43.html"); // video anterior
  $("#video44LinkSiguiente").attr("href", "video45.html"); // video siguiente

  $("#tituloVideo45").text("45. ");
  $("#urlVideo45").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video45LinkAnterior").attr("href", "video44.html"); // video anterior
  $("#video45LinkSiguiente").attr("href", "video46.html"); // video siguiente

  $("#tituloVideo46").text("46. ");
  $("#urlVideo46").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video46LinkAnterior").attr("href", "video45.html"); // video anterior
  $("#video46LinkSiguiente").attr("href", "video47.html"); // video siguiente

  $("#tituloVideo47").text("47. ");
  $("#urlVideo47").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video47LinkAnterior").attr("href", "video46.html"); // video anterior
  $("#video47LinkSiguiente").attr("href", "video48.html"); // video siguiente

  $("#tituloVideo48").text("48. ");
  $("#urlVideo48").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video48LinkAnterior").attr("href", "video47.html"); // video anterior
  $("#video48LinkSiguiente").attr("href", "video49.html"); // video siguiente

  $("#tituloVideo49").text("49. ");
  $("#urlVideo49").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video49LinkAnterior").attr("href", "video48.html"); // video anterior
  $("#video49LinkSiguiente").attr("href", "video50.html"); // video siguiente

  $("#tituloVideo50").text("50. ");
  $("#urlVideo50").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video50LinkAnterior").attr("href", "video49.html"); // video anterior
  $("#video50LinkSiguiente").attr("href", "video51.html"); // video siguiente

  $("#tituloVideo51").text("51. ");
  $("#urlVideo51").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video51LinkAnterior").attr("href", "video50.html"); // video anterior
  $("#video51LinkSiguiente").attr("href", "video52.html"); // video siguiente

  $("#tituloVideo52").text("52. ");
  $("#urlVideo52").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video52LinkAnterior").attr("href", "video51.html"); // video anterior
  $("#video52LinkSiguiente").attr("href", "video53.html"); // video siguiente

  $("#tituloVideo53").text("53. ");
  $("#urlVideo53").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video53LinkAnterior").attr("href", "video52.html"); // video anterior
  $("#video53LinkSiguiente").attr("href", "video54.html"); // video siguiente

  $("#tituloVideo54").text("54. ");
  $("#urlVideo54").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video54LinkAnterior").attr("href", "video53.html"); // video anterior
  $("#video54LinkSiguiente").attr("href", "video55.html"); // video siguiente

  $("#tituloVideo55").text("55. ");
  $("#urlVideo55").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video55LinkAnterior").attr("href", "video54.html"); // video anterior
  $("#video55LinkSiguiente").attr("href", "video56.html"); // video siguiente

  $("#tituloVideo56").text("56. ");
  $("#urlVideo56").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video56LinkAnterior").attr("href", "video55.html"); // video anterior
  $("#video56LinkSiguiente").attr("href", "video57.html"); // video siguiente

  $("#tituloVideo57").text("57. ");
  $("#urlVideo57").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video57LinkAnterior").attr("href", "video56.html"); // video anterior
  $("#video57LinkSiguiente").attr("href", "video58.html"); // video siguiente

  $("#tituloVideo58").text("58. ");
  $("#urlVideo58").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video58LinkAnterior").attr("href", "video57.html"); // video anterior
  $("#video58LinkSiguiente").attr("href", "videos59.html"); // video siguiente

  $("#tituloVideo59").text("59. ");
  $("#urlVideo59").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video59LinkAnterior").attr("href", "video58.html"); // video anterior
  $("#video59LinkSiguiente").attr("href", "video60.html"); // video siguiente

  $("#tituloVideo60").text("60. ");
  $("#urlVideo60").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video60LinkAnterior").attr("href", "video59.html"); // video anterior
  $("#video60LinkSiguiente").attr("href", "video61.html"); // video siguiente

  $("#tituloVideo61").text("61. ");
  $("#urlVideo61").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video61LinkAnterior").attr("href", "video60.html"); // video anterior
  $("#video61LinkSiguiente").attr("href", "video62.html"); // video siguiente

  $("#tituloVideo62").text("62. ");
  $("#urlVideo62").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video62LinkAnterior").attr("href", "video61.html"); // video anterior
  $("#video62LinkSiguiente").attr("href", "video63.html"); // video siguiente

  $("#tituloVideo63").text("63. ");
  $("#urlVideo63").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video63LinkAnterior").attr("href", "video62.html"); // video anterior
  $("#video63LinkSiguiente").attr("href", "video64.html"); // video siguiente

  $("#tituloVideo64").text("64. ");
  $("#urlVideo64").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video64LinkAnterior").attr("href", "video63.html"); // video anterior
  $("#video64LinkSiguiente").attr("href", "video65.html"); // video siguiente

  $("#tituloVideo65").text("65. ");
  $("#urlVideo65").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video65LinkAnterior").attr("href", "video64.html"); // video anterior
  $("#video65LinkSiguiente").attr("href", "video66.html"); // video siguiente

  $("#tituloVideo66").text("66. ");
  $("#urlVideo66").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video66LinkAnterior").attr("href", "video65.html"); // video anterior
  $("#video66LinkSiguiente").attr("href", "video67.html"); // video siguiente

  $("#tituloVideo67").text("67. ");
  $("#urlVideo67").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video67LinkAnterior").attr("href", "video66.html"); // video anterior
  $("#video67LinkSiguiente").attr("href", "video68.html"); // video siguiente

  $("#tituloVideo68").text("68. ");
  $("#urlVideo68").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video68LinkAnterior").attr("href", "video67.html"); // video anterior
  $("#video68LinkSiguiente").attr("href", "video69.html"); // video siguiente

  $("#tituloVideo69").text("69. ");
  $("#urlVideo69").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video69LinkAnterior").attr("href", "video68.html"); // video anterior
  $("#video69LinkSiguiente").attr("href", "video70.html"); // video siguiente

  $("#tituloVideo70").text("70. ");
  $("#urlVideo70").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video70LinkAnterior").attr("href", "video69.html"); // video anterior
  $("#video70LinkSiguiente").attr("href", "video71.html"); // video siguiente

  $("#tituloVideo71").text("71. ");
  $("#urlVideo71").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video71LinkAnterior").attr("href", "video70.html"); // video anterior
  $("#video71LinkSiguiente").attr("href", "video72.html"); // video siguiente

  $("#tituloVideo72").text("72. ");
  $("#urlVideo72").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video72LinkAnterior").attr("href", "video71.html"); // video anterior
  $("#video72LinkSiguiente").attr("href", "video73.html"); // video siguiente

  $("#tituloVideo73").text("73. ");
  $("#urlVideo73").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video73LinkAnterior").attr("href", "video72.html"); // video anterior
  $("#video73LinkSiguiente").attr("href", "video74.html"); // video siguiente

  $("#tituloVideo74").text("74. ");
  $("#urlVideo74").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video74LinkAnterior").attr("href", "video73.html"); // video anterior
  $("#video74LinkSiguiente").attr("href", "video75.html"); // video siguiente

  $("#tituloVideo75").text("75. ");
  $("#urlVideo75").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video75LinkAnterior").attr("href", "video74.html"); // video anterior
  $("#video75LinkSiguiente").attr("href", "video76.html"); // video siguiente

  $("#tituloVideo76").text("76. ");
  $("#urlVideo76").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video76LinkAnterior").attr("href", "video75.html"); // video anterior
  $("#video76LinkSiguiente").attr("href", "video77.html"); // video siguiente

  $("#tituloVideo77").text("77. ");
  $("#urlVideo77").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video77LinkAnterior").attr("href", "video76.html"); // video anterior
  $("#video77LinkSiguiente").attr("href", "video78.html"); // video siguiente

  $("#tituloVideo78").text("78. ");
  $("#urlVideo78").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video78LinkAnterior").attr("href", "video77.html"); // video anterior
  $("#video78LinkSiguiente").attr("href", "video79.html"); // video siguiente

  $("#tituloVideo79").text("79. ");
  $("#urlVideo79").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video79LinkAnterior").attr("href", "video78.html"); // video anterior
  $("#video79LinkSiguiente").attr("href", "video80.html"); // video siguiente

  $("#tituloVideo80").text("80. ");
  $("#urlVideo80").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video80LinkAnterior").attr("href", "video79.html"); // video anterior
  $("#video80LinkSiguiente").attr("href", "video81.html"); // video siguiente

  $("#tituloVideo81").text("81. ");
  $("#urlVideo81").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video81LinkAnterior").attr("href", ""); // video anterior
  $("#video81LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo82").text("82. ");
  $("#urlVideo82").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video82LinkAnterior").attr("href", ""); // video anterior
  $("#video82LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo83").text("83. ");
  $("#urlVideo83").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video83LinkAnterior").attr("href", ""); // video anterior
  $("#video83LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo84").text("84. ");
  $("#urlVideo84").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video84LinkAnterior").attr("href", ""); // video anterior
  $("#video84LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo85").text("85. ");
  $("#urlVideo85").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video85LinkAnterior").attr("href", ""); // video anterior
  $("#video85LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo86").text("86. ");
  $("#urlVideo86").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video86LinkAnterior").attr("href", ""); // video anterior
  $("#video86LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo87").text("87. ");
  $("#urlVideo87").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video87LinkAnterior").attr("href", ""); // video anterior
  $("#video87LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo88").text("88. ");
  $("#urlVideo88").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video88LinkAnterior").attr("href", ""); // video anterior
  $("#video88LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo89").text("89. ");
  $("#urlVideo89").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video89LinkAnterior").attr("href", ""); // video anterior
  $("#video89LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo90").text("90. ");
  $("#urlVideo90").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video90LinkAnterior").attr("href", ""); // video anterior
  $("#video90LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo91").text("91. ");
  $("#urlVideo91").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video91LinkAnterior").attr("href", ""); // video anterior
  $("#video91LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo92").text("92. ");
  $("#urlVideo92").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video92LinkAnterior").attr("href", ""); // video anterior
  $("#video92LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo93").text("93. ");
  $("#urlVideo93").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video93LinkAnterior").attr("href", ""); // video anterior
  $("#video93LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo94").text("94. ");
  $("#urlVideo94").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video94LinkAnterior").attr("href", ""); // video anterior
  $("#video94LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo95").text("95. ");
  $("#urlVideo95").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video95LinkAnterior").attr("href", ""); // video anterior
  $("#video95LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo96").text("96. ");
  $("#urlVideo96").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video96LinkAnterior").attr("href", ""); // video anterior
  $("#video96LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo97").text("97. ");
  $("#urlVideo97").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video97LinkAnterior").attr("href", ""); // video anterior
  $("#video97LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo98").text("98. ");
  $("#urlVideo98").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video98LinkAnterior").attr("href", ""); // video anterior
  $("#video98LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo99").text("99. ");
  $("#urlVideo99").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video99LinkAnterior").attr("href", ""); // video anterior
  $("#video99LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo100").text("100. ");
  $("#urlVideo100").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video100LinkAnterior").attr("href", ""); // video anterior
  $("#video100LinkSiguiente").attr("href", ""); // video siguiente



  // link al canal y nombre del creador del video - hasta 100 videos
  $("#creadorVideoLink1").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo1Texto").text("-");

  $("#creadorVideoLink2").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo2Texto").text("-");

  $("#creadorVideoLink3").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo3Texto").text("-");

  $("#creadorVideoLink4").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo4Texto").text("-");

  $("#creadorVideoLink5").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo5Texto").text("-");

  $("#creadorVideoLink6").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo6Texto").text("-");

  $("#creadorVideoLink7").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo7Texto").text("-");

  $("#creadorVideoLink8").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo8Texto").text("-");

  $("#creadorVideoLink9").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo9Texto").text("-");

  $("#creadorVideoLink10").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo10Texto").text("-");

  $("#creadorVideoLink11").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo11Texto").text("-");

  $("#creadorVideoLink12").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo12Texto").text("-");

  $("#creadorVideoLink13").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo13Texto").text("-");

  $("#creadorVideoLink14").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo14Texto").text("-");

  $("#creadorVideoLink15").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo15Texto").text("-");

  $("#creadorVideoLink16").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo16Texto").text("-");

  $("#creadorVideoLink17").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo17Texto").text("-");

  $("#creadorVideoLink18").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo18Texto").text("-");

  $("#creadorVideoLink19").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo19Texto").text("-");

  $("#creadorVideoLink20").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo20Texto").text("-");

  $("#creadorVideoLink21").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo21Texto").text("-");

  $("#creadorVideoLink22").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo22Texto").text("-");

  $("#creadorVideoLink23").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo23Texto").text("-");

  $("#creadorVideoLink24").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo24Texto").text("-");

  $("#creadorVideoLink25").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo25Texto").text("-");

  $("#creadorVideoLink26").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo26Texto").text("-");

  $("#creadorVideoLink27").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo27Texto").text("-");

  $("#creadorVideoLink28").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo28Texto").text("-");

  $("#creadorVideoLink29").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo29Texto").text("-");

  $("#creadorVideoLink30").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo30Texto").text("-");

  $("#creadorVideoLink31").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo31Texto").text("-");

  $("#creadorVideoLink32").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo32Texto").text("-");

  $("#creadorVideoLink33").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo33Texto").text("-");

  $("#creadorVideoLink34").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo34Texto").text("-");

  $("#creadorVideoLink35").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo35Texto").text("-");

  $("#creadorVideoLink36").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo36Texto").text("-");

  $("#creadorVideoLink37").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo37Texto").text("-");

  $("#creadorVideoLink38").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo38Texto").text("-");

  $("#creadorVideoLink39").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo39Texto").text("-");

  $("#creadorVideoLink40").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo40Texto").text("-");

  $("#creadorVideoLink41").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo41Texto").text("-");

  $("#creadorVideoLink42").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo42Texto").text("-");

  $("#creadorVideoLink43").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo43Texto").text("-");

  $("#creadorVideoLink44").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo44Texto").text("-");

  $("#creadorVideoLink45").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo45Texto").text("-");

  $("#creadorVideoLink46").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo46Texto").text("-");

  $("#creadorVideoLink47").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo47Texto").text("-");

  $("#creadorVideoLink48").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo48Texto").text("-");

  $("#creadorVideoLink49").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo49Texto").text("-");

  $("#creadorVideoLink50").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo50Texto").text("-");

  $("#creadorVideoLink51").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo51Texto").text("-");

  $("#creadorVideoLink52").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo52Texto").text("-");

  $("#creadorVideoLink53").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo53Texto").text("-");

  $("#creadorVideoLink54").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo54Texto").text("-");

  $("#creadorVideoLink55").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo55Texto").text("-");

  $("#creadorVideoLink56").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo56Texto").text("-");

  $("#creadorVideoLink57").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo57Texto").text("-");

  $("#creadorVideoLink58").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo58Texto").text("-");

  $("#creadorVideoLink59").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo59Texto").text("-");

  $("#creadorVideoLink60").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo60Texto").text("-");

  $("#creadorVideoLink61").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo61Texto").text("-");

  $("#creadorVideoLink62").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo62Texto").text("-");

  $("#creadorVideoLink63").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo63Texto").text("-");

  $("#creadorVideoLink64").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo64Texto").text("-");

  $("#creadorVideoLink65").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo65Texto").text("-");

  $("#creadorVideoLink66").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo66Texto").text("-");

  $("#creadorVideoLink67").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo67Texto").text("-");

  $("#creadorVideoLink68").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo68Texto").text("-");

  $("#creadorVideoLink69").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo69Texto").text("-");

  $("#creadorVideoLink70").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo70Texto").text("-");

  $("#creadorVideoLink71").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo71Texto").text("-");

  $("#creadorVideoLink72").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo72Texto").text("-");

  $("#creadorVideoLink73").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo73Texto").text("-");

  $("#creadorVideoLink74").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo74Texto").text("-");

  $("#creadorVideoLink75").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo75Texto").text("-");

  $("#creadorVideoLink76").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo76Texto").text("-");

  $("#creadorVideoLink77").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo77Texto").text("-");

  $("#creadorVideoLink78").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo78Texto").text("-");

  $("#creadorVideoLink79").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo79Texto").text("-");

  $("#creadorVideoLink80").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo80Texto").text("-");

  $("#creadorVideoLink81").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo81Texto").text("-");

  $("#creadorVideoLink82").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo82Texto").text("-");

  $("#creadorVideoLink83").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo83Texto").text("-");

  $("#creadorVideoLink84").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo84Texto").text("-");

  $("#creadorVideoLink85").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo85Texto").text("-");

  $("#creadorVideoLink86").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo86Texto").text("-");

  $("#creadorVideoLink87").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo87Texto").text("-");

  $("#creadorVideoLink88").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo88Texto").text("-");

  $("#creadorVideoLink89").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo89Texto").text("-");

  $("#creadorVideoLink90").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo90Texto").text("-");

  $("#creadorVideoLink91").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo91Texto").text("-");

  $("#creadorVideoLink92").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo92Texto").text("-");

  $("#creadorVideoLink93").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo93Texto").text("-");

  $("#creadorVideoLink94").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo94Texto").text("-");

  $("#creadorVideoLink95").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo95Texto").text("-");

  $("#creadorVideoLink96").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo96Texto").text("-");

  $("#creadorVideoLink97").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo97Texto").text("-");

  $("#creadorVideoLink98").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo98Texto").text("-");

  $("#creadorVideoLink99").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo99Texto").text("-");

  $("#creadorVideoLink100").attr("href", ).text();
  // descripcion de cada video
  $("#descripcionCursoVideo100Texto").text("-");

  // VARIABLES para nombres de creadores y links a sus canales

  // Matematicas
  var DanielC = "Daniel Carreon.";
  var DanielCLink = "https://www.youtube.com/channel/UCwScwtu5zVqc_wHtRx9XvDA";
  var ProfeA = "Profe Alex.";
  var ProfeALink = "https://www.youtube.com/channel/UCanMxWvOoiwtjLYm08Bo8QQ";
  var nzq = "Nzq zaga."
  var nzqLink = "https://www.youtube.com/channel/UCux3g7zN47ysPqDR9OyUOxg"
  var MarceM = "MarceMáticas."
  var MarceMLink = "https://www.youtube.com/channel/UC-Y9adQbXtMOsms_j0N709Q"
  var CesarMGSLink = "César Moisés Grillo Soliz."
  var CesarLink = "https://www.youtube.com/channel/UCE5LBbb61uzwYM-QLHksp5w"
  var SusiP = "Susi profe."
  var SusiPLink = "https://www.youtube.com/channel/UC_Myy53yTBO7ElRGg3eYLCA"
  var AprendeM = "Apprende Mate."
  var ApprendeMLink = "https://www.youtube.com/channel/UCKx3zum6LuPBkJlhNWF7CAQ"
  var math2 = "Math2me."
  var math2Link = "https://www.youtube.com/channel/UCB34YbuG6ThXJzJsDAII5Dw"
  var aprendopolis = "Aprendopolis."
  var aprendopolisLink = "https://www.youtube.com/channel/UCHjMp24HKtWACYwqcRpx8LA"
  var Aula365 = "Aula365."
  var aula365Link = "https://www.youtube.com/channel/UCE3m5uW9fUnf_tuKsVAmVPw"
  var ingeD = "ingE Darwin."
  var ingeDLink = "https://www.youtube.com/channel/UCCEiGea11PvLd44aPuG9FxQ"
  var acervo = "Acervo - Television Educativa."
  var acervoLink = "https://www.youtube.com/channel/UCD_vqC34BVWFN-6nfTXLjIA"
  var happyLE = "Happy learning español."
  var happyLELink = "https://www.youtube.com/channel/UCGkVdu_EVrqqxQ7OnLFK8RQ"
  var rubenS = "Ruben Sebastian"
  var rubenSLink = "https://www.youtube.com/channel/UCZhoD5D-prW4KbPadIdpOpg"
  var lauraB = "Laura Buitrago"
  var lauraBLink = "https://www.youtube.com/channel/UCCtalXxnT2zP9YhXH4qp3Tg"
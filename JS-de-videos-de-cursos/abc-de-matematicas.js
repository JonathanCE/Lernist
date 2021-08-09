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
  $(".leccionBotonMas").text("+"); // este codigo se podria repetir para todos los videos de Lernist
  $("#VideosBotonPrevious").attr("src", "/i_temas/previous.png");
  $("#VideosBotonPreviousText").text("Anterior");
  $("#VideosBotonNext").attr("src", "/i_temas/next.png");
  $("#VideosBotonNextText").text("Siguiente");
  $("#VideosMensajeInicio").text("¡El curso comienza aquí!");
  $("#VideosMensajeFinal").text("¡Haz terminado el curso!");

  // ABC DE MATEMATICAS
  // ABC DE MATEMATICAS

  // LECCIONES
  $("#leccion-jerarquiaOperaciones").text("Jerarquía de las Operaciones");
  $("#leccion-leySignos").text("Leyes de los Signos");
  $("#leccion-fracciones").text("Fracciones");
  $("#leccion-decimales").text("Números Decimales");
  $("#leccion-mcm").text("Mínimo común multiplo y Máximo común divisor");
  $("#leccion-potencias").text("Potencias");
  $("#leccion-raices").text("Raiz cuadrada");
  $("#leccion-porcentajes").text("Porcentajes");
  $("#leccion-mediaModaMediana").text("Media, moda y mediana");
  $("#leccion-probabilidad").text("Probabilidad simple");
  $("#leccion-perimetroArea").text("Perímetro y Area de figuras básicas");
  $("#leccion-volumen").text("Volúmenes de prismas principales");
  $("#leccion-angulos").text("Ángulos y figuras");
  $("#leccion-lenguajeAlgebraico").text("Lenguaje Algebraico");
  $("#leccion-terminosSemejantes").text("Términos semejantes");
  $("#leccion-ecuaciones").text("Ecuaciones de primer grado");
  $("#leccion-planoCartesiano").text("Plano cartesiano y gráficar ecuaciones");
  $("#leccion-teoremaPitagoras").text("Teorema de Pitágoras");

  // TITULOS DE MENU ACORDION (lecciones y partes)
  $("#tituloAcordion1").text("Jerarquía de las Operaciones");
  $("#tituloAcordion2").text("Leyes de los Signos");
  $("#tituloAcordion3").text("Fracciones");
  $("#tituloAcordion4").text("Números Decimales");
  $("#tituloAcordion5").text("Mínimo común multiplo y Máximo común divisor");
  $("#tituloAcordion6").text("Potencias");
  $("#tituloAcordion7").text("Raiz cuadrada");
  $("#tituloAcordion8").text("Porcentajes");
  $("#tituloAcordion9").text("Media, moda y mediana");
  $("#tituloAcordion10").text("Probabilidad simple");
  $("#tituloAcordion11").text("Perímetro y Area de figuras básicas");
  $("#tituloAcordion12").text("Volúmenes de prismas principales");
  $("#tituloAcordion13").text("Ángulos y figuras");
  $("#tituloAcordion14").text("Lenguaje Algebraico");
  $("#tituloAcordion15").text("Términos semejantes");
  $("#tituloAcordion16").text("Ecuaciones de primer grado");
  $("#tituloAcordion17").text("Plano cartesiano y gráficar ecuaciones");
  $("#tituloAcordion18").text("Teorema de Pitágoras");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // Jerarquia de las operaciones
  $("#videoAcordion1").attr("href", "video1.html").text("1. ");
  $("#videoAcordion2").attr("href", "video2.html").text("2. ");
  $("#videoAcordion3").attr("href", "video3.html").text("3. ");
  $("#videoAcordion4").attr("href", "video4.html").text("4. ");
  $("#videoAcordion5").attr("href", "video5.html").text("5. ");
  // Leyes de los Signos
  $("#videoAcordion6").attr("href", "video6.html").text("6. ");
  $("#videoAcordion7").attr("href", "video7.html").text("7. ");
  // Fracciones
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
  // Numeros decimales
  $("#videoAcordion18").attr("href", "video18.html").text("18. ");
  $("#videoAcordion19").attr("href", "video19.html").text("19. ");
  $("#videoAcordion20").attr("href", "video20.html").text("20. ");
  $("#videoAcordion21").attr("href", "video21.html").text("21. ");
  $("#videoAcordion22").attr("href", "video22.html").text("22. ");
  $("#videoAcordion23").attr("href", "video23.html").text("23. ");
  $("#videoAcordion24").attr("href", "video24.html").text("24. ");
  $("#videoAcordion25").attr("href", "video25.html").text("25. ");
  // mcm y MCD
  $("#videoAcordion26").attr("href", "video26.html").text("26. ");
  $("#videoAcordion27").attr("href", "video27.html").text("27. ");
  $("#videoAcordion28").attr("href", "video28.html").text("28. ");
  $("#videoAcordion29").attr("href", "video29.html").text("29. ");
  // Potencias
  $("#videoAcordion30").attr("href", "video30.html").text("30. ");
  $("#videoAcordion31").attr("href", "video31.html").text("31. ");
  $("#videoAcordion32").attr("href", "video32.html").text("32. ");
  // Raiz cuadrada
  $("#videoAcordion33").attr("href", "video33.html").text("33. ");
  $("#videoAcordion34").attr("href", "video34.html").text("34. ");
  $("#videoAcordion35").attr("href", "video35.html").text("35. ");
  // Porcentajes
  $("#videoAcordion36").attr("href", "video36.html").text("36. ");
  $("#videoAcordion37").attr("href", "video37.html").text("37. ");
  $("#videoAcordion38").attr("href", "video38.html").text("38. ");
  $("#videoAcordion39").attr("href", "video39.html").text("39. ");
  $("#videoAcordion40").attr("href", "video40.html").text("40. ");
  // Media, moda y mediana
  $("#videoAcordion41").attr("href", "video41.html").text("41. ");
  $("#videoAcordion42").attr("href", "video42.html").text("42. ");
  $("#videoAcordion43").attr("href", "video43.html").text("43. ");
  // Probabilidad simple
  $("#videoAcordion44").attr("href", "video44.html").text("44. ");
  $("#videoAcordion45").attr("href", "video45.html").text("45. ");
  // Perimetro y Area
  $("#videoAcordion46").attr("href", "video45.html").text("46. ");

  // DATOS DE CADA VIDEO
  $("#tituloVideo1").text("1. ");
  $("#urlVideo1").attr("src", "https://www.youtube.com/embed/XV5PiV2-91U?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video1LinkAnterior").attr("href", ""); // video anterior
  $("#video1LinkSiguiente").attr("href", ""); // video siguiente

  $("#tituloVideo2").text("2. ");
  $("#urlVideo2").attr("src", "?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video2LinkAnterior").attr("href", ""); // video anterior
  $("#video2LinkSiguiente").attr("href", ""); // video siguiente

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

  // ABC DE MATEMATICAS
  // ABC DE MATEMATICAS

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
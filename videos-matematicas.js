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
  setTimeout(carousel, 7000); // Change image every 2 seconds
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
  setTimeout(carouselMovil, 7000); // Change image every 2 seconds
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

  // ESTUDIA PARA EL PAA
  // ESTUDIA PARA EL PAA

  // DATOS PRINCIPALES PAA CONSEJOS GENERALES
  $("#consejosGenerales").text("Consejos generales para el PAA");

  // DATOS PRINCIPALES PAA LECTURA
  $("#generosLiterarios").text("Generos y Subgeneros Literarios");
  $("#tiposDiscurso").text("Tipos de Discurso");
  $("#figurasRetoricas").text("Figuras retoricas o literarias")

  // DATOS PRINCIPALES PAA MATE
  $("#paaAlgebra").text("Álgebra");
  $("#paaAritmetica").text("Aritmética");
  $("#paaGeometria").text("Geometría");
  $("#paaProbabilidad").text("Probabilidad");

  // TITULOS DE MENU ACORDION
  $("#paaVideosConsejosGeneralesPAA").text("Consejos generales para el PAA");

  $("#paaVideosLecturaGenerosLiterarios").text("Generos y Subgeneros Literarios");
  $("#paaVideosLecturaTiposDiscurso").text("Tipos de Discurso");
  $("#paaVideosLecturaFigurasRetoricas").text("Figuras retóricas o literarias")

  $("#paaVideosMateLeccionAritmetica").text("Aritmética");
  $("#paaVideosMateLeccionAlgebra").text("Álgebra");
  $("#paaVideosMateLeccionGeometria").text("Geometría");
  $("#paaVideosMateLeccionProbabilidad").text("Probabilidad");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // CONSEJOS GENERALES
  $("#paaVideosConsejosGenerales1Menu").attr("href", "/aprender/examen-paa/consejos-generales/videos/trucos-para-aprobar-los-examenes.html").text("1. Trucos para aprobar los exámenes")
  // LECTURA 
  $("#paaVideosLectura1Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video1.html").text("1. Géneros literarios");
  $("#paaVideosLectura2Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video2.html").text("2. ¿Qué es una novela?");
  $("#paaVideosLectura3Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video3.html").text("3. El cuento y sus partes");
  $("#paaVideosLectura4Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video4.html").text("4. La fábula y sus características");
  $("#paaVideosLectura5Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video5.html").text("5. Mitos y Leyendas");
  $("#paaVideosLectura6Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video6.html").text("6. El poema y sus características");
  $("#paaVideosLectura7Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video7.html").text("7. Shrek - La sátira perfecta");
  $("#paaVideosLectura8Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video8.html").text("8. ¿Qué es drama?");
  $("#paaVideosLectura9Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video9.html").text("9. Definición de Tragedia");
  $("#paaVideosLectura10Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video10.html").text("10. Género dramático ¿Qué es la comedia?");
  $("#paaVideosLectura11Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video11.html").text("11. El ensayo: Definición, características y escritura");
  $("#paaVideosLectura12Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video12.html").text("12. La biografía y sus características");
  $("#paaVideosLectura13Menu").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video13.html").text("13. ¿Qué es una Crónica?");

  $("#paaVideosLectura14Menu").attr("href", "/aprender/examen-paa/lectura/videos/tipos-de-discurso/video14.html").text("14. Tipos de discurso: narrativo, descriptivo, argumentativo");

  $("#paaVideosLectura15Menu").attr("href", "/aprender/examen-paa/lectura/videos/figuras-retoricas/video15.html").text("15. Figuras literarias o retóricas");
  // MATEMATICAS
  $("#paaVideosMate1Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video1.html").text("1. Jerarquía de las Operaciones | Super fácil");
  $("#paaVideosMate2Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video2.html").text("2. Ley de los signos | Super fácil");
  $("#paaVideosMate3Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video3.html").text("3. Si te parecen difícil las fracciones debes ver este video");
  $("#paaVideosMate4Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video4.html").text("4. Operaciones combinadas con fracciones");
  $("#paaVideosMate5Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video5.html").text("5. Números decimales introducción");
  $("#paaVideosMate6Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video6.html").text("6. ¿Qué son los números decimales?");
  $("#paaVideosMate7Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video7.html").text("7. Convertir fraccion a decimal | Super fácil");
  $("#paaVideosMate8Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video8.html").text("8. Como leer números decimales | Super fácil");
  $("#paaVideosMate9Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video9.html").text("9. Suma y resta de números decimales");
  $("#paaVideosMate10Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video10.html").text("10. Lenguaje algebraico | Parte 1");
  $("#paaVideosMate11Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video11.html").text("11. Lenguaje algebraico | Super fácil");
  $("#paaVideosMate12Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video12.html").text("12. Mínimo común múltiplo MCM explicación completa");
  $("#paaVideosMate13Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video13.html").text("13. Mínimo común múltiplo | Super fácil");
  $("#paaVideosMate14Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video14.html").text("14. Máximo común divisor MCD");
  $("#paaVideosMate15Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video15.html").text("15. Máximo común divisor | Super fácil");
  $("#paaVideosMate16Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video16.html").text("16. Valor absoluto de un número");
  $("#paaVideosMate17Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video17.html").text("17. Valor absoluto | Super fácil");
  $("#paaVideosMate18Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video18.html").text("18. Qué es la potenciación");
  $("#paaVideosMate19Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video19.html").text("19. Potencias | Super fácil");
  $("#paaVideosMate20Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video20.html").text("20. Leyes de los exponentes");
  $("#paaVideosMate21Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video21.html").text("21. Raíz cuadrada | Super fácil");
  $("#paaVideosMate22Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video22.html").text("22. La raíz cuadrada");
  $("#paaVideosMate23Menu").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video23.html").text("23. Leyes de los radicales");

  $("#paaVideosMate24Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video24.html").text("24. Suma y resta de monomios | Super fácil");
  $("#paaVideosMate25Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video25.html").text("25. Ecuaciones de primer grado | Super fácil");
  $("#paaVideosMate26Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video26.html").text("26. Como solucionar una ecuación entera de primer grado");
  $("#paaVideosMate27Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video27.html").text("27. Ecuaciones de primer grado con paréntesis | Super fácil");
  $("#paaVideosMate28Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video28.html").text("28. Que es factorizar");
  $("#paaVideosMate29Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video29.html").text("29. Factorizacion | Super fácil");
  $("#paaVideosMate30Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video30.html").text("30. Qué es una función | Concepto de función");
  $("#paaVideosMate31Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video31.html").text("31. Gráfica de la función lineal");
  $("#paaVideosMate32Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video32.html").text("32. Funciones lineales grafica dominio y rango");
  $("#paaVideosMate33Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video33.html").text("33. Inecuaciones introducción | conceptos básicos");
  $("#paaVideosMate34Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video34.html").text("34. Inecuaciones de primer grado - lineales");
  $("#paaVideosMate35Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video35.html").text("35. Inecuaciones con valor absoluto");
  $("#paaVideosMate36Menu").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video36.html").text("36. Como graficar desigualdades de una o dos variables");

  $("#paaVideosMate37Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video37.html").text("37. Perímetro de todas las figuras | Super fácil");
  $("#paaVideosMate38Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video38.html").text("38. Área de todas las figuras | Super fácil");
  $("#paaVideosMate39Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video39.html").text("39. Perímetro y Área del cuadrado | Super fácil");
  $("#paaVideosMate40Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video40.html").text("40. Perímetro y Área del triangulo | Super fácil");
  $("#paaVideosMate41Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video41.html").text("41. Perímetro del círculo | Super fácil");
  $("#paaVideosMate42Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video42.html").text("42. Área del círculo");
  $("#paaVideosMate43Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video43.html").text("43. Áreas sombreadas | Super fácil");
  $("#paaVideosMate44Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video44.html").text("44. ¿Puedes calcular el área sombreada?");
  $("#paaVideosMate45Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video45.html").text("45. Área de polígonos irregulares");
  $("#paaVideosMate46Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video46.html").text("46. Perímetro y Área con expresiones algebraicas");
  $("#paaVideosMate47Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video47.html").text("47. Volumen de prismas | Super fácil");
  $("#paaVideosMate48Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video48.html").text("48. Volumen de pirámides | Super fácil");
  $("#paaVideosMate49Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video49.html").text("49. Diferencias Perímetro, Área y Volumen | Super fácil");
  $("#paaVideosMate50Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video50.html").text("50. Ángulos entre paralelas y una transversal | Super fácil");
  $("#paaVideosMate51Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video51.html").text("51. Rectas paralelas cortadas por una secante");
  $("#paaVideosMate52Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video52.html").text("52. Teorema de Pitágoras introducción");
  $("#paaVideosMate53Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video53.html").text("53. Teorema de Pitágoras | Super fácil");
  $("#paaVideosMate54Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video54.html").text("54. Teorema de Pitágoras | Encontrar un cateto");
  $("#paaVideosMate55Menu").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video55.html").text("55. Teorema de Pitágoras | Encontrar la hipotenusa");

  $("#paaVideosMate56Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video56.html").text("56. Porcentaje de un número");
  $("#paaVideosMate57Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video57.html").text("57. Porcentaje problemas de aplicación");
  $("#paaVideosMate58Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video58.html").text("58. Porcentajes | Super fácil");
  $("#paaVideosMate59Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video59.html").text("59. Como calcular un porcentaje | Super fácil");
  $("#paaVideosMate60Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video60.html").text("60. Probabilidad | Super fácil");
  $("#paaVideosMate61Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video61.html").text("61. Probabilidad de un evento simple");
  $("#paaVideosMate62Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video62.html").text("62. Probabilidad de eventos independientes");
  $("#paaVideosMate63Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video63.html").text("63. Probabilidad de eventos dependientes");
  $("#paaVideosMate64Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video64.html").text("64. Media, moda y mediana | Super fácil");
  $("#paaVideosMate65Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video65.html").text("65. Media, moda y mediana | Datos sin agrupar");
  $("#paaVideosMate66Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video66.html").text("66. Regla de 3 simple directa");
  $("#paaVideosMate67Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video67.html").text("67. Regla de 3 simple | Super fácil");
  $("#paaVideosMate68Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video68.html").text("68. Regla de 3 inversa | Super fácil");
  $("#paaVideosMate69Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video69.html").text("69. Regla de 3 simple inversa");
  $("#paaVideosMate70Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video70.html").text("70. Regla de 3 | Como identificar si es directa o inversa");
  $("#paaVideosMate71Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video71.html").text("71. Combinaciones | Super fácil");
  $("#paaVideosMate72Menu").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video72.html").text("72. Combinación con repetición y sin repetición");

  // DATOS DE CADA VIDEO CONSEJOS GENERALES
  $("#paaVideosConsejosGenerales1Titulo").text("1. Trucos para aprobar los exámenes");
  $("#paaVideosConsejosGenerales1Video").attr("src", "https://www.youtube.com/embed/IRwrAMdpd18");
  $("#paaVideosConsejosGenerales1BotonAnterior").attr("href", "/aprender/examen-paa/consejos-generales/videos/trucos-para-aprobar-los-examenes.html");
  $("#paaVideosConsejosGenerales1BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video1.html");
  // DATOS DE CADA VIDEO LECTURA
  $("#paaVideosLectura1Titulo").text("1. Géneros literarios");
  $("#paaVideosLectura1Video").attr("src", "https://www.youtube.com/embed/Q9bh83Oc1lY");
  $("#paaVideosLectura1BotonAnterior").attr("href", "/aprender/examen-paa/consejos-generales/videos/trucos-para-aprobar-los-examenes.html");
  $("#paaVideosLectura1BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video2.html");

  // DATOS DE CADA VIDEO MATEMATICAS
  $("#paaVideosMate1Titulo").text("1. Jerarquía de las Operaciones | Super fácil");
  $("#paaVideosMate1Video").attr("src", "https://www.youtube.com/embed/XV5PiV2-91U");
  $("#paaVideosMate1BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/figuras-retoricas/video15.html");
  $("#paaVideosMate1BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video2.html");

  // ACERCA DE
  $("#creadorPAAVideo").text("Creador del video");
  $("#creadorVideoTexto1").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto2").text("Lernist.com no es el propietario de este video. Distribuimos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");
  $("#descripcionCursoPAA").text("Descripción del curso");
  $("#descripcionCursoPAATexto").text("El curso de estudio para el examen PAA esta diseñado para enseñarte todos los conocimientos"
                                      + " necesarios para lograr una super calificación en el examen. A lo largo de las lecciones y videos"
                                      + " que lo componen, aprenderás y pondrás en practica habilidades de lectura, redacción y matemáticas,"
                                      + " explicadas de la mano de expertos y de una forma clara y rápida.");
  $("#tipsCursoPAA").text("Tips para el curso");
  $("#tipsCursoPAATexto").text("En partes del curso como en matemáticas, notarás que dos videos cubren el mismo tema o"
                              + " concepto, esto es a propósito, para darte a ti la elección de tu preferencia, además que"
                              + " así tienes más opciones de estudio por si un tema te parece algo complicado y necesitas"
                              + " verlo un poco más.");
  $("#duracionCursoPAA").text("Duración y cantidad de videos del curso");
  $("#duracionCursoPAATexto").text("- 88 videos");

  $("#creadorVideoPAALecturaLink1").attr("href", "https://www.youtube.com/channel/UCqod258jC_Cn8UIW5g0LqqA").text("Wayraeduca.");

  // ESTUDIA PARA EL PAA
  // ESTUDIA PARA EL PAA

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
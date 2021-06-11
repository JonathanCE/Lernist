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
  $("#homepageLink").attr("href", "/index.html");
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
  $(".paaVideosLeccionBotonMas").text("+"); // este codigo se podria repetir para todos los videos de Lernist
  $("#VideosBotonPrevious").attr("src", "/i_temas/previous.png");
  $("#VideosBotonPreviousText").text("Anterior");
  $("#VideosBotonNext").attr("src", "/i_temas/next.png");
  $("#VideosBotonNextText").text("Siguiente");
  $("#VideosMensajeInicio").text("¡El curso comienza aquí!");
  $("#VideosMensajeFinal").text("¡Haz terminado el curso!");

  // ESTUDIA PARA EL PAA
  // ESTUDIA PARA EL PAA

  // PAA | LECTURA

  // DATOS PRINCIPALES PAA LECTURA
  $("#generosLiterarios").text("Generos y Subgeneros Literarios");
  $("#tiposDiscurso").text("Tipos de Discurso");
  $("#figurasRetoricas").text("Figuras retoricas o literarias")

  // TITULOS DE MENU ACORDION
  $("#paaVideosLecturaGenerosLiterarios").text("Generos y Subgeneros Literarios");
  $("#paaVideosLecturaTiposDiscurso").text("Tipos de Discurso");
  $("#paaVideosLecturaFigurasRetoricas").text("Figuras retóricas o literarias")

  // LINKS DE CADA VIDEO | MENU ACORDION
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

  // DATOS DE CADA VIDEO
  $("#paaVideosLectura1Titulo").text("");
  $("#paaVideosLectura1Video").attr("src", "");
  $("#paaVideosLectura1BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video1.html");
  $("#paaVideosLectura1BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video2.html");

  $("#paaVideosLectura2Titulo").text("");
  $("#paaVideosLectura2Video").attr("src", "");
  $("#paaVideosLectura2BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video1.html");
  $("#paaVideosLectura2BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video3.html");

  $("#paaVideosLectura3Titulo").text("");
  $("#paaVideosLectura3Video").attr("src", "");
  $("#paaVideosLectura3BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video2.html");
  $("#paaVideosLectura3BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video4.html");

  $("#paaVideosLectura4Titulo").text("");
  $("#paaVideosLectura4Video").attr("src", "");
  $("#paaVideosLectura4BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video3.html");
  $("#paaVideosLectura4BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video5.html");

  $("#paaVideosLectura5Titulo").text("");
  $("#paaVideosLectura5Video").attr("src", "");
  $("#paaVideosLectura5BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video4.html");
  $("#paaVideosLectura5BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video6.html");

  $("#paaVideosLectura6Titulo").text("");
  $("#paaVideosLectura6Video").attr("src", "");
  $("#paaVideosLectura6BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video5.html");
  $("#paaVideosLectura6BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video7.html");

  $("#paaVideosLectura7Titulo").text("");
  $("#paaVideosLectura7Video").attr("src", "");
  $("#paaVideosLectura7BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video6.html");
  $("#paaVideosLectura7BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video8.html");

  $("#paaVideosLectura8Titulo").text("");
  $("#paaVideosLectura8Video").attr("src", "");
  $("#paaVideosLectura8BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video7.html");
  $("#paaVideosLectura8BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video9.html");

  $("#paaVideosLectura9Titulo").text("");
  $("#paaVideosLectura9Video").attr("src", "");
  $("#paaVideosLectura9BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video8.html");
  $("#paaVideosLectura9BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video10.html");

  $("#paaVideosLectura10Titulo").text("");
  $("#paaVideosLectura10Video").attr("src", "");
  $("#paaVideosLectura10BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video9.html");
  $("#paaVideosLectura10BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video11.html");

  $("#paaVideosLectura11Titulo").text("");
  $("#paaVideosLectura11Video").attr("src", "");
  $("#paaVideosLectura11BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video10.html");
  $("#paaVideosLectura11BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video12.html");

  $("#paaVideosLectura12Titulo").text("");
  $("#paaVideosLectura12Video").attr("src", "");
  $("#paaVideosLectura12BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video11.html");
  $("#paaVideosLectura12BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video13.html");

  $("#paaVideosLectura13Titulo").text("");
  $("#paaVideosLectura13Video").attr("src", "");
  $("#paaVideosLectura13BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video12.html");
  $("#paaVideosLectura13BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/tipos-de-discurso/video14.html");

  $("#paaVideosLectura14Titulo").text("");
  $("#paaVideosLectura14Video").attr("src", "");
  $("#paaVideosLectura14BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video13.html");
  $("#paaVideosLectura14BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/figuras-retoricas/video15.html");

  $("#paaVideosLectura15Titulo").text("");
  $("#paaVideosLectura15Video").attr("src", "");
  $("#paaVideosLectura15BotonAnterior").attr("href", "/aprender/examen-paa/lectura/videos/tipos-de-discurso/video14.html");
  $("#paaVideosLectura15BotonSiguiente").attr("href", "/aprender/examen-paa/lectura/videos/figuras-retoricas/video16.html");

  // PAA | MATEMATICAS

  // DATOS PRINCIPALES PAA MATE
  $("#paaAlgebra").text("Álgebra");
  $("#paaAritmetica").text("Aritmética");
  $("#paaGeometria").text("Geometría");
  $("#paaProbabilidad").text("Probabilidad");

  // TITULOS DE MENU ACORDION
  $("#paaVideosMateLeccionAritmetica").text("Aritmética");
  $("#paaVideosMateLeccionAlgebra").text("Álgebra");
  $("#paaVideosMateLeccionGeometria").text("Geometría");
  $("#paaVideosMateLeccionProbabilidad").text("Probabilidad");

  // LINKS DE CADA VIDEO | MENU ACORDION
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

  // DATOS DE CADA VIDEO
  $("#paaVideosMate1Titulo").text("1. Jerarquía de las Operaciones | Super fácil");
  $("#paaVideosMate1Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate1BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video1.html");
  $("#paaVideosMate1BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video2.html");

  $("#paaVideosMate2Titulo").text("2. Ley de los signos | Super fácil");
  $("#paaVideosMate2Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate2BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video1.html");
  $("#paaVideosMate2BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video3.html");

  $("#paaVideosMate3Titulo").text("3. Si te parecen difícil las fracciones debes ver este video");
  $("#paaVideosMate3Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate3BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video2.html");
  $("#paaVideosMate3BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video4.html");

  $("#paaVideosMate4Titulo").text("4. Operaciones combinadas con fracciones");
  $("#paaVideosMate4Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate4BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video3.html");
  $("#paaVideosMate4BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video5.html");

  $("#paaVideosMate5Titulo").text("5. Números decimales introducción");
  $("#paaVideosMate5Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate5BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video4.html");
  $("#paaVideosMate5BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video6.html");

  $("#paaVideosMate6Titulo").text("6. ¿Qué son los números decimales?");
  $("#paaVideosMate6Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate6BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video5.html");
  $("#paaVideosMate6BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video7.html");

  $("#paaVideosMate7Titulo").text("7. Convertir fraccion a decimal | Super fácil");
  $("#paaVideosMate7Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate7BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video6.html");
  $("#paaVideosMate7BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video8.html");

  $("#paaVideosMate8Titulo").text("8. Como leer números decimales | Super fácil");
  $("#paaVideosMate8Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate8BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video7.html");
  $("#paaVideosMate8BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video9.html");

  $("#paaVideosMate9Titulo").text("9. Suma y resta de números decimales");
  $("#paaVideosMate9Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate9BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video8.html");
  $("#paaVideosMate9BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video10.html");

  $("#paaVideosMate10Titulo").text("10. Lenguaje algebraico | Parte 1");
  $("#paaVideosMate10Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate10BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video9.html");
  $("#paaVideosMate10BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video11.html");

  $("#paaVideosMate11Titulo").text("11. Lenguaje algebraico | Super fácil");
  $("#paaVideosMate11Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate11BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video10.html");
  $("#paaVideosMate11BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video12.html");

  $("#paaVideosMate12Titulo").text("12. Mínimo común múltiplo MCM explicación completa");
  $("#paaVideosMate12Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate12BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video11.html");
  $("#paaVideosMate12BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video13.html");

  $("#paaVideosMate13Titulo").text("13. Mínimo común múltiplo | Super fácil");
  $("#paaVideosMate13Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate13BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video12.html");
  $("#paaVideosMate13BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video14.html");

  $("#paaVideosMate14Titulo").text("14. Máximo común divisor MCD");
  $("#paaVideosMate14Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate14BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video13.html");
  $("#paaVideosMate14BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video15.html");

  $("#paaVideosMate15Titulo").text("15. Máximo común divisor | Super fácil");
  $("#paaVideosMate15Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate15BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video14.html");
  $("#paaVideosMate15BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video16.html");

  $("#paaVideosMate16Titulo").text("16. Valor absoluto de un número");
  $("#paaVideosMate16Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate16BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video15.html");
  $("#paaVideosMate16BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video17.html");

  $("#paaVideosMate17Titulo").text("17. Valor absoluto | Super fácil");
  $("#paaVideosMate17Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate17BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video16.html");
  $("#paaVideosMate17BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video18.html");

  $("#paaVideosMate18Titulo").text("18. Qué es la potenciación");
  $("#paaVideosMate18Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate18BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video17.html");
  $("#paaVideosMate18BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video19.html");

  $("#paaVideosMate19Titulo").text("19. Potencias | Super fácil");
  $("#paaVideosMate19Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate19BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video18.html");
  $("#paaVideosMate19BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video20.html");

  $("#paaVideosMate20Titulo").text("20. Leyes de los exponentes");
  $("#paaVideosMate20Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate20BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video19.html");
  $("#paaVideosMate20BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video21.html");

  $("#paaVideosMate21Titulo").text("21. Raíz cuadrada | Super fácil");
  $("#paaVideosMate21Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate21BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video20.html");
  $("#paaVideosMate21BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video22.html");

  $("#paaVideosMate22Titulo").text("22. La raíz cuadrada");
  $("#paaVideosMate22Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate22BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video21.html");
  $("#paaVideosMate22BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video23.html");

  $("#paaVideosMate23Titulo").text("23. Leyes de los radicales");
  $("#paaVideosMate23Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate23BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video22.html");
  $("#paaVideosMate23BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video14.html");

  $("#paaVideosMate24Titulo").text("24.- Suma y resta de monomios | Super fácil");
  $("#paaVideosMate24Video").attr("src", "https://www.youtube.com/embed/N3vD22wJfyw");
  $("#paaVideosMate24BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/aritmetica/video23.html");
  $("#paaVideosMate24BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video25.html");
  //$("#paaVideosMate24Info").css({"display":"initial"});
  $("#paaVideosMate24InfoTitulo").text("Acerca de");
  $("#paaVideosMate24InfoTexto").text("En este video entenderas como sumar y restar monomios. Creditos a ... todas las analiticas y anuncios que aparecen dentro del video se van al creador, lernist no se queda con nada");

  $("#paaVideosMate25Titulo").text("25.- Ecuaciones de primer grado | Super fácil");
  $("#paaVideosMate25Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate25BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video24.html");
  $("#paaVideosMate25BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video26.html");

  $("#paaVideosMate26Titulo").text("26. Como solucionar una ecuación entera de primer grado");
  $("#paaVideosMate26Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate26BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video25.html");
  $("#paaVideosMate26BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video27.html");

  $("#paaVideosMate27Titulo").text("27. Ecuaciones de primer grado con paréntesis | Super fácil");
  $("#paaVideosMate27Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate27BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video26.html");
  $("#paaVideosMate27BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video28.html");

  $("#paaVideosMate28Titulo").text("28. Que es factorizar");
  $("#paaVideosMate28Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate28BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video27.html");
  $("#paaVideosMate28BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video29.html");

  $("#paaVideosMate29Titulo").text("29. Factorizacion | Super fácil");
  $("#paaVideosMate29Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate29BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video28.html");
  $("#paaVideosMate29BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video30.html");

  $("#paaVideosMate30Titulo").text("30. Qué es una función | Concepto de función");
  $("#paaVideosMate30Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate30BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video29.html");
  $("#paaVideosMate30BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video31.html");

  $("#paaVideosMate31Titulo").text("31. Gráfica de la función lineal");
  $("#paaVideosMate31Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate31BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video30.html");
  $("#paaVideosMate31BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video32.html");

  $("#paaVideosMate32Titulo").text("32. Funciones lineales grafica dominio y rango");
  $("#paaVideosMate32Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate32BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video31.html");
  $("#paaVideosMate32BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video33.html");

  $("#paaVideosMate33Titulo").text("33. Inecuaciones introducción | conceptos básicos");
  $("#paaVideosMate33Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate33BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video32.html");
  $("#paaVideosMate33BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video34.html");
  
  $("#paaVideosMate34Titulo").text("34. Inecuaciones de primer grado - lineales");
  $("#paaVideosMate34Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate34BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video33.html");
  $("#paaVideosMate34BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video35.html");

  $("#paaVideosMate35Titulo").text("35. Inecuaciones con valor absoluto");
  $("#paaVideosMate35Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate35BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video34.html");
  $("#paaVideosMate35BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video36.html");

  $("#paaVideosMate36Titulo").text("36. Como graficar desigualdades de una o dos variables");
  $("#paaVideosMate36Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate36BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video35.html");
  $("#paaVideosMate36BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video37.html");

  $("#paaVideosMate37Titulo").text("37. Perímetro de todas las figuras | Super fácil");
  $("#paaVideosMate37Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate37BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/algebra/video36.html");
  $("#paaVideosMate37BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video38.html");

  $("#paaVideosMate38Titulo").text("38. Área de todas las figuras | Super fácil");
  $("#paaVideosMate38Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate38BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video37.html");
  $("#paaVideosMate38BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video39.html");

  $("#paaVideosMate39Titulo").text("39. Perímetro y Área del cuadrado | Super fácil");
  $("#paaVideosMate39Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate39BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video38.html");
  $("#paaVideosMate39BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video40.html");

  $("#paaVideosMate40Titulo").text("40. Perímetro y Área del triangulo | Super fácil");
  $("#paaVideosMate40Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate40BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video39.html");
  $("#paaVideosMate40BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video41.html");

  $("#paaVideosMate41Titulo").text("41. Perímetro del círculo | Super fácil");
  $("#paaVideosMate41Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate41BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video40.html");
  $("#paaVideosMate41BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video42.html");

  $("#paaVideosMate42Titulo").text("42. Área del círculo");
  $("#paaVideosMate42Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate42BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video41.html");
  $("#paaVideosMate42BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video43.html");

  $("#paaVideosMate43Titulo").text("43. Áreas sombreadas | Super fácil");
  $("#paaVideosMate43Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate43BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video42.html");
  $("#paaVideosMate43BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video44.html");

  $("#paaVideosMate44Titulo").text("44. ¿Puedes calcular el área sombreada?");
  $("#paaVideosMate44Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate44BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video43.html");
  $("#paaVideosMate44BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video45.html");

  $("#paaVideosMate45Titulo").text("45. Área de polígonos irregulares");
  $("#paaVideosMate45Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate45BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video44.html");
  $("#paaVideosMate45BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video46.html");

  $("#paaVideosMate46Titulo").text("46. Perímetro y Área con expresiones algebraicas");
  $("#paaVideosMate46Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate46BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video45.html");
  $("#paaVideosMate46BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video47.html");

  $("#paaVideosMate47Titulo").text("47. Volumen de prismas | Super fácil");
  $("#paaVideosMate47Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate47BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video46.html");
  $("#paaVideosMate47BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video48.html");

  $("#paaVideosMate48Titulo").text("48. Volumen de pirámides | Super fácil");
  $("#paaVideosMate48Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate48BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video47.html");
  $("#paaVideosMate48BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video49.html");

  $("#paaVideosMate49Titulo").text("49. Diferencias Perímetro, Área y Volumen | Super fácil");
  $("#paaVideosMate49Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate49BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video48.html");
  $("#paaVideosMate49BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video50.html");

  $("#paaVideosMate50Titulo").text("50. Ángulos entre paralelas y una transversal | Super fácil");
  $("#paaVideosMate50Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate50BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video49.html");
  $("#paaVideosMate50BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video51.html");

  $("#paaVideosMate51Titulo").text("51. Rectas paralelas cortadas por una secante");
  $("#paaVideosMate51Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate51BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video50.html");
  $("#paaVideosMate51BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video52.html");

  $("#paaVideosMate52Titulo").text("52. Teorema de Pitágoras introducción");
  $("#paaVideosMate52Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate52BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video51.html");
  $("#paaVideosMate52BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video53.html");

  $("#paaVideosMate53Titulo").text("53. Teorema de Pitágoras | Super fácil");
  $("#paaVideosMate53Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate53BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video52.html");
  $("#paaVideosMate53BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video54.html");

  $("#paaVideosMate54Titulo").text("54. Teorema de Pitágoras | Encontrar un cateto");
  $("#paaVideosMate54Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate54BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video53.html");
  $("#paaVideosMate54BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video55.html");

  $("#paaVideosMate55Titulo").text("55. Teorema de Pitágoras | Encontrar la hipotenusa");
  $("#paaVideosMate55Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate55BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video54.html");
  $("#paaVideosMate55BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video56.html");

  $("#paaVideosMate56Titulo").text("56. Porcentaje de un número");
  $("#paaVideosMate56Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate56BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/geometria/video55.html");
  $("#paaVideosMate56BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video57.html");

  $("#paaVideosMate57Titulo").text("57. Porcentaje problemas de aplicación");
  $("#paaVideosMate57Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate57BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video56.html");
  $("#paaVideosMate57BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video58.html");

  $("#paaVideosMate58Titulo").text("58. Porcentajes | Super fácil");
  $("#paaVideosMate58Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate58BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video57.html");
  $("#paaVideosMate58BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video59.html");

  $("#paaVideosMate59Titulo").text("59. Como calcular un porcentaje | Super fácil");
  $("#paaVideosMate59Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate59BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video58.html");
  $("#paaVideosMate59BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video60.html");

  $("#paaVideosMate60Titulo").text("60. Probabilidad | Super fácil");
  $("#paaVideosMate60Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate60BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video59.html");
  $("#paaVideosMate60BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video61.html");

  $("#paaVideosMate61Titulo").text("61. Probabilidad de un evento simple");
  $("#paaVideosMate61Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate61BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video60.html");
  $("#paaVideosMate61BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video62.html");

  $("#paaVideosMate62Titulo").text("62. Probabilidad de eventos independientes");
  $("#paaVideosMate62Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate62BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video61.html");
  $("#paaVideosMate62BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video63.html");

  $("#paaVideosMate63Titulo").text("63. Probabilidad de eventos dependientes");
  $("#paaVideosMate63Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate63BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video62.html");
  $("#paaVideosMate63BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video64.html");

  $("#paaVideosMate64Titulo").text("64. Media, moda y mediana | Super fácil");
  $("#paaVideosMate64Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate64BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video63.html");
  $("#paaVideosMate64BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video65.html");

  $("#paaVideosMate65Titulo").text("65. Media, moda y mediana | Datos sin agrupar");
  $("#paaVideosMate65Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate65BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video64.html");
  $("#paaVideosMate65BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video66.html");

  $("#paaVideosMate66Titulo").text("66. Regla de 3 simple directa");
  $("#paaVideosMate66Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate66BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video65.html");
  $("#paaVideosMate66BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video67.html");

  $("#paaVideosMate67Titulo").text("67. Regla de 3 simple | Super fácil");
  $("#paaVideosMate67Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate67BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video66.html");
  $("#paaVideosMate67BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video68.html");

  $("#paaVideosMate68Titulo").text("68. Regla de 3 inversa | Super fácil");
  $("#paaVideosMate68Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate68BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video67.html");
  $("#paaVideosMate68BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video69.html");

  $("#paaVideosMate69Titulo").text("69. Regla de 3 simple inversa");
  $("#paaVideosMate69Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate69BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video68.html");
  $("#paaVideosMate69BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video70.html");

  $("#paaVideosMate70Titulo").text("70. Regla de 3 | Como identificar si es directa o inversa");
  $("#paaVideosMate70Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate70BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video69.html");
  $("#paaVideosMate70BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video71.html");

  $("#paaVideosMate71Titulo").text("71. Combinaciones | Super fácil");
  $("#paaVideosMate71Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate71BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video70.html");
  $("#paaVideosMate71BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video72.html");

  $("#paaVideosMate72Titulo").text("72. Combinación con repetición y sin repetición");
  $("#paaVideosMate72Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate72BotonAnterior").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video71.html");
  $("#paaVideosMate72BotonSiguiente").attr("href", "/aprender/examen-paa/matematicas/videos/probabilidad/video73.html");

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
});
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

  // ELEMENTOS MADRE
  $(".videos").hide();
  $(".datos-video").hide();
  $("#titulo-lecciones").text("Navega por el curso:");
  $(".paaVideosLeccionBotonMas").text("+"); // este codigo se podria repetir para todos los videos de Lernist
  $(".paaVideosLeccionBotonMenos").text("-");
  $(".paaVideosLeccionBotonMenos").hide();
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
  $("#paaVideosConsejosGenerales1Menu").attr("href", "/aprender/examenes/cursos/examen-paa/consejos-generales/videos/trucos-para-aprobar-los-examenes.html").text("1. Trucos para aprobar los exámenes")
  // LECTURA 
  $("#paaVideosLectura1Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video1.html").text("1. Géneros literarios");
  $("#paaVideosLectura2Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video2.html").text("2. ¿Qué es una novela?");
  $("#paaVideosLectura3Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video3.html").text("3. El cuento y sus partes");
  $("#paaVideosLectura4Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video4.html").text("4. La fábula y sus características");
  $("#paaVideosLectura5Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video5.html").text("5. Mitos y Leyendas");
  $("#paaVideosLectura6Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video6.html").text("6. El poema y sus características");
  $("#paaVideosLectura7Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video7.html").text("7. Shrek - La sátira perfecta");
  $("#paaVideosLectura8Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video8.html").text("8. ¿Qué es drama?");
  $("#paaVideosLectura9Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video9.html").text("9. Definición de Tragedia");
  $("#paaVideosLectura10Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video10.html").text("10. Género dramático ¿Qué es la comedia?");
  $("#paaVideosLectura11Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video11.html").text("11. El ensayo: Definición, características y escritura");
  $("#paaVideosLectura12Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video12.html").text("12. La biografía y sus características");
  $("#paaVideosLectura13Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video13.html").text("13. ¿Qué es una Crónica?");

  $("#paaVideosLectura14Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/tipos-de-discurso/video14.html").text("14. Tipos de discurso: narrativo, descriptivo, argumentativo");

  $("#paaVideosLectura15Menu").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/figuras-retoricas/video15.html").text("15. Figuras literarias o retóricas");
  // MATEMATICAS
  $("#paaVideosMate1Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video1.html").text("1. Jerarquía de las Operaciones | Super fácil");
  $("#paaVideosMate2Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video2.html").text("2. Ley de los signos | Super fácil");
  $("#paaVideosMate3Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video3.html").text("3. Si te parecen difícil las fracciones debes ver este video");
  $("#paaVideosMate4Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video4.html").text("4. Operaciones combinadas con fracciones");
  $("#paaVideosMate5Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video5.html").text("5. Números decimales introducción");
  $("#paaVideosMate6Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video6.html").text("6. ¿Qué son los números decimales?");
  $("#paaVideosMate7Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video7.html").text("7. Convertir fraccion a decimal | Super fácil");
  $("#paaVideosMate8Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video8.html").text("8. Como leer números decimales | Super fácil");
  $("#paaVideosMate9Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video9.html").text("9. Suma y resta de números decimales");
  $("#paaVideosMate10Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video10.html").text("10. Lenguaje algebraico | Parte 1");
  $("#paaVideosMate11Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video11.html").text("11. Lenguaje algebraico | Super fácil");
  $("#paaVideosMate12Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video12.html").text("12. Mínimo común múltiplo MCM explicación completa");
  $("#paaVideosMate13Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video13.html").text("13. Mínimo común múltiplo | Super fácil");
  $("#paaVideosMate14Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video14.html").text("14. Máximo común divisor MCD");
  $("#paaVideosMate15Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video15.html").text("15. Máximo común divisor | Super fácil");
  $("#paaVideosMate16Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video16.html").text("16. Valor absoluto de un número");
  $("#paaVideosMate17Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video17.html").text("17. Valor absoluto | Super fácil");
  $("#paaVideosMate18Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video18.html").text("18. Qué es la potenciación");
  $("#paaVideosMate19Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video19.html").text("19. Potencias | Super fácil");
  $("#paaVideosMate20Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video20.html").text("20. Leyes de los exponentes");
  $("#paaVideosMate21Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video21.html").text("21. Raíz cuadrada | Super fácil");
  $("#paaVideosMate22Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video22.html").text("22. La raíz cuadrada");
  $("#paaVideosMate23Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video23.html").text("23. Leyes de los radicales");

  $("#paaVideosMate24Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video24.html").text("24. Suma y resta de monomios | Super fácil");
  $("#paaVideosMate25Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video25.html").text("25. Ecuaciones de primer grado | Super fácil");
  $("#paaVideosMate26Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video26.html").text("26. Como solucionar una ecuación entera de primer grado");
  $("#paaVideosMate27Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video27.html").text("27. Ecuaciones de primer grado con paréntesis | Super fácil");
  $("#paaVideosMate28Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video28.html").text("28. Que es factorizar");
  $("#paaVideosMate29Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video29.html").text("29. Factorizacion | Super fácil");
  $("#paaVideosMate30Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video30.html").text("30. Qué es una función | Concepto de función");
  $("#paaVideosMate31Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video31.html").text("31. Gráfica de la función lineal");
  $("#paaVideosMate32Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video32.html").text("32. Funciones lineales grafica dominio y rango");
  $("#paaVideosMate33Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video33.html").text("33. Inecuaciones introducción | conceptos básicos");
  $("#paaVideosMate34Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video34.html").text("34. Inecuaciones de primer grado - lineales");
  $("#paaVideosMate35Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video35.html").text("35. Inecuaciones con valor absoluto");
  $("#paaVideosMate36Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video36.html").text("36. Como graficar desigualdades de una o dos variables");

  $("#paaVideosMate37Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video37.html").text("37. Perímetro de todas las figuras | Super fácil");
  $("#paaVideosMate38Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video38.html").text("38. Área de todas las figuras | Super fácil");
  $("#paaVideosMate39Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video39.html").text("39. Perímetro y Área del cuadrado | Super fácil");
  $("#paaVideosMate40Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video40.html").text("40. Perímetro y Área del triangulo | Super fácil");
  $("#paaVideosMate41Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video41.html").text("41. Perímetro del círculo | Super fácil");
  $("#paaVideosMate42Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video42.html").text("42. Área del círculo");
  $("#paaVideosMate43Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video43.html").text("43. Áreas sombreadas | Super fácil");
  $("#paaVideosMate44Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video44.html").text("44. ¿Puedes calcular el área sombreada?");
  $("#paaVideosMate45Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video45.html").text("45. Área de polígonos irregulares");
  $("#paaVideosMate46Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video46.html").text("46. Perímetro y Área con expresiones algebraicas");
  $("#paaVideosMate47Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video47.html").text("47. Volumen de prismas | Super fácil");
  $("#paaVideosMate48Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video48.html").text("48. Volumen de pirámides | Super fácil");
  $("#paaVideosMate49Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video49.html").text("49. Diferencias Perímetro, Área y Volumen | Super fácil");
  $("#paaVideosMate50Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video50.html").text("50. Ángulos entre paralelas y una transversal | Super fácil");
  $("#paaVideosMate51Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video51.html").text("51. Rectas paralelas cortadas por una secante");
  $("#paaVideosMate52Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video52.html").text("52. Teorema de Pitágoras introducción");
  $("#paaVideosMate53Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video53.html").text("53. Teorema de Pitágoras | Super fácil");
  $("#paaVideosMate54Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video54.html").text("54. Teorema de Pitágoras | Encontrar un cateto");
  $("#paaVideosMate55Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video55.html").text("55. Teorema de Pitágoras | Encontrar la hipotenusa");

  $("#paaVideosMate56Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video56.html").text("56. Porcentaje de un número");
  $("#paaVideosMate57Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video57.html").text("57. Porcentaje problemas de aplicación");
  $("#paaVideosMate58Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video58.html").text("58. Porcentajes | Super fácil");
  $("#paaVideosMate59Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video59.html").text("59. Como calcular un porcentaje | Super fácil");
  $("#paaVideosMate60Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video60.html").text("60. Probabilidad | Super fácil");
  $("#paaVideosMate61Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video61.html").text("61. Probabilidad de un evento simple");
  $("#paaVideosMate62Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video62.html").text("62. Probabilidad de eventos independientes");
  $("#paaVideosMate63Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video63.html").text("63. Probabilidad de eventos dependientes");
  $("#paaVideosMate64Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video64.html").text("64. Media, moda y mediana | Super fácil");
  $("#paaVideosMate65Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video65.html").text("65. Media, moda y mediana | Datos sin agrupar");
  $("#paaVideosMate66Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video66.html").text("66. Regla de 3 simple directa");
  $("#paaVideosMate67Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video67.html").text("67. Regla de 3 simple | Super fácil");
  $("#paaVideosMate68Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video68.html").text("68. Regla de 3 inversa | Super fácil");
  $("#paaVideosMate69Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video69.html").text("69. Regla de 3 simple inversa");
  $("#paaVideosMate70Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video70.html").text("70. Regla de 3 | Como identificar si es directa o inversa");
  $("#paaVideosMate71Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video71.html").text("71. Combinaciones | Super fácil");
  $("#paaVideosMate72Menu").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video72.html").text("72. Combinación con repetición y sin repetición");

  // DATOS DE CADA VIDEO CONSEJOS GENERALES
  $("#paaVideosConsejosGenerales1Titulo").text("1. Trucos para aprobar los exámenes");
  $("#paaVideosConsejosGenerales1Video").attr("src", "https://www.youtube.com/embed/IRwrAMdpd18");
  $("#paaVideosConsejosGenerales1BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/consejos-generales/videos/trucos-para-aprobar-los-examenes.html");
  $("#paaVideosConsejosGenerales1BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video1.html");
  // DATOS DE CADA VIDEO LECTURA
  $("#paaVideosLectura1Titulo").text("1. Géneros literarios");
  $("#paaVideosLectura1Video").attr("src", "https://www.youtube.com/embed/Q9bh83Oc1lY");
  $("#paaVideosLectura1BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/consejos-generales/videos/trucos-para-aprobar-los-examenes.html");
  $("#paaVideosLectura1BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video2.html");

  $("#paaVideosLectura2Titulo").text("2. ¿Qué es una novela?");
  $("#paaVideosLectura2Video").attr("src", "https://www.youtube.com/embed/zkJ_PKu7VoU");
  $("#paaVideosLectura2BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video1.html");
  $("#paaVideosLectura2BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video3.html");

  $("#paaVideosLectura3Titulo").text("3. El cuento y sus partes");
  $("#paaVideosLectura3Video").attr("src", "https://www.youtube.com/embed/LiJG7LdO1mA");
  $("#paaVideosLectura3BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video2.html");
  $("#paaVideosLectura3BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video4.html");

  $("#paaVideosLectura4Titulo").text("4. La fábula y sus características");
  $("#paaVideosLectura4Video").attr("src", "https://www.youtube.com/embed/LvRgOAiYxzo");
  $("#paaVideosLectura4BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video3.html");
  $("#paaVideosLectura4BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video5.html");

  $("#paaVideosLectura5Titulo").text("5. Mitos y Leyendas");
  $("#paaVideosLectura5Video").attr("src", "https://www.youtube.com/embed/sAQnrOhQt8M");
  $("#paaVideosLectura5BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video4.html");
  $("#paaVideosLectura5BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video6.html");

  $("#paaVideosLectura6Titulo").text("6. El poema y sus características");
  $("#paaVideosLectura6Video").attr("src", "https://www.youtube.com/embed/_krsy8ba1gg");
  $("#paaVideosLectura6BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video5.html");
  $("#paaVideosLectura6BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video7.html");

  $("#paaVideosLectura7Titulo").text("7. Shrek - La sátira perfecta");
  $("#paaVideosLectura7Video").attr("src", "https://www.youtube.com/embed/kVyV1n7oyQA");
  $("#paaVideosLectura7BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video6.html");
  $("#paaVideosLectura7BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video8.html");

  $("#paaVideosLectura8Titulo").text("8. ¿Qué es drama?");
  $("#paaVideosLectura8Video").attr("src", "https://www.youtube.com/embed/MkaovqQn6d4");
  $("#paaVideosLectura8BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video7.html");
  $("#paaVideosLectura8BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video9.html");

  $("#paaVideosLectura9Titulo").text("9. Definición de Tragedia");
  $("#paaVideosLectura9Video").attr("src", "https://www.youtube.com/embed/G0Y3_oyL72Q");
  $("#paaVideosLectura9BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video8.html");
  $("#paaVideosLectura9BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video10.html");

  $("#paaVideosLectura10Titulo").text("10. Género dramático ¿Qué es la comedia?");
  $("#paaVideosLectura10Video").attr("src", "https://www.youtube.com/embed/KJJAXKTAVN4");
  $("#paaVideosLectura10BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video9.html");
  $("#paaVideosLectura10BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video11.html");

  $("#paaVideosLectura11Titulo").text("11. El ensayo: Definición, características y escritura");
  $("#paaVideosLectura11Video").attr("src", "https://www.youtube.com/embed/Qfo7v2LqJWk");
  $("#paaVideosLectura11BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video10.html");
  $("#paaVideosLectura11BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video12.html");

  $("#paaVideosLectura12Titulo").text("12. La biografía y sus características");
  $("#paaVideosLectura12Video").attr("src", "https://www.youtube.com/embed/hfIwp6Zf1AQ");
  $("#paaVideosLectura12BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video11.html");
  $("#paaVideosLectura12BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video13.html");

  $("#paaVideosLectura13Titulo").text("13. ¿Qué es una Crónica?");
  $("#paaVideosLectura13Video").attr("src", "https://www.youtube.com/embed/RctfBT6J-64");
  $("#paaVideosLectura13BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video12.html");
  $("#paaVideosLectura13BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/tipos-de-discurso/video14.html");

  $("#paaVideosLectura14Titulo").text("14. Tipos de discurso: narrativo, descriptivo, argumentativo");
  $("#paaVideosLectura14Video").attr("src", "https://www.youtube.com/embed/u7GKzqmAB84");
  $("#paaVideosLectura14BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/generos-y-subgeneros-literarios/video13.html");
  $("#paaVideosLectura14BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/figuras-retoricas/video15.html");

  $("#paaVideosLectura15Titulo").text("15. Figuras literarias o retóricas");
  $("#paaVideosLectura15Video").attr("src", "https://www.youtube.com/embed/Oeg7cPGxbKw");
  $("#paaVideosLectura15BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/tipos-de-discurso/video14.html");
  $("#paaVideosLectura15BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video1.html");

  // DATOS DE CADA VIDEO MATEMATICAS
  $("#paaVideosMate1Titulo").text("1. Jerarquía de las Operaciones | Super fácil");
  $("#paaVideosMate1Video").attr("src", "https://www.youtube.com/embed/XV5PiV2-91U");
  $("#paaVideosMate1BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/lectura/videos/figuras-retoricas/video15.html");
  $("#paaVideosMate1BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video2.html");

  $("#paaVideosMate2Titulo").text("2. Ley de los signos | Super fácil");
  $("#paaVideosMate2Video").attr("src", "https://www.youtube.com/embed/6f40XK7nssY");
  $("#paaVideosMate2BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video1.html");
  $("#paaVideosMate2BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video3.html");

  $("#paaVideosMate3Titulo").text("3. Si te parecen difícil las fracciones debes ver este video");
  $("#paaVideosMate3Video").attr("src", "https://www.youtube.com/embed/LgMptyzudXU");
  $("#paaVideosMate3BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video2.html");
  $("#paaVideosMate3BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video4.html");

  $("#paaVideosMate4Titulo").text("4. Operaciones combinadas con fracciones");
  $("#paaVideosMate4Video").attr("src", "https://www.youtube.com/embed/ebJYzTM5lnc");
  $("#paaVideosMate4BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video3.html");
  $("#paaVideosMate4BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video5.html");

  $("#paaVideosMate5Titulo").text("5. Números decimales introducción");
  $("#paaVideosMate5Video").attr("src", "https://www.youtube.com/embed/fae6X1jg3nE");
  $("#paaVideosMate5BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video4.html");
  $("#paaVideosMate5BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video6.html");

  $("#paaVideosMate6Titulo").text("6. ¿Qué son los números decimales?");
  $("#paaVideosMate6Video").attr("src", "https://www.youtube.com/embed/Ta4cS9uwpTI");
  $("#paaVideosMate6BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video5.html");
  $("#paaVideosMate6BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video7.html");

  $("#paaVideosMate7Titulo").text("7. Convertir fraccion a decimal | Super fácil");
  $("#paaVideosMate7Video").attr("src", "https://www.youtube.com/embed/pOm1azhMuYM");
  $("#paaVideosMate7BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video6.html");
  $("#paaVideosMate7BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video8.html");

  $("#paaVideosMate8Titulo").text("8. Como leer números decimales | Super fácil");
  $("#paaVideosMate8Video").attr("src", "https://www.youtube.com/embed/bVFExqCCwfE");
  $("#paaVideosMate8BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video7.html");
  $("#paaVideosMate8BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video9.html");

  $("#paaVideosMate9Titulo").text("9. Suma y resta de números decimales");
  $("#paaVideosMate9Video").attr("src", "https://www.youtube.com/embed/y_F5eXD8Cb0");
  $("#paaVideosMate9BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video8.html");
  $("#paaVideosMate9BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video10.html");

  $("#paaVideosMate10Titulo").text("10. Lenguaje algebraico | Parte 1");
  $("#paaVideosMate10Video").attr("src", "https://www.youtube.com/embed/DV3C_RawfBg");
  $("#paaVideosMate10BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video9.html");
  $("#paaVideosMate10BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video11.html");

  $("#paaVideosMate11Titulo").text("11. Lenguaje algebraico | Super fácil");
  $("#paaVideosMate11Video").attr("src", "https://www.youtube.com/embed/UNWFLuUfiX4");
  $("#paaVideosMate11BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video10.html");
  $("#paaVideosMate11BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video12.html");

  $("#paaVideosMate12Titulo").text("12. Mínimo común múltiplo MCM explicación completa");
  $("#paaVideosMate12Video").attr("src", "https://www.youtube.com/embed/Hxkb3i85qDw");
  $("#paaVideosMate12BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video11.html");
  $("#paaVideosMate12BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video13.html");

  $("#paaVideosMate13Titulo").text("13. Mínimo común múltiplo | Super fácil");
  $("#paaVideosMate13Video").attr("src", "https://www.youtube.com/embed/NRJdBgOEjdI");
  $("#paaVideosMate13BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video12.html");
  $("#paaVideosMate13BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video14.html");

  $("#paaVideosMate14Titulo").text("14. Máximo común divisor MCD");
  $("#paaVideosMate14Video").attr("src", "https://www.youtube.com/embed/JoHfq8hswmY");
  $("#paaVideosMate14BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video13.html");
  $("#paaVideosMate14BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video15.html");

  $("#paaVideosMate15Titulo").text("15. Máximo común divisor | Super fácil");
  $("#paaVideosMate15Video").attr("src", "https://www.youtube.com/embed/WD4rGWCRBYY");
  $("#paaVideosMate15BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video14.html");
  $("#paaVideosMate15BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video16.html");

  $("#paaVideosMate16Titulo").text("16. Valor absoluto de un número");
  $("#paaVideosMate16Video").attr("src", "https://www.youtube.com/embed/aQN8cn4gzpE");
  $("#paaVideosMate16BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video15.html");
  $("#paaVideosMate16BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video17.html");

  $("#paaVideosMate17Titulo").text("17. Valor absoluto | Super fácil");
  $("#paaVideosMate17Video").attr("src", "https://www.youtube.com/embed/O5PjnphvXaI");
  $("#paaVideosMate17BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video16.html");
  $("#paaVideosMate17BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video18.html");

  $("#paaVideosMate18Titulo").text("18. Qué es la potenciación");
  $("#paaVideosMate18Video").attr("src", "https://www.youtube.com/embed/vwzZEB0SzCI");
  $("#paaVideosMate18BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video17.html");
  $("#paaVideosMate18BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video19.html");

  $("#paaVideosMate19Titulo").text("19. Potencias | Super fácil");
  $("#paaVideosMate19Video").attr("src", "https://www.youtube.com/embed/-K0ZSm9lPeY");
  $("#paaVideosMate19BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video18.html");
  $("#paaVideosMate19BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video20.html");

  $("#paaVideosMate20Titulo").text("20. Leyes de los exponentes");
  $("#paaVideosMate20Video").attr("src", "https://www.youtube.com/embed/CfbspxOf0lA");
  $("#paaVideosMate20BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video19.html");
  $("#paaVideosMate20BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video21.html");

  $("#paaVideosMate21Titulo").text("21. Raíz cuadrada | Super fácil");
  $("#paaVideosMate21Video").attr("src", "https://www.youtube.com/embed/gPV5VqQ3Ajg");
  $("#paaVideosMate21BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video20.html");
  $("#paaVideosMate21BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video22.html");

  $("#paaVideosMate22Titulo").text("22. La raíz cuadrada");
  $("#paaVideosMate22Video").attr("src", "https://www.youtube.com/embed/Ua9_FIARcs0");
  $("#paaVideosMate22BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video21.html");
  $("#paaVideosMate22BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video23.html");

  $("#paaVideosMate23Titulo").text("23. Leyes de los radicales");
  $("#paaVideosMate23Video").attr("src", "https://www.youtube.com/embed/ptP3J7pXVX4");
  $("#paaVideosMate23BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video22.html");
  $("#paaVideosMate23BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video24.html");

  $("#paaVideosMate24Titulo").text("24.- Suma y resta de monomios | Super fácil");
  $("#paaVideosMate24Video").attr("src", "https://www.youtube.com/embed/N3vD22wJfyw");
  $("#paaVideosMate24BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/aritmetica/video23.html");
  $("#paaVideosMate24BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video25.html");

  $("#paaVideosMate25Titulo").text("25.- Ecuaciones de primer grado | Super fácil");
  $("#paaVideosMate25Video").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8");
  $("#paaVideosMate25BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video24.html");
  $("#paaVideosMate25BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video26.html");

  $("#paaVideosMate26Titulo").text("26. Como solucionar una ecuación entera de primer grado");
  $("#paaVideosMate26Video").attr("src", "https://www.youtube.com/embed/4AixPIIV05E");
  $("#paaVideosMate26BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video25.html");
  $("#paaVideosMate26BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video27.html");

  $("#paaVideosMate27Titulo").text("27. Ecuaciones de primer grado con paréntesis | Super fácil");
  $("#paaVideosMate27Video").attr("src", "https://www.youtube.com/embed/kRGwE6OKN9M");
  $("#paaVideosMate27BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video26.html");
  $("#paaVideosMate27BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video28.html");

  $("#paaVideosMate28Titulo").text("28. Que es factorizar");
  $("#paaVideosMate28Video").attr("src", "https://www.youtube.com/embed/sSfO1CsKJ4g");
  $("#paaVideosMate28BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video27.html");
  $("#paaVideosMate28BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video29.html");

  $("#paaVideosMate29Titulo").text("29. Factorizacion | Super fácil");
  $("#paaVideosMate29Video").attr("src", "https://www.youtube.com/embed/4bCKKe3mR08");
  $("#paaVideosMate29BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video28.html");
  $("#paaVideosMate29BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video30.html");

  $("#paaVideosMate30Titulo").text("30. Qué es una función | Concepto de función");
  $("#paaVideosMate30Video").attr("src", "https://www.youtube.com/embed/Ll7xfe3HoZE");
  $("#paaVideosMate30BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video29.html");
  $("#paaVideosMate30BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video31.html");

  $("#paaVideosMate31Titulo").text("31. Gráfica de la función lineal");
  $("#paaVideosMate31Video").attr("src", "https://www.youtube.com/embed/AoZpzAoC1Qg");
  $("#paaVideosMate31BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video30.html");
  $("#paaVideosMate31BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video32.html");

  $("#paaVideosMate32Titulo").text("32. Funciones lineales grafica dominio y rango");
  $("#paaVideosMate32Video").attr("src", "https://www.youtube.com/embed/R38_FohTJPc");
  $("#paaVideosMate32BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video31.html");
  $("#paaVideosMate32BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video33.html");

  $("#paaVideosMate33Titulo").text("33. Inecuaciones introducción | conceptos básicos");
  $("#paaVideosMate33Video").attr("src", "https://www.youtube.com/embed/y9vDsarVxtg");
  $("#paaVideosMate33BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video32.html");
  $("#paaVideosMate33BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video34.html");
  
  $("#paaVideosMate34Titulo").text("34. Inecuaciones de primer grado - lineales");
  $("#paaVideosMate34Video").attr("src", "https://www.youtube.com/embed/CkVXbU-PNRs");
  $("#paaVideosMate34BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video33.html");
  $("#paaVideosMate34BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video35.html");

  $("#paaVideosMate35Titulo").text("35. Inecuaciones con valor absoluto");
  $("#paaVideosMate35Video").attr("src", "https://www.youtube.com/embed/Bfb0efPKb-0");
  $("#paaVideosMate35BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video34.html");
  $("#paaVideosMate35BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video36.html");

  $("#paaVideosMate36Titulo").text("36. Como graficar desigualdades de una o dos variables");
  $("#paaVideosMate36Video").attr("src", "https://www.youtube.com/embed/Oky9FswBKbU");
  $("#paaVideosMate36BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video35.html");
  $("#paaVideosMate36BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video37.html");

  $("#paaVideosMate37Titulo").text("37. Perímetro de todas las figuras | Super fácil");
  $("#paaVideosMate37Video").attr("src", "https://www.youtube.com/embed/OTT8SKMdBD8");
  $("#paaVideosMate37BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/algebra/video36.html");
  $("#paaVideosMate37BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video38.html");

  $("#paaVideosMate38Titulo").text("38. Área de todas las figuras | Super fácil");
  $("#paaVideosMate38Video").attr("src", "https://www.youtube.com/embed/TZDgCnfDrIE");
  $("#paaVideosMate38BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video37.html");
  $("#paaVideosMate38BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video39.html");

  $("#paaVideosMate39Titulo").text("39. Perímetro y Área del cuadrado | Super fácil");
  $("#paaVideosMate39Video").attr("src", "https://www.youtube.com/embed/S-P4y9paTPc");
  $("#paaVideosMate39BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video38.html");
  $("#paaVideosMate39BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video40.html");

  $("#paaVideosMate40Titulo").text("40. Perímetro y Área del triangulo | Super fácil");
  $("#paaVideosMate40Video").attr("src", "https://www.youtube.com/embed/BPl5ecBvsiY");
  $("#paaVideosMate40BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video39.html");
  $("#paaVideosMate40BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video41.html");

  $("#paaVideosMate41Titulo").text("41. Perímetro del círculo | Super fácil");
  $("#paaVideosMate41Video").attr("src", "https://www.youtube.com/embed/GUAA75tXiko");
  $("#paaVideosMate41BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video40.html");
  $("#paaVideosMate41BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video42.html");

  $("#paaVideosMate42Titulo").text("42. Área del círculo");
  $("#paaVideosMate42Video").attr("src", "https://www.youtube.com/embed/5z3h53xQVq0");
  $("#paaVideosMate42BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video41.html");
  $("#paaVideosMate42BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video43.html");

  $("#paaVideosMate43Titulo").text("43. Áreas sombreadas | Super fácil");
  $("#paaVideosMate43Video").attr("src", "https://www.youtube.com/embed/Blh-DzaCQww");
  $("#paaVideosMate43BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video42.html");
  $("#paaVideosMate43BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video44.html");

  $("#paaVideosMate44Titulo").text("44. ¿Puedes calcular el área sombreada?");
  $("#paaVideosMate44Video").attr("src", "https://www.youtube.com/embed/h0jlLOTFX3o");
  $("#paaVideosMate44BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video43.html");
  $("#paaVideosMate44BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video45.html");

  $("#paaVideosMate45Titulo").text("45. Área de polígonos irregulares");
  $("#paaVideosMate45Video").attr("src", "https://www.youtube.com/embed/tMK6ce8Gz8o");
  $("#paaVideosMate45BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video44.html");
  $("#paaVideosMate45BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video46.html");

  $("#paaVideosMate46Titulo").text("46. Perímetro y Área con expresiones algebraicas");
  $("#paaVideosMate46Video").attr("src", "https://www.youtube.com/embed/7iC-GAsvzcM");
  $("#paaVideosMate46BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video45.html");
  $("#paaVideosMate46BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video47.html");

  $("#paaVideosMate47Titulo").text("47. Volumen de prismas | Super fácil");
  $("#paaVideosMate47Video").attr("src", "https://www.youtube.com/embed/n0j1XwaroHs");
  $("#paaVideosMate47BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video46.html");
  $("#paaVideosMate47BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video48.html");

  $("#paaVideosMate48Titulo").text("48. Volumen de pirámides | Super fácil");
  $("#paaVideosMate48Video").attr("src", "https://www.youtube.com/embed/VpOKrHNLcEM");
  $("#paaVideosMate48BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video47.html");
  $("#paaVideosMate48BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video49.html");

  $("#paaVideosMate49Titulo").text("49. Diferencias Perímetro, Área y Volumen | Super fácil");
  $("#paaVideosMate49Video").attr("src", "https://www.youtube.com/embed/jogZRNrihac");
  $("#paaVideosMate49BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video48.html");
  $("#paaVideosMate49BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video50.html");

  $("#paaVideosMate50Titulo").text("50. Ángulos entre paralelas y una transversal | Super fácil");
  $("#paaVideosMate50Video").attr("src", "https://www.youtube.com/embed/2OPoYzg_E58");
  $("#paaVideosMate50BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video49.html");
  $("#paaVideosMate50BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video51.html");

  $("#paaVideosMate51Titulo").text("51. Rectas paralelas cortadas por una secante");
  $("#paaVideosMate51Video").attr("src", "https://www.youtube.com/embed/IADOo1DD0-w");
  $("#paaVideosMate51BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video50.html");
  $("#paaVideosMate51BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video52.html");

  $("#paaVideosMate52Titulo").text("52. Teorema de Pitágoras introducción");
  $("#paaVideosMate52Video").attr("src", "https://www.youtube.com/embed/XfVWlO3sRw0");
  $("#paaVideosMate52BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video51.html");
  $("#paaVideosMate52BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video53.html");

  $("#paaVideosMate53Titulo").text("53. Teorema de Pitágoras | Super fácil");
  $("#paaVideosMate53Video").attr("src", "https://www.youtube.com/embed/eTEBvBIz8Ok");
  $("#paaVideosMate53BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video52.html");
  $("#paaVideosMate53BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video54.html");

  $("#paaVideosMate54Titulo").text("54. Teorema de Pitágoras | Encontrar un cateto");
  $("#paaVideosMate54Video").attr("src", "https://www.youtube.com/embed/CJ8bpjhwA2k");
  $("#paaVideosMate54BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video53.html");
  $("#paaVideosMate54BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video55.html");

  $("#paaVideosMate55Titulo").text("55. Teorema de Pitágoras | Encontrar la hipotenusa");
  $("#paaVideosMate55Video").attr("src", "https://www.youtube.com/embed/2UbdPiqAiHY");
  $("#paaVideosMate55BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video54.html");
  $("#paaVideosMate55BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video56.html");

  $("#paaVideosMate56Titulo").text("56. Porcentaje de un número");
  $("#paaVideosMate56Video").attr("src", "https://www.youtube.com/embed/PjXpBwI6P0M");
  $("#paaVideosMate56BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/geometria/video55.html");
  $("#paaVideosMate56BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video57.html");

  $("#paaVideosMate57Titulo").text("57. Porcentaje problemas de aplicación");
  $("#paaVideosMate57Video").attr("src", "https://www.youtube.com/embed/_Wnv1t9ca3I");
  $("#paaVideosMate57BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video56.html");
  $("#paaVideosMate57BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video58.html");

  $("#paaVideosMate58Titulo").text("58. Porcentajes | Super fácil");
  $("#paaVideosMate58Video").attr("src", "https://www.youtube.com/embed/ETvdnLWIFhU");
  $("#paaVideosMate58BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video57.html");
  $("#paaVideosMate58BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video59.html");

  $("#paaVideosMate59Titulo").text("59. Como calcular un porcentaje | Super fácil");
  $("#paaVideosMate59Video").attr("src", "https://www.youtube.com/embed/RE3XoDORMys");
  $("#paaVideosMate59BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video58.html");
  $("#paaVideosMate59BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video60.html");

  $("#paaVideosMate60Titulo").text("60. Probabilidad | Super fácil");
  $("#paaVideosMate60Video").attr("src", "https://www.youtube.com/embed/WeeEE8o1aqM");
  $("#paaVideosMate60BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video59.html");
  $("#paaVideosMate60BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video61.html");

  $("#paaVideosMate61Titulo").text("61. Probabilidad de un evento simple");
  $("#paaVideosMate61Video").attr("src", "https://www.youtube.com/embed/xYco67hkECs");
  $("#paaVideosMate61BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video60.html");
  $("#paaVideosMate61BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video62.html");

  $("#paaVideosMate62Titulo").text("62. Probabilidad de eventos independientes");
  $("#paaVideosMate62Video").attr("src", "https://www.youtube.com/embed/uTRqUX48Fn8");
  $("#paaVideosMate62BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video61.html");
  $("#paaVideosMate62BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video63.html");

  $("#paaVideosMate63Titulo").text("63. Probabilidad de eventos dependientes");
  $("#paaVideosMate63Video").attr("src", "https://www.youtube.com/embed/iUOnVO7yAfA");
  $("#paaVideosMate63BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video62.html");
  $("#paaVideosMate63BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video64.html");

  $("#paaVideosMate64Titulo").text("64. Media, moda y mediana | Super fácil");
  $("#paaVideosMate64Video").attr("src", "https://www.youtube.com/embed/0DA7Wtz1ddg");
  $("#paaVideosMate64BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video63.html");
  $("#paaVideosMate64BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video65.html");

  $("#paaVideosMate65Titulo").text("65. Media, moda y mediana | Datos sin agrupar");
  $("#paaVideosMate65Video").attr("src", "https://www.youtube.com/embed/fOuRqk1nzgY");
  $("#paaVideosMate65BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video64.html");
  $("#paaVideosMate65BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video66.html");

  $("#paaVideosMate66Titulo").text("66. Regla de 3 simple directa");
  $("#paaVideosMate66Video").attr("src", "https://www.youtube.com/embed/uQO_oBKqypQ");
  $("#paaVideosMate66BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video65.html");
  $("#paaVideosMate66BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video67.html");

  $("#paaVideosMate67Titulo").text("67. Regla de 3 simple | Super fácil");
  $("#paaVideosMate67Video").attr("src", "https://www.youtube.com/embed/Xphb-tzJj24");
  $("#paaVideosMate67BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video66.html");
  $("#paaVideosMate67BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video68.html");

  $("#paaVideosMate68Titulo").text("68. Regla de 3 inversa | Super fácil");
  $("#paaVideosMate68Video").attr("src", "https://www.youtube.com/embed/yPhxJO4Waw8");
  $("#paaVideosMate68BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video67.html");
  $("#paaVideosMate68BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video69.html");

  $("#paaVideosMate69Titulo").text("69. Regla de 3 simple inversa");
  $("#paaVideosMate69Video").attr("src", "https://www.youtube.com/embed/twwRNF9Jm-E");
  $("#paaVideosMate69BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video68.html");
  $("#paaVideosMate69BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video70.html");

  $("#paaVideosMate70Titulo").text("70. Regla de 3 | Como identificar si es directa o inversa");
  $("#paaVideosMate70Video").attr("src", "https://www.youtube.com/embed/OyEcoAV3oFY");
  $("#paaVideosMate70BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video69.html");
  $("#paaVideosMate70BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video71.html");

  $("#paaVideosMate71Titulo").text("71. Combinaciones | Super fácil");
  $("#paaVideosMate71Video").attr("src", "https://www.youtube.com/embed/k8etJmnDrYc");
  $("#paaVideosMate71BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video70.html");
  $("#paaVideosMate71BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video72.html");

  $("#paaVideosMate72Titulo").text("72. Combinación con repetición y sin repetición");
  $("#paaVideosMate72Video").attr("src", "https://www.youtube.com/embed/YLuZ2IGEgDo");
  $("#paaVideosMate72BotonAnterior").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video71.html");
  $("#paaVideosMate72BotonSiguiente").attr("href", "/aprender/examenes/cursos/examen-paa/matematicas/videos/probabilidad/video73.html");

  // ACERCA DE
  $("#creadorPAAVideo").text("Creador del video");
  $("#descripcionCursoPAAVideo").text("Descripción del video");
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

  // :VIDEOS CONSEJOS GENERALES
  $("#creadorVideoPAAConsejosGeneralesLink1").attr("href", "https://www.youtube.com/channel/UCQX_MZRCaluNKxkywkLEgfA").text("Date Un Vlog.");
  $("#descripcionCursoPAAVideo1Texto").text("-");
  // :VIDEOS DE LECTURA
  $("#creadorVideoPAALecturaLink1").attr("href", "https://www.youtube.com/channel/UCqod258jC_Cn8UIW5g0LqqA").text("Wayraeduca.");
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAALecturaLink2").attr("href", "https://www.youtube.com/channel/UCQQ3tfaS0NZpObwUMhzIAlw").text("Isabella Cervantes.");
  $("#descripcionCursoPAAVideo2Texto").text("-");

  $("#creadorVideoPAALecturaLink3").attr("href", "https://www.youtube.com/channel/UC0BWQN53Ylroa4hzqMTTsvg").text("DiverTicDos.");
  $("#descripcionCursoPAAVideo3Texto").text("-");

  $("#creadorVideoPAALecturaLink4").attr("href", "https://www.youtube.com/channel/UCZuV2hpGjAxA3wdY96vqKhw").text("Escuela de Aprendices.");
  $("#descripcionCursoPAAVideo4Texto").text("-");

  $("#creadorVideoPAALecturaLink5").attr("href", "https://www.youtube.com/channel/UCBdq2IZdl8bp1OOg5BNawuQ").text("Rocio Carreon.");
  $("#descripcionCursoPAAVideo5Texto").text("-");

  $("#creadorVideoPAALecturaLink6").attr("href", "https://www.youtube.com/channel/UCZuV2hpGjAxA3wdY96vqKhw").text("Escuela de Aprendices.");
  $("#descripcionCursoPAAVideo6Texto").text("-");

  $("#creadorVideoPAALecturaLink7").attr("href", "https://www.youtube.com/channel/UCtWtGtjNv0qAtZ0DocQjnHQ").text("The Gordo Rizes.");
  $("#descripcionCursoPAAVideo7Texto").text("-");

  $("#creadorVideoPAALecturaLink8").attr("href", "https://www.youtube.com/channel/UCxs-JFQGUPzIY2CkpeEaUkQ").text("DramaQueen.");
  $("#descripcionCursoPAAVideo8Texto").text("-");

  $("#creadorVideoPAALecturaLink9").attr("href", "https://www.youtube.com/channel/UCQW0JoI6GRBvOxqgbzbSWog").text("Libros, libritos y librotes.");
  $("#descripcionCursoPAAVideo9Texto").text("-");

  $("#creadorVideoPAALecturaLink10").attr("href", "https://www.youtube.com/channel/UCE3m5uW9fUnf_tuKsVAmVPw").text("Aula365.");
  $("#descripcionCursoPAAVideo10Texto").text("-");

  $("#creadorVideoPAALecturaLink11").attr("href", "https://www.youtube.com/channel/UCBxLniUP9Fd-D7nQHDN7K_w").text("Stav Guxt.");
  $("#descripcionCursoPAAVideo11Texto").text("-");

  $("#creadorVideoPAALecturaLink12").attr("href", "https://www.youtube.com/channel/UCZuV2hpGjAxA3wdY96vqKhw").text("Escuela de Aprendices.");
  $("#descripcionCursoPAAVideo12Texto").text("-");

  $("#creadorVideoPAALecturaLink13").attr("href", "https://www.youtube.com/channel/UCE3m5uW9fUnf_tuKsVAmVPw").text("Aula365.");
  $("#descripcionCursoPAAVideo13Texto").text("-");

  $("#creadorVideoPAALecturaLink14").attr("href", "https://www.youtube.com/channel/UCJok4N-aJSFTl63LJ16o9VQ").text("Academia Internet.");
  $("#descripcionCursoPAAVideo14Texto").text("-");

  $("#creadorVideoPAALecturaLink15").attr("href", "https://www.youtube.com/channel/UCqod258jC_Cn8UIW5g0LqqA").text("Wayraeduca.");
  $("#descripcionCursoPAAVideo15Texto").text("-");

  // :VIDEOS DE MATEMATICAS
  var DC = "Daniel Carreon.";
  var DCLink = "https://www.youtube.com/channel/UCwScwtu5zVqc_wHtRx9XvDA";
  var PA = "Profe Alex.";
  var PALink = "https://www.youtube.com/channel/UCanMxWvOoiwtjLYm08Bo8QQ";
  $("#creadorVideoPAAMatematicasLink1").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink2").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink3").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink4").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink5").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink6").attr("href", "https://www.youtube.com/channel/UCHjMp24HKtWACYwqcRpx8LA").text("Aprendopolis.");
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink7").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink8").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink9").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink10").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink11").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink12").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink13").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink14").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink15").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink16").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink17").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink18").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink19").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink20").attr("href", "https://www.youtube.com/channel/UCB34YbuG6ThXJzJsDAII5Dw").text("math2me.");
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink21").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink22").attr("href", "https://www.youtube.com/channel/UCHjMp24HKtWACYwqcRpx8LA").text("Aprendopolis,");
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink23").attr("href", "https://www.youtube.com/channel/UC6UUKWYnkmek45zkkDBVPfg").text("Vitual Preparatoria,");
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink24").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink25").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink26").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink27").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink28").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink29").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink30").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink31").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink32").attr("href", "https://www.youtube.com/channel/UCixEOr5vqNVOfV4rbA0iH9w").text("quidimat Matematica Guillermo.");
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink33").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink34").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink35").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink36").attr("href", "https://www.youtube.com/channel/UCJok4N-aJSFTl63LJ16o9VQ").text("Academia Internet.");
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink37").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink38").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink39").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink40").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink41").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink42").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink43").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink44").attr("href", "https://www.youtube.com/channel/UCJok4N-aJSFTl63LJ16o9VQ").text("Academia Internet.");
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink45").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink46").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink47").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink48").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink49").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink50").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink51").attr("href", "https://www.youtube.com/channel/UCiK7AWtx45RztDoDWNC_Xmw").text("Epsilon AKdemy.");
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink52").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink53").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink54").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink55").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink56").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink57").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink58").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink59").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink60").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink61").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink62").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink63").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink64").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink65").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink66").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink67").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink68").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink69").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink70").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink71").attr("href", DCLink).text(DC);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  $("#creadorVideoPAAMatematicasLink72").attr("href", PALink).text(PA);
  $("#descripcionCursoPAAVideo1Texto").text("-");

  // CURSOS RELACIONADOS
  
  $("#recomendado-titulo").text("Otros cursos relacionados:");

  $("#recomendadoUno").attr("href", "/aprender/matematicas/algebra.html").text("Álgebra");
  $("#recomendadoDos").attr("href", "/aprender/matematicas/aritmetica.html").text("Aritmética");
  $("#recomendadoTres").attr("href", "/aprender/matematicas/cursos/abc-de-matematicas.html").text("ABC de Matemáticas");

  // ESTUDIA PARA EL PAA
  // ESTUDIA PARA EL PAA

  // ANIMACION PARA MENU VIDEO-INFO
  $(".video-info-title").click(function() {
    $(".datos-video").slideToggle(400);
    $(".infoBtnMas").toggle();
    $(".infoBtnMenos").toggle();
  });
  // ANIMACION PARA MENU ACORDION
  $(".le1").click(function() {
    $(".vi1").slideToggle(400);
    $(".btnMasle1").toggle();
    $(".btnMenosle1").toggle();
  });

  $(".le2").click(function() {
    $(".vi2").slideToggle(400);
    $(".btnMasle2").toggle();
    $(".btnMenosle2").toggle();
  });

  $(".le3").click(function() {
    $(".vi3").slideToggle(400);
    $(".btnMasle3").toggle();
    $(".btnMenosle3").toggle();
  });

  $(".le4").click(function() {
    $(".vi4").slideToggle(400);
    $(".btnMasle4").toggle();
    $(".btnMenosle4").toggle();
  });

  $(".le5").click(function() {
    $(".vi5").slideToggle(400);
    $(".btnMasle5").toggle();
    $(".btnMenosle5").toggle();
  });

  $(".le6").click(function() {
    $(".vi6").slideToggle(400);
    $(".btnMasle6").toggle();
    $(".btnMenosle6").toggle();
  });

  $(".le7").click(function() {
    $(".vi7").slideToggle(400);
    $(".btnMasle7").toggle();
    $(".btnMenosle7").toggle();
  });

  $(".le8").click(function() {
    $(".vi8").slideToggle(400);
    $(".btnMasle8").toggle();
    $(".btnMenosle8").toggle();
  });

  $(".le9").click(function() {
    $(".vi9").slideToggle(400);
    $(".btnMasle9").toggle();
    $(".btnMenosle9").toggle();
  });

  $(".le10").click(function() {
    $(".vi10").slideToggle(400);
    $(".btnMasle10").toggle();
    $(".btnMenosle10").toggle();
  });

  $(".le11").click(function() {
    $(".vi11").slideToggle(400);
    $(".btnMasle11").toggle();
    $(".btnMenosle11").toggle();
  });

  $(".le12").click(function() {
    $(".vi12").slideToggle(400);
    $(".btnMasle12").toggle();
    $(".btnMenosle12").toggle();
  });

  $(".le13").click(function() {
    $(".vi13").slideToggle(400);
    $(".btnMasle13").toggle();
    $(".btnMenosle13").toggle();
  });

  $(".le14").click(function() {
    $(".vi14").slideToggle(400);
    $(".btnMasle14").toggle();
    $(".btnMenosle14").toggle();
  });

  $(".le15").click(function() {
    $(".vi15").slideToggle(400);
    $(".btnMasle15").toggle();
    $(".btnMenosle15").toggle();
  });

  $(".le16").click(function() {
    $(".vi16").slideToggle(400);
    $(".btnMasle16").toggle();
    $(".btnMenosle16").toggle();
  });

  $(".le17").click(function() {
    $(".vi17").slideToggle(400);
    $(".btnMasle17").toggle();
    $(".btnMenosle17").toggle();
  });

  $(".le18").click(function() {
    $(".vi18").slideToggle(400);
    $(".btnMasle18").toggle();
    $(".btnMenosle18").toggle();
  });

  $(".le19").click(function() {
    $(".vi19").slideToggle(400);
    $(".btnMasle19").toggle();
    $(".btnMenosle19").toggle();
  });

  $(".le20").click(function() {
    $(".vi20").slideToggle(400);
    $(".btnMasle20").toggle();
    $(".btnMenosle20").toggle();
  });

  $(".le21").click(function() {
    $(".vi21").slideToggle(400);
    $(".btnMasle21").toggle();
    $(".btnMenosle21").toggle();
  });

  $(".le22").click(function() {
    $(".vi22").slideToggle(400);
    $(".btnMasle22").toggle();
    $(".btnMenosle22").toggle();
  });

  $(".le23").click(function() {
    $(".vi23").slideToggle(400);
    $(".btnMasle23").toggle();
    $(".btnMenosle23").toggle();
  });

  $(".le24").click(function() {
    $(".vi24").slideToggle(400);
    $(".btnMasle24").toggle();
    $(".btnMenosle24").toggle();
  });

  $(".le25").click(function() {
    $(".vi25").slideToggle(400);
    $(".btnMasle25").toggle();
    $(".btnMenosle25").toggle();
  });

  $(".le26").click(function() {
    $(".vi26").slideToggle(400);
    $(".btnMasle26").toggle();
    $(".btnMenosle26").toggle();
  });

  $(".le27").click(function() {
    $(".vi27").slideToggle(400);
    $(".btnMasle27").toggle();
    $(".btnMenosle27").toggle();
  });

  $(".le28").click(function() {
    $(".vi28").slideToggle(400);
    $(".btnMasle28").toggle();
    $(".btnMenosle28").toggle();
  });

  $(".le29").click(function() {
    $(".vi29").slideToggle(400);
    $(".btnMasle29").toggle();
    $(".btnMenosle29").toggle();
  });

  $(".le30").click(function() {
    $(".vi30").slideToggle(400);
    $(".btnMasle30").toggle();
    $(".btnMenosle30").toggle();
  });
});
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
  $(".leccionBotonMas").text("+"); // este codigo se podria repetir para todos los videos de Lernist
  $(".leccionBotonMenos").text("-");
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
  $("#videoAcordion1").attr("href", "video1.html").text("1. JERARQUÍA DE LAS OPERACIONES Super fácil - Para principiantes");
  $("#videoAcordion2").attr("href", "video2.html").text("2. Operaciones combinadas con números enteros | Suma, resta, multiplicación, división y paréntesis");
  $("#videoAcordion3").attr("href", "video3.html").text("3. Jerarquía de operaciones 2");
  $("#videoAcordion4").attr("href", "video4.html").text("4. Operaciones con paréntesis | Suma y resta | Ejemplo 2");
  $("#videoAcordion5").attr("href", "video5.html").text("5. Eliminar signos de agrupación | Ejemplo 4 | Suma, resta y multiplicación");
  // Leyes de los Signos
  $("#videoAcordion6").attr("href", "video6.html").text("6. LEY DE LOS SIGNOS Super facil - REGLA DE LOS SIGNOS Para principiantes");
  $("#videoAcordion7").attr("href", "video7.html").text("7. LEY DE LOS SIGNOS. SÚPER FÁCIL.");
  // Fracciones
  $("#videoAcordion8").attr("href", "video8.html").text("8. Si te parecen dificiles las fracciones debes ver este video");
  $("#videoAcordion9").attr("href", "video9.html").text("9. TIPOS DE FRACCIONES Super fácil | Para principiantes");
  $("#videoAcordion10").attr("href", "video10.html").text("10. Fracciones desde cero");
  $("#videoAcordion11").attr("href", "video11.html").text("11. Suma y Resta de Fracciones - Operaciones con fracciones #1");
  $("#videoAcordion12").attr("href", "video12.html").text("12. RESTA DE UN ENTERO Y UNA FRACCIÓN Super facil - Para principiantes");
  $("#videoAcordion13").attr("href", "video13.html").text("13. SIMPLIFICAR FRACCIONES super fácil | para principiantes");
  $("#videoAcordion14").attr("href", "video14.html").text("14. Solución de problemas con fracciones | Ejemplo 2");
  $("#videoAcordion15").attr("href", "video15.html").text("15. FRACCIONES EQUIVALENTES Super facil");
  $("#videoAcordion16").attr("href", "video16.html").text("16. Multiplicación y división de fracciones");
  $("#videoAcordion17").attr("href", "video17.html").text("17. Multiplicación y división | Fracción por entero");
  // Numeros decimales
  $("#videoAcordion18").attr("href", "video18.html").text("18. Números decimales Introducción");
  $("#videoAcordion19").attr("href", "video19.html").text("19. COMO LEER NÚMEROS DECIMALES Super Facil - Para Principiantes");
  $("#videoAcordion20").attr("href", "video20.html").text("20. Explicación de los números decimales");
  $("#videoAcordion21").attr("href", "video21.html").text("21. Suma y resta de números decimales");
  $("#videoAcordion22").attr("href", "video22.html").text("22. Orden de los números decimales");
  $("#videoAcordion23").attr("href", "video23.html").text("23. UBICAR UN DECIMAL EN LA RECTA Super facil - Para principiantes");
  $("#videoAcordion24").attr("href", "video24.html").text("24. División de números decimales");
  $("#videoAcordion25").attr("href", "video25.html").text("25. MULTIPLICACION CON DECIMALES Super facil");
  // mcm y MCD
  $("#videoAcordion26").attr("href", "video26.html").text("26. MÍNIMO COMÚN MÚLTIPLO Super Facil - Para principiantes mcm");
  $("#videoAcordion27").attr("href", "video27.html").text("27. Mínimo Común Múltiplo Con Descomposición en Factores");
  $("#videoAcordion28").attr("href", "video28.html").text("28. Máximo Común Divisor MCD");
  $("#videoAcordion29").attr("href", "video29.html").text("29. Que es el Máximo Común Divisor │ MCD");
  // Potencias
  $("#videoAcordion30").attr("href", "video30.html").text("30. POTENCIAS Super facil -Para principiantes (POTENCIACION)");
  $("#videoAcordion31").attr("href", "video31.html").text("31. Qué es la potenciación");
  $("#videoAcordion32").attr("href", "video32.html").text("32. Potenciacion de numeros enteros");
  // Raiz cuadrada
  $("#videoAcordion33").attr("href", "video33.html").text("33. RAÍZ CUADRADA Super Facil");
  $("#videoAcordion34").attr("href", "video34.html").text("34. La raíz cuadrada");
  $("#videoAcordion35").attr("href", "video35.html").text("35. Raíz cuadrada │Square root");
  // Porcentajes
  $("#videoAcordion36").attr("href", "video36.html").text("36. COMO CALCULAR UN PORCENTAJE Super fácil - Para principiantes");
  $("#videoAcordion37").attr("href", "video37.html").text("37. Porcentaje de un número | Ejemplo 1");
  $("#videoAcordion38").attr("href", "video38.html").text("38. Porcentajes solución de problemas | Ejemplo 5");
  $("#videoAcordion39").attr("href", "video39.html").text("39. Que porcentaje es un número de otro");
  $("#videoAcordion40").attr("href", "video40.html").text("40. QUE PORCENTAJE ES UN NÚMERO DE OTRO Super Fácil - Para principiantes");
  // Media, moda y mediana
  $("#videoAcordion41").attr("href", "video41.html").text("41. MEDIA, MODA Y MEDIANA Super facil | Medidas de tendencia central");
  $("#videoAcordion42").attr("href", "video42.html").text("42. Media, mediana y moda | Datos agrupados en intervalos Ejemplo 1");
  $("#videoAcordion43").attr("href", "video43.html").text("43. Media mediana y moda | Datos sin agrupar");
  // Probabilidad simple
  $("#videoAcordion44").attr("href", "video44.html").text("44. PROBABILIDAD Super facil");
  $("#videoAcordion45").attr("href", "video45.html").text("45. Probabilidad de un evento simple | Ejemplo 1");
  // Perimetro y Area
  $("#videoAcordion46").attr("href", "video46.html").text("46. ÁREAS Y PERÍMETROS Super Facil");
  $("#videoAcordion47").attr("href", "video47.html").text("47. ¿Qué son los Perímetros y las Áreas? | Videos Educativos Aula365");
  $("#videoAcordion48").attr("href", "video48.html").text("48. Perímetros y Áreas de 9 figuras geométricas - Ejemplos");
  $("#videoAcordion49").attr("href", "video49.html").text("49. PERÍMETRO Y ÁREA DEL CUADRADO Super facil - Para principiantes");
  $("#videoAcordion50").attr("href", "video50.html").text("50. PERÍMETRO Y ÁREA DEL TRIANGULO -Super fácil - Para principiantes");
  $("#videoAcordion51").attr("href", "video51.html").text("51. Área y perímetro del polígono regular | Conociendo la Apotema | Ejemplo 2");
  $("#videoAcordion52").attr("href", "video52.html").text("52. Perímetro del circulo 'medida de la circunferencia'");
  $("#videoAcordion53").attr("href", "video53.html").text("53. PERÍMETRO CÍRCULO Super facil - Para principiantes");
  $("#videoAcordion54").attr("href", "video54.html").text("54. ÁREA DE UN CÍRCULO Super facil - Para principiantes");
  $("#videoAcordion55").attr("href", "video55.html").text("55. Área del Círculo");
  // Volumenes
  $("#videoAcordion56").attr("href", "video56.html").text("56. 19. Volumen de prismas");
  $("#videoAcordion57").attr("href", "video57.html").text("57. VOLUMEN DE TODOS LOS PRISMAS Super facil - Para principiantes");
  $("#videoAcordion58").attr("href", "video58.html").text("58. Volumen del prisma recto | Ejemplo 1");
  $("#videoAcordion59").attr("href", "video59.html").text("59. VOLUMEN DE PIRAMIDES | partes de las piramides");
  // Angulos
  $("#videoAcordion60").attr("href", "video60.html").text("60. TIPOS DE ÁNGULOS Super facil | Para principiantes");
  $("#videoAcordion61").attr("href", "video61.html").text("61. Los Ángulos | Vídeos Educativos para niños");
  $("#videoAcordion62").attr("href", "video62.html").text("62. Qué es y como dibujar un ángulo");
  // Lenguaje algebraico
  $("#videoAcordion63").attr("href", "video63.html").text("63. LENGUAJE ALGEBRAICO Super facil - Para principiantes PARTE 1");
  $("#videoAcordion64").attr("href", "video64.html").text("64. Lenguaje algebraico | Parte 1");
  $("#videoAcordion65").attr("href", "video65.html").text("65. Lenguaje algebraico");
  // Terminos semejantes
  $("#videoAcordion66").attr("href", "video66.html").text("66. TERMINOS SEMEJANTES Super facil");
  $("#videoAcordion67").attr("href", "video67.html").text("67. Reducción de términos semejantes | Ejemplo 1");
  // Ecuaciones de primer grado
  $("#videoAcordion68").attr("href", "video68.html").text("68. ECUACIONES DE PRIMER GRADO Super facil - Para principiantes");
  $("#videoAcordion69").attr("href", "video69.html").text("69. Cómo solucionar una ecuación entera de primer grado | Ejemplo 1");
  $("#videoAcordion70").attr("href", "video70.html").text("70. ECUACIONES DE PRIMER GRADO CON PARÉNTESIS Super fácil - Para principiantes");
  // Plano cartesiano y graficar
  $("#videoAcordion71").attr("href", "video71.html").text("71. Ubicar un punto en el PLANO CARTESIANO Super facil - Para principiantes");
  $("#videoAcordion72").attr("href", "video72.html").text("72. Como ubicar puntos en el Plano Cartesiano");
  $("#videoAcordion73").attr("href", "video73.html").text("73. Plano Cartesiano");
  $("#videoAcordion74").attr("href", "video74.html").text("74. GRAFICAR FUNCIONES LINEALES Super facil");
  // Teorema de Pitagoras
  $("#videoAcordion75").attr("href", "video75.html").text("75. Teorema de Pitágoras Introducción");
  $("#videoAcordion76").attr("href", "video76.html").text("76. TEOREMA DE PITAGORAS Super Facil - Para principiantes");
  $("#videoAcordion77").attr("href", "video77.html").text("77. TEOREMA DE PITÁGORAS 🔸 Fórmula, Demostración y Ejemplos");
  $("#videoAcordion78").attr("href", "video78.html").text("78. 11. El teorema de Pitágoras");
  $("#videoAcordion79").attr("href", "video79.html").text("79. Teorema de Pitágoras | Encontrar la hipotenusa");
  $("#videoAcordion80").attr("href", "video80.html").text("80. Teorema de Pitágoras | Encontrar un cateto");
  $("#videoAcordion81").attr("href", "video81.html").text("81. Teorema de Pitágoras | Ejercicio de práctica");

  // DATOS DE CADA VIDEO
  $("#tituloVideo1").text("1. JERARQUÍA DE LAS OPERACIONES Super fácil - Para principiantes");
  $("#urlVideo1").attr("src", "https://www.youtube.com/embed/XV5PiV2-91U?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video1LinkAnterior").attr("href", ""); // video anterior
  $("#video1LinkSiguiente").attr("href", "video2.html"); // video siguiente

  $("#tituloVideo2").text("2. Operaciones combinadas con números enteros | Suma, resta, multiplicación, división y paréntesis");
  $("#urlVideo2").attr("src", "https://www.youtube.com/embed/UbqjPCAjUfg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video2LinkAnterior").attr("href", "video1.html"); // video anterior
  $("#video2LinkSiguiente").attr("href", "video3.html"); // video siguiente

  $("#tituloVideo3").text("3. Jerarquía de operaciones 2");
  $("#urlVideo3").attr("src", "https://www.youtube.com/embed/8XuleS2zF9w?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video3LinkAnterior").attr("href", "video2.html"); // video anterior
  $("#video3LinkSiguiente").attr("href", "video4.html"); // video siguiente

  $("#tituloVideo4").text("4. Operaciones con paréntesis | Suma y resta | Ejemplo 2");
  $("#urlVideo4").attr("src", "https://www.youtube.com/embed/lTpbx63UK6M?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video4LinkAnterior").attr("href", "video3.html"); // video anterior
  $("#video4LinkSiguiente").attr("href", "video5.html"); // video siguiente

  $("#tituloVideo5").text("5. Eliminar signos de agrupación | Ejemplo 4 | Suma, resta y multiplicación");
  $("#urlVideo5").attr("src", "https://www.youtube.com/embed/jdqwzCL_PG0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video5LinkAnterior").attr("href", "video4.html"); // video anterior
  $("#video5LinkSiguiente").attr("href", "video6.html"); // video siguiente

  $("#tituloVideo6").text("6. LEY DE LOS SIGNOS Super facil - REGLA DE LOS SIGNOS Para principiantes");
  $("#urlVideo6").attr("src", "https://www.youtube.com/embed/6f40XK7nssY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video6LinkAnterior").attr("href", "video5.html"); // video anterior
  $("#video6LinkSiguiente").attr("href", "video7.html"); // video siguiente

  $("#tituloVideo7").text("7. LEY DE LOS SIGNOS. SÚPER FÁCIL.");
  $("#urlVideo7").attr("src", "https://www.youtube.com/embed/W2GWo8Xt560?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video7LinkAnterior").attr("href", "video6.html"); // video anterior
  $("#video7LinkSiguiente").attr("href", "video8.html"); // video siguiente

  $("#tituloVideo8").text("8. Si te parecen dificiles las fracciones debes ver este video");
  $("#urlVideo8").attr("src", "https://www.youtube.com/embed/LgMptyzudXU?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video8LinkAnterior").attr("href", "video7.html"); // video anterior
  $("#video8LinkSiguiente").attr("href", "video9.html"); // video siguiente

  $("#tituloVideo9").text("9. TIPOS DE FRACCIONES Super fácil | Para principiantes");
  $("#urlVideo9").attr("src", "https://www.youtube.com/embed/7Xvlv3SCA4c?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video9LinkAnterior").attr("href", "video8.html"); // video anterior
  $("#video9LinkSiguiente").attr("href", "video10.html"); // video siguiente

  $("#tituloVideo10").text("10. Fracciones desde cero");
  $("#urlVideo10").attr("src", "https://www.youtube.com/embed/5U2ei-Cl0pc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video10LinkAnterior").attr("href", "video9.html"); // video anterior
  $("#video10LinkSiguiente").attr("href", "video11.html"); // video siguiente

  $("#tituloVideo11").text("11. Suma y Resta de Fracciones - Operaciones con fracciones #1");
  $("#urlVideo11").attr("src", "https://www.youtube.com/embed/rSLuXOTdje8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video11LinkAnterior").attr("href", "video10.html"); // video anterior
  $("#video11LinkSiguiente").attr("href", "video12.html"); // video siguiente

  $("#tituloVideo12").text("12. RESTA DE UN ENTERO Y UNA FRACCIÓN Super facil - Para principiantes");
  $("#urlVideo12").attr("src", "https://www.youtube.com/embed/3F7nkd8o2E8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video12LinkAnterior").attr("href", "video11.html"); // video anterior
  $("#video12LinkSiguiente").attr("href", "video13.html"); // video siguiente

  $("#tituloVideo13").text("13. SIMPLIFICAR FRACCIONES super fácil | para principiantes");
  $("#urlVideo13").attr("src", "https://www.youtube.com/embed/3HNyVbBNGQQ?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video13LinkAnterior").attr("href", "video12.html"); // video anterior
  $("#video13LinkSiguiente").attr("href", "video14.html"); // video siguiente

  $("#tituloVideo14").text("14. Solución de problemas con fracciones | Ejemplo 2");
  $("#urlVideo14").attr("src", "https://www.youtube.com/embed/Jl-S-6xXPQA?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video14LinkAnterior").attr("href", "video13.html"); // video anterior
  $("#video14LinkSiguiente").attr("href", "video15.html"); // video siguiente

  $("#tituloVideo15").text("15. FRACCIONES EQUIVALENTES Super facil");
  $("#urlVideo15").attr("src", "https://www.youtube.com/embed/osePKL39EBo?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video15LinkAnterior").attr("href", "video14.html"); // video anterior
  $("#video15LinkSiguiente").attr("href", "video16.html"); // video siguiente

  $("#tituloVideo16").text("16. Multiplicación y división de fracciones");
  $("#urlVideo16").attr("src", "https://www.youtube.com/embed/YGXURDXHfGI?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video16LinkAnterior").attr("href", "video15.html"); // video anterior
  $("#video16LinkSiguiente").attr("href", "video17.html"); // video siguiente

  $("#tituloVideo17").text("17. Multiplicación y división | Fracción por entero");
  $("#urlVideo17").attr("src", "https://www.youtube.com/embed/nuKfLxz8PXc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video17LinkAnterior").attr("href", "video16.html"); // video anterior
  $("#video17LinkSiguiente").attr("href", "video18.html"); // video siguiente

  $("#tituloVideo18").text("18. Números decimales Introducción");
  $("#urlVideo18").attr("src", "https://www.youtube.com/embed/fae6X1jg3nE?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video18LinkAnterior").attr("href", "video17.html"); // video anterior
  $("#video18LinkSiguiente").attr("href", "video19.html"); // video siguiente

  $("#tituloVideo19").text("19. COMO LEER NÚMEROS DECIMALES Super Facil - Para Principiantes");
  $("#urlVideo19").attr("src", "https://www.youtube.com/embed/bVFExqCCwfE?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video19LinkAnterior").attr("href", "video18.html"); // video anterior
  $("#video19LinkSiguiente").attr("href", "video20.html"); // video siguiente

  $("#tituloVideo20").text("20. Explicación de los números decimales");
  $("#urlVideo20").attr("src", "https://www.youtube.com/embed/9V3S9PwBpcw?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video20LinkAnterior").attr("href", "video19.html"); // video anterior
  $("#video20LinkSiguiente").attr("href", "video21.html"); // video siguiente

  $("#tituloVideo21").text("21. Suma y resta de números decimales");
  $("#urlVideo21").attr("src", "https://www.youtube.com/embed/y_F5eXD8Cb0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video21LinkAnterior").attr("href", "video20.html"); // video anterior
  $("#video21LinkSiguiente").attr("href", "video22.html"); // video siguiente

  $("#tituloVideo22").text("22. Orden de los números decimales");
  $("#urlVideo22").attr("src", "https://www.youtube.com/embed/4sXZ6dtiamU?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video22LinkAnterior").attr("href", "video21.html"); // video anterior
  $("#video22LinkSiguiente").attr("href", "video23.html"); // video siguiente

  $("#tituloVideo23").text("23. UBICAR UN DECIMAL EN LA RECTA Super facil - Para principiantes");
  $("#urlVideo23").attr("src", "https://www.youtube.com/embed/pu0ztG2gWD4?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video23LinkAnterior").attr("href", "video22.html"); // video anterior
  $("#video23LinkSiguiente").attr("href", "video24.html"); // video siguiente

  $("#tituloVideo24").text("24. División de números decimales");
  $("#urlVideo24").attr("src", "https://www.youtube.com/embed/1F0BysuI_K8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video24LinkAnterior").attr("href", "video23.html"); // video anterior
  $("#video24LinkSiguiente").attr("href", "video25.html"); // video siguiente

  $("#tituloVideo25").text("25. MULTIPLICACION CON DECIMALES Super facil");
  $("#urlVideo25").attr("src", "https://www.youtube.com/embed/shXj-YCWWeM?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video25LinkAnterior").attr("href", "video24.html"); // video anterior
  $("#video25LinkSiguiente").attr("href", "video26.html"); // video siguiente

  $("#tituloVideo26").text("26. MÍNIMO COMÚN MÚLTIPLO Super Facil - Para principiantes mcm");
  $("#urlVideo26").attr("src", "https://www.youtube.com/embed/NRJdBgOEjdI?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video26LinkAnterior").attr("href", "video25.html"); // video anterior
  $("#video26LinkSiguiente").attr("href", "video27.html"); // video siguiente

  $("#tituloVideo27").text("27. Mínimo Común Múltiplo Con Descomposición en Factores");
  $("#urlVideo27").attr("src", "https://www.youtube.com/embed/ADcPfyt6LvY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video27LinkAnterior").attr("href", "video26.html"); // video anterior
  $("#video27LinkSiguiente").attr("href", "video28.html"); // video siguiente

  $("#tituloVideo28").text("28. Máximo Común Divisor MCD");
  $("#urlVideo28").attr("src", "https://www.youtube.com/embed/JoHfq8hswmY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video28LinkAnterior").attr("href", "video27.html"); // video anterior
  $("#video28LinkSiguiente").attr("href", "video29.html"); // video siguiente

  $("#tituloVideo29").text("29. Que es el Máximo Común Divisor │ MCD");
  $("#urlVideo29").attr("src", "https://www.youtube.com/embed/WHUQSkaVXd4?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video29LinkAnterior").attr("href", "video28.html"); // video anterior
  $("#video29LinkSiguiente").attr("href", "video30.html"); // video siguiente

  $("#tituloVideo30").text("30. POTENCIAS Super facil -Para principiantes (POTENCIACION)");
  $("#urlVideo30").attr("src", "https://www.youtube.com/embed/-K0ZSm9lPeY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video30LinkAnterior").attr("href", "video29.html"); // video anterior
  $("#video30LinkSiguiente").attr("href", "video31.html"); // video siguiente

  $("#tituloVideo31").text("31. Qué es la potenciación");
  $("#urlVideo31").attr("src", "https://www.youtube.com/embed/vwzZEB0SzCI?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video31LinkAnterior").attr("href", "video30.html"); // video anterior
  $("#video31LinkSiguiente").attr("href", "video32.html"); // video siguiente

  $("#tituloVideo32").text("32. Potenciacion de numeros enteros");
  $("#urlVideo32").attr("src", "https://www.youtube.com/embed/mpwEQ3usaEc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video32LinkAnterior").attr("href", "video31.html"); // video anterior
  $("#video32LinkSiguiente").attr("href", "video33.html"); // video siguiente

  $("#tituloVideo33").text("33. RAÍZ CUADRADA Super Facil");
  $("#urlVideo33").attr("src", "https://www.youtube.com/embed/gPV5VqQ3Ajg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video33LinkAnterior").attr("href", "video32.html"); // video anterior
  $("#video33LinkSiguiente").attr("href", "video34.html"); // video siguiente

  $("#tituloVideo34").text("34. La raíz cuadrada");
  $("#urlVideo34").attr("src", "https://www.youtube.com/embed/Ua9_FIARcs0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video34LinkAnterior").attr("href", "video33.html"); // video anterior
  $("#video34LinkSiguiente").attr("href", "video35.html"); // video siguiente

  $("#tituloVideo35").text("35. Raíz cuadrada │Square root");
  $("#urlVideo35").attr("src", "https://www.youtube.com/embed/g3c2ExA_8yU?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video35LinkAnterior").attr("href", "video34.html"); // video anterior
  $("#video35LinkSiguiente").attr("href", "video36.html"); // video siguiente

  $("#tituloVideo36").text("36. COMO CALCULAR UN PORCENTAJE Super fácil - Para principiantes");
  $("#urlVideo36").attr("src", "https://www.youtube.com/embed/RE3XoDORMys?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video36LinkAnterior").attr("href", "video35.html"); // video anterior
  $("#video36LinkSiguiente").attr("href", "video37.html"); // video siguiente

  $("#tituloVideo37").text("37. Porcentaje de un número | Ejemplo 1");
  $("#urlVideo37").attr("src", "https://www.youtube.com/embed/PjXpBwI6P0M?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video37LinkAnterior").attr("href", "video36.html"); // video anterior
  $("#video37LinkSiguiente").attr("href", "video38.html"); // video siguiente

  $("#tituloVideo38").text("38. Porcentajes solución de problemas | Ejemplo 5");
  $("#urlVideo38").attr("src", "https://www.youtube.com/embed/7PauGP5HVC8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video38LinkAnterior").attr("href", "video37.html"); // video anterior
  $("#video38LinkSiguiente").attr("href", "video39.html"); // video siguiente

  $("#tituloVideo39").text("39. Que porcentaje es un número de otro");
  $("#urlVideo39").attr("src", "https://www.youtube.com/embed/h8zEL6ya4ws?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video39LinkAnterior").attr("href", "video38.html"); // video anterior
  $("#video39LinkSiguiente").attr("href", "video40.html"); // video siguiente

  $("#tituloVideo40").text("40. QUE PORCENTAJE ES UN NÚMERO DE OTRO Super Fácil - Para principiantes");
  $("#urlVideo40").attr("src", "https://www.youtube.com/embed/PId8BE7N_EI?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video40LinkAnterior").attr("href", "video39.html"); // video anterior
  $("#video40LinkSiguiente").attr("href", "video41.html"); // video siguiente

  $("#tituloVideo41").text("41. MEDIA, MODA Y MEDIANA Super facil | Medidas de tendencia central");
  $("#urlVideo41").attr("src", "https://www.youtube.com/embed/0DA7Wtz1ddg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video41LinkAnterior").attr("href", "video40.html"); // video anterior
  $("#video41LinkSiguiente").attr("href", "video42.html"); // video siguiente

  $("#tituloVideo42").text("42. Media, mediana y moda | Datos agrupados en intervalos Ejemplo 1");
  $("#urlVideo42").attr("src", "https://www.youtube.com/embed/5bZXpfxwHqk?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video42LinkAnterior").attr("href", "video41.html"); // video anterior
  $("#video42LinkSiguiente").attr("href", "video43.html"); // video siguiente

  $("#tituloVideo43").text("43. Media mediana y moda | Datos sin agrupar");
  $("#urlVideo43").attr("src", "https://www.youtube.com/embed/fOuRqk1nzgY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video43LinkAnterior").attr("href", "video42.html"); // video anterior
  $("#video43LinkSiguiente").attr("href", "video44.html"); // video siguiente

  $("#tituloVideo44").text("44. PROBABILIDAD Super facil");
  $("#urlVideo44").attr("src", "https://www.youtube.com/embed/WeeEE8o1aqM?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video44LinkAnterior").attr("href", "video43.html"); // video anterior
  $("#video44LinkSiguiente").attr("href", "video45.html"); // video siguiente

  $("#tituloVideo45").text("45. Probabilidad de un evento simple | Ejemplo 1");
  $("#urlVideo45").attr("src", "https://www.youtube.com/embed/xYco67hkECs?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video45LinkAnterior").attr("href", "video44.html"); // video anterior
  $("#video45LinkSiguiente").attr("href", "video46.html"); // video siguiente

  $("#tituloVideo46").text("46. ÁREAS Y PERÍMETROS Super Facil");
  $("#urlVideo46").attr("src", "https://www.youtube.com/embed/wYNvY_bOGdc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video46LinkAnterior").attr("href", "video45.html"); // video anterior
  $("#video46LinkSiguiente").attr("href", "video47.html"); // video siguiente

  $("#tituloVideo47").text("47. ¿Qué son los Perímetros y las Áreas? | Videos Educativos Aula365");
  $("#urlVideo47").attr("src", "https://www.youtube.com/embed/-FvTH9sdL3Q?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video47LinkAnterior").attr("href", "video46.html"); // video anterior
  $("#video47LinkSiguiente").attr("href", "video48.html"); // video siguiente

  $("#tituloVideo48").text("48. Perímetros y Áreas de 9 figuras geométricas - Ejemplos");
  $("#urlVideo48").attr("src", "https://www.youtube.com/embed/6NQub5CEe-Y?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video48LinkAnterior").attr("href", "video47.html"); // video anterior
  $("#video48LinkSiguiente").attr("href", "video49.html"); // video siguiente

  $("#tituloVideo49").text("49. PERÍMETRO Y ÁREA DEL CUADRADO Super facil - Para principiantes");
  $("#urlVideo49").attr("src", "https://www.youtube.com/embed/S-P4y9paTPc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video49LinkAnterior").attr("href", "video48.html"); // video anterior
  $("#video49LinkSiguiente").attr("href", "video50.html"); // video siguiente

  $("#tituloVideo50").text("50. PERÍMETRO Y ÁREA DEL TRIANGULO -Super fácil - Para principiantes");
  $("#urlVideo50").attr("src", "https://www.youtube.com/embed/BPl5ecBvsiY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video50LinkAnterior").attr("href", "video49.html"); // video anterior
  $("#video50LinkSiguiente").attr("href", "video51.html"); // video siguiente

  $("#tituloVideo51").text("51. Área y perímetro del polígono regular | Conociendo la Apotema | Ejemplo 2");
  $("#urlVideo51").attr("src", "https://www.youtube.com/embed/0Dt2JD2qeSE?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video51LinkAnterior").attr("href", "video50.html"); // video anterior
  $("#video51LinkSiguiente").attr("href", "video52.html"); // video siguiente

  $("#tituloVideo52").text("52. Perímetro del circulo 'medida de la circunferencia'");
  $("#urlVideo52").attr("src", "https://www.youtube.com/embed/FNN4PCIM7i0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video52LinkAnterior").attr("href", "video51.html"); // video anterior
  $("#video52LinkSiguiente").attr("href", "video53.html"); // video siguiente

  $("#tituloVideo53").text("53. PERÍMETRO CÍRCULO Super facil - Para principiantes");
  $("#urlVideo53").attr("src", "https://www.youtube.com/embed/GUAA75tXiko?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video53LinkAnterior").attr("href", "video52.html"); // video anterior
  $("#video53LinkSiguiente").attr("href", "video54.html"); // video siguiente

  $("#tituloVideo54").text("54. ÁREA DE UN CÍRCULO Super facil - Para principiantes");
  $("#urlVideo54").attr("src", "https://www.youtube.com/embed/ybFRxtTqgA0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video54LinkAnterior").attr("href", "video53.html"); // video anterior
  $("#video54LinkSiguiente").attr("href", "video55.html"); // video siguiente

  $("#tituloVideo55").text("55. Área del Círculo");
  $("#urlVideo55").attr("src", "https://www.youtube.com/embed/5z3h53xQVq0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video55LinkAnterior").attr("href", "video54.html"); // video anterior
  $("#video55LinkSiguiente").attr("href", "video56.html"); // video siguiente

  $("#tituloVideo56").text("56. 19. Volumen de prismas");
  $("#urlVideo56").attr("src", "https://www.youtube.com/embed/64weeCZL3yc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video56LinkAnterior").attr("href", "video55.html"); // video anterior
  $("#video56LinkSiguiente").attr("href", "video57.html"); // video siguiente

  $("#tituloVideo57").text("57. VOLUMEN DE TODOS LOS PRISMAS Super facil - Para principiantes");
  $("#urlVideo57").attr("src", "https://www.youtube.com/embed/8rP37Lmd4Vs?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video57LinkAnterior").attr("href", "video56.html"); // video anterior
  $("#video57LinkSiguiente").attr("href", "video58.html"); // video siguiente

  $("#tituloVideo58").text("58. Volumen del prisma recto | Ejemplo 1");
  $("#urlVideo58").attr("src", "https://www.youtube.com/embed/N50Q0ZctD2U?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video58LinkAnterior").attr("href", "video57.html"); // video anterior
  $("#video58LinkSiguiente").attr("href", "videos59.html"); // video siguiente

  $("#tituloVideo59").text("59. VOLUMEN DE PIRAMIDES | partes de las piramides");
  $("#urlVideo59").attr("src", "https://www.youtube.com/embed/VpOKrHNLcEM?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video59LinkAnterior").attr("href", "video58.html"); // video anterior
  $("#video59LinkSiguiente").attr("href", "video60.html"); // video siguiente

  $("#tituloVideo60").text("60. TIPOS DE ÁNGULOS Super facil | Para principiantes");
  $("#urlVideo60").attr("src", "https://www.youtube.com/embed/-zLWJYY42GU?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video60LinkAnterior").attr("href", "video59.html"); // video anterior
  $("#video60LinkSiguiente").attr("href", "video61.html"); // video siguiente

  $("#tituloVideo61").text("61. Los Ángulos | Vídeos Educativos para niños");
  $("#urlVideo61").attr("src", "https://www.youtube.com/embed/4pGyx2PrfgM?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video61LinkAnterior").attr("href", "video60.html"); // video anterior
  $("#video61LinkSiguiente").attr("href", "video62.html"); // video siguiente

  $("#tituloVideo62").text("62. Qué es y como dibujar un ángulo");
  $("#urlVideo62").attr("src", "https://www.youtube.com/embed/uMJDpmiIboo?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video62LinkAnterior").attr("href", "video61.html"); // video anterior
  $("#video62LinkSiguiente").attr("href", "video63.html"); // video siguiente

  $("#tituloVideo63").text("63. LENGUAJE ALGEBRAICO Super facil - Para principiantes PARTE 1");
  $("#urlVideo63").attr("src", "https://www.youtube.com/embed/UNWFLuUfiX4?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video63LinkAnterior").attr("href", "video62.html"); // video anterior
  $("#video63LinkSiguiente").attr("href", "video64.html"); // video siguiente

  $("#tituloVideo64").text("64. Lenguaje algebraico | Parte 1");
  $("#urlVideo64").attr("src", "https://www.youtube.com/embed/DV3C_RawfBg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video64LinkAnterior").attr("href", "video63.html"); // video anterior
  $("#video64LinkSiguiente").attr("href", "video65.html"); // video siguiente

  $("#tituloVideo65").text("65. Lenguaje algebraico");
  $("#urlVideo65").attr("src", "https://www.youtube.com/embed/9MG3bGmIyVA?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video65LinkAnterior").attr("href", "video64.html"); // video anterior
  $("#video65LinkSiguiente").attr("href", "video66.html"); // video siguiente

  $("#tituloVideo66").text("66. TERMINOS SEMEJANTES Super facil");
  $("#urlVideo66").attr("src", "https://www.youtube.com/embed/cH_NPAETuvA?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video66LinkAnterior").attr("href", "video65.html"); // video anterior
  $("#video66LinkSiguiente").attr("href", "video67.html"); // video siguiente

  $("#tituloVideo67").text("67. Reducción de términos semejantes | Ejemplo 1");
  $("#urlVideo67").attr("src", "https://www.youtube.com/embed/FDZ18L6kooQ?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video67LinkAnterior").attr("href", "video66.html"); // video anterior
  $("#video67LinkSiguiente").attr("href", "video68.html"); // video siguiente

  $("#tituloVideo68").text("68. ECUACIONES DE PRIMER GRADO Super facil - Para principiantes");
  $("#urlVideo68").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video68LinkAnterior").attr("href", "video67.html"); // video anterior
  $("#video68LinkSiguiente").attr("href", "video69.html"); // video siguiente

  $("#tituloVideo69").text("69. Cómo solucionar una ecuación entera de primer grado | Ejemplo 1");
  $("#urlVideo69").attr("src", "https://www.youtube.com/embed/4AixPIIV05E?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video69LinkAnterior").attr("href", "video68.html"); // video anterior
  $("#video69LinkSiguiente").attr("href", "video70.html"); // video siguiente

  $("#tituloVideo70").text("70. ECUACIONES DE PRIMER GRADO CON PARÉNTESIS Super fácil - Para principiantes");
  $("#urlVideo70").attr("src", "https://www.youtube.com/embed/kRGwE6OKN9M?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video70LinkAnterior").attr("href", "video69.html"); // video anterior
  $("#video70LinkSiguiente").attr("href", "video71.html"); // video siguiente

  $("#tituloVideo71").text("71. Ubicar un punto en el PLANO CARTESIANO Super facil - Para principiantes");
  $("#urlVideo71").attr("src", "https://www.youtube.com/embed/0cUkAd2o1yw?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video71LinkAnterior").attr("href", "video70.html"); // video anterior
  $("#video71LinkSiguiente").attr("href", "video72.html"); // video siguiente

  $("#tituloVideo72").text("72. Como ubicar puntos en el Plano Cartesiano");
  $("#urlVideo72").attr("src", "https://www.youtube.com/embed/QTrE4x5DPZ8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video72LinkAnterior").attr("href", "video71.html"); // video anterior
  $("#video72LinkSiguiente").attr("href", "video73.html"); // video siguiente

  $("#tituloVideo73").text("73. Plano Cartesiano");
  $("#urlVideo73").attr("src", "https://www.youtube.com/embed/3eKnzg91s_E?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video73LinkAnterior").attr("href", "video72.html"); // video anterior
  $("#video73LinkSiguiente").attr("href", "video74.html"); // video siguiente

  $("#tituloVideo74").text("74. GRAFICAR FUNCIONES LINEALES Super facil");
  $("#urlVideo74").attr("src", "https://www.youtube.com/embed/PD45s3U9WA0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video74LinkAnterior").attr("href", "video73.html"); // video anterior
  $("#video74LinkSiguiente").attr("href", "video75.html"); // video siguiente

  $("#tituloVideo75").text("75. Teorema de Pitágoras Introducción");
  $("#urlVideo75").attr("src", "https://www.youtube.com/embed/XfVWlO3sRw0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video75LinkAnterior").attr("href", "video74.html"); // video anterior
  $("#video75LinkSiguiente").attr("href", "video76.html"); // video siguiente

  $("#tituloVideo76").text("76. TEOREMA DE PITAGORAS Super Facil - Para principiantes");
  $("#urlVideo76").attr("src", "https://www.youtube.com/embed/eTEBvBIz8Ok?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video76LinkAnterior").attr("href", "video75.html"); // video anterior
  $("#video76LinkSiguiente").attr("href", "video77.html"); // video siguiente

  $("#tituloVideo77").text("77. TEOREMA DE PITÁGORAS 🔸 Fórmula, Demostración y Ejemplos");
  $("#urlVideo77").attr("src", "https://www.youtube.com/embed/w6nh99v3r4A?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video77LinkAnterior").attr("href", "video76.html"); // video anterior
  $("#video77LinkSiguiente").attr("href", "video78.html"); // video siguiente

  $("#tituloVideo78").text("78. 11. El teorema de Pitágoras");
  $("#urlVideo78").attr("src", "https://www.youtube.com/embed/FqUxTHo_hRc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video78LinkAnterior").attr("href", "video77.html"); // video anterior
  $("#video78LinkSiguiente").attr("href", "video79.html"); // video siguiente

  $("#tituloVideo79").text("79. Teorema de Pitágoras | Encontrar la hipotenusa");
  $("#urlVideo79").attr("src", "https://www.youtube.com/embed/2UbdPiqAiHY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video79LinkAnterior").attr("href", "video78.html"); // video anterior
  $("#video79LinkSiguiente").attr("href", "video80.html"); // video siguiente

  $("#tituloVideo80").text("80. Teorema de Pitágoras | Encontrar un cateto");
  $("#urlVideo80").attr("src", "https://www.youtube.com/embed/CJ8bpjhwA2k?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video80LinkAnterior").attr("href", "video79.html"); // video anterior
  $("#video80LinkSiguiente").attr("href", "video81.html"); // video siguiente

  $("#tituloVideo81").text("81. Teorema de Pitágoras | Ejercicio de práctica");
  $("#urlVideo81").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video81LinkAnterior").attr("href", "video80.html"); // video anterior
  $("#video81LinkSiguiente").attr("href", ""); // video siguiente

  // ACERCA DE
  $("#creadorVideo").text("Creador del video");
  $("#creadorVideoTexto1").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto2").text("Lernist.com no es el propietario de este video. Distribuimos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");

  $("#descripcionCursoVideo").text("Descripción del video");

  $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
  $("#tipsCursoTexto").text("En partes del curso , notarás que dos videos cubren el mismo tema o"
                              + " concepto, esto es a propósito, para darte a ti la elección de tu preferencia, además que"
                              + " así tienes más opciones de estudio por si un tema te parece algo complicado y necesitas"
                              + " verlo un poco más.");

  $("#descripcionCurso").text("Descripción del curso"); // Descripcion del curso
  $("#descripcionCursoTexto").text("Este curso fue diseñado para ser el repaso definitivo de matemáticas."
                                  + " Ya sea que vas a volver a la escuela, a entrar a la universidad, o ya eres grande"
                                  + " y no recuerdas prácticamente nada de las matemáticas, con este curso tu lograrás"
                                  + " recordar y dominar los conceptos básicos de este bello y complejo mundo. Aquí"
                                  + " encontrarás las absolutas bases mátematicas que debes conocer tanto si deseas irte"
                                  + " a temas más avanzados como por mera cultura general.");
  
  $("#duracionCurso").text("Duración y cantidad de videos del curso");
  $("#duracionCursoTexto").text("- 81 videos");

  // uso de variables para insertar link de canales y nombre de un creador - ejemplos:
  var DanielC = "Daniel Carreon.";
  var DanielCLink = "https://www.youtube.com/channel/UCwScwtu5zVqc_wHtRx9XvDA";
  var ProfeA = "Profe Alex.";
  var ProfeALink = "https://www.youtube.com/channel/UCanMxWvOoiwtjLYm08Bo8QQ";
  var nzq = "Nzq zaga."
  var nzqLink = "https://www.youtube.com/channel/UCux3g7zN47ysPqDR9OyUOxg"
  var MarceM = "MarceMáticas."
  var MarceMLink = "https://www.youtube.com/channel/UC-Y9adQbXtMOsms_j0N709Q"
  var CesarMGS = "César Moisés Grillo Soliz."
  var CesarMGSLink = "https://www.youtube.com/channel/UCE5LBbb61uzwYM-QLHksp5w"
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
  // link al canal y nombre del creador del video
  $("#creadorVideoLink1").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo1Texto").text("-");

  $("#creadorVideoLink2").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo2Texto").text("-");

  $("#creadorVideoLink3").attr("href", nzqLink).text(nzq);
  // descripcion de cada video
  $("#descripcionCursoVideo3Texto").text("-");

  $("#creadorVideoLink4").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo4Texto").text("-");

  $("#creadorVideoLink5").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo5Texto").text("-");

  $("#creadorVideoLink6").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo6Texto").text("-");

  $("#creadorVideoLink7").attr("href", MarceMLink).text(MarceM);
  // descripcion de cada video
  $("#descripcionCursoVideo7Texto").text("-");

  $("#creadorVideoLink8").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo8Texto").text("-");

  $("#creadorVideoLink9").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo9Texto").text("-");

  $("#creadorVideoLink10").attr("href", CesarMGSLink).text(CesarMGS);
  // descripcion de cada video
  $("#descripcionCursoVideo10Texto").text("-");

  $("#creadorVideoLink11").attr("href", SusiPLink).text(SusiP);
  // descripcion de cada video
  $("#descripcionCursoVideo11Texto").text("-");

  $("#creadorVideoLink12").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo12Texto").text("-");

  $("#creadorVideoLink13").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo13Texto").text("-");

  $("#creadorVideoLink14").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo14Texto").text("-");

  $("#creadorVideoLink15").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo15Texto").text("-");

  $("#creadorVideoLink16").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo16Texto").text("-");

  $("#creadorVideoLink17").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo17Texto").text("-");

  $("#creadorVideoLink18").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo18Texto").text("-");

  $("#creadorVideoLink19").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo19Texto").text("-");

  $("#creadorVideoLink20").attr("href", ApprendeMLink).text(AprendeM);
  // descripcion de cada video
  $("#descripcionCursoVideo20Texto").text("-");

  $("#creadorVideoLink21").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo21Texto").text("-");

  $("#creadorVideoLink22").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo22Texto").text("-");

  $("#creadorVideoLink23").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo23Texto").text("-");

  $("#creadorVideoLink24").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo24Texto").text("-");

  $("#creadorVideoLink25").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo25Texto").text("-");

  $("#creadorVideoLink26").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo26Texto").text("-");

  $("#creadorVideoLink27").attr("href", SusiPLink).text(SusiP);
  // descripcion de cada video
  $("#descripcionCursoVideo27Texto").text("-");

  $("#creadorVideoLink28").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo28Texto").text("-");

  $("#creadorVideoLink29").attr("href", math2Link).text(math2);
  // descripcion de cada video
  $("#descripcionCursoVideo29Texto").text("-");

  $("#creadorVideoLink30").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo30Texto").text("-");

  $("#creadorVideoLink31").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo31Texto").text("-");

  $("#creadorVideoLink32").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo32Texto").text("-");

  $("#creadorVideoLink33").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo33Texto").text("-");

  $("#creadorVideoLink34").attr("href", aprendopolisLink).text(aprendopolis);
  // descripcion de cada video
  $("#descripcionCursoVideo34Texto").text("-");

  $("#creadorVideoLink35").attr("href", math2Link).text(math2);
  // descripcion de cada video
  $("#descripcionCursoVideo35Texto").text("-");

  $("#creadorVideoLink36").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo36Texto").text("-");

  $("#creadorVideoLink37").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo37Texto").text("-");

  $("#creadorVideoLink38").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo38Texto").text("-");

  $("#creadorVideoLink39").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo39Texto").text("-");

  $("#creadorVideoLink40").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo40Texto").text("-");

  $("#creadorVideoLink41").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo41Texto").text("-");

  $("#creadorVideoLink42").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo42Texto").text("-");

  $("#creadorVideoLink43").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo43Texto").text("-");

  $("#creadorVideoLink44").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo44Texto").text("-");

  $("#creadorVideoLink45").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo45Texto").text("-");

  $("#creadorVideoLink46").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo46Texto").text("-");

  $("#creadorVideoLink47").attr("href", aula365Link).text(Aula365);
  // descripcion de cada video
  $("#descripcionCursoVideo47Texto").text("-");

  $("#creadorVideoLink48").attr("href", ingeDLink).text(ingeD);
  // descripcion de cada video
  $("#descripcionCursoVideo48Texto").text("-");

  $("#creadorVideoLink49").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo49Texto").text("-");

  $("#creadorVideoLink50").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo50Texto").text("-");

  $("#creadorVideoLink51").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo51Texto").text("-");

  $("#creadorVideoLink52").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo52Texto").text("-");

  $("#creadorVideoLink53").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo53Texto").text("-");

  $("#creadorVideoLink54").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo54Texto").text("-");

  $("#creadorVideoLink55").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo55Texto").text("-");

  $("#creadorVideoLink56").attr("href", acervoLink).text(acervo);
  // descripcion de cada video
  $("#descripcionCursoVideo56Texto").text("-");

  $("#creadorVideoLink57").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo57Texto").text("-");

  $("#creadorVideoLink58").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo58Texto").text("-");

  $("#creadorVideoLink59").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo59Texto").text("-");

  $("#creadorVideoLink60").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo60Texto").text("-");

  $("#creadorVideoLink61").attr("href", happyLELink).text(happyLE);
  // descripcion de cada video
  $("#descripcionCursoVideo61Texto").text("-");

  $("#creadorVideoLink62").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo62Texto").text("-");

  $("#creadorVideoLink63").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo63Texto").text("-");

  $("#creadorVideoLink64").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo64Texto").text("-");

  $("#creadorVideoLink65").attr("href", rubenSLink).text(rubenS);
  // descripcion de cada video
  $("#descripcionCursoVideo65Texto").text("-");

  $("#creadorVideoLink66").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo66Texto").text("-");

  $("#creadorVideoLink67").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo67Texto").text("-");

  $("#creadorVideoLink68").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo68Texto").text("-");

  $("#creadorVideoLink69").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo69Texto").text("-");

  $("#creadorVideoLink70").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo70Texto").text("-");

  $("#creadorVideoLink71").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo71Texto").text("-");

  $("#creadorVideoLink72").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo72Texto").text("-");

  $("#creadorVideoLink73").attr("href", lauraBLink).text(lauraB);
  // descripcion de cada video
  $("#descripcionCursoVideo73Texto").text("-");

  $("#creadorVideoLink74").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo74Texto").text("-");

  $("#creadorVideoLink75").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo75Texto").text("-");

  $("#creadorVideoLink76").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideo76Texto").text("-");

  $("#creadorVideoLink77").attr("href", SusiPLink).text(SusiP);
  // descripcion de cada video
  $("#descripcionCursoVideo77Texto").text("-");

  $("#creadorVideoLink78").attr("href", acervoLink).text(acervo);
  // descripcion de cada video
  $("#descripcionCursoVideo78Texto").text("-");

  $("#creadorVideoLink79").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo79Texto").text("-");

  $("#creadorVideoLink80").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo80Texto").text("-");

  $("#creadorVideoLink81").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideo81Texto").text("-");

  // CURSOS RELACIONADOS
  
  $("#recomendado-titulo").text("Otros cursos relacionados:");

  $("#recomendadoUno").attr("href", "/aprender/matematicas/algebra.html").text("Álgebra");
  $("#recomendadoDos").attr("href", "/aprender/matematicas/aritmetica.html").text("Aritmética");
  $("#recomendadoTres").attr("href", "/aprender/matematicas/cursos/abc-de-matematicas.html").text("ABC de Matemáticas");

  // ABC DE MATEMATICAS
  // ABC DE MATEMATICAS

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
/* var anunciosSuperiores = 0;
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
} */

// INDICE
// ELEMENTOS MADRE: linea 16
// 

// uso de variables para insertar link de canales y nombre de un creador - ejemplos:
var Blue1Brown = "3Blue1Brown Español.";
var Blue1BrownLink = "https://www.youtube.com/channel/UCQbsk1JQNaskUlfdoyiWJDg";

function primerVideo() {
  alert("¡No hay anteriores, este es el primer video!")
}
function ultimoVideo() {
  alert("¡No hay siguientes, este es el último video!")
}

$(document).ready(function() {

  // ESENCIA DEL ALGEBRA LINEAL
  // ESENCIA DEL ALGEBRA LINEAL

  // ELEMENTOS MADRE
  $(".videos").hide();
  $(".datos-video").hide();
  $("#titulo-lecciones").text("Navega por el curso:");
  $(".leccionBotonMas").text("+");
  $(".leccionBotonMenos").text("-");
  $("#VideosBotonPrevious").attr("src", "/images/archive/previous.png");
  $("#VideosBotonPreviousText").text("Anterior");
  $("#VideosBotonNext").attr("src", "/images/archive/next.png");
  $("#VideosBotonNextText").text("Siguiente");

  // DEFAULT DATA
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("1. Fundamentos del Álgebra Lineal | Esencia del álgebra lineal, reseña");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/0Ndnzx6AyaA?cc_lang_pref=es&cc_load_policy=1"); // url del video

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
  // DEFAULT DATA

  // TITULOS DE MENU ACORDION (lecciones y partes)
  $("#tituloAcordion1").text("Esencia del Algebra Lineal");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // LeccionName
  $("#videoAcordion1").text("1. Fundamentos del Álgebra Lineal | Esencia del álgebra lineal, reseña");
  $("#videoAcordion2").text("2. Vectores, ¿qué son? | Esencia del álgebra lineal, capítulo 1");
  $("#videoAcordion3").text("3. Combinaciones lineales, subespacio generado y bases | Esencia del álgebra lineal, capítulo 2");
  $("#videoAcordion4").text("4. Transformaciones lineales y matrices | Esencia del álgebra lineal, capítulo 3");
  $("#videoAcordion5").text("5. Multiplicación matricial como composición | Esencia del álgebra lineal, capítulo 4a");
  $("#videoAcordion6").text("6. Transformaciones lineales en tres dimensiones | Esencia del álgebra lineal, capítulo 4b");
  $("#videoAcordion7").text("7. El determinante | Esencia del álgebra lineal, capítulo 5");
  $("#videoAcordion8").text("8. Matriz inversa, rango y rango nulo | Esencia del álgebra lineal, capítulo 6a");
  $("#videoAcordion9").text("9. Matrices no cuadradas como transformaciones entre dimensiones | Álgebra lineal, capítulo 6b");
  $("#videoAcordion10").text("10. Producto escalar y dualidad | Esencia del álgebra lineal, capítulo 7");
  $("#videoAcordion11").text("11. Producto vectorial | Esencia del álgebra lineal, capítulo 8a");
  $("#videoAcordion12").text("12. Producto vectorial bajo la luz de las transformaciones lineales | Álgebra lineal, capítulo 8b");
  $("#videoAcordion13").text("13. Cambio de Bases | Esencia del álgebra lineal, capítulo 09");
  $("#videoAcordion14").text("14. Vectores propios y valores propios | Esencia del álgebra lineal, capítulo 10");
  $("#videoAcordion15").text("15. Vectores en un espacio abstracto | Esencia del álgebra lineal, capítulo 11");

  // ACERCA DE
  $("#creadorVideo").text("Creador del video");
  $("#creadorVideoTexto").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto").append("Lernist.com no es el propietario de este video. Distribuímos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");

  $("#descripcionCursoVideo").text("Descripción del video");

  $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
  $("#tipsCursoTexto").text("Este curso es bastante sencillo de seguir, sus videos son cortos y muy dinámicos."
  + " Si quieres sacar lo mejor del contenido, te recomendamos que tomes pequeños apuntes,"
  + " de los aspectos más importantes. La acción de escribir a mano mejora la comprensión"
  + " y retención del conocimiento");

  $("#descripcionCurso").prepend("Descripción del curso"); // Descripcion del curso
  $("#descripcionCursoTexto").text("Este curso expone de una manera visual y dinámica muchos de los temas que comprenden el"
  + " algebra lineal, el creador usa animaciones y elementos visuales para explicar"
  + " detalladamente los conceptos. Esto es una enorme ventaja, ya que en muchas ocasiones"
  + " esta materia solo o se ve fuertemente desde el lado matemático, pero es crucial"
  + " verla desde la parte gráfica para comprenderla correctamente. Al finalizar, tendrás"
  + " una idea clara de la mayoría de los conceptos, y te permitirá desarrollar y entender"
  + " las matemáticas detrás de ellos con más facilidad");
  
  $("#duracionCurso").text("Duración y cantidad de videos del curso");
  $("#duracionCursoTexto").text("- 15 videos");

  // CURSOS RELACIONADOS
  
  $("#recomendado-titulo").text("Otros cursos relacionados:");

  $("#recomendadoUno").attr("href", "/aprender/matematicas/algebra.html").text("Álgebra");
  $("#recomendadoDos").attr("href", "/aprender/matematicas/aritmetica.html").text("Aritmética");
  $("#recomendadoTres").attr("href", "/aprender/matematicas/cursos/abc-de-matematicas.html").text("ABC de Matemáticas");

  // ESENCIA DEL ALGEBRA LINEAL
  // ESENCIA DEL ALGEBRA LINEAL

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

function datosVideo1() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("1. Fundamentos del Álgebra Lineal | Esencia del álgebra lineal, reseña");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/0Ndnzx6AyaA?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "primerVideo()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo2()"); // video siguiente

  // IMPORTANTE NOTA:
  // Si el espacio donde va la variable con el link al canal de youtube esta vacío,
  // causa un bug que interfiere con el slideToggle, pero se soluciona cuando se añade a todos

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo2() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("2. Vectores, ¿qué son? | Esencia del álgebra lineal, capítulo 1");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/wiuEEkP_XuM?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo1()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo3()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo3() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("3. Combinaciones lineales, subespacio generado y bases | Esencia del álgebra lineal, capítulo 2");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/RqQqFx4xUjk?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo2()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo4()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}
// editar informacion
function datosVideo4() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("4. Transformaciones lineales y matrices | Esencia del álgebra lineal, capítulo 3");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/YJfS4_m_0Z8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo3()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo5()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo5() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("5. Multiplicación matricial como composición | Esencia del álgebra lineal, capítulo 4a");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/8f7UUnbLqp0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo4()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo6()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo6() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("6. Transformaciones lineales en tres dimensiones | Esencia del álgebra lineal, capítulo 4b");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/IvGS6aFkofg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo5()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo7()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo7() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("7. El determinante | Esencia del álgebra lineal, capítulo 5");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/yt3eoYvGel0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo6()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo8()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo8() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("8. Matriz inversa, rango y rango nulo | Esencia del álgebra lineal, capítulo 6a");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/Xt_0OyLdQgI?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo7()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo9()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo9() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("9. Matrices no cuadradas como transformaciones entre dimensiones | Álgebra lineal, capítulo 6b");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/VXJEsYgeXX0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo8()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo10()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo10() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("10. Producto escalar y dualidad | Esencia del álgebra lineal, capítulo 7");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/quYTdFWTN1g?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo9()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo11()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo11() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("11. Producto vectorial | Esencia del álgebra lineal, capítulo 8a");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/2u1YeOyGuAc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo10()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo12()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo12() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("12. Producto vectorial bajo la luz de las transformaciones lineales | Álgebra lineal, capítulo 8b");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/k5MxuAVGTto?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo11()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo13()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo13() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("13. Cambio de Bases | Esencia del álgebra lineal, capítulo 09");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/LYlaRDsi_T8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo12()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo14()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo14() {
    $("#leccionTitle").text("Esencia del Algebra Lineal");
    $("#tituloVideo").text("14. Vectores propios y valores propios | Esencia del álgebra lineal, capítulo 10");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Gx0PaWI9eYo?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo13()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo15()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo15() {
  $("#leccionTitle").text("Esencia del Algebra Lineal");
  $("#tituloVideo").text("15. Vectores en un espacio abstracto | Esencia del álgebra lineal, capítulo 11");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/dZ4oM9bGI1s?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo14()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "ultimoVideo()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", Blue1BrownLink).text(Blue1Brown);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}
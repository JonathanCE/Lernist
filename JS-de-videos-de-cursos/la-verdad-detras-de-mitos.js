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
var Curiosa = "Curiosamente.";
var CuriosaLink = "https://www.youtube.com/channel/UCX16cLWl6dCjlZMgUBxgGkA";

function primerVideo() {
  alert("¡No hay anteriores, este es el primer video!")
}
function ultimoVideo() {
  alert("¡No hay siguientes, este es el último video!")
}

$(document).ready(function() {

  // DATOS DEL CURSO
  // DATOS DEL CURSO

  // ELEMENTOS MADRE
  $(".videos").hide();
  $(".datos-video").hide();
  $("#titulo-lecciones").text("Navega por el curso:");
  $(".leccionBotonMas").text("+");
  $(".leccionBotonMenos").text("-");
  $("#VideosBotonPrevious").attr("src", "/i_temas/previous.png");
  $("#VideosBotonPreviousText").text("Anterior");
  $("#VideosBotonNext").attr("src", "/i_temas/next.png");
  $("#VideosBotonNextText").text("Siguiente");

  // DEFAULT DATA
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("1. ¿Existen las sociedades secretas? ¡illuminati confirmado! - CuriosaMente 173");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/l-ojVvNnh3k?cc_lang_pref=es&cc_load_policy=1"); // url del video

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
  // DEFAULT DATA

  // TITULOS DE MENU ACORDION (lecciones y partes)
  $("#tituloAcordion1").text("La verdad detrás de muchos mitos.");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // LeccionName
  $("#videoAcordion1").text("1. ¿Existen las sociedades secretas? ¡illuminati confirmado! - CuriosaMente 173");
  $("#videoAcordion2").text("2. Inversión Magnética ¿Fin del mundo? - CuriosaMente 34");
  $("#videoAcordion3").text("3. ¿Qué misterio oculta el Triángulo de las Bermudas? CuriosaMente 39");
  $("#videoAcordion4").text("4. ¿Por qué vemos cosas que no existen? Pareidolia - CuriosaMente 41");
  $("#videoAcordion5").text("5. 10 Veces que no se acabó el Mundo - CuriosaMente 42");
  $("#videoAcordion6").text("6. ¿Existen los fantasmas? - CuriosaMente 46");
  $("#videoAcordion7").text("7. ¿La Tierra es plana? 🌎 5 pruebas... en contra - CuriosaMente 52");
  $("#videoAcordion8").text("8. El Efecto Mandela ¿Por qué recordamos cosas que no ocurrieron? - CuriosaMente 57");
  $("#videoAcordion9").text("9. ¿Por qué se cree en supersticiones? - CuriosaMente 98");
  $("#videoAcordion10").text("10. Los OVNIS ¿Son marcianos? - CRÓNICAS MARCIANAS | CuriosaMente 113");
  $("#videoAcordion11").text("11. ¿La física cuántica puede sanarte? - CuriosaMente 153");
  $("#videoAcordion12").text("12. ¿De dónde vienen las SIRENAS? - CuriosaMente 156");
  $("#videoAcordion13").text("13. ¿Qué hay detrás del espejo? - CuriosaMente 208");
  $("#videoAcordion14").text("14. ¿Por qué dicen que no fuimos a la Luna? 7 preguntas sobre la conspiración lunar - CuriosaMente 234");
  $("#videoAcordion15").text("15. ¿Funciona la astrología? - CuriosaMente 266");
  $("#videoAcordion16").text("16. 8 Lugares MISTERIOSOS (Parte 1) - CuriosaMente 279");
  $("#videoAcordion17").text("17. ¿Vivimos en una SIMULACIÓN? 🐇 - CuriosaMente 301");

  // ACERCA DE
  $("#creadorVideo").text("Creador del video");
  $("#creadorVideoTexto").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto").append("Lernist.com no es el propietario de este video. Distribuímos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");

  $("#descripcionCursoVideo").text("Descripción del video");

  $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
  $("#tipsCursoTexto").text("Este curso incluye diversidad de temáticas, y el orden en el"
  + " que lo puedes tomar no importa. Los videos son bastante interactivos además de cortos"
  + ", por lo que el único tip que tenemos es que te pongas cómodo y lo disfrutes. Además, en"
  + " Lernist estamos a favor de un mundo sin desinformación, por lo que si tienes algún"
  + " familiar o amigo con creencias erróneas, te recomendamos que le muestres este curso.");

  $("#descripcionCurso").prepend("Descripción del curso"); // Descripcion del curso
  $("#descripcionCursoTexto").text("El mundo moderno es un lugar fascinante y a la vez"
  + " algo peligroso, ya que si bien la tecnología nos ha permitido comunicarnos como nunca"
  + " antes en la historia, esto también ha hecho que se pueda usar como vehículo para difundir"
  + " ideas erróneas. Por fortuna, el increíble equipo de Curiosamente ha diseñado una serie"
  + " de videos, donde explican de una manera bastante interactiva y sencilla el por que"
  + " de muchas creencias e ideas falsas. Ponte en un lugar cómodo y descubre la verdad detrás"
  + " de las conspiraciones, teorías y demás creencias falsas que muchas personas consideran"
  + " que son verdad.");
  
  $("#duracionCurso").text("Duración y cantidad de videos del curso");
  $("#duracionCursoTexto").text("2 horas - 17 videos");

  // CURSOS RELACIONADOS
  
  $("#recomendado-titulo").text("Otros cursos relacionados:");

  $("#recomendadoUno").attr("href", "/aprender/matematicas/algebra.html").text("Álgebra");
  $("#recomendadoDos").attr("href", "/aprender/matematicas/aritmetica.html").text("Aritmética");
  $("#recomendadoTres").attr("href", "/aprender/matematicas/cursos/abc-de-matematicas.html").text("ABC de Matemáticas");

  // DATOS DEL CURSO
  // DATOS DEL CURSO

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
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("1. ¿Existen las sociedades secretas? ¡illuminati confirmado! - CuriosaMente 173");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/l-ojVvNnh3k?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "primerVideo()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo2()"); // video siguiente

  // IMPORTANTE NOTA:
  // Si el espacio donde va la variable con el link al canal de youtube esta vacío,
  // causa un bug que interfiere con el slideToggle, pero se soluciona cuando se añade a todos

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo2() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("2. Inversión Magnética ¿Fin del mundo? - CuriosaMente 34");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/K-OjXK4vyoY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo1()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo3()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo3() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("3. ¿Qué misterio oculta el Triángulo de las Bermudas? CuriosaMente 39");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/zj7tkS7Bt_s?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo2()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo4()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}
// editar informacion
function datosVideo4() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("4. ¿Por qué vemos cosas que no existen? Pareidolia - CuriosaMente 41");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/UJj54CbUY8g?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo3()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo5()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo5() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("5. 10 Veces que no se acabó el Mundo - CuriosaMente 42");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/tMNGAOBKMTg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo4()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo6()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo6() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("6. ¿Existen los fantasmas? - CuriosaMente 46");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/cMcZYeHnJYw?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo5()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo7()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo7() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("7. ¿La Tierra es plana? 🌎 5 pruebas... en contra - CuriosaMente 52");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/FzxLtk9Nlh0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo6()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo8()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo8() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("8. El Efecto Mandela ¿Por qué recordamos cosas que no ocurrieron? - CuriosaMente 57");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/cZJE5F6BCNo?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo7()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo9()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo9() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("9. ¿Por qué se cree en supersticiones? - CuriosaMente 98");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/ExbVoHLXPzg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo8()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo10()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo10() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("10. Los OVNIS ¿Son marcianos? - CRÓNICAS MARCIANAS | CuriosaMente 113");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/-YyGsnDkTP0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo9()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo11()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo11() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("11. ¿La física cuántica puede sanarte? - CuriosaMente 153");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/kWFr47Y4_Rg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo10()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo12()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo12() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("12. ¿De dónde vienen las SIRENAS? - CuriosaMente 156");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/ru1heLci5Qo?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo11()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo13()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo13() {
  $("#leccionTitle").text("La verdad detrás de muchos mitos.");
  $("#tituloVideo").text("13. ¿Qué hay detrás del espejo? - CuriosaMente 208");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/srmiSiJHCxQ?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo12()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo14()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo14() {
    $("#leccionTitle").text("La verdad detrás de muchos mitos.");
    $("#tituloVideo").text("14. ¿Por qué dicen que no fuimos a la Luna? 7 preguntas sobre la conspiración lunar - CuriosaMente 234");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/40BZqF1Qj6E?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo13()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo15()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo15() {
    $("#leccionTitle").text("La verdad detrás de muchos mitos.");
    $("#tituloVideo").text("15. ¿Funciona la astrología? - CuriosaMente 266");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/GweFONsKJ5M?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo14()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo16()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo16() {
    $("#leccionTitle").text("La verdad detrás de muchos mitos.");
    $("#tituloVideo").text("16. 8 Lugares MISTERIOSOS (Parte 1) - CuriosaMente 279");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/HQWkAr2V6W8?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo15()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo17()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo17() {
    $("#leccionTitle").text("La verdad detrás de muchos mitos.");
    $("#tituloVideo").text("17. ¿Vivimos en una SIMULACIÓN?🐇 - CuriosaMente 301");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/pM2Kg7lCHc4?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo16()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "ultimoVideo()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}
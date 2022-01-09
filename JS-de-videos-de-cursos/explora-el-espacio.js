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

  // EL CAMBIO CLIMATICO ES REAL.
  // EL CAMBIO CLIMATICO ES REAL.

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
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("1. ¿De qué tamaño es el universo? - CuriosaMente 4");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/Pt2U47Fu8ZA?cc_lang_pref=es&cc_load_policy=1"); // url del video

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
  // DEFAULT DATA

  // TITULOS DE MENU ACORDION (lecciones y partes)
  $("#tituloAcordion1").text("Explora el espacio con Curiosamente");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // LeccionName
  $("#videoAcordion1").text("1. ¿De qué tamaño es el universo? - CuriosaMente 4");
  $("#videoAcordion2").text("2. ¿El asteroide del fin del mundo?");
  $("#videoAcordion3").text("3. Star Wars: ¿Hay ciencia en la ficción? - CuriosaMente 11");
  $("#videoAcordion4").text("4. ¿Existen los extraterrestres? - CuriosaMente 23");
  $("#videoAcordion5").text("5. ¿Qué son los agujeros negros? - CuriosaMente 36");
  $("#videoAcordion6").text("6. 6 Preguntas sobre El Espacio- CuriosaMente 48");
  $("#videoAcordion7").text("7. ¿Cómo inició el Universo? (ft. Javier Santaolalla, Date un Voltio) - CuriosaMente 54");
  $("#videoAcordion8").text("8. ¿Por qué no hay eclipses cada mes? 🌑🌞- CuriosaMente 84");
  $("#videoAcordion9").text("9. ¿Por qué hay constelaciones? - CuriosaMente 97");
  $("#videoAcordion10").text("10. ¿Por qué los planetas son redondos y por qué giran? - CuriosaMente 101");
  $("#videoAcordion11").text("11. Los OVNIS ¿Son marcianos? - CRÓNICAS MARCIANAS | CuriosaMente 113");
  $("#videoAcordion12").text("12. ¿Podremos vivir en Marte? *con Martí de C de Ciencia *- CuriosaMente 152");
  $("#videoAcordion13").text("13. 🐶 ¿Animales astronautas? 🚀 -CuriosaMente 165 (Con Cielos Despejados y La Silla de Hawking)");
  $("#videoAcordion14").text("14. ¿Cómo medimos el COSMOS? (Con Aldo de El Robot de Platón) - CuriosaMente 184");
  $("#videoAcordion15").text("15. ¿Puede un ASTEROIDE chocar con la Tierra? - CuriosaMente 185");
  $("#videoAcordion16").text("16. ¿Cómo encontrar extraterrestres? (Feat. Miranda Luna de Urano) - CuriosaMente 219");
  $("#videoAcordion17").text("17. ¿Cómo funcionan los cohetes, y cómo hacer el tuyo? - CuriosaMente 229");
  $("#videoAcordion18").text("18. ¿Cómo se oyen los planetas? Los inquietantes sonidos del espacio - CuriosaMente 293");
  $("#videoAcordion19").text("19. ¿Cómo sabemos que nuestra GALAXIA tiene forma de ESPIRAL? - CuriosaMente 304");
  $("#videoAcordion20").text("20. ¿Qué sienten los extraterrestres? - CuriosaMente 248");

  // ACERCA DE
  $("#creadorVideo").text("Creador del video");
  $("#creadorVideoTexto").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto").append("Lernist.com no es el propietario de este video. Distribuímos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");

  $("#descripcionCursoVideo").text("Descripción del video");

  $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
  $("#tipsCursoTexto").text("Este curso abarca diversos temas acerca del universo de una forma"
  + " sencilla y corta, además de que no tiene un orden particular, por lo que puedes brincar"
  + " de video en video sin preocupaciones. Si quieres reforzar o prácticar lo visto en los"
  + " videos, en la parte inferior encontrarás quizzes de 5 preguntas para repasar los temas.");

  $("#descripcionCurso").prepend("Descripción del curso"); // Descripcion del curso
  $("#descripcionCursoTexto").text("El espacio, los planetas, el universo, son temas que"
  + " a millones de personas les apasionan, llenos de enigmas y hechos sorprendentes."
  + " Pero muchas veces es complicado encontrar contenido sencillo de estos temas, en"
  + " particular para los que apenas van comenzando. Por fortuna, existen personas"
  + " como el increíble equipo de Curiosamente, que se dedican a crear contenido educativo"
  + " sencillo y alta calidad. En esta colección de sus videos explorarás distintos fenómenos"
  + " y temas del espacio, explicados de una manera interactiva y fácil, solo como ellos pueden"
  + " hacerlo.");
  
  $("#duracionCurso").text("Duración y cantidad de videos del curso");
  $("#duracionCursoTexto").text("2 horas - 20 videos");

  // CURSOS RELACIONADOS
  
  $("#recomendado-titulo").text("Otros cursos relacionados:");

  $("#recomendadoUno").attr("href", "/aprender/matematicas/algebra.html").text("Álgebra");
  $("#recomendadoDos").attr("href", "/aprender/matematicas/aritmetica.html").text("Aritmética");
  $("#recomendadoTres").attr("href", "/aprender/matematicas/cursos/abc-de-matematicas.html").text("ABC de Matemáticas");

  // EL CAMBIO CLIMATICO ES REAL.
  // EL CAMBIO CLIMATICO ES REAL.

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
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("1. ¿De qué tamaño es el universo? - CuriosaMente 4");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/Pt2U47Fu8ZA?cc_lang_pref=es&cc_load_policy=1"); // url del video
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
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("2. ¿El asteroide del fin del mundo?");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/Aet-p4VdM2g?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo1()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo3()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo3() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("3. Star Wars: ¿Hay ciencia en la ficción? - CuriosaMente 11");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/CYLQvL4CKB0?cc_lang_pref=es&cc_load_policy=1"); // url del video
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
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("4. ¿Existen los extraterrestres? - CuriosaMente 23");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/tHh709jmTfc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo3()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo5()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo5() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("5. ¿Qué son los agujeros negros? - CuriosaMente 36");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/eYg_LsuOBUc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo4()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo6()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo6() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("6. 6 Preguntas sobre El Espacio- CuriosaMente 48");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/Lc6-xmB_nKY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo5()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo7()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo7() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("7. ¿Cómo inició el Universo? (ft. Javier Santaolalla, Date un Voltio) - CuriosaMente 54");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/tGnniFH-iNg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo6()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo8()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo8() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("8. ¿Por qué no hay eclipses cada mes? 🌑🌞- CuriosaMente 84");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/IEyLRi1kABo?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo7()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo9()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo9() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("9. ¿Por qué hay constelaciones? - CuriosaMente 97");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/EaKmbaoa_bk?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo8()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo10()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo10() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("10. ¿Por qué los planetas son redondos y por qué giran? - CuriosaMente 101");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/cO7FrGZed5w?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo9()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo11()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo11() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("11. Los OVNIS ¿Son marcianos? - CRÓNICAS MARCIANAS | CuriosaMente 113");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/-YyGsnDkTP0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo10()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo12()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo12() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("12. ¿Podremos vivir en Marte? *con Martí de C de Ciencia *- CuriosaMente 152");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/4s8jlwHTAFU?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo11()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo13()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo13() {
  $("#leccionTitle").text("Explora el espacio con Curiosamente");
  $("#tituloVideo").text("13. 🐶 ¿Animales astronautas? 🚀 -CuriosaMente 165 (Con Cielos Despejados y La Silla de Hawking)");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/quUEJQphVeM?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo12()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo14()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo14() {
    $("#leccionTitle").text("Explora el espacio con Curiosamente");
    $("#tituloVideo").text("14. ¿Cómo medimos el COSMOS? (Con Aldo de El Robot de Platón) - CuriosaMente 184");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/wtWkJX96R6c?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo13()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo15()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo15() {
    $("#leccionTitle").text("Explora el espacio con Curiosamente");
    $("#tituloVideo").text("15. ¿Puede un ASTEROIDE chocar con la Tierra? - CuriosaMente 185");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/xFmAGcQqBik?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo14()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo16()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo16() {
    $("#leccionTitle").text("Explora el espacio con Curiosamente");
    $("#tituloVideo").text("16. ¿Cómo encontrar extraterrestres? (Feat. Miranda Luna de Urano) - CuriosaMente 219");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/647lhVdMJfA?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo15()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo17()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo17() {
    $("#leccionTitle").text("Explora el espacio con Curiosamente");
    $("#tituloVideo").text("17. ¿Cómo funcionan los cohetes, y cómo hacer el tuyo? - CuriosaMente 229");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/jEPMsJ5Y3ss?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo16()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo18()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo18() {
    $("#leccionTitle").text("Explora el espacio con Curiosamente");
    $("#tituloVideo").text("18. ¿Cómo se oyen los planetas? Los inquietantes sonidos del espacio - CuriosaMente 293");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/DFIoTqo2TY8?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo17()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo19()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo19() {
    $("#leccionTitle").text("Explora el espacio con Curiosamente");
    $("#tituloVideo").text("19. ¿Cómo sabemos que nuestra GALAXIA tiene forma de ESPIRAL? - CuriosaMente 304");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/kiPeHykxDXI?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo18()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo20()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo20() {
    $("#leccionTitle").text("Explora el espacio con Curiosamente");
    $("#tituloVideo").text("20. ¿Qué sienten los extraterrestres? - CuriosaMente 248");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/lYIKYKfOz7E?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo19()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "ultimoVideo()"); // video siguiente
  
    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}
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
var DateVlog = "Date un Vlog.";
var DateLink = "https://www.youtube.com/channel/UCQX_MZRCaluNKxkywkLEgfA";
var Curiosa = "Curiosamente.";
var CuriosaLink = "https://www.youtube.com/channel/UCX16cLWl6dCjlZMgUBxgGkA";
var Mind = "MindMachineTV.";
var MindLink = "https://www.youtube.com/channel/UCxOQ-HjJws0Nrh7v-05cxCw";
var DateVoltio = "Date un Voltio.";
var DateVLink = "https://www.youtube.com/channel/UCns-8DssCBba7M4nu7wk7Aw";
var Acciona = "ACCIONA.";
var AccionaLink = "https://www.youtube.com/channel/UCVLajedX43G0E1BRVx7Q7dQ";
var kurz = "En Pocas Palabras - Kurzgesagt.";
var kurzLink = "https://www.youtube.com/channel/UCZcvCpFcLxOKGbMocVgLjEA";
var quantum = "QuantumFracture.";
var quantumLink = "https://www.youtube.com/channel/UCbdSYaPD-lr1kW27UJuk8Pw";
var hipotesis = "HipotesisDePoder.";
var hipotesisLink = "https://www.youtube.com/channel/UCp-ZlVc-lJ7MrdlzMOJU36g";
var Vox = "Vox.";
var VoxLink = "https://www.youtube.com/channel/UCLXo7UDZvByw2ixzpQCufnA";
var CNBC = "CNBC.";
var CNBCLink = "https://www.youtube.com/channel/UCvJJ_dzjViJCoLf5uKUTwoA";

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
  $("#leccionTitle").text("¿Qué es el cambio climático?");
  $("#tituloVideo").text("1. Clima no es tiempo: la verdad del CAMBIO CLIMÁTICO");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/bQTTphy2c-M?cc_lang_pref=es&cc_load_policy=1"); // url del video

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", DateLink).text(DateVlog);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
  // DEFAULT DATA

  // TITULOS DE MENU ACORDION (lecciones y partes)
  $("#tituloAcordion1").text("¿Qué es el cambio climático?");
  $("#tituloAcordion2").text("¿Qué es el calentamiento global?");//g
  $("#tituloAcordion3").text("¿Qué es el efecto invernadero?");
  $("#tituloAcordion4").text("¿Cuáles son las causas?");
  $("#tituloAcordion5").text("¿Cómo detener el cambio climático?");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // ¿Qué es el cambio climático?
  $("#videoAcordion1").text("1. Clima no es tiempo: la verdad del CAMBIO CLIMÁTICO");
  $("#videoAcordion2").text("2. ¿Es real el cambio climático? - CuriosaMente 26");
  $("#videoAcordion3").text("3. ¿Qué es el cambio climático?");
  // ¿Qué es el calentamiento global?
  $("#videoAcordion4").text("4. El calentamiento global | Acción por el clima");
  $("#videoAcordion5").text("5. ¿Que es el Calentamiento global?");
  // ¿Qué es el efecto invernadero?
  $("#videoAcordion6").text("6. ¿Que es el efecto invernadero?");
  $("#videoAcordion7").text("7. ¿Qué es el efecto invernadero? | Sostenibilidad - ACCIONA");
  // ¿Cuáles son las causas?
  $("#videoAcordion8").text("8. ¿Quien es responsable por el cambio climático? ¿Y quien debe solucionarlo?");
  $("#videoAcordion9").text("9. El Cambio Climático es Culpa Nuestra y Puedo Convencerte");
  $("#videoAcordion10").text("10. ¿Por qué la carne es la mejor PEOR cosa del mundo?");
  $("#videoAcordion11").text("11. ¿Por que estos 3 países contaminan mas que el resto del mundo?");
  $("#videoAcordion12").text("12. Por que los humanos son muy malos al pensar en el cambio climático (Inglés)");
  // ¿Cómo detener el cambio climático?
  $("#videoAcordion13").text("13. 26 Formas de Luchar contra el Cambio Climático");
  $("#videoAcordion14").text("14. Como evitar el Cambio Climatico MUY RÁPIDO");
  $("#videoAcordion15").text("15. ¿Podemos parar el cambio climático plantando árboles? - Curiosamente");
  $("#videoAcordion16").text("16. ¿Se puede detener el cambio climático platando billones de árboles? (Inglés)");

  // ACERCA DE
  $("#creadorVideo").text("Creador del video");
  $("#creadorVideoTexto").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto").append("Lernist.com no es el propietario de este video. Distribuímos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");

  $("#descripcionCursoVideo").text("Descripción del video");

  $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
  $("#tipsCursoTexto").text("Este curso fue diseñado para explicar mismos conceptos desde diferentes fuentes,"
                            + " por lo que te puede quedar claro con uno o dos videos, sin necesidad de ver"
                            + " todos los de una lección. Sin embargo, cada autor profundiza y explica"
                            + " bastante bien, por lo que recomendamos verlos todos.");

  $("#descripcionCurso").prepend("Descripción del curso"); // Descripcion del curso
  $("#descripcionCursoTexto").text("La situación de nuestra madre Tierra es muy delicada. Ya estamos viviendo los efectos"
                                  + " de nuestras malas acciones en el medio ambiente, y si no hacemos algo pronto,"
                                  + " va a ser demasiado tarde. Aún con la infinidad de evidencias científicas y fenómenos"
                                  + " meteorológicos derivados del calentamiento global, existen aún personas escépticas"
                                  + " de esta realidad. Este curso es para convencer a estas personas de una vez por todas,"
                                  + " y para aquellas que ya saben de ello, que lo conozcan y entiendan más a fondo, con el"
                                  + " fin de unirnos como sociedad para ponerle un alto a este daño que esta padeciendo"
                                  + " nuestro amado y frágil planeta.");
  
  $("#duracionCurso").text("Duración y cantidad de videos del curso");
  $("#duracionCursoTexto").text("- 16 videos");

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
  $("#leccionTitle").text("¿Qué es el cambio climático?");
  $("#tituloVideo").text("1. Clima no es tiempo: la verdad del CAMBIO CLIMÁTICO");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/bQTTphy2c-M?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "primerVideo()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo2()"); // video siguiente

  // IMPORTANTE NOTA:
  // Si el espacio donde va la variable con el link al canal de youtube esta vacío,
  // causa un bug que interfiere con el slideToggle, pero se soluciona cuando se añade a todos

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", DateLink).text(DateVlog);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo2() {
  $("#leccionTitle").text("¿Qué es el cambio climático?");
  $("#tituloVideo").text("2. ¿Es real el cambio climático? - CuriosaMente 26");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/weIBPwFuYwA?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo1()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo3()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo3() {
  $("#leccionTitle").text("¿Qué es el cambio climático?");
  $("#tituloVideo").text("3. ¿Qué es el cambio climático?");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/wbN_OPthenQ?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo2()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo4()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", MindLink).text(Mind);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}
// editar informacion
function datosVideo4() {
  $("#leccionTitle").text("¿Qué es el calentamiento global?");
  $("#tituloVideo").text("4. El calentamiento global | Acción por el clima");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/XpPGZ-nFnXw?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo3()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo5()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", DateVLink).text(DateVoltio);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo5() {
  $("#leccionTitle").text("¿Qué es el calentamiento global?");
  $("#tituloVideo").text("5. ¿Que es el Calentamiento global?");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/C7kD8Hvhi_Y?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo4()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo6()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", MindLink).text(Mind);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo6() {
  $("#leccionTitle").text("¿Qué es el efecto invernadero?");
  $("#tituloVideo").text("6. ¿Que es el efecto invernadero?");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/nFIftpzZedw?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo5()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo7()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", MindLink).text(Mind);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo7() {
  $("#leccionTitle").text("¿Qué es el efecto invernadero?");
  $("#tituloVideo").text("7. ¿Qué es el efecto invernadero? | Sostenibilidad - ACCIONA");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/YLFLxQ0t07A?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo6()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo8()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", AccionaLink).text(Acciona);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo8() {
  $("#leccionTitle").text("¿Cuáles son las causas?");
  $("#tituloVideo").text("8. ¿Quien es responsable por el cambio climático? ¿Y quien debe solucionarlo?");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/LKNVNXHYzS0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo7()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo9()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", kurzLink).text(kurz);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo9() {
  $("#leccionTitle").text("¿Cuáles son las causas?");
  $("#tituloVideo").text("9. El Cambio Climático es Culpa Nuestra y Puedo Convencerte");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/JQHtjT-_c7U?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo8()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo10()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", quantumLink).text(quantum);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo10() {
  $("#leccionTitle").text("¿Cuáles son las causas?");
  $("#tituloVideo").text("10. ¿Por qué la carne es la mejor PEOR cosa del mundo?");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/VY2yv3zMOsI?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo9()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo11()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", kurzLink).text(kurz);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo11() {
  $("#leccionTitle").text("¿Cuáles son las causas?");
  $("#tituloVideo").text("11. ¿Por que estos 3 países contaminan mas que el resto del mundo?");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/BzOR-D1pCaE?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo10()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo12()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", hipotesisLink).text(hipotesis);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo12() {
  $("#leccionTitle").text("¿Cuáles son las causas?");
  $("#tituloVideo").text("12. Por que los humanos son muy malos al pensar en el cambio climático (Inglés)");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/DkZ7BJQupVA?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo11()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo13()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", VoxLink).text(Vox);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo13() {
  $("#leccionTitle").text("¿Cómo detener el cambio climático?");
  $("#tituloVideo").text("13. 26 Formas de Luchar contra el Cambio Climático");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/wNQ5wvGmnEk?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo12()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo14()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", quantumLink).text(quantum);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo14() {
  $("#leccionTitle").text("¿Cómo detener el cambio climático?");
  $("#tituloVideo").text("14. Como evitar el Cambio Climático MUY RÁPIDO");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/3X-Z0kMfh4M?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo13()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo15()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", AccionaLink).text(Acciona);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo15() {
  $("#leccionTitle").text("¿Cómo detener el cambio climático?");
  $("#tituloVideo").text("15. ¿Podemos parar el cambio climático plantando árboles? - Curiosamente");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/7M-hixaUt5A?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo14()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo16()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo16() {
  $("#leccionTitle").text("¿Cómo detener el cambio climático?");
  $("#tituloVideo").text("16. ¿Se puede detener el cambio climático platando billones de árboles? (Inglés)");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/yvDRQe2oCt4?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo15()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "ultimoVideo()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CNBCLink).text(CNBC);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}
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
  $(".leccionBotonMas").text("+");
  $(".leccionBotonMenos").text("-");
  $("#VideosBotonPrevious").attr("src", "/i_temas/previous.png");
  $("#VideosBotonPreviousText").text("Anterior");
  $("#VideosBotonNext").attr("src", "/i_temas/next.png");
  $("#VideosBotonNextText").text("Siguiente");
  $("#VideosMensajeInicio").text("¡El curso comienza aquí!");
  $("#VideosMensajeFinal").text("¡Haz terminado el curso!");

  // EL CAMBIO CLIMATICO ES REAL.
  // EL CAMBIO CLIMATICO ES REAL.

  // LECCIONES
  $("#que-es-cambio-climatico").text("¿Qué es el cambio climático?");
  $("#que-es-calentamiento-global").text("¿Qué es el calentamiento global?");
  $("#que-es-efecto-invernadero").text("¿Qué es el efecto invernadero?");
  $("#cuales-son-las-causas").text("¿Cuáles son las causas?");
  $("#como-detener-cambio-climatico").text("¿Cómo detener el cambio climático?");

  // TITULOS DE MENU ACORDION (lecciones y partes)
  $("#tituloAcordion1").text("¿Qué es el cambio climático?");
  $("#tituloAcordion2").text("¿Qué es el calentamiento global?");
  $("#tituloAcordion3").text("¿Qué es el efecto invernadero?");
  $("#tituloAcordion4").text("¿Cuáles son las causas?");
  $("#tituloAcordion5").text("¿Cómo detener el cambio climático?");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // ¿Qué es el cambio climático?
  $("#videoAcordion1").attr("href", "video1.html").text("1. Clima no es tiempo: la verdad del CAMBIO CLIMÁTICO");
  $("#videoAcordion2").attr("href", "video2.html").text("2. ¿Es real el cambio climático? - CuriosaMente 26");
  $("#videoAcordion3").attr("href", "video3.html").text("3. ¿Qué es el cambio climático?");
  // ¿Qué es el calentamiento global?
  $("#videoAcordion4").attr("href", "video4.html").text("4. El calentamiento global | Acción por el clima");
  $("#videoAcordion5").attr("href", "video5.html").text("5. ¿Que es el Calentamiento global?");
  // ¿Qué es el efecto invernadero?
  $("#videoAcordion6").attr("href", "video6.html").text("6. ¿Que es el efecto invernadero?");
  $("#videoAcordion7").attr("href", "video7.html").text("7. ¿Qué es el efecto invernadero? | Sostenibilidad - ACCIONA");
  // ¿Cuáles son las causas?
  $("#videoAcordion8").attr("href", "video8.html").text("8. ¿Quien es responsable por el cambio climatico? ¿Y quien debe solucionarlo?");
  $("#videoAcordion9").attr("href", "video9.html").text("9. El Cambio Climático es Culpa Nuestra y Puedo Convencerte");
  $("#videoAcordion10").attr("href", "video10.html").text("10. ¿Por qué la carne es la mejor PEOR cosa del mundo?");
  $("#videoAcordion11").attr("href", "video11.html").text("11. ¿Por que estos 3 paises contaminan mas que el resto del mundo?");
  $("#videoAcordion12").attr("href", "video12.html").text("12. Por que los humanos son muy malos al pensar en el cambio climatico (Inglés)");
  // ¿Cómo detener el cambio climático?
  $("#videoAcordion13").attr("href", "video13.html").text("13. 26 Formas de Luchar contra el Cambio Climatico");
  $("#videoAcordion14").attr("href", "video14.html").text("14. Como evitar el Cambio Climatico MUY RAPIDO");
  $("#videoAcordion15").attr("href", "video15.html").text("15. ¿Podemos parar el cambio climatico plantando arboles? - Curiosamente");
  $("#videoAcordion16").attr("href", "video16.html").text("16. ¿Se puede detener el cambio climatico platando billones de arboles? (Inglés)");

  // DATOS DE CADA VIDEO
  $("#tituloVideo1").text("1. Clima no es tiempo: la verdad del CAMBIO CLIMÁTICO");
  $("#urlVideo1").attr("src", "https://www.youtube.com/embed/bQTTphy2c-M?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video1LinkAnterior").attr("href", ""); // video anterior
  $("#video1LinkSiguiente").attr("href", "video2.html"); // video siguiente

  $("#tituloVideo2").text("2. ¿Es real el cambio climático? - CuriosaMente 26");
  $("#urlVideo2").attr("src", "https://www.youtube.com/embed/weIBPwFuYwA?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video2LinkAnterior").attr("href", "video1.html"); // video anterior
  $("#video2LinkSiguiente").attr("href", "video3.html"); // video siguiente

  $("#tituloVideo3").text("3. ¿Qué es el cambio climático?");
  $("#urlVideo3").attr("src", "https://www.youtube.com/embed/wbN_OPthenQ?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video3LinkAnterior").attr("href", "video2.html"); // video anterior
  $("#video3LinkSiguiente").attr("href", "video4.html"); // video siguiente

  $("#tituloVideo4").text("4. El calentamiento global | Acción por el clima");
  $("#urlVideo4").attr("src", "https://www.youtube.com/embed/XpPGZ-nFnXw?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video4LinkAnterior").attr("href", "video3.html"); // video anterior
  $("#video4LinkSiguiente").attr("href", "video5.html"); // video siguiente

  $("#tituloVideo5").text("5. ¿Que es el Calentamiento global?");
  $("#urlVideo5").attr("src", "https://www.youtube.com/embed/C7kD8Hvhi_Y?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video5LinkAnterior").attr("href", "video4.html"); // video anterior
  $("#video5LinkSiguiente").attr("href", "video6.html"); // video siguiente

  $("#tituloVideo6").text("6. ¿Que es el efecto invernadero?");
  $("#urlVideo6").attr("src", "https://www.youtube.com/embed/nFIftpzZedw?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video6LinkAnterior").attr("href", "video5.html"); // video anterior
  $("#video6LinkSiguiente").attr("href", "video7.html"); // video siguiente

  $("#tituloVideo7").text("7. ¿Qué es el efecto invernadero? | Sostenibilidad - ACCIONA");
  $("#urlVideo7").attr("src", "https://www.youtube.com/embed/YLFLxQ0t07A?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video7LinkAnterior").attr("href", "video6.html"); // video anterior
  $("#video7LinkSiguiente").attr("href", "video8.html"); // video siguiente

  $("#tituloVideo8").text("8. ¿Quien es responsable por el cambio climatico? ¿Y quien debe solucionarlo?");
  $("#urlVideo8").attr("src", "https://www.youtube.com/embed/LKNVNXHYzS0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video8LinkAnterior").attr("href", "video7.html"); // video anterior
  $("#video8LinkSiguiente").attr("href", "video9.html"); // video siguiente

  $("#tituloVideo9").text("9. El Cambio Climático es Culpa Nuestra y Puedo Convencerte");
  $("#urlVideo9").attr("src", "https://www.youtube.com/embed/JQHtjT-_c7U?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video9LinkAnterior").attr("href", "video8.html"); // video anterior
  $("#video9LinkSiguiente").attr("href", "video10.html"); // video siguiente

  $("#tituloVideo10").text("10. ¿Por qué la carne es la mejor PEOR cosa del mundo?");
  $("#urlVideo10").attr("src", "https://www.youtube.com/embed/VY2yv3zMOsI?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video10LinkAnterior").attr("href", "video9.html"); // video anterior
  $("#video10LinkSiguiente").attr("href", "video11.html"); // video siguiente

  $("#tituloVideo11").text("11. ¿Por que estos 3 paises contaminan mas que el resto del mundo?");
  $("#urlVideo11").attr("src", "https://www.youtube.com/embed/BzOR-D1pCaE?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video11LinkAnterior").attr("href", "video10.html"); // video anterior
  $("#video11LinkSiguiente").attr("href", "video12.html"); // video siguiente

  $("#tituloVideo12").text("12. Por que los humanos son muy malos al pensar en el cambio climatico (Inglés)");
  $("#urlVideo12").attr("src", "https://www.youtube.com/embed/DkZ7BJQupVA?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video12LinkAnterior").attr("href", "video11.html"); // video anterior
  $("#video12LinkSiguiente").attr("href", "video13.html"); // video siguiente

  $("#tituloVideo13").text("13. 26 Formas de Luchar contra el Cambio Climatico");
  $("#urlVideo13").attr("src", "https://www.youtube.com/embed/wNQ5wvGmnEk?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video13LinkAnterior").attr("href", "video12.html"); // video anterior
  $("#video13LinkSiguiente").attr("href", "video14.html"); // video siguiente

  $("#tituloVideo14").text("14. Como evitar el Cambio Climatico MUY RAPIDO");
  $("#urlVideo14").attr("src", "https://www.youtube.com/embed/3X-Z0kMfh4M?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video14LinkAnterior").attr("href", "video13.html"); // video anterior
  $("#video14LinkSiguiente").attr("href", "video15.html"); // video siguiente

  $("#tituloVideo15").text("15. ¿Podemos parar el cambio climatico plantando arboles? - Curiosamente");
  $("#urlVideo15").attr("src", "https://www.youtube.com/embed/7M-hixaUt5A?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video15LinkAnterior").attr("href", "video14.html"); // video anterior
  $("#video15LinkSiguiente").attr("href", "video16.html"); // video siguiente

  $("#tituloVideo16").text("16. ¿Se puede detener el cambio climatico platando billones de arboles? (Inglés)");
  $("#urlVideo16").attr("src", "https://www.youtube.com/embed/yvDRQe2oCt4?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video16LinkAnterior").attr("href", "video15.html"); // video anterior
  $("#video16LinkSiguiente").attr("href", "video17.html"); // video siguiente

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
  $("#duracionCursoTexto").text("- 16 videos");

  // uso de variables para insertar link de canales y nombre de un creador - ejemplos:
  var Date = "Date un Vlog.";
  var DateLink = "https://www.youtube.com/channel/UCQX_MZRCaluNKxkywkLEgfA";
  var Curiosa = "Curiosamente.";
  var CuriosaLink = "https://www.youtube.com/channel/UCX16cLWl6dCjlZMgUBxgGkA";
  var Mind = "MindMachineTV.";
  var MindLink = "https://www.youtube.com/channel/UCxOQ-HjJws0Nrh7v-05cxCw";
  var DateV = "Date un Voltio.";
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
  
  // link al canal y nombre del creador del video
  $("#creadorVideoLink1").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo1Texto").text("-");

  // IMPORTANTE NOTA:
  // Si el espacio donde va la variable con el link al canal de youtube esta vacío,
  // causa un bug que interfiere con el slideToggle, pero se soluciona cuando se añade a todos
  $("#creadorVideoLink2").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideo2Texto").text("-");

  $("#creadorVideoLink3").attr("href", MindLink).text(Mind);
  // descripcion de cada video
  $("#descripcionCursoVideo3Texto").text("-");

  $("#creadorVideoLink4").attr("href", DateVLink).text(DateV);
  // descripcion de cada video
  $("#descripcionCursoVideo4Texto").text("-");

  $("#creadorVideoLink5").attr("href", MindLink).text(Mind);
  // descripcion de cada video
  $("#descripcionCursoVideo5Texto").text("-");

  $("#creadorVideoLink6").attr("href", MindLink).text(Mind);
  // descripcion de cada video
  $("#descripcionCursoVideo6Texto").text("-");

  $("#creadorVideoLink7").attr("href", AccionaLink).text(Acciona);
  // descripcion de cada video
  $("#descripcionCursoVideo7Texto").text("-");

  $("#creadorVideoLink8").attr("href", kurzLink).text(kurz);
  // descripcion de cada video
  $("#descripcionCursoVideo8Texto").text("-");

  $("#creadorVideoLink9").attr("href", quantumLink).text(quantum);
  // descripcion de cada video
  $("#descripcionCursoVideo9Texto").text("-");

  $("#creadorVideoLink10").attr("href", kurzLink).text(kurz);
  // descripcion de cada video
  $("#descripcionCursoVideo10Texto").text("-");

  $("#creadorVideoLink11").attr("href", hipotesisLink).text(hipotesis);
  // descripcion de cada video
  $("#descripcionCursoVideo11Texto").text("-");

  $("#creadorVideoLink12").attr("href", VoxLink).text(Vox);
  // descripcion de cada video
  $("#descripcionCursoVideo12Texto").text("-");

  $("#creadorVideoLink13").attr("href", quantumLink).text(quantum);
  // descripcion de cada video
  $("#descripcionCursoVideo13Texto").text("-");

  $("#creadorVideoLink14").attr("href", AccionaLink).text(Acciona);
  // descripcion de cada video
  $("#descripcionCursoVideo14Texto").text("-");

  $("#creadorVideoLink15").attr("href", CuriosaLink).text(Curiosa);
  // descripcion de cada video
  $("#descripcionCursoVideo15Texto").text("-");

  $("#creadorVideoLink16").attr("href", CNBCLink).text(CNBC);
  // descripcion de cada video
  $("#descripcionCursoVideo16Texto").text("-");
  
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
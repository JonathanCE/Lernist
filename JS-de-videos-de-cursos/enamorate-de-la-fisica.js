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

  // ENAMORATE DE LA FISICA
  // ENAMORATE DE LA FISICA

  // LECCIONES
  $("#enamorateFisica").text("Enamórate de la Física");

  // TITULOS DE MENU ACORDION (lecciones y partes)
  $("#tituloAcordion1").text("Enamórate de la Física");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // LeccionName
  $("#videoAcordion1").attr("href", "video1.html").text("1. HOY SÍ que vas a entender la Relatividad General");
  $("#videoAcordion2").attr("href", "video2.html").text("2. 5 PARADOJAS que harán que dudes de TODO");
  $("#videoAcordion3").attr("href", "video3.html").text("3. #2 Biografías científicas - Albert Einstein, rebelde y bohemio");
  $("#videoAcordion4").attr("href", "video4.html").text("4. Este vídeo SÍ te va a volar la cabeza: ¿Qué es el TIEMPO?");
  $("#videoAcordion5").attr("href", "video5.html").text("5. HOY SÍ que vas a entender los AGUJEROS NEGROS");
  $("#videoAcordion6").attr("href", "video6.html").text("6. HOY SÍ que vas a entender EL BOSÓN DE HIGGS");
  $("#videoAcordion7").attr("href", "video7.html").text("7. ¿Por que no se puede viajar más rápido que la luz?");
  $("#videoAcordion8").attr("href", "video8.html").text("8. Así se hace el material MÁS CARO DEL MUNDO 💰64.000.000.000$/g💰 | #CERN");
  $("#videoAcordion9").attr("href", "video9.html").text("9. El CAOS gobierna el COSMOS");
  $("#videoAcordion10").attr("href", "video10.html").text("10. HOY SÍ que vas a entender la ENTROPÍA");
  $("#videoAcordion11").attr("href", "video11.html").text("11. HOY SÍ que vas a entender la mecánica cuántica");
  $("#videoAcordion12").attr("href", "video12.html").text("12. HOY SÍ que vas a entender el TIEMPO");
  $("#videoAcordion13").attr("href", "video13.html").text("13. Por qué se está enseñando MAL la física");

  // DATOS DE CADA VIDEO
  $("#tituloVideo1").text("1. HOY SÍ que vas a entender la Relatividad General");
  $("#urlVideo1").attr("src", "https://www.youtube.com/embed/RTlixJv7gWo?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video1LinkAnterior").attr("href", ""); // video anterior
  $("#video1LinkSiguiente").attr("href", "video2.html"); // video siguiente

  $("#tituloVideo2").text("2. 5 PARADOJAS que harán que dudes de TODO");
  $("#urlVideo2").attr("src", "https://www.youtube.com/embed/G3HrMsdtm3s?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video2LinkAnterior").attr("href", "video1.html"); // video anterior
  $("#video2LinkSiguiente").attr("href", "video3.html"); // video siguiente

  $("#tituloVideo3").text("3. #2 Biografías científicas - Albert Einstein, rebelde y bohemio");
  $("#urlVideo3").attr("src", "https://www.youtube.com/embed/hDpcDoxJuQo?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video3LinkAnterior").attr("href", "video2.html"); // video anterior
  $("#video3LinkSiguiente").attr("href", "video4.html"); // video siguiente

  $("#tituloVideo4").text("4. Este vídeo SÍ te va a volar la cabeza: ¿Qué es el TIEMPO?");
  $("#urlVideo4").attr("src", "https://www.youtube.com/embed/mTh7PbyyA0I?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video4LinkAnterior").attr("href", "video3.html"); // video anterior
  $("#video4LinkSiguiente").attr("href", "video5.html"); // video siguiente

  $("#tituloVideo5").text("5. HOY SÍ que vas a entender los AGUJEROS NEGROS");
  $("#urlVideo5").attr("src", "https://www.youtube.com/embed/cs2kyXC-zDw?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video5LinkAnterior").attr("href", "video4.html"); // video anterior
  $("#video5LinkSiguiente").attr("href", "video6.html"); // video siguiente

  $("#tituloVideo6").text("6. HOY SÍ que vas a entender EL BOSÓN DE HIGGS");
  $("#urlVideo6").attr("src", "https://www.youtube.com/embed/m4kEFqun1Fo?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video6LinkAnterior").attr("href", "video5.html"); // video anterior
  $("#video6LinkSiguiente").attr("href", "video7.html"); // video siguiente

  $("#tituloVideo7").text("7. ¿Por que no se puede viajar más rápido que la luz?");
  $("#urlVideo7").attr("src", "https://www.youtube.com/embed/biaVwtKOlWI?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video7LinkAnterior").attr("href", "video6.html"); // video anterior
  $("#video7LinkSiguiente").attr("href", "video8.html"); // video siguiente

  $("#tituloVideo8").text("8. Así se hace el material MÁS CARO DEL MUNDO 💰64.000.000.000$/g💰 | #CERN");
  $("#urlVideo8").attr("src", "https://www.youtube.com/embed/P9mMYYq493c?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video8LinkAnterior").attr("href", "video7.html"); // video anterior
  $("#video8LinkSiguiente").attr("href", "video9.html"); // video siguiente

  $("#tituloVideo9").text("9. El CAOS gobierna el COSMOS");
  $("#urlVideo9").attr("src", "https://www.youtube.com/embed/8QpblRyur-o?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video9LinkAnterior").attr("href", "video8.html"); // video anterior
  $("#video9LinkSiguiente").attr("href", "video10.html"); // video siguiente

  $("#tituloVideo10").text("10. HOY SÍ que vas a entender la ENTROPÍA");
  $("#urlVideo10").attr("src", "https://www.youtube.com/embed/ttjM-dMPddY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video10LinkAnterior").attr("href", "video9.html"); // video anterior
  $("#video10LinkSiguiente").attr("href", "video11.html"); // video siguiente

  $("#tituloVideo11").text("11. HOY SÍ que vas a entender la mecánica cuántica");
  $("#urlVideo11").attr("src", "https://www.youtube.com/embed/7-TuaLHCZfM?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video11LinkAnterior").attr("href", "video10.html"); // video anterior
  $("#video11LinkSiguiente").attr("href", "video12.html"); // video siguiente

  $("#tituloVideo12").text("12. HOY SÍ que vas a entender el TIEMPO");
  $("#urlVideo12").attr("src", "https://www.youtube.com/embed/fkEY_mUTBDI?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video12LinkAnterior").attr("href", "video11.html"); // video anterior
  $("#video12LinkSiguiente").attr("href", "video13.html"); // video siguiente

  $("#tituloVideo13").text("13. Por qué se está enseñando MAL la física");
  $("#urlVideo13").attr("src", "https://www.youtube.com/embed/pZHrxKhB7VY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  $("#video13LinkAnterior").attr("href", "video12.html"); // video anterior
  $("#video13LinkSiguiente").attr("href", "video14.html"); // video siguiente

  // ACERCA DE
  $("#creadorVideo").text("Creador del video");
  $("#creadorVideoTexto1").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto2").text("Lernist.com no es el propietario de este video. Distribuimos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");

  $("#descripcionCursoVideo").text("Descripción del video");

  $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
  $("#tipsCursoTexto").text("Llevar este curso es todo un deleite, si gustas puedes tener una libreta para"
                            + " tomar uno que otro apunte, pero no es necesario. Es extremadamente entretenido"
                            + " y fácil de seguir. Recomendación: ponte comod@, preparate algún snack o comidita"
                            + " y disfruta, que papi Santaolalla, te va a enamorar de esta ciencia.");

  $("#descripcionCurso").text("Descripción del curso"); // Descripcion del curso
  $("#descripcionCursoTexto").text("Esta aventura te va a llevar a conocer y descubrir muchos fenómenos populares"
                                  + " de la Física. Javier Santaolalla los explica de una manera muy divertida y"
                                  + " entretenida, usando un lenguaje sencillo que hace que cualquiera pueda"
                                  + " entender. Con su carisma, animaciones y gráficos interactivos, el explica"
                                  + " con facilidad algunos conceptos e ideas fascinantes de nuestro mundo,"
                                  + " universo y existencia misma.");
  
  $("#duracionCurso").text("Duración y cantidad de videos del curso");
  $("#duracionCursoTexto").text("- 13 videos");

  // uso de variables para insertar link de canales y nombre de un creador - ejemplos:
  var Date = "Date un Vlog.";
  var DateLink = "https://www.youtube.com/c/DateunVlog/featured";
  
  // link al canal y nombre del creador del video
  $("#creadorVideoLink1").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo1Texto").text("-");

  // IMPORTANTE NOTA:
  // Si el espacio donde va la variable con el link al canal de youtube esta vacío,
  // causa un bug que interfiere con el slideToggle, pero se soluciona cuando se añade a todos
  $("#creadorVideoLink2").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo2Texto").text("-");

  $("#creadorVideoLink3").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo3Texto").text("-");

  $("#creadorVideoLink4").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo4Texto").text("-");

  $("#creadorVideoLink5").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo5Texto").text("-");

  $("#creadorVideoLink6").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo6Texto").text("-");

  $("#creadorVideoLink7").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo7Texto").text("-");

  $("#creadorVideoLink8").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo8Texto").text("-");

  $("#creadorVideoLink9").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo9Texto").text("-");

  $("#creadorVideoLink10").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo10Texto").text("-");

  $("#creadorVideoLink11").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo11Texto").text("-");

  $("#creadorVideoLink12").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo12Texto").text("-");

  $("#creadorVideoLink13").attr("href", DateLink).text(Date);
  // descripcion de cada video
  $("#descripcionCursoVideo13Texto").text("-");
  
  // CURSOS RELACIONADOS
  
  $("#recomendado-titulo").text("Otros cursos relacionados:");

  $("#recomendadoUno").attr("href", "/aprender/matematicas/algebra.html").text("Álgebra");
  $("#recomendadoDos").attr("href", "/aprender/matematicas/aritmetica.html").text("Aritmética");
  $("#recomendadoTres").attr("href", "/aprender/matematicas/cursos/abc-de-matematicas.html").text("ABC de Matemáticas");

  // ENAMORATE DE LA FISICA
  // ENAMORATE DE LA FISICA

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
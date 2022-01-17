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
  $("#VideosBotonPrevious").attr("src", "/i_temas/previous.png");
  $("#VideosBotonPreviousText").text("Anterior");
  $("#VideosBotonNext").attr("src", "/i_temas/next.png");
  $("#VideosBotonNextText").text("Siguiente");

  // DEFAULT DATA
  $("#leccionTitle").text("Jerarquía de las Operaciones");
  $("#tituloVideo").text("1. JERARQUÍA DE LAS OPERACIONES Super fácil - Para principiantes");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/XV5PiV2-91U?cc_lang_pref=es&cc_load_policy=1"); // url del video

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
  // DEFAULT DATA

  // TITULOS DE MENU ACORDION (lecciones y partes)
  $("#tituloAcordion1").text("");
  $("#tituloAcordion2").text("");
  $("#tituloAcordion3").text("");
  $("#tituloAcordion4").text("");
  $("#tituloAcordion5").text("");
  $("#tituloAcordion6").text("");
  $("#tituloAcordion7").text("");
  $("#tituloAcordion8").text("");
  $("#tituloAcordion9").text("");
  $("#tituloAcordion10").text("");
  $("#tituloAcordion11").text("");
  $("#tituloAcordion12").text("");
  $("#tituloAcordion13").text("");
  $("#tituloAcordion14").text("");
  $("#tituloAcordion15").text("");
  $("#tituloAcordion16").text("");
  $("#tituloAcordion17").text("");
  $("#tituloAcordion18").text("");

  // LINKS DE CADA VIDEO | MENU ACORDION
  // Jerarquia de las operaciones
  $("#videoAcordion1").text("1. ");
  $("#videoAcordion2").text("2. ");
  $("#videoAcordion3").text("3. ");
  $("#videoAcordion4").text("4. ");
  $("#videoAcordion5").text("5. ");
  // Leyes de los Signos
  $("#videoAcordion6").text("6. ");
  $("#videoAcordion7").text("7. ");
  // Fracciones
  $("#videoAcordion8").text("8. ");
  $("#videoAcordion9").text("9. ");
  $("#videoAcordion10").text("10. ");
  $("#videoAcordion11").text("11. ");
  $("#videoAcordion12").text("12. ");
  $("#videoAcordion13").text("13. ");
  $("#videoAcordion14").text("14. ");
  $("#videoAcordion15").text("15. ");
  $("#videoAcordion16").text("16. ");
  $("#videoAcordion17").text("17. ");
  // Numeros decimales
  $("#videoAcordion18").text("18. ");
  $("#videoAcordion19").text("19. ");
  $("#videoAcordion20").text("20. ");
  $("#videoAcordion21").text("21. ");
  $("#videoAcordion22").text("22. ");
  $("#videoAcordion23").text("23. ");
  $("#videoAcordion24").text("24. ");
  $("#videoAcordion25").text("25. ");
  // mcm y MCD
  $("#videoAcordion26").text("26. ");
  $("#videoAcordion27").text("27. ");
  $("#videoAcordion28").text("28. ");
  $("#videoAcordion29").text("29. ");
  // Potencias
  $("#videoAcordion30").text("30. ");
  $("#videoAcordion31").text("31. ");
  $("#videoAcordion32").text("32. ");
  // Raiz cuadrada
  $("#videoAcordion33").text("33. ");
  $("#videoAcordion34").text("34. ");
  $("#videoAcordion35").text("35. ");
  // Porcentajes
  $("#videoAcordion36").text("36. ");
  $("#videoAcordion37").text("37. ");
  $("#videoAcordion38").text("38. ");
  $("#videoAcordion39").text("39. ");
  $("#videoAcordion40").text("40. ");
  // Media, moda y mediana
  $("#videoAcordion41").text("41. ");
  $("#videoAcordion42").text("42. ");
  $("#videoAcordion43").text("43. ");
  // Probabilidad simple
  $("#videoAcordion44").text("44. ");
  $("#videoAcordion45").text("45. ");
  // Perimetro y Area
  $("#videoAcordion46").text("46. ");
  $("#videoAcordion47").text("47. ");
  $("#videoAcordion48").text("48. ");
  $("#videoAcordion49").text("49. ");
  $("#videoAcordion50").text("50. ");
  $("#videoAcordion51").text("51. ");
  $("#videoAcordion52").text("52. ");
  $("#videoAcordion53").text("53. ");
  $("#videoAcordion54").text("54. ");
  $("#videoAcordion55").text("55. ");
  // Volumenes
  $("#videoAcordion56").text("56. ");
  $("#videoAcordion57").text("57. ");
  $("#videoAcordion58").text("58. ");
  $("#videoAcordion59").text("59. ");
  // Angulos
  $("#videoAcordion60").text("60. ");
  $("#videoAcordion61").text("61. ");
  $("#videoAcordion62").text("62. ");
  // Lenguaje algebraico
  $("#videoAcordion63").text("63. ");
  $("#videoAcordion64").text("64. ");
  $("#videoAcordion65").text("65. ");
  // Terminos semejantes
  $("#videoAcordion66").text("66. ");
  $("#videoAcordion67").text("67. ");
  // Ecuaciones de primer grado
  $("#videoAcordion68").text("68. ");
  $("#videoAcordion69").text("69. ");
  $("#videoAcordion70").text("70. ");
  // Plano cartesiano y graficar
  $("#videoAcordion71").text("71. ");
  $("#videoAcordion72").text("72. ");
  $("#videoAcordion73").text("73. ");
  $("#videoAcordion74").text("74. ");
  // Teorema de Pitagoras
  $("#videoAcordion75").text("75. ");
  $("#videoAcordion76").text("76. ");
  $("#videoAcordion77").text("77. ");
  $("#videoAcordion78").text("78. ");
  $("#videoAcordion79").text("79. ");
  $("#videoAcordion80").text("80. ");
  $("#videoAcordion81").text("81. ");

  $("#videoAcordion82").text("80. ");
  $("#videoAcordion83").text("81. ");
  $("#videoAcordion84").text("80. ");
  $("#videoAcordion85").text("81. ");
  $("#videoAcordion86").text("80. ");
  $("#videoAcordion87").text("81. ");
  $("#videoAcordion88").text("80. ");
  $("#videoAcordion89").text("81. ");
  $("#videoAcordion90").text("80. ");
  $("#videoAcordion91").text("81. ");
  $("#videoAcordion92").text("80. ");
  $("#videoAcordion93").text("81. ");
  $("#videoAcordion94").text("80. ");
  $("#videoAcordion95").text("81. ");
  $("#videoAcordion96").text("80. ");
  $("#videoAcordion97").text("81. ");
  $("#videoAcordion98").text("80. ");
  $("#videoAcordion99").text("81. ");
  $("#videoAcordion100").text("80. ");

  // ACERCA DE
  $("#creadorVideo").text("Creador del video");
  $("#creadorVideoTexto").prepend('El video fue creado por el canal de youtube ');
  $("#creadorVideoTexto").append("Lernist.com no es el propietario de este video. Distribuímos este video mediante"
                                + " la herramienta pública de Youtube que permite insertar videos de la plataforma en sitios web"
                                + "  externos.");

  $("#descripcionCursoVideo").text("Descripción del video");

  $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
  $("#tipsCursoTexto").text("En partes del curso , notarás que dos videos cubren el mismo tema o"
  + " concepto, esto es a propósito, para darte a ti la elección de tu preferencia, además que"
  + " así tienes más opciones de estudio por si un tema te parece algo complicado y necesitas"
  + " verlo un poco más.");

  $("#descripcionCurso").prepend("Descripción del curso"); // Descripcion del curso
  $("#descripcionCursoTexto").text("Este curso fue diseñado para ser el repaso definitivo de matemáticas."
  + " Ya sea que vas a volver a la escuela, a entrar a la universidad, o ya eres grande"
  + " y no recuerdas prácticamente nada de las matemáticas, con este curso tu lograrás"
  + " recordar y dominar los conceptos básicos de este bello y complejo mundo. Aquí"
  + " encontrarás las absolutas bases mátematicas que debes conocer tanto si deseas irte"
  + " a temas más avanzados como por mera cultura general.");
  
  $("#duracionCurso").text("Duración y cantidad de videos del curso");
  $("#duracionCursoTexto").text("- 81 videos");

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
  $("#leccionTitle").text("Jerarquía de las Operaciones");
  $("#tituloVideo").text("1. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/XV5PiV2-91U?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "primerVideo()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo2()"); // video siguiente

  // IMPORTANTE NOTA:
  // Si el espacio donde va la variable con el link al canal de youtube esta vacío,
  // causa un bug que interfiere con el slideToggle, pero se soluciona cuando se añade a todos

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo2() {
  $("#leccionTitle").text("Jerarquía de las Operaciones");
  $("#tituloVideo").text("2. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/UbqjPCAjUfg?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo1()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo3()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo3() {
  $("#leccionTitle").text("Jerarquía de las Operaciones");
  $("#tituloVideo").text("3. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/8XuleS2zF9w?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo2()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo4()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", nzqLink).text(nzq);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}
// editar informacion
function datosVideo4() {
  $("#leccionTitle").text("Jerarquía de las Operaciones");
  $("#tituloVideo").text("4. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/lTpbx63UK6M?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo3()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo5()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo5() {
  $("#leccionTitle").text("Jerarquía de las Operaciones");
  $("#tituloVideo").text("5. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/jdqwzCL_PG0?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo4()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo6()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo6() {
  $("#leccionTitle").text("Leyes de los Signos");
  $("#tituloVideo").text("6. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/6f40XK7nssY?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo5()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo7()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo7() {
  $("#leccionTitle").text("Leyes de los Signos");
  $("#tituloVideo").text("7. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/W2GWo8Xt560?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo6()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo8()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", MarceMLink).text(MarceM);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo8() {
  $("#leccionTitle").text("Fracciones");
  $("#tituloVideo").text("8. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/LgMptyzudXU?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo7()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo9()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo9() {
  $("#leccionTitle").text("Fracciones");
  $("#tituloVideo").text("9. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/7Xvlv3SCA4c?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo8()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo10()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo10() {
  $("#leccionTitle").text("Fracciones");
  $("#tituloVideo").text("10. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/5U2ei-Cl0pc?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo9()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo11()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", CesarMGSLink).text(CesarMGS);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo11() {
  $("#leccionTitle").text("Fracciones");
  $("#tituloVideo").text("11. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/rSLuXOTdje8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo10()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo12()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", SusiPLink).text(SusiP);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo12() {
  $("#leccionTitle").text("Fracciones");
  $("#tituloVideo").text("12. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/3F7nkd8o2E8?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo11()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo13()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo13() {
  $("#leccionTitle").text("Fracciones");
  $("#tituloVideo").text("13. ");
  $("#urlVideo").attr("src", "https://www.youtube.com/embed/3HNyVbBNGQQ?cc_lang_pref=es&cc_load_policy=1"); // url del video
  // botones
  $("#videoLinkAnterior").attr("onclick", "datosVideo12()"); // video anterior
  $("#videoLinkSiguiente").attr("onclick", "datosVideo14()"); // video siguiente

  // link al canal y nombre del creador del video
  $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
  // descripcion de cada video
  $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo14() {
    $("#leccionTitle").text("Fracciones");
    $("#tituloVideo").text("14. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Jl-S-6xXPQA?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo13()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo15()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
  }

function datosVideo15() {
    $("#leccionTitle").text("Fracciones");
    $("#tituloVideo").text("15. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/osePKL39EBo?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo14()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo16()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo16() {
    $("#leccionTitle").text("Fracciones");
    $("#tituloVideo").text("16. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/YGXURDXHfGI?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo15()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo17()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo17() {
    $("#leccionTitle").text("Fracciones");
    $("#tituloVideo").text("17. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/nuKfLxz8PXc?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo16()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo18()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo18() {
    $("#leccionTitle").text("Números Decimales");
    $("#tituloVideo").text("18. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/fae6X1jg3nE?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo17()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo19()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo19() {
    $("#leccionTitle").text("Números Decimales");
    $("#tituloVideo").text("19. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/bVFExqCCwfE?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo18()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo20()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo20() {
    $("#leccionTitle").text("Números Decimales");
    $("#tituloVideo").text("20. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/9V3S9PwBpcw?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo19()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo21()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ApprendeMLink).text(AprendeM);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo21() {
    $("#leccionTitle").text("Números Decimales");
    $("#tituloVideo").text("21. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/y_F5eXD8Cb0?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo20()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo22()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo22() {
    $("#leccionTitle").text("Números Decimales");
    $("#tituloVideo").text("22. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/4sXZ6dtiamU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo21()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo23()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo23() {
    $("#leccionTitle").text("Números Decimales");
    $("#tituloVideo").text("23. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/pu0ztG2gWD4?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo22()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo24()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo24() {
    $("#leccionTitle").text("Números Decimales");
    $("#tituloVideo").text("24. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/1F0BysuI_K8?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo23()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo25()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo25() {
    $("#leccionTitle").text("Números Decimales");
    $("#tituloVideo").text("25. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/shXj-YCWWeM?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo24()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo26()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo26() {
    $("#leccionTitle").text("Mínimo común multiplo y Máximo común divisor");
    $("#tituloVideo").text("26. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/NRJdBgOEjdI?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo25()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo27()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo27() {
    $("#leccionTitle").text("Mínimo común multiplo y Máximo común divisor");
    $("#tituloVideo").text("27. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/ADcPfyt6LvY?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo26()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo28()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", SusiPLink).text(SusiP);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo28() {
    $("#leccionTitle").text("Mínimo común multiplo y Máximo común divisor");
    $("#tituloVideo").text("28. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/JoHfq8hswmY?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo27()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo29()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo29() {
    $("#leccionTitle").text("Mínimo común multiplo y Máximo común divisor");
    $("#tituloVideo").text("29. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/WHUQSkaVXd4?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo28()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo30()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", math2Link).text(math2);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo30() {
    $("#leccionTitle").text("Potencias");
    $("#tituloVideo").text("30. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/-K0ZSm9lPeY?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo29()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo31()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo31() {
    $("#leccionTitle").text("Potencias");
    $("#tituloVideo").text("31. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/vwzZEB0SzCI?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo30()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo32()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo32() {
    $("#leccionTitle").text("Potencias");
    $("#tituloVideo").text("32. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/mpwEQ3usaEc?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo31()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo33()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo33() {
    $("#leccionTitle").text("Raiz cuadrada");
    $("#tituloVideo").text("33. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/gPV5VqQ3Ajg?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo32()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo34()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo34() {
    $("#leccionTitle").text("Raiz cuadrada");
    $("#tituloVideo").text("34. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ua9_FIARcs0?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo33()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo35()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", aprendopolisLink).text(aprendopolis);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo35() {
    $("#leccionTitle").text("Raiz cuadrada");
    $("#tituloVideo").text("35. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/g3c2ExA_8yU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo34()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo36()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", math2Link).text(math2);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo36() {
    $("#leccionTitle").text("Porcentajes");
    $("#tituloVideo").text("36. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/RE3XoDORMys?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo35()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo37()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo37() {
    $("#leccionTitle").text("Porcentajes");
    $("#tituloVideo").text("37. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/PjXpBwI6P0M?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo36()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo38()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo38() {
    $("#leccionTitle").text("Porcentajes");
    $("#tituloVideo").text("38. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/7PauGP5HVC8?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo37()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo39()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo39() {
    $("#leccionTitle").text("Porcentajes");
    $("#tituloVideo").text("39. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/h8zEL6ya4ws?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo38()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo40()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo40() {
    $("#leccionTitle").text("Porcentajes");
    $("#tituloVideo").text("40. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/PId8BE7N_EI?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo39()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo41()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo41() {
    $("#leccionTitle").text("Media, moda y mediana");
    $("#tituloVideo").text("41. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/0DA7Wtz1ddg?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo40()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo42()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo42() {
    $("#leccionTitle").text("Media, moda y mediana");
    $("#tituloVideo").text("42. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/5bZXpfxwHqk?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo41()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo43()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo43() {
    $("#leccionTitle").text("Media, moda y mediana");
    $("#tituloVideo").text("43. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/fOuRqk1nzgY?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo42()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo44()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo44() {
    $("#leccionTitle").text("Probabilidad simple");
    $("#tituloVideo").text("44. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/WeeEE8o1aqM?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo43()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo45()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo45() {
    $("#leccionTitle").text("Probabilidad simple");
    $("#tituloVideo").text("45. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/xYco67hkECs?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo44()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo46()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo46() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("46. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/wYNvY_bOGdc?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo45()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo47()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo47() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("47. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/-FvTH9sdL3Q?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo46()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo48()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", aula365Link).text(Aula365);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo48() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("48. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/6NQub5CEe-Y?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo47()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo49()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ingeDLink).text(ingeD);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo49() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("49. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/S-P4y9paTPc?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo48()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo50()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo50() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("50. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/BPl5ecBvsiY?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo49()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo51()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo51() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("51. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/0Dt2JD2qeSE?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo50()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo52()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo52() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("52. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/FNN4PCIM7i0?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo51()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo53()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo53() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("53. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/GUAA75tXiko?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo52()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo54()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo54() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("54. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/ybFRxtTqgA0?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo53()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo55()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo55() {
    $("#leccionTitle").text("Perímetro y Area de figuras básicas");
    $("#tituloVideo").text("55. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/5z3h53xQVq0?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo54()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo56()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo56() {
    $("#leccionTitle").text("Volúmenes de prismas principales");
    $("#tituloVideo").text("56. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/64weeCZL3yc?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo55()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo57()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", acervoLink).text(acervo);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo57() {
    $("#leccionTitle").text("Volúmenes de prismas principales");
    $("#tituloVideo").text("57. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/8rP37Lmd4Vs?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo56()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo58()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo58() {
    $("#leccionTitle").text("Volúmenes de prismas principales");
    $("#tituloVideo").text("58. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/N50Q0ZctD2U?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo57()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo59()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo59() {
    $("#leccionTitle").text("Volúmenes de prismas principales");
    $("#tituloVideo").text("59. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/VpOKrHNLcEM?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo58()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo60()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo60() {
    $("#leccionTitle").text("Ángulos y figuras");
    $("#tituloVideo").text("60. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/-zLWJYY42GU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo59()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo61()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo61() {
    $("#leccionTitle").text("Ángulos y figuras");
    $("#tituloVideo").text("61. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/4pGyx2PrfgM?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo60()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo62()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", happyLELink).text(happyLE);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo62() {
    $("#leccionTitle").text("Ángulos y figuras");
    $("#tituloVideo").text("62. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/uMJDpmiIboo?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo61()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo63()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo63() {
    $("#leccionTitle").text("Lenguaje Algebraico");
    $("#tituloVideo").text("63. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/UNWFLuUfiX4?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo62()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo64()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo64() {
    $("#leccionTitle").text("Lenguaje Algebraico");
    $("#tituloVideo").text("64. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/DV3C_RawfBg?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo63()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo65()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo65() {
    $("#leccionTitle").text("Lenguaje Algebraico");
    $("#tituloVideo").text("65. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/9MG3bGmIyVA?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo64()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo66()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", rubenSLink).text(rubenS);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo66() {
    $("#leccionTitle").text("Términos semejantes");
    $("#tituloVideo").text("66. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/cH_NPAETuvA?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo65()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo67()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo67() {
    $("#leccionTitle").text("Términos semejantes");
    $("#tituloVideo").text("67. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/FDZ18L6kooQ?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo66()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo68()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo68() {
    $("#leccionTitle").text("Ecuaciones de primer grado");
    $("#tituloVideo").text("68. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/IHblqjW8RY8?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo67()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo69()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo69() {
    $("#leccionTitle").text("Ecuaciones de primer grado");
    $("#tituloVideo").text("69. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/4AixPIIV05E?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo68()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo70()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo70() {
    $("#leccionTitle").text("Ecuaciones de primer grado");
    $("#tituloVideo").text("70. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/kRGwE6OKN9M?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo69()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo71()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielCLink);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo71() {
    $("#leccionTitle").text("Plano cartesiano y gráficar ecuaciones");
    $("#tituloVideo").text("71. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/0cUkAd2o1yw?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo70()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo72()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo72() {
    $("#leccionTitle").text("Plano cartesiano y gráficar ecuaciones");
    $("#tituloVideo").text("72. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/QTrE4x5DPZ8?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo71()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo73()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo73() {
    $("#leccionTitle").text("Plano cartesiano y gráficar ecuaciones");
    $("#tituloVideo").text("73. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/3eKnzg91s_E?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo72()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo74()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", lauraBLink).text(lauraB);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo74() {
    $("#leccionTitle").text("Plano cartesiano y gráficar ecuaciones");
    $("#tituloVideo").text("74. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/PD45s3U9WA0?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo73()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo75()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo75() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("75. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/XfVWlO3sRw0?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo74()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo76()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo76() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("76. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/eTEBvBIz8Ok?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo75()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo77()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", DanielCLink).text(DanielC);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo77() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("77. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/w6nh99v3r4A?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo76()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo78()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", SusiPLink).text(SusiP);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo78() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("78. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/FqUxTHo_hRc?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo77()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo79()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", acervoLink).text(acervo);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo79() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("79. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/2UbdPiqAiHY?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo78()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo80()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo80() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("80. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/CJ8bpjhwA2k?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo79()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo81()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo81() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("81. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo80()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo81()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo82() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("82. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo81()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo83()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo83() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("83. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo82()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo84()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo84() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("84. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo83()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo85()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo85() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("85. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo84()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo86()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo86() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("86. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo85()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo87()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo87() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("87. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo86()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo88()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo88() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("88. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo87()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo89()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo89() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("89. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo88()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo90()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo90() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("90. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo89()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo91()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo91() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("91. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo90()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo92()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo92() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("92. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo91()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo93()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo93() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("93. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo92()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo94()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo94() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("94. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo93()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo95()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo95() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("95. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo94()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo96()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo96() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("96. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo95()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo97()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo97() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("97. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo96()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo98()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo98() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("98. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo97()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo99()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo99() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("99. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo98()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "datosVideo100()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}

function datosVideo100() {
    $("#leccionTitle").text("Teorema de Pitágoras");
    $("#tituloVideo").text("100. ");
    $("#urlVideo").attr("src", "https://www.youtube.com/embed/Ev4zMeZGwgU?cc_lang_pref=es&cc_load_policy=1"); // url del video
    // botones
    $("#videoLinkAnterior").attr("onclick", "datosVideo80()"); // video anterior
    $("#videoLinkSiguiente").attr("onclick", "ultimoVideo()"); // video siguiente

    // link al canal y nombre del creador del video
    $("#creadorVideoLink").attr("href", ProfeALink).text(ProfeA);
    // descripcion de cada video
    $("#descripcionCursoVideoTexto").text("-");
}
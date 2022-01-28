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

$(document).ready(function() {

    // ELEMENTOS MADRE
    $(".datos-video").hide();
    $("#instrucciones").hide();
  
    // ACERCA DE
    $("#creadorCurso").text("Creador del video");
    $("#creadorCursoTexto").prepend('El curso forma parte del servicio ');
    $("#creadorCursoTexto").append("Lernist.com no es el propietario de este material."
    + " Enlistamos este material en nuestra recopilación de cursos y otros programas educativos"
    + " a lo largo de internet para facilitar a las personas a encontrar los"
    + " mejores materiales educativos en un único lugar.");
  
    $("#descripcionCurso").prepend("Descripción del curso"); // Descripcion del curso
  
    $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
    $("#tipsCursoTexto").text("Recomendamos que tomes notas en base a lo que"
    + " comprendas, ya que te ayudará a entender los conceptos mejor y podrás revisarlas"
    + " cada vez que necesites. De igual manera, estar en un lugar cómodo y sin"
    + " distracciones es lo ideal. Puedes ver las lecciones las veces que necesites para que"
    + " comprendas bien el tema en cuestión, aquí no tienes presión de tiempo o preocuparte"
    + " porque la/el maestr@ borre el pizarrón, simplemente le regresas o comienzas denuevo.")
  
    // ANIMACION PARA MENU VIDEO-INFO
    $(".video-info-title").click(function() {
      $(".datos-video").slideToggle(400);
      $(".infoBtnMas").toggle();
      $(".infoBtnMenos").toggle();
    });
    // ANIMACION PARA MENU INSTRUCCIONES
    $("#curso-instrucciones-title").click(function() {
      $("#instrucciones").slideToggle(400);
      $("#instruccionesBtnMas").toggle();
      $("#instruccionesBtnMenos").toggle();
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
  });
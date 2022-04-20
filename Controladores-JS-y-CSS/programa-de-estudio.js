// INDICE
// ELEMENTOS MADRE: linea 16
// 

$(document).ready(function() {

    // ELEMENTOS MADRE
    $(".acordionTabla").hide();
    $(".acordionNormal").hide();
    $("#datos-video").show();
  
    // ACERCA DE
    $("#creadorCurso").text("Creador del curso");
    $("#creadorCursoYoutubeTexto").prepend('Los videos fueron creados por el canal de youtube ');
    $("#creadorCursoYoutubeTexto").append("Lernist.com no es el propietario de estos videos."
    + " Distribuímos estos videos mediante la herramienta pública de Youtube que permite insertar"
    + " videos de la plataforma en sitios web externos.");
  
    $("#creadorCursoExternoTexto").prepend('El curso forma parte del servicio ');
    $("#creadorCursoExternoTexto").append("Lernist.com no es el propietario de este material."
    + " Enlistamos este material en nuestra recopilación de cursos y otros programas educativos"
    + " a lo largo de internet para facilitar a las personas a encontrar los"
    + " mejores materiales educativos en un único lugar.");
  
    $("#descripcionCurso").prepend("Descripción del curso"); // Descripcion del curso
  
    $("#tipsCurso").text("Tips para el curso"); // Tips para el curso
    $("#tipsCursoYoutubeTexto").text("El curso lo puedes tomar directamente desde aquí, y funciona bien tanto"
    + " en celular, tablet o computadora. En caso de que tengas tu cuenta"
    + " de youtube iniciada en el navegador, también permitirá que tu progreso"
    + " quede guardado y se muestre. Recomendamos que tomes notas en base a lo que"
    + " comprendas, ya que te ayudará a entender los conceptos mejor y podrás revisarlas"
    + " cada vez que necesites. De igual manera, estar en un lugar cómodo y sin"
    + " distracciones es lo ideal. Puedes ver las lecciones las veces que necesites para que"
    + " comprendas bien el tema en cuestión, aquí no tienes presión de tiempo o preocuparte"
    + " porque la/el maestr@ borre el pizarrón, simplemente le regresas o comienzas denuevo.")
    
    $("#tipsCursoExternoTexto").text("Recomendamos que tomes notas en base a lo que"
    + " comprendas, ya que te ayudará a entender los conceptos mejor y podrás revisarlas"
    + " cada vez que necesites. De igual manera, estar en un lugar cómodo y sin"
    + " distracciones es lo ideal. Puedes ver las lecciones las veces que necesites para que"
    + " comprendas bien el tema en cuestión, aquí no tienes presión de tiempo o preocuparte"
    + " porque la/el maestr@ borre el pizarrón, simplemente le regresas o comienzas denuevo.")
  
    // ANIMACION PARA MENU VIDEO-INFO
    $("#video-info-title").click(function() {
      $("#datos-video").slideToggle(400);
      $("#infoBtnMas").toggle();
      $("#infoBtnMenos").toggle();
    });
    // ANIMACION PARA MENU INSTRUCCIONES
    $("#curso-instrucciones-title").click(function() {
      $("#curso-instrucciones-content").slideToggle(400);
      $("#instruccionesBtnMas").toggle();
      $("#instruccionesBtnMenos").toggle();
    });
    // ANIMACION PARA MENU NIVELES
    $("#nivel1-title").click(function() {
        $("#nivel1").slideToggle(400);
        $("#nivel1BtnMas").toggle();
        $("#nivel1BtnMenos").toggle();
    });

    $("#nivel2-title").click(function() {
        $("#nivel2").slideToggle(400);
        $("#nivel2BtnMas").toggle();
        $("#nivel2BtnMenos").toggle();
    });

    $("#nivel3-title").click(function() {
        $("#nivel3").slideToggle(400);
        $("#nivel3BtnMas").toggle();
        $("#nivel3BtnMenos").toggle();
    });
    // REFERENCIAS
    $("#referencias-title").click(function() {
        $("#referencias").slideToggle(400);
        $("#referenciasBtnMas").toggle();
        $("#referenciasBtnMenos").toggle();
    });
});
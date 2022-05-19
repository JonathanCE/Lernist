// INDICE
// ELEMENTOS MADRE: linea 16
// 

$(document).ready(function() {

    // ELEMENTOS MADRE
    $(".acordionTabla").hide();
    $(".acordionNormal").hide();
    //$("#info-carrera-content").show();
  
    // ANIMACION PARA MENU VIDEO-INFO
    $("#info-carrera").click(function() {
      $("#info-carrera-content").slideToggle(400);
      $("#infoBtnMas").toggle();
      $("#infoBtnMenos").toggle();
    });
    // ANIMACION PARA MENU INSTRUCCIONES
    $("#carrera-recursos").click(function() {
      $("#carrera-recursos-content").slideToggle(400);
      $("#carrera-recursosBtnMas").toggle();
      $("#carrera-recursosBtnMenos").toggle();
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
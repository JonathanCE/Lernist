function verificarRespuesta() {
    var total = 20;
    var puntos = 0;

    // Obtener formulario y variable de respuestas
    var myForm = document.forms["quizForm"];
    var respuestas = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"];

    // Validacion
    for(var i = 1; i <= total; i++) {
        if(myForm["p" + i].value === null || myForm["p" + i].value === '') {
            alert('Por favor responde la pregunta ' + i);
            return false;
        }
        else {
            if(myForm["p" + i].value === respuestas[i - 1]) {
                puntos++;
            }
        }
    }

    // Mostrar resultados
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<h3>Obtuviste '+puntos+' de '+total+' puntos</h3>';

    return false;
}
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  } 

const lecciones = document.getElementsByClassName ('leccion');

  for (i = 0; i<lecciones.length; i++) {
    lecciones[i].addEventListener('click', function(){
      this.classList.toggle('active')
    })
  }
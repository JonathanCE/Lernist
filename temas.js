function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  } 

const subtemas = document.getElementsByClassName ('subtema');

  for (i = 0; i<subtemas.length; i++) {
    subtemas[i].addEventListener('click', function(){
      this.classList.toggle('active')
    })
  }
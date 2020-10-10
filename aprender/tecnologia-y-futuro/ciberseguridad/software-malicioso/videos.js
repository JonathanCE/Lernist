function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  } 


const temario = document.getElementsByClassName ('contentBox');

for (i = 0; i<temario.length; i++) {
  temario[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}
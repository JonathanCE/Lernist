const topBtn = document.querySelector('#topBtn');

window.onscroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        topBtn.style.display = 'block';
    }
    else {
        topBtn.style.display = 'none';
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function hide() {
    $(".menu").fadeOut();
}

function todo() {
    hide();
    $(".menu").fadeIn();
};

function comidas() {
    hide();
    $(".comidas").fadeIn();
};

function bebidas() {
    hide();
    $(".bebidas").fadeIn();
};
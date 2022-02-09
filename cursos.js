function todos() {
    $(".matematicas").fadeIn();
    $(".fisica").fadeIn();
    $(".programacion").fadeIn();
    $(".inversiones").fadeIn();
    $(".quimica").fadeIn();
    $(".electronica").fadeIn();
};

function matematicas() {
    $(".matematicas").fadeIn();
    $(".fisica").fadeOut();
    $(".programacion").fadeOut();
    $(".inversiones").fadeOut();
    $(".quimica").fadeOut();
    $(".electronica").fadeOut();
};

function fisica() {
    $(".matematicas").fadeOut();
    $(".fisica").fadeIn();
    $(".programacion").fadeOut();
    $(".inversiones").fadeOut();
    $(".quimica").fadeOut();
    $(".electronica").fadeOut();
};

function programacion() {
    $(".matematicas").fadeOut();
    $(".fisica").fadeOut();
    $(".programacion").fadeIn();
    $(".inversiones").fadeOut();
    $(".quimica").fadeOut();
    $(".electronica").fadeOut();
};

function inversiones() {
    $(".matematicas").fadeOut();
    $(".fisica").fadeOut();
    $(".programacion").fadeOut();
    $(".inversiones").fadeIn();
    $(".quimica").fadeOut();
    $(".electronica").fadeOut();
};

function quimica() {
    $(".matematicas").fadeOut();
    $(".fisica").fadeOut();
    $(".programacion").fadeOut();
    $(".inversiones").fadeOut();
    $(".quimica").fadeIn();
    $(".electronica").fadeOut();
};

function electronica() {
    $(".matematicas").fadeOut();
    $(".fisica").fadeOut();
    $(".programacion").fadeOut();
    $(".inversiones").fadeOut();
    $(".quimica").fadeOut();
    $(".electronica").fadeIn();
};
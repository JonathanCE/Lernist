const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Define la cantidad de slides que se muestran
    // y el separador
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    //breakpoints, para hacer el swiper responsive
    breakpoints: {
        370: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});  
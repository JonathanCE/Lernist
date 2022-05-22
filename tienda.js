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
        470: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        670: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 6,
            spaceBetween: 20,
        }
    },

    autoplay: {
        delay: 6000,
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
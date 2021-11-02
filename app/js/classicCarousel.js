var swiper = new Swiper(".classicCarousel__swiper", {
    spaceBetween: 0,
    navigation: {
      nextEl: ".kostya-carousel__swiper-button-next",
      prevEl: ".kostya-carousel__swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
setTimeout(() => {
  new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
}, 100);

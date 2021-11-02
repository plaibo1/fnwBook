function createKostyaSlider() {
  var swiper = new Swiper(".kostya-carousel__swiper", {
    spaceBetween: -1,
    navigation: {
      nextEl: ".kostya-carousel__swiper-button-next",
      prevEl: ".kostya-carousel__swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
});
}

createKostyaSlider();

// window.addEventListener('pageUpdate', function() {
//   createKostyaSlider();
// })
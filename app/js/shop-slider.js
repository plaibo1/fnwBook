function createShopSlider() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  })
}
// createShopSlider()

// window.addEventListener('pageUpdate', function() {
//   console.log('sad')
//   createShopSlider()
// })

(function () {
  let done = false;
  let interval = null;
   function main() {
      if (window.Swiper !== undefined) return;
      createShopSlider()
      done = true;
   }


   interval = setInterval(() => {
    if (done && interval) return clearInterval(interval);
    main();
  }, 300)
})()
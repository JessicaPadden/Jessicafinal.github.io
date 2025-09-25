
  //initialising swiper
  const swiperReviews = new Swiper('.review-swiper', {
  loop: true,
  slidesPerView:'auto',
  centeredSlides: 'auto',
  speed: 700,
  spaceBetween: 20,
  grabCursor: true,
  effect:'coverflow',
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  coverflowEffec:{
    rotate:-90,
    depth: 500,
    stretch:0,
    modifier:1,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


  autoplay:{
    delay: 8000,
    disableOnInteraction: true,
  }




});










 




















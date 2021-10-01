var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 1000,
      modifier: 1,
      slideShadows: false,
    },
    loop: true,
      autoplay: {
        delay:6800,
        disableOnInteraction: false,
      },
  });
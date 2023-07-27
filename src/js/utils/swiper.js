import Swiper from 'swiper/swiper-bundle.min.mjs';
import 'swiper/swiper-bundle.css';
import 'swiper/modules/pagination.min.css';

new Swiper('.swiper', {
  // пагінація по булетам
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  // відстань між слайдами
  spaceBetween: 10,

  // -------------автоматичне відтворення з затримкою 5сек-------------
  autoplay: {
    delay: 5000,
    // вимкнення зупинки автовідтворення
    disableOnInteraction: false,
  },

  // ручка при наведенні
  grabCursor: true,
  // //   безкінечне гортання
  loop: true,
  // //   гортання мишкою
  mousewheel: {
    invert: true,
  },
  // к-сть показаних слайдів на сторінку
  slidesPerView: 1,
  // к-сть слайдів які пролистуються
  slidesPerGroup: 1,
});

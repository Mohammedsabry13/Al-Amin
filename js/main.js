/*
  Copyright (c) 2024 Mohammed Sabry
  Licensed under the MIT License.
  https://github.com/Mohammedsabry13
*/

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  center: true,
  rtl: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

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

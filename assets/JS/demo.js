// CAROUSEL__FEEDBACK
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3,
  loop: false,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  rewind: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

// BACK__TO__TOP
$(document).ready(function () {
  $("#back-to-top").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(document).scroll(function () {
    var top = $(window).scrollTop();
    if (top == 0) {
      $("#back-to-top").fadeOut();
    } else {
      $("#back-to-top").fadeIn();
    }
  });
});

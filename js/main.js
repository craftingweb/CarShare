$(function () {
  $(".top__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $(".reviews__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});

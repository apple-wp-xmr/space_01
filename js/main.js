$(function () {
  $('.slider__box').slick({
    prevArrow:
      "<img class='slider__arrow slider__arrow-left' src='images/arrow__left.svg' alt='arrow left' />",
    nextArrow:
      "<img class='slider__arrow slider__arrow-right' src='images/arrow__right.svg' alt='arrow right' />",
    variableWidth: true,
    slidesToShow: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $('.menu-btn').on('click', function name() {
    $('.menu__list').toggleClass('active');
  });
});

$(document).ready(() => {
  $('.multiple-items').slick({
    autoplay: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    variableWidth: false
  });
});

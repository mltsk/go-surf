$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" width="25" height="21" src="img/arrows-left.svg" alt="Previous slide"></img>',
        nextArrow: '<img class="slider__arrows slider__arrows--right" width="25" height="21" src="img/arrows-right.svg" alt="Next slide"></img>',
        asNavFor: '.slider-dots'
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        focusOnSelect: true
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" width="25" height="21" src="img/arrows-left.svg" alt="Previous slide"></img>',
        nextArrow: '<img class="slider__arrows slider__arrows--right" width="25" height="21" src="img/arrows-right.svg" alt="Next slide"></img>',
        asNavFor: '.slider-map'
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });

    $('.travel-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" width="25" height="21" src="img/arrows-left.svg" alt="Previous slide"></img>',
        nextArrow: '<img class="slider__arrows slider__arrows--right" width="25" height="21" src="img/arrows-right.svg" alt="Next slide"></img>',
    });

    $('.sleep-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" width="25" height="21" src="img/arrows-left.svg" alt="Previous slide"></img>',
        nextArrow: '<img class="slider__arrows slider__arrows--right" width="25" height="21" src="img/arrows-right.svg" alt="Next slide"></img>',
    });
  
});
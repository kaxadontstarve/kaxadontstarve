
new Swiper('.reviews__slider-body', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,

    },
    effect: 'coverflow',
    gradCursor: 'true',
    centeredSlides: 'true',
    loop: "",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
        , slideShadows: false,
    },



});
new Swiper('.Item__slider', {
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },

    pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,


});
$(document).ready(function () {
    $('.header__button-items,.items__button').click(function () {
        $('main').addClass('disabled');
        $('.Items-Page').addClass('show');
    })
    $('.menu__burger').click(function () {
        $('.menu__burger').toggleClass('active');
        $('.menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.menu__link').click(function () {
        $('.menu__burger').removeClass('active');
        $('.menu__list').removeClass('active');
        $('body').removeClass('lock');
        $('main').removeClass('disabled');
        $('.Items-page').removeClass('show');
        $('.Item').removeClass('show');
    })
    $('.Items-Page__button-back, .logo').click(function () {
        $('main').removeClass('disabled');
        $('.Items-page').removeClass('show');
        $('.Item').removeClass('show');
    })
    $('.choose__button-items,.Item__button-back').click(function () {
        $('main').addClass('disabled');
        $('.Items-page').addClass('show');
        $('.Item').removeClass('show');
    })
    $('.Items-Page__button,.Items-Page__descr,.Items-Page__img,.item-name,.Item__also-img').click(function () {
        $('main').addClass('disabled');
        $('.Items-page').removeClass('show');
        $('.Item').addClass('show');
    })
    $('.input1').click(function () {
        $('.span1').addClass('disabled');
    })
    $('.input2').click(function () {
        $('.span2').addClass('disabled');
    })
    $('.contact__agree span').click(function () {
        $('.contact__agree').toggleClass('active');
        $('.contact__agree').removeClass('error');
    })
    $('.contact__button').click(function () {
        if (!$('.contact__agree').hasClass('active')) {
            $('.contact__agree').addClass('error');
        }
        if ($('.input2').val() == 'My email is ' || $('.input2').val() == 'My email is' || $('.input1').val() == '') {
            $('.span2').removeClass('disabled');
        }
        if ($('.input1').val() == 'My Name is ' || $('.input1').val() == 'My Name is' || $('.input1').val() == '') {
            $('.span1').removeClass('disabled');
        }
    })

    $(document).mouseup(function (e) {
        var container = $(".accordion");
        if (container.has(e.target).length === 0) {
            $(".accordion-collapse").removeClass('show')
        }
    });

})


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
    centeredSlides: 'true',
    slidesPerView: 'auto',

    braeckpoints: {
        318: {
            spaceBetween: 30,
            centeredSlides: 'false',
            slidesPerView: 'auto',
        },
        768: {
            spaceBetween: -30,
            effect: 'coverflow',
            gradCursor: 'true',

            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5
                , slideShadows: false,
            },
        }
    }


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

    $('.menu__burger').click(function () {
        $('.menu__burger').toggleClass('active');
        $('.menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.menu__link').click(function () {
        $('.menu__burger').removeClass('active');
        $('.menu__list').removeClass('active');
        $('body').removeClass('lock');
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

    $(document).click('on', function (e) {
        var container = $(".accordion-collapse");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            //alert('dddd');
            $(".accordion-collapse").removeClass('show')
        }
    });

})

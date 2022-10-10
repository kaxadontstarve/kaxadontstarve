$(document).ready(function () {
    //Swiper
    new Swiper('', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        spaceBetween: 30,
        slidesPerView: 3,
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            739: {
                slidesPerView: 2,
            },
            1250: {
                slidesPerView: 3,
            }
        },
    });

    $('.menu__body').click(function () {
        $(".menu__list").toggleClass('active');
        $("body").toggleClass('lock');

    });
    /*
    $('.about-us__video-img').click(function () {
        $(".about-us__video-img").addClass('active');

    });
    $('body').click(function (e) {
        console.log(document.querySelector('.about-us__video-img').className);
        if (e.target.className != document.querySelector('.about-us__video-img').className) {
            $(".about-us__video-img").removeClass('active');
        }


    });
*/



})
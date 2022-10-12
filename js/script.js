

$(document).ready(function () {
    const viewport_width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    //Swiper
    new Swiper('.peopleFM__slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        spaceBetween: 30,
        slidesPerView: 4,
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            360: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            450: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
            550: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            650: {
                slidesPerView: 1.8,
                spaceBetween: 10,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            800: {
                slidesPerView: 2.3,
                spaceBetween: 15,
            },
            900: {
                slidesPerView: 2.6,
                spaceBetween: 15,
            },
            1062: {
                slidesPerView: 3,
            },
            1480: {
                slidesPerView: 4,
            }
        },
    });
    new Swiper('.projects__slider', {
        navigation: {

        },

        spaceBetween: 30,
        slidesPerView: 3.7,
        scrollbar: {
            el: '.projects__slider-scrollbar',
            draggable: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            950: {
                slidesPerView: 2,
            },
            1378: {
                slidesPerView: 3,
            }
        },
    });
    //Swiper
    new Swiper('.partners__slider-body', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'bullets',
        },
        spaceBetween: 20,
        slidesPerView: 'auto',
        resizeObserver: false,
        breakpoints: {
            300: {
                slidesPerView: 2,
            },
 
            1580: {
                slidesPerView: 3,
            }
        },
    });
    if (viewport_width < 1280) {
        $('.menu__burger').click(function () {
            $(".menu__list").toggleClass('active');
            $(".menu__burger span").toggleClass('active');
            $("body").toggleClass('lock');

        });
    }

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
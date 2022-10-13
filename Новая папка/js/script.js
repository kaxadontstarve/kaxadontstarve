

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
                slidesPerView: 'auto',
                spaceBetween: 10,
            },
            700: {
                slidesPerView: 'auto',
                spaceBetween: 15,
            },

            1480: {
                slidesPerView: 'auto',
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
                slidesPerView: 'auto',
                spaceBetween: 15,
            },
            950: {
                slidesPerView: 'auto',
            },
            1378: {
                slidesPerView: 'auto',
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
        spaceBetween: 11,
        slidesPerView: 'auto',
        resizeObserver: false,
        breakpoints: {
            300: {
                slidesPerView: 'auto',
            },

            1580: {
                slidesPerView: 'auto',
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

    $('.play-close, .play-backdrop').click(function () {
        jQuery("#video").each(function () {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        });
    });
})
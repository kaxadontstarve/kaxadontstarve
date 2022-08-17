
new Swiper('.header__slider', {

    slidesPerView: 1,
});
const viewport_width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
$(document).ready(function () {
    $('.menu__closed').click(function () {
        $('.menu').removeClass('active');
        $('.menu__point-burger').removeClass('active');
        if (viewport_width < 500) {
            $('body').removeClass('lock');
            $('.container').removeClass('paddingNone');
        }
    });
    $('.menu__point-burger').click(function () {
        $('.menu').addClass('active');
        $('.menu__point-burger').addClass('active');
        if (viewport_width < 500) {
            $('body').addClass('lock');
            $('.container').addClass('paddingNone');
        }
    });
    for (let i = 1; i < 6; i++) {
        $(`.menu__point_${i}`).click(function () {
            $(`.menu__point`).removeClass('active');
            $(`.menu__point_${i}`).addClass('active');
            if (viewport_width < 500) {
                $('.menu__point-burger').removeClass('active');
                $('.menu').removeClass('active');
                $('body').removeClass('lock');
                $('.container').removeClass('paddingNone');
            }
        });
    }
    for (let i = 1; i < 3; i++) {
        $(`.span_${i}`).click(function () {
            $(`.span`).removeClass('active');
            $(`.span_${i}`).addClass('active');

        });
    }

})
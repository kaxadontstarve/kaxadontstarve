
new Swiper('.header__slider', {
    autoPlay: true,
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

        }
    });
    for (let i = 1; i < 6; i++) {
        $(`.menu__point_${i}`).click(function () {
            if (viewport_width < 500) {
                $('.menu__point-burger').removeClass('active');
                $('.menu').removeClass('active');
                $('body').removeClass('lock');
                $('.container').removeClass('paddingNone');
            }
        });
    }
    $(`.scroll-up`).click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    for (let i = 1; i < 3; i++) {
        $(`.span_${i}`).click(function () {
            $(`.span`).removeClass('active');
            $(`.span_${i}`).addClass('active');

        });
    }
    const menuPoints = document.querySelectorAll('.menu__point[data-goto]');
    if (menuPoints.length > 0) {
        menuPoints.forEach(menuPoint => {
            menuPoint.addEventListener("click", (e) => {
                const menuPoint = e.target;
                if (menuPoint.dataset.goto && document.querySelector(menuPoint.dataset.goto)) {
                    const gotoBlock = document.querySelector(menuPoint.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - 20;

                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: "smooth",
                    });
                    e.preventDefault();
                }
            })
        });
    }
    $(window).on('scroll', function (e) {
        let scrollBorder = 800;
        if (viewport_width < 500) {
            scrollBorder = 450;
        }
            if (scrollY > scrollBorder) {
                $('.scroll-up').addClass('active');
            } else {
                $('.scroll-up').removeClass('active');
            }
        });
})


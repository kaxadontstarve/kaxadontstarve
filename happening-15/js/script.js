


new Swiper('.concerts-block__body', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        739: {
            slidesPerView: 2,
        },
        1250: {
            slidesPerView: 3,
        }
    },
});

const viewport_width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);

$(document).ready(function () {
    $('.menu__body').click(function (e) {
        if (viewport_width < 970) {
            $('.menu__list').toggleClass('active');
            $('.menu__body span').toggleClass('active');
            $('body').toggleClass('lock');
        }
    })
    $(`.scroll-up`).click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
})
for (let index = 1; index < 7; index++) {
    $(document).ready(
        $(`.last-tracks-block__track_${index}`).click(function (e) {
            $(`.last-tracks-block__track`).removeClass('active');
            $(`.last-tracks-block__track_${index}`).toggleClass('active');

        })
    );
}
$(document).ready(function () {
    const menuPoints = document.querySelectorAll('.menu__link[data-goto]');
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


//width of viewport
const viewport_width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);

$(document).ready(function () {
    //scroll to need place
    $(`.scroll-up`).click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    //menu link has glued by the scrollTo 
    const menuPoints = document.querySelectorAll('.menu__link[data-goto],.menu__link2[data-goto]');
    if (menuPoints.length > 0) {
        menuPoints.forEach(menuPoint => {
            menuPoint.addEventListener("click", (e) => {
                const menuPoint = e.target;
                if (menuPoint.dataset.goto && document.querySelector(menuPoint.dataset.goto)) {
                    const gotoBlock = document.querySelector(menuPoint.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - 20;
                    $("body").removeClass('lock');
                    $(".menu__list").removeClass('active');

                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: "smooth",
                    });
                    e.preventDefault();
                }
            })
        });
    }
    //adaptive appearances for scroll
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
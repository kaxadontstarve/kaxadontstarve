$(document).ready(function () {
    $('.menu__body').click(() => {
        $('.menu__icon').toggleClass('active');
        $('.menu__list').toggleClass('active');
    })
})
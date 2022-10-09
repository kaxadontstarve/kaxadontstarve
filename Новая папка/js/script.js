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

$('.menu').click(function(){
$(".menu__list").toggleClass('active');
    $("body").toggleClass('lock');

});





})
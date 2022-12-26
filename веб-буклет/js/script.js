

$(document).ready(function () {


    $('.menu__burger').click(function () {
        $('.menu__burger').toggleClass('active')
        $('.menu__list').toggleClass('active')
    })
    $(document).mouseup(function (e) {
        if (!$('.menu__burger').is(e.target) && $('.menu__burger').has(e.target).length === 0 &&
            !$('.menu__list').is(e.target) && $('.menu__list').has(e.target).length === 0) {
            $('.menu__burger').removeClass('active')
            $('.menu__list').removeClass('active')
        }
    })
})
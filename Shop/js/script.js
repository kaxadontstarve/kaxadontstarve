
//width of viewport
const viewport_width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);

$(document).ready(function () {
    $(document).mouseup(function (e) {
        var container = $(".head__catalog");
        
        if (container.has(e.target).length === 0) {
            $(".head__catalog").removeClass('active')
        }
    });
    $('.head__catalog,.head__catalog-link').click(function (e) {
        $('.head__catalog').toggleClass('active');
        $(".head__basket").removeClass('active')
    })
    $('.head__basket').click(function () {
        $('.head__basket').toggleClass('active');
        $(".head__catalog").removeClass('active')
    })
    $('').click(function () {
        $('.').addClass('active');
    })
    $('').click(function () {
        $('.').addClass('active');
    })

    $(document).mouseup(function (e) {
        var container = $(".head__basket");
        if (container.has(e.target).length === 0) {
            $(".head__basket").removeClass('active')
        }
    });

})
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
// menu
let po = $('#menu').position();
$(window).scroll(function () {
    let poScroll = $(document).scrollTop();
    if (parseInt(poScroll) > parseInt(po.top)) {
        $('#menu').addClass('menu-fixed');
        $('#menu').removeClass('menu-top');
    } else {
        $('#menu').addClass('menu-top');
        $('#menu').removeClass('menu-fixed')
    }
});
// end menu

// botton back to top 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#back-to-top").removeClass("no");
            $("#back-to-top").addClass("back-top");
        } else {
            $("#back-to-top").addClass('no');
            $("#back-to-top").removeClass("back-top");
        };
    });

    $("#back-to-top").on('click', function () {
        var body = $("html, body");
        body.animate({
            scrollTop: 0
        }, 500);
    });
});
// end back to top


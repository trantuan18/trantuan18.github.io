// slide món ăn
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
let po1 = $('#menuSm').position();
$(window).scroll(function () {
    let poScroll = $(document).scrollTop();
    if (parseInt(poScroll) > parseInt(po1.top)) {
        $('#menuSm').addClass('menu-fixed');
        $('#menuSm').removeClass('menu-top');
    } else {
        $('#menuSm').addClass('menu-top');
        $('#menuSm').removeClass('menu-fixed')
    }
});

// bỏ placeholder
$('input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="month"], input[type="time"], input[type="week"]').each(function() {
    var el = this, type = $(el).attr('type');
    if ($(el).val() == '') $(el).attr('type', 'text');
    $(el).focus(function() {
        $(el).attr('type', type);
        el.click();
    });
    $(el).blur(function() {
        if ($(el).val() == '') $(el).attr('type', 'text');
    });
});

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

// menu nhỏ 
$('.icon-menu').on('click',function(){
    $('.menu-left').toggle();
})

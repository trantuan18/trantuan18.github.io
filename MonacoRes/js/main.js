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
    };
});
let po1 = $('#menuSm').position();
$(window).scroll(function () {
    let poScroll = $(document).scrollTop();
    if (parseInt(poScroll) > parseInt(po1.top)) {
        $('#menuSm').addClass('menu-fixed');
        $('#menuSm').removeClass('menu-top');
    } else {
        $('#menuSm').addClass('menu-top');
        $('#menuSm').removeClass('menu-fixed');
    }
});

// bỏ placeholder date
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
});
// validate form
$('#checkForm').on('submit', function () {
    let check = true;
    //check ho ten
    if ( ($('#name').val().length<6) || ($('#name').val().length>18)) {
        check = false;
        $('#name').next('span').text('*Lại nào từ 6-18 ký tự thôi');
    } else {
        $('#name').next('span').text('');
    };
    //-----------------số điện thoại
    if (( $('#contact').val().match(/[\W]|[a-z]|[0-9]{12,}/) == null)&&($('#contact').val().length>=9)){
        console.log($('#contact').val());
        $('#contact').next('span').text('');
    } else {
        $('#contact').next('span').text('*Nhập sđt chuẩn đuê');
        check = false;
    };
    //------------------------------email
    if ($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
        check = false;
        $('#email').next('span').text('*Nhập mail lại đê');
    } else {
        $('#email').next('span').text('');
    };
    if (check) {
        alert('Thanks you');
    }
    return check;
});
// --------------------------
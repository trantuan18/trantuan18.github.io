let po = $('#menu').position();
$(window).scroll( function(){
    let poScroll = $(document).scrollTop();
    if (parseInt(poScroll) > parseInt(po.top)){
        $('#menu').addClass('fixed');
        $('#menu').removeClass('top-1');
    } else { 
        $('#menu').addClass('top-1');
        $('#menu').removeClass('fixed')
    }
});

console.log('object :', object);
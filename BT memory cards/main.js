var arrCard = $('.card')

function flipBack() {

}

function flipFront() {

}
$('.back').click(function() {
    this.style.transform = 'rotateY(180 deg)';
    // $('.back')[0].style.transform = 'rotateY(180 deg)';
    // $('.front')[0].style.transform = 'rotateY(0 deg)';
    this.style.display = 'none';
})
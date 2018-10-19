$('#checkForm').on('submit', function () {
    let check = true;
    //check ho ten
    if ( ($('#name').val().length<6) || ($('#name').val().length>18)) {
        check = false;
        $('#name').next('span').text('*Lại nào từ 6-18 ký tự thôi');
    } else {
        $('#name').next('span').text('');
    };
    //-----------------số  điện thoại
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
    //----------------------mat kahu 
    if ($('#pass').val().match(/^[a-z0-9_-]{6,18}$/) == null) {
        check = false;
        $('#pass').next('span').text('*Mật khẩu 6-18 ký tự nhá');
    } else {
        $('#pass').next('span').text('');
    };
    return check;
});
// --------------------------
//-----------------------------------------------
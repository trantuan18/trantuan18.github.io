//lấy url 
let url = window.location.href;

let string = decodeURIComponent(url);
let start = 1 + string.indexOf('?');
let str = string.slice(start);
//tách lấy vị trí từng phần thông tin điền vào
let start1 = [];
let end = [];
for (let i = 0; i <= str.length; i++) {
    if (str[i] == '=') {
        start1.push(i)
    };
    if (str[i] == '&') {
        end.push(i)
    };
};
//tách từng chuỗi 
let name = str.slice(start1[0] + 1, end[0]);
let date = str.slice(start1[1] + 1, end[1]);
let contact = str.slice(start1[2] + 1, end[2]);
let mail = str.slice(start1[3] + 1, end[3]);
let sex = str.slice(start1[5] + 1, end[5]);
// chỉnh lại tên 
let trueName = '';
for (let i = 0; i < name.length; i++) {
    if (name[i] == '+') {
        trueName += ' ';
    } else {
        trueName += name[i];
    };
};
// doi lai ngay thang nam 
let y = date.slice(0, 4);
let m = date.slice(5, 7);
let d = date.slice(8, 10);
let trueDate = d + '-' + m + '-' + y;
//Xuất thông tin
$("#names").text('Họ và tên: ' + trueName);
$("#date").text('Ngày sinh: ' + trueDate);
$("#contact").text('Số điện thoại: ' + contact);
$("#mail").text('Email: ' + mail);
$("#sex").text('Giới tính: ' + sex);
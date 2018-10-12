var s = '';
var tam = '';
var count = 0;

function buttonon(a) {
    s = s + a;
    tam = s;
    if (s.length >= 20) { alert('Nhap the thoi ') };
    document.getElementById('result').innerText = s;
}

function buttononac() {
    s = '';
    tam = '';
    document.getElementById("result").innerText = s;
    document.getElementById("result1").innerText = '';
}

function buttononc() {
    x = s.slice(0, s.length - 1);
    s = x;
    tam = s;
    document.getElementById("result").innerText = s;
}

function buttononfinish() {
    if (count == 0) {
        s = String(eval(tam));
        document.getElementById("result1").innerText = eval(tam);

    } else {
        var tg = s.slice(1);
        var kq = Math.sqrt(Number(tg));
        document.getElementById("result1").innerText = eval(kq);
        count = 0;
        s = String(eval(kq));
        tam = s;
    }
}

function buttonongiaithua(a) {
    s = s + a;
    document.getElementById("result").innerText = s;
    var tg = s.slice(0, s.length - 1);
    var kq = 1;
    for (var i = 1; i <= Number(tg); i++) {
        kq = kq * i;
    }
    tam = kq;
    s = kq;
}

function buttononsqrt(a) {
    s = s + a;
    count = 1;
    document.getElementById("result").innerText = s;
}

function buttononbinhphuong(a) {
    tam = Number(s) * Number(s);
    String(tam);
    s = s + a;
    document.getElementById("result").innerText = s;
    s = tam;
}

function buttononpercent(a) {
    s = s + a;
    document.getElementById("result").innerText = s;
    tam = tam + '/100'
}
var bolor = ['red', 'blue', 'orange', 'grey', 'white', 'purple'];
$('#changeColor').click(function() {
    var chancolor = $('.wrap');
    var nutColor = $('.nut');
    this.style.color = 'yellow';
    $('#result1')[0].style.color = 'yellow';
    $('#result')[0].style.color = 'yellow';
    for (let i = 0; i < nutColor.length; i++) {
        nutColor[i].style.color = 'yellow';
    }
    chancolor[0].style.backgroundColor = bolor[Math.floor(Math.random() * 7)];
});
//Thay doi font ca 3 doan van

function changeFontsize(){
	var x=document.getElementById('x1').value;
	p1.style.fontSize =  Number(x) + "px"  ; 
	p2.style.fontSize =  Number(x) + "px"  ; 
	p3.style.fontSize =  Number(x) + "px"  ; 
}

function increaseFontsize(){
	var ele = document.getElementsByTagName('p');
	var tt = document.getElementById('x2').value;
	var num=ele[tt - 1 ].style.fontSize ;
	var numb= parseInt(num);
	numb ++ ;
	if (numb<=30){
		ele[tt-1].style.fontSize = numb +"px" ;
	}
}

function decreaseFontSize(){
	var ele = document.getElementsByTagName('p');
	var tt = document.getElementById('x2').value;
	var num=ele[tt - 1 ].style.fontSize ;
	var numb= parseInt(num);
	numb= numb-1 ;
	if (numb>=10) {
		ele[tt-1].style.fontSize = numb +"px" ;
	}
}

var n=2;
function changeColor(){
	if ( n%2==0){
		p1.style.color = 'blue';
		p2.style.color = 'yellow';
		p3.style.color = 'red';
	} else {
		p1.style.color='black';
		p2.style.color = 'black';
		p3.style.color = 'black';
	}
	n=n+1;
}

function changeBColor(){
	var x= document.getElementById('bc1').value;
	var bchange= document.getElementsByClassName('wrap');
	bchange[0].style.backgroundColor = x ; 
}

function copyContent(){
	var arrp = document.getElementsByTagName('p');
	var pchange1 = document.getElementById('para1').value;
	var pchange2 = document.getElementById('para2').value;
	var a=pchange1.charAt(1);
	var b=pchange2.charAt(1);
	arrp[Number(a)-1].innerText = arrp[Number(b)-1].innerText ;

}
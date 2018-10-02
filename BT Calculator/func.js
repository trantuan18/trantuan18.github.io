var s='';
// var no1= document.getElementById('b1');
// var no2= document.getElementById('b2');
// var no3= document.getElementById('b3');
// var no4= document.getElementById('b4');
// var no5= document.getElementById('b5');
// var no6= document.getElementById('b6');
// var no7= document.getElementById('b7');
// var no8= document.getElementById('b8');
// var no9= document.getElementById('b9');
// var no0= document.getElementById('b0');
function buttonon1(){
	x='1';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonon2(){
	x='2';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonon3(){
	x='3';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonon4(){
	x='4';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonon5(){
	x='5';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonon6(){
	x='6';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonon7(){
	x='7';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonon8(){
	x='8';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonon9(){
	x='9';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonon0(){
	x='0';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttononclear(){
	s='';
	document.getElementById("result").innerText = s; 
	document.getElementById("result1").innerText = '';
}
function buttonondel(){
	x=s.slice(0,s.length-1);
	s=x;
	document.getElementById("result").innerText = s; 
}
function buttononcham(){
	x='.';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttononpercent(){
	x='%';
	var t=s+x;
	document.getElementById("result").innerText = t; 
	s=s+'/100'
}
function buttononmultiplication(){
	x='*';s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonondivi(){
	x='/';s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttononplus(){
	x='+';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttononsub(){
	x='-';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttononfinish(){
	document.getElementById("result1").innerText = eval(s);

}

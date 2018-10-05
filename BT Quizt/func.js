var arr=[
	{
		Quest  : ' ' ,
		A : '' ,
		B : '' , 
		C : '' ,
		D : '' ,
		tr : ''
	},
	{
		Quest  : 'Một sào Bắc bộ, Trung bộ có diện tích bằng bao nhiêu mét vuông ? ' ,
		A : '360' ,
		B : '500' , 
		C : '1000' ,
		D : '720' ,
		tr : '360'
	},
	{
		Quest  : 'Cải cách ruộng đất ở miền Bắc Việt Nam diễn ra trong thời gian nào ? ' ,
		A : '1953 - 1956' ,
		B : '1990 - 1993' , 
		C : '1945 - 1948' ,
		D : '1993 - 1995' ,
		tr : '1953 - 1956'
	},
	{
		Quest  : 'Vụ chiêm diễn ra vào thời gian nào trong năm  ? ' ,
		A : 'Đông - Xuân ' ,
		B : 'Hạ - Thu ' , 
		C : 'Thu - Đông ' ,
		D : 'Xuân - hạ ' ,
		tr : 'Đông - Xuân '
	},
	{
		Quest  : 'Âm lịch( Nông lịch ) được tạo ra dựa trên chu kì nào  ? ' ,
		A : ' Chu kỳ mặt trăng ' ,
		B : ' Chu kỳ mặt trời ' , 
		C : ' Chu kỳ thu hoạch nông sản ' ,
		D : ' Chu kỳ chòm sao ' ,
		tr : ' Chu kỳ mặt trăng '
	},
	{
		Quest  : ' Tết nguyên tiêu diễn ra vào thời gian nào (Âm lịch) ? ' ,
		A : ' Giằm tháng giêng ' ,
		B : ' Giằm tháng chạp' , 
		C : ' Giằm tháng 7 ' ,
		D : ' Đầu tháng 3 ' ,
		tr : ' Giằm tháng giêng '
	},
	{
		Quest  : ' ' ,
		A : '' ,
		B : '' , 
		C : '' ,
		D : '' ,
		tr : ''
	},
];
var num=0;var dem=0;
var q= document.querySelectorAll('.change')
for (var i=0; i<q.length ; i++){
		q[i].addEventListener('click', function(){
			num=num+1;
			if ( this.innerHTML==arr[num-1].tr){ dem=dem+1};
				document.getElementById('q').innerHTML = arr[num].Quest;
				document.getElementById('a').innerHTML = arr[num].A;
				document.getElementById('b').innerHTML = arr[num].B;
				document.getElementById('c').innerHTML = arr[num].C;
				document.getElementById('d').innerHTML = arr[num].D;
			if (num>=6){ alert('Bạn trả lời đúng' + dem +'/5 câu hỏi')};
			
			})
	}

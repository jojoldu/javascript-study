/**
	콜백함수
**/
function alram(min, callback){
	var isCall = false;
	
	setInterval(function(){
		var date = new Date();
		var nowMin = date.getMinutes();

		if(nowMin === min && !isCall){
			isCall = true;
			callback(nowMin);
		}
	}, 1000);
}

onload = function(){
	alram(15, function(min){
		console.log("현재 Minutes는 " + min +" 입니다.");
	});
}
/**
	변수 스코프 체인
**/

var x = 1;
function outer(){
	var y = 2;
	
	inner();

	function inner(){
		var z = 3;
		var a = x;
		console.log("a : " + a);
	}
}

outer();


function outCount(count){
	inCount();

	function inCount(){
		return count--;
	};
}

console.log(outCount(10);
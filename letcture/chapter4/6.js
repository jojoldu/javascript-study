/**
	클로저
**/

//1. 아래의 결과는 -1인가??
function outer(){
	
	var x=0;

	return function(){
		return ++x;
	};
}

var x = -1;
var func = outer();
console.log(func());

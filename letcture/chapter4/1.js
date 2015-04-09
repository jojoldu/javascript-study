/**
	1. 함수 단위의 변수관리

**/
var a = 1;

function f(){
	if(true){
		var c = 2;
	}

	return c;
};

console.log(f()); //결과는??


//아래의 g는 어느영역에 포함되는가??
function globalFunc(){
	g = "global";
};
globalFunc();
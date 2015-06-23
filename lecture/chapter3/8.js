/**
	중첩함수
**/

function outter(a){

	var x = 10;

	function inner(b){//이 함수는 어느영역에 있는 것인가??
		
		console.log(x); //x는 사용가능한가??
		return b*2;
	};

	return "결과 : " + inner(a);
};

console.log(outter(10));




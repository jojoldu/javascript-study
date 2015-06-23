/**
	Javascript에서 일반적으로 사용하는 전역변수 사용법
	 : 모듈패턴
**/

(function(){
	var moduleGlobal = 10;

	function add(x){
		return moduleGlobal + x;
	};

	console.log(add(5));

}());
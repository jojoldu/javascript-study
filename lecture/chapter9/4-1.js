/**

	4-1. 모듈패턴
	 - private, public 영역을 같이 쓰는 방법
	 - 별도의 namespace 사용으로 global scope의 남용을 방지한다.
	 - 클로저와 즉시실행함수로 사용한다.
	 
**/

var Calculator = (function(){
	var counter = 0;

	return {
		increment : function(){
			return counter++;
		},
		reset : function(){
			counter = 0;
			return counter;
		},

	}
})();

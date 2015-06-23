/**
	자바스크립트 상속#5
	상속과 캡슐화

**/

// 3-4에서 발생한 문제를 해결해보자
var Person = (function(){
	var name;

	var Func = function(){};
	
	Func.prototype = {
		getName : function(){
			return name;
		},
		setName : function(name){
			name = name;
		}
	};

	return Func;
}());

var GilDong = new Person();
GilDong.setName('홍길동');
console.log(GilDong.getName());
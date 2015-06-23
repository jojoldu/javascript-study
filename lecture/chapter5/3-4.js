/**
	자바스크립트 상속#4
	상속과 캡슐화

**/


//기본적인 은닉화를 적용한 객체생성 방법이다
var Person = function(arg){
	var name = arg? arg: '이동욱';

	return {
		getName : function(){
			return name;
		},
		setName : function(name){
			name = name;
		}
	};
}

var GilDong = Person('홍길동');
console.log(GilDong.getName());

/*
	하지만 이 코드의 경우 Person함수 객체의 프로토타입에는 접근할 수가 없다.
	이는 Person을 부모로 하는 프로토타입을 이용한 상속을 구현하기가 용이하지 않다는 것을 의미한다.
	이를 보완하려면 객체를 반환하는 것이 아닌, 
	함수를 반환하는 것이 좋다.
	다음 3-5 코드를 보자
*/
/**
	
	7.3 Function 상속

**/

//Function 프로토타입 멤버의 속성들

/*
	1. call()
		- 내부에서 this를 사용하는 함수가 있다고 하자
		이때 일반적인 방법으로는 내부의 this 객체를 외부의 객체로 변경할 수는 없는데,
		이를 해결해주는 것이 call()과 apply()이다.

	2. apply()
		- 문법적인 측면에서 call()함수가 apply()함수와 구별되는 근본적인 차이점은 함수의 파라미터에 있다.
		 call() 함수는 인자 리스트(argument list)를  파라미터로 받지만,
		 apply() 함수는 인자를 담은 배열(single array of arguments) 하나를 파라미터로 받는다. 

*/

//간단한 예제
function Person(name){
	this.name = name; //여기에서의 this는 무엇??
}

function Korean(city, name){
	Person.call(this, name); //이 문장을 실행시에 this는 무엇?
	this.city = city;
}

function American(city){
	this.city = city;
}
var citizen = new American("New York");
Person.call(citizen, "Lee");//Korean 에서의 call()과 American의 call()은 다른것인가??

console.log(new Korean("이동욱", "서울"));
console.log(citizen);









/**

	1. 함수와 객체 정의
신림동 126-8번지
302호

010-9208-2226
**/

//프로토타입 객체 정의

//Person 생성자
function Person(name){
	this.name = name;
}

//Person 생성자의 프로토타입 단계1 
//- 프로토타입 객체는 Object 인스턴스이다. 
Person.prototype = new Object();

//Person 생성자의 프로토타입 단계2 
//- 프로토타입 객체의 constructor 속성 변경
Person.prototype.constructor = Person;

//모든 함수는 프로토타입 객체를 위와 같은 방식으로 진행 한다. 

var son = new Person("Hong");
//즉 위와 같은 코드는 Object 인스턴스를 생성 -> 사용자 정의 생성자에서 정의한 구조로 인스턴스에 멤버 추가로 진행 된다.


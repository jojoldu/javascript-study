/**
	자바스크립트 함수의 역할

	1. 호출가능한 루틴으로서의 함수
	2. 값으로서의 함수
	  - 인자
	  - 변수
	  - 반환값
	3. 객체타입으로서의 함수
**/

// 1. 호출가능한 루틴으로서의 함수
function add(x, y){
	var sum = x+y;

	return sum;
};

console.log(add(1,10));

// 2. 값으로서의 함수 
function add2(){
	return function(x,y){
		return x+y;
	};
};

var func = add2();
console.log(func(10,20));


// 3. 객체타입으로서의 함수
function Member(name, age){
	this.name = name;
	this.age = age;
};

var member = new Member();
member.name = "이동욱";
member.age = 29;

console.log(member);


/**
	함수에는 3가지 영역이 있다.
	변수스코프, 공개변수, 프로토타입 객체
**/

function sum(x, y){
	var a = x;
	var b = y;

	return a+b;
};

function Person(){};

Person.job = "개발자";
console.log(Person.job);

Person.prototype.age = 29;
console.log(Person.prototype.age);


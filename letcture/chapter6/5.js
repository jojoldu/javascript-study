/*

	프로토타입 객체 교체

*/

function Person(){
	this.name = "이동욱";
}

var personPrototype = {
	email : "jojoldu@gmail.com",
	phone : "010-3583-1515"
};

Person.prototype = personPrototype;

var p = new Person();
console.log(p);

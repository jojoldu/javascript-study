/*

	프로토타입 객체 교체

*/

function Person(){
	this.name = "이동욱";
}
Person.prototype.age = "29";

var origin = new Person();

for(prop in origin){
	console.log(prop + ": " + origin[prop]);
}

console.log("============= origin 끝/ change 시작===============");

var personPrototype = {
	email : "jojoldu@gmail.com",
	phone : "010-3583-1515"
};
Person.prototype = personPrototype;

var change = new Person();

for(prop in change){
	console.log(prop + ": " + change[prop]);
}


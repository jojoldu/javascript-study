/*

	생성자

*/

function Person(){
	this.name = "이동욱";
}

var p = new Person();

console.log(p.constructor);
console.log(p.constructor === Person);
console.log(p.constructor === Person.prototype);
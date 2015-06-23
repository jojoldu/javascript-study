/**
	
	4-1. 상속

**/

function Person(name){
	this.name = name; 
}

function Korean(city){
	this.city = city;
}

Korean.prototype = new Person("이동욱");
Korean.prototype.constructor = Korean;

console.log(Korean.prototype);

var k1 = new Korean("서울");
var k2 = new Korean("서울");


console.log(k1);
console.log(k2);

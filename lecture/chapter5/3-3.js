/**
	자바스크립트 상속#3
	상속은 부모의 기능을 계승하면서도 발전시킬수도 있는 것이다.
**/

function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
	this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}
 
var p1 = new Programmer('이동욱');
console.log(p1.name);
console.log(p1.introduce());
console.log(p1.coding());
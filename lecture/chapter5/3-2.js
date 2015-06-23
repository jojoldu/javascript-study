/**
	자바스크립트 상속#2
	3-1 코드를 활용해서 상속을 진행해보자
**/

function Person(name){
    this.name = name+' 사람';
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name+' 개발자';
}
Programmer.prototype = new Person();
 
var p1 = new Programmer('DongUk');
console.log(p1.name);
console.log(p1.introduce());
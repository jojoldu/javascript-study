/**

	자식에 속성을 추가하고, 
	부모에 자식의 속성을 사용하는 메소드를 
	추가했을 때 결과는??	
**/

function Person(name) {
    this.name = name || "동욱"; 
}
 
Person.prototype.getName = function(){
    return this.name;
}
 
 Person.prototype.getAge = function(){
 	return this.age;
 }

function Korean(name, age){
	this.age = age || 29;
}
Korean.prototype = new Person();
 
 
var kor2 = new Korean("동욱22", 22);
console.log(kor2.getName());
console.log(kor2.getAge());

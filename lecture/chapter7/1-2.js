/**
	1-2. 사용자 정의 값 반환 및 this

**/

function Person(name){
	this.name = name;
	return 10;
}

console.log(new Person("Hong"));
console.log(Person("Hong"));


//this는 함수를 호출하는 객체에 따라 결정된다.
function dog(){
	this.name;
	this.setNewName = setNewName;
}

function cat(){
	this.name;
	this.setNewName = setNewName;
}

function setNewName(name){
	this.name = name;
}

var d = new dog();
d.setNewName("개");

var c = new cat();
c.setNewName("고양이");

console.log(d.name);
console.log(c.name);

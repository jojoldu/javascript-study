/*

	생성자

*/

function Person(){
	this.name = "이동욱";
}

var p = new Person();

//아래의 출력 결과를 예상해보시오.
console.log(p.constructor);
console.log(p.constructor === Person);
console.log(p.constructor === Person.prototype);
console.log(p.constructor === Person.prototype.constructor);
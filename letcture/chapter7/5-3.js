/**

	2. 상세타입 비교 - instanceof

**/

function Person(){};
var p1 = new Person();

function Book(){};
var b1 = new Book();

console.log(p1 instanceof Person);
console.log(p1 instanceof Book);
console.log(p1 instanceof Object);
console.log(p1 instanceof Function);

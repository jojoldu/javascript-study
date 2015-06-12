//객체비교 이어서

function Person(){};
var p1 = new Person();

function Book(){};
var b1 = new Book();

var type1 = typeof p1;
var type2 = typeof b1;

//아래의 예상결과는?
//동일한 생성자를 통해 생성된 인스턴스를 찾으려면 어떻게 해야하는가??
console.log("단순비교1: "+ (p1 === b1));
console.log("단순비교2: " + (p1 == b1));
console.log("typeof로 비교1 : " + (type1 === type2));
console.log("typeof로 비교2 : " + (type1 == type2));
console.log("생성자와 인스턴스 비교1 :" +(p1 === Person));
console.log("생성자와 인스턴스 비교2 :" +(p1 == Person));
console.log("인스턴스와 인스턴스 비교1 :"+(p1 === new Person()));
console.log("인스턴스와 인스턴스 비교2 :"+(p1 == new Person()));


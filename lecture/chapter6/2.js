/**
	2. 생성자/프로토타입/인스턴스
**/

function Member(name, age){
	this.name = name;
	this.age = age;
};

Member.description = "이것은 Member 생성자입니다.";
var member1 = new Member("이동욱", 29);
var memberProto = Member.prototype;


console.log("Member의 인스턴스 객체 member1 :" + member1);
console.log("Member의 공개변수" + Member.description);
console.log("Member의 공개변수는 인스턴스 객체에도 공유되는가?" + member1.description);





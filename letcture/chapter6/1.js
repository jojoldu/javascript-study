/**

	자바스크립트의 멤버 관리 구조
	 - 연상배열 구조

**/

/*
	1. 자바스크립트의 멤버관리는 연상 배열구조를 활용한다.
	즉, 순차적인 구조가 아니라 각각의 멤버가 고유의 key를 가지고 있고
	이러한 key에 접근하여 값을 가져오는 구조이다.

*/
function Member(){};

Member.realName="이동욱";

console.log(Member.realName);
console.log(Member["realName"]);



var mySon = {
	name : "달봉이",
	setNewName : function(args){
		this.name = args;
	}
};

console.log(mySon.name);
mySon.setNewName("이동욱");
console.log(mySon.name);


console.log(7%2);


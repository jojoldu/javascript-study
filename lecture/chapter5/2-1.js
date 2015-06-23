/**
	자바스크립트 객체생성

	객체를 생성하는데 사용하는 함수(즉, 함수역할 #3을 하는데 사용하는 함수)를
	생성자라 한다.

	자바스크립트에는 객체를 생성하는 방법이 3가지가 있다.
	1) new 와 Object 생성자를 이용 : new Object()
	2) 객체 리터럴 이용 : {}
	3) new와 사용자 정의 생성자 이용 : new Person()
**/



// 1) new 와 Object 생성자를 이용 : new Object()
var mySon = new Object();

mySon.name = "달봉이";
mySon.age = 8;
mySon.increaseAge = function(){
	this.age++;
};

mySon.increaseAge();
mySon.increaseAge();

for(var prop in mySon){
	console.log(prop + " : "+mySon[prop]);
}




// 2) 객체 리터럴 이용 : {}
var myChild = {
	name : "순봉이",
	age : 7,
	increaseAge : function(){
		this.age++;
	}
};

for(var prop in myChild){
	console.log(prop + " : "+myChild[prop]);
}





// 2-1) 객체 리터럴 사용시 중첩 표현 가능
var child = {
	name : "자식",
	age : 7,
	Parent : {
		name : "부모",
		age : "41"
	}
};

console.log("이 표현 될까요?? " + child.Parent.name);

for(var prop in child){
	console.log(prop + " : "+child[prop]);
}
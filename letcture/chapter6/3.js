/**
	3. 멤버의 추가/제거/대체
**/

// var Member = {};

// Member.age = 29;

// console.log(Member.age);

// delete Member.age;

// console.log(Member.age);


//위 방식으로 할 경우, 기존에 Member.age 속성이 있는 경우에도 삭제될 수 있다. 이를 판단하는 코드 추가
// console.log(Member.job);
// Member.job = "학생";

// if(!Member.job){
// 	Member.job = "개발자";
// }

// console.log(Member.job);


/*
	멤버 확인
	 1) hasOwnProperty
	 해당 객체에 멤버가 있는지 확인하는 메소드
	 이 메소드는 해당 객체의 멤버만 확인이 가능하고,
	 자신의 부모 멤버는 false로 판단한다.
*/

// function Person(){
// 	this.name = "이동욱";
// 	this.age = "29";
// }

// Person.prototype.job = "개발자";

// var obj = new Person();

// console.log("name : " + obj.hasOwnProperty("name"));
// console.log("age : " + obj.hasOwnProperty("age"));
// console.log("job : " + obj.hasOwnProperty("job"));


/*
	멤버 확인
	 2) in
	 해당 객체에 멤버가 있는지 확인하는 메소드
	 자신의 부모 멤버까지 true로 판단한다.
*/

function Book(){
	this.title = "자바스크립트 객체지향 프로그래밍";
	this.price = "25000"; 
};

var book = new Book();
Book.prototype.category = "IT";
book.author = null;
book.totalPage = undefined;

// console.log("title : " + ("title" in book));
// console.log("price : " + ("price" in book));
// console.log("부모객체의 멤버 category : "+ ("category" in book));
// console.log("null값 author : "+ ("author" in book));
// console.log("undefined값 totalPage : "+ ("totalPage" in book));
// console.log("선언하지 않은 값 salePrice : "+ ("salePrice" in book));




/*

	객체의 멤버 순차적 접근

*/
 
for(var prop in book){
	console.log(prop+" : "+book[prop]);
}


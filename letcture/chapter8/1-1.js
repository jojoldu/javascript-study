/**
	
	8.1 배열객체

**/

function Member(name, age){
	this.name = name;
	this.age = age;
}

var array = [];
array.push(new Member("홍길동", 22));
array.push(new Member("임꺽정", 25));
array.push(new Member("이순신", 33));
array.push(new Member("장보고", 42));

for(var i=0;i<array.length;i++){
	console.log(array[i].name);
}
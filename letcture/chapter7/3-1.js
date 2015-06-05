/**
	
	7.3 Function 상속

**/

//Function 프로토타입 멤버의 속성들

/*
	1. call()
		- 내부에서 this를 사용하는 함수가 있다고 하자
		이때 일반적인 방법으로는 내부의 this 객체를 외부의 객체로 변경할 수는 없는데,
		이를 해결해주는 것이 call()과 apply()이다.
*/

function Color(color){
	this.color = color;
	this.show = function(){
		console.log(this.color);
	};
};

var obj = new Color("노랑");
obj.show();

var newObj = {
	color : "파랑",
	show : function(){
		console.log(this.color);
	}
};

Color.call(newObj);
Color.show();


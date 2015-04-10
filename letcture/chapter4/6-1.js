/**
	
	클로저란 두 개의 것으로 이루어진 특별한 오브젝트이다.
	첫 번째는 함수이고, 두 번째는 그 함수가 만들어진 환경이다. 
	그 함수가 만들어진 환경은 함수가 만들어질 때 사용할 수 있었던 변수들로 이루어진다.  
	
	클로저의 활용#1
	 - 특정 함수에 사용자가 정의한 객체의 메서드 연결
**/

//1. 기본적인 클로저 예제
function makeFunc() {
  var name = "Led Dong Uk";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();


//2. 클로저 비사용 vs 사용
console.log("클로저 비사용시");
function notUseClosure(x){
	var num = 0;

	function increase(){
		num += x;
		num++;
		console.log(num);
	};

	increase();
}

notUseClosure(0);
notUseClosure(0);
notUseClosure(0);


console.log("클로저 사용시");
function useClosure(x){
	var num = 0;

	return function(){
		num += x;
		num++;
		console.log(num);
	};
}

var useClosure1 = useClosure(0);
useClosure1();
useClosure1();
useClosure1();


// function HelloFunc(func){
// 	this.greeting = "hello";
// };

// HelloFunc.prototype.call = function(func){
// 	func? func(this.greeting) : this.func(this.greeting);
// };

// var userFunc = function(greeting){
// 	console.log(greeting);
// };

// var hello = new HelloFunc();
// hello.func = userFunc;
// hello.call();
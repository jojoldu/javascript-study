/**
	3.7 익명함수
**/

//일반적인 함수에서 함수호출
function callFunction(print){
	print();
};

function print(){
	console.log("출력1");
};

callFunction(print);



//선언된 함수가 아닌 함수를 사용하려면??
function callFunction2(onceFunction){
	onceFunction();
};


//익명함수를 사용하는 방법1
callFunction2(function(){
	console.log("출력2");
});


//익명함수를 사용하는 방법2
function returnFunction(name){
	var result = "Hello " + name;
	
	return function(){
		console.log(result);
	};
};

returnFunction("이동욱")();

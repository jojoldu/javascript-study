/**
	내장객체의 활용
	자자바스크립트에는 아래와 같이 내장객체들이 있다.
	Object, Function, Array, String, Boolean, Number, Math, Date, RegExp
**/

//아래와 같이 배열내에서 랜덤한 값을 뽑아내는 코드가 있다.
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');

function getRandomValueFromArray(haystack){
    var index = Math.floor(haystack.length*Math.random());
    return haystack[index]; 
}
console.log(getRandomValueFromArray(arr));


//위코드를 좀 더 활용해보자
Array.prototype.rand = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var arr2 = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
console.log(arr2.rand());
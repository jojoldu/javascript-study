/**
	
	8.2 배열리터럴
	 - 자바스크립트에서 배열은 타언어처럼 하나의 타입을 여러개 할당받는 것이 아닌,
	 여러 타입을 동시에 할당받을 수 있다.
**/

var arr = [1, "이동욱", true, null];

for(var i=0;i<arr.length;i++){
	console.log(arr[i]);
}

var arr2 = [
			[1,2,3],
			["a","b","c"],
			[true,false,true]
		   ];

console.log(arr2);
/**

	7.5 리플렉션
	 - 자바스크립트는 기본적으로 오버로딩이 지원되지 않는다.
	 이는 자바스크립트가 연상배열구조이기 때문인데,
	 리플렉션을 이용하면 오버로딩을 구현할 수 있다.

**/

//1. 객체의 타입 비교 - typeof
//아래 코드의 결과를 예상하면?
console.log(typeof true);
console.log(typeof 10);
console.log(typeof "문자열");
console.log(typeof function(){});
console.log(typeof new Object());
console.log(typeof []);
console.log(typeof null);



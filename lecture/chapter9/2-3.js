/**

	2-3. 즉시실행 함수의 매개변수

**/

//즉시 실행함수는 아래와 같이 매개변수를 전달할 수 있다.
//이 외에 this 혹은 window를 넣어서 전역객체에 접근하도록 만들수도 있다.

(function (who, when){
	console.log('I met '+ who + ' on ' +when);
}('이동욱', new Date()));



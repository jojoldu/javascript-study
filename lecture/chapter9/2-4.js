/**

	2-4. 즉시실행함수의 리턴 값

**/

var result = (function(){
	return 2+2;
}());

console.log(result);


var getResult = (function(){
	var res = 2+2;
	
	return function(){
		return res;
	}

}());



/*
	즉시실행함수는 객체 프로퍼티를 정의할 때에도 사용 할 수 있다.
	어떤 객체의 프로퍼티가 객체의 생명주기 동안에는 값이 변하지 않고, 처음에 값을 정의할 때는 적절한 계산을 위한 작업이 필요하다고 가정해보자
	그렇다면 이 작업을 즉시 실행 함수로 감싼 후, 즉시 실행 함수의 반환값을 프로퍼티 값으로 할당하면 된다.
*/

var obj = {
	message: (function(){
		var who = 'me',
			what = 'call';

		return what + ' ' + who;
	}()),
	getMessage : function(){
		return this.message;
	}
};

console.log(obj.getMessage());
obj.message = '111';
console.log(obj.message);

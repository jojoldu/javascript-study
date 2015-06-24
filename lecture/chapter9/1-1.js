/**

	1. 네임스페이스 패턴
	 - 수많은 함수, 객체, 변수들로 전역 scope를 어지럽히는 대신에, 애플리케이션이나 라이브러리를 위한
	 전역 객체를 하나 만들고 모든 기능을 이 객체에 추가하면 된다.

**/

//아래 예제를 보자
function Parent(){};

function Child(){};

var some_var = 1;

var module1 = {};

module1.data = {
					a : 1,
					b : 2
			   };

var module2 = {};


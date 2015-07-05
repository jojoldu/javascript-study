/**

	1. 네임스페이스 패턴
	- 1-2에서 나온 방식은 여러 자바스크립트 라이브러리의 이름 충돌을 방지해 준다.
	다양한 작업에 응용될수 있으나, 다음과 같은 단점도 존재 한다.

	 1) 모든 변수와 함수에 접두어를 붙여야 하기 때문에, 전체적으로 코드량이 많아지며 용량 역시 커진다.
	 2) 전역 인스턴스가 단 하나뿐이기 때문에 코드의 어느 한 부분이 수정되어도 전역 인스턴스를 수정하게 된다.
	 	즉, 다른 기능들도 갱신된 상태를 물려받는다.
	 3) 이름이 중첩되고 길어지므로 프로퍼티를 판별하기 위한 검색 작업도 길고 느려진다.

**/

/* 
	네임스페이스 패턴을 범용적으로 사용하기
	 - 프로그램의 복잡도가 증가하고, 코드의 각 부분들이 별개의 파일로 분리되어 있으면
	 어떤 코드가 특정 네임스페이스를 처음으로 정의한다고 가정하기가 위험하다.
	 그러므로 네임스페이스를 생성하거나 프로퍼티를 추가하기 전에 이미 존재하는지 여부를 확인하는 것이 최선이다.
*/

//중복확인 코드
var MYAPP = MYAPP || {};

//이렇게 추가되는 확인 작업 때문에 상당량의 중복코드가 생겨날 수 있다.


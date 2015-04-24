미정의(undefined)와 미선언(undeclared) 변수에 대해 설명해보세요.
클로저(closure)란 무엇이고 클로저를 왜/언제 사용할까요?
클로저를 생성할 때 즐겨쓰는 패턴은? 아가일(IIFE에만 적용 가능한)
익명 함수의 일반적인 쓰임새는?
자바스크립트 모듈 패턴에 대해서 설명하세요. 그리고 어떤 경우에 쓰겠는지 얘기하세요.
깔끔한 네임스페이스(clean namespacing)에 관해 언급하면 추가 점수를 준다.
모듈에 네임스페이스가 없다면?
코드를 어떻게 정리합니까? (모듈 패턴, 고전적인 상속?)
호스트 객체와 네이티브 객체의 차이점은?
두 구문의 차이점은?:
function Person(){} var person = Person() var person = new Person()
.call 과 .apply 의 차이점은?
Function.prototype.bind 에 대해 설명해 보세요.
언제 코드를 최적화하나요?
자바스크립트에서 상속이 어떤 방식으로 작동하는지 설명할 수 있나요?
"그건 아무도 설명할 수 없습니다." 라는 답변에 보너스 점수 주기
설명하려고 시도한다면 추가 점수를 준다.
언제 document.write() 를 사용하나요?
올바른 답: 1999년 - 이제 미숙한 개발 관행은 뿌리뽑을 때다.
기능 탐지(feature detection)와 기능 추론(feature inference), UA 문자열의 차이점은?
AJAX에 관해 가능한 한 자세하게 설명하시오.
JSONP의 작동 방식을 설명하시오(그리고 어떻게 JSONP가 진정한 AJAX가 아닌지도).
자바스크립트 템플릿을 써본 적이 있습니까? 그렇다면 무엇을 어떻게 쓰셨나요?
호이스팅(hoisting)에 관해 설명하시요.
FOUC가 뭔가요? FOUC를 피하는 방법은?
이벤트 버블링에 관해 설명하시오.

자바스크립트 객체에 내장된 기능을 확장하는 것이 안 좋은 이유는?
내장 기능(built ins)을 확장하는 것이 좋은 이유는?

== 와 ===의 차이점은?
브라우저 창의 URL로 전달된 질의 문자열 매개변수를 가져하는 방법을 설명해 보세요.
자바스크립트와 관련된 동일 출처 정책(same-origin policy)에 관해 설명해 보세요.
이벤트 위임에 대해 설명해 보세요.
자바스크립트의 상속 패턴에 대해 설명해 보세요.

>~~3.14
질문: 위 구문은 어떤 값을 돌려주는가? 답: 3

"i'm a lasagna hog".split("").reverse().join("");
질문: 위 구문은 어떤 값을 돌려주는가? 답: "goh angasal a m'i"

( window.foo || ( window.foo = "bar" ) );
질문: window.foo의 값은 무엇인가? 답: "bar" window.foo의 초기값이 false나 udefined, 또는 0일 경우. 그 밖의 경우에는 기존 값을 유지

var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
질문: 두 alert 문의 결과는? 답: "Hello World" 와 ReferenceError: bar is not defined
/**

2. 다음의 조건에 맞는 익명 function을 작성하시오.
 - 작성한 함수는 new로 객체 생성하지 않고 그대로 var modulePattern에 할당한다.
 - 할당 받은 modulePattern에는 내부 function이 2가지가 있다.
 - add()는 현재 modulePattern이 가지고 있는 수를 +1 시키는 것이다
 - reset()은 현재  modulePattern이 가지고 있는 수를 0으로 전환 시킨다.

**/

var modulePattern = (function() {

    var sum = 0 ;

    return {
        add:function() {
            sum = sum + 1;
            return sum;
        },
        reset:function() {
            return sum = 0;    
        }  
    }   
}());

console.log(modulePattern.add());   
console.log(modulePattern.add());  
console.log(modulePattern.reset());
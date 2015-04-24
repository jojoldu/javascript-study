/**

1. 아래에는 클로저를 잘못 사용한 코드가 있다. 
주석에 나온것처럼 출력이 되도록 코드를 수정하시오.

**/

function makeArmy() {

  var shooters = [];

  for(var i=0; i<10; i++) {

    var shooter = function() { 
      console.log(i); 
    }

    shooters.push(shooter);   
  }

  return shooters;
}

var army = makeArmy();
army[0](); // 0이 출력되어야 함
army[5](); // 5가 출력되어야 함



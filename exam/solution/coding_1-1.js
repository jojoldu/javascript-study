/**

1. 아래의 코드는 makeNumber function을 사용하여 
0~10사이의 숫자를 출력하는 각각의 function이 printers 배열에 담는 것이었다.
하지만 코드를 잘못 작성하여 어떻게 호출해도 모든 출력값은 10이 나온다.
해당 코드를 수정하여 원하는 결과화면이 나오도록 하시오.

**/

function makeNumber() {

  var printers = [];

  for(var i=0; i<10; i++) {

    var printer = function(i) { 
      return function(){
      		console.log("지금 호출하신 함수는 "+i + "를 출력하는 함수입니다."); 
      	} 
    }(i);

    printers.push(printer);   
  }

  return printers;
}

var num = makeNumber();
num[0](); 
num[1]();
num[2]();
num[3]();
num[4]();
num[5]();  


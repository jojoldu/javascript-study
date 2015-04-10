/**
	클로저
**/

//1. 아래의 결과는 -1인가??
function outter() {
  var name = "Led Dong Uk";

  function inner() {
    console.log(name);
  }

  return displayName;
}

var myFunc = outter();
myFunc();


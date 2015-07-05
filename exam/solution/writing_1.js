/**

1. 자바스크립트의 원시형(primitive type)을 모두 나열하시오.




2. undefined와 null에 대해 비교하시오.





3. == 과 ===의 차이를 설명하시오. 





4. 다음 코드의 실행결과를 예측하시오. (3개다 맞춰야 정답)
var a;
console.log(a == undefined);    //true
console.log(a == null);         //true
console.log(null == undefined); //true


5. 다음 코드의 실행코드를 예측하시오.
 console.log(true && '이동욱');            //이동욱
 console.log('자바스크립트' && '스터디');  //스터디
 console.log( 0 || '이동욱');              //이동욱



6. 호이스팅에 대해 설명하시오.







7. 다음 코드의 실행결과를 예측하시오.

console.log(add(5));      //10

function add(x){
	return x+x;

}
console.log(add);         //function add(){~}

var add = 0;

console.log(add);         //0


8. 다음 (1), (2) 두 코드의 차이점을 설명하시오.
function Person(){
	return 'hello world';
} 

var person = Person();     ------------- (1)

var person = new Person(); ------------- (2)


9. 자바스크립트의 프로토타입에 대해 설명하시오.





10. 다음 코드의 실행결과를 예측하시오. 
var A = function () {
    this.x = function () {
         console.log('hello');
    };
};

A.x=function() {
    console.log('world');
};

var B = new A();
var C = new A();

B.x(); //hello
C.x(); //hello

11. 다음 코드의 실행결과를 예측하시오.
var A = function () { };

A.x=function() {
    console.log('hello');
};

A.prototype.x = function () {
     console.log('world');
};

var B = new A();
var C = new A();

B.x();  //world
C.x();  //world


12. 콜백함수에 대해 설명하시오.





13. 클로저에 대해 설명하시오.





14. 다음 코드의 실행결과를 예측하시오.
function add(x) {
  return function(y) {
    return x + y;
  };
}

var five = add(5);
console.log(five(10));  //15
console.log(five(100)); //105


15. 다음의 코드를 수정하지 않고, 결과화면이 나올 수 있도록 코드를 추가하시오.
(단, Developer 은 Person을 상속해야 함 )

function Person(name){
	this.name = name;
  this.introduce = function(){
    return '내 이름은 ' + this.name;
  }
}

function Developer(name){
	this.name = name;
}
Developer.prototype = new Person();
Developer.prototype.coding = function(){
    return "hello world";
}
var dev = new Developer('이동욱');
console.log(dev.name);
console.log(dev.introduce());
console.log(dev.coding());



**/


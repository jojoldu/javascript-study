/**
	렉시컬 특성
**/

var x = "global";

function f(){
	console.log("f1: " + x); //결과는?

	var x = "local";
	
	console.log("f2: " + x); //결과는?
};

console.log("global1: " + x); //결과는?

f();

console.log("global2: " +x); //결과는?


var i = 5;
 
function a(){
    var i = 10;
    b();
}
 
function b(){
    console.log(i);
}
 
a();
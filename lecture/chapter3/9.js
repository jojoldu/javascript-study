/**
	3.9 콜백함수
**/
var count = 1;

function sayHello(){
	console.log("Hello?", count);
	count++;
};


var a=1;
function aa(){
	a=2;
}
aa();
console.log(a);
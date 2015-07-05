/**
	3.6
**/

function add(x, y){
	var sum  = x+y;
	return sum;
};

add.description = "I'm function";

console.log(add(10,1));

var plus = add;

console.log(plus(5,5) + " / "+ plus.description);

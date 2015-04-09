var x = 1;
function outer(){
	var y = 2;

	(function inner(){
		var z = 3;
		var a = x;
		console.log("x : " + x + "/ y : " + y + "/ z : " + z + " /a : " +a );
	}());
}

outer();
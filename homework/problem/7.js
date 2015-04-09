/**
	Customizing Calculator
**/

function upgradeCalculator(num1, num2, func){
	func(num1, num2);
};

upgradeCalculator(5, 5, 
	/**

	**/
);

function prevCalculator(num1, num2, name){

	switch(name){
		case 'add':
			console.log(num1 + num2);
			break;
		case 'minus':
			console.log(num1 - num2);
			break;
		case 'multiple':
			console.log(num1 * num2);
			break;
		case 'divide':
			console.log(num1 / num2);
			break;
		default:
			console.log("error");
	}
};

prevCalculator(5, 5, 'add');


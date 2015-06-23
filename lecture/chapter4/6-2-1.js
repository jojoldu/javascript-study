/**
	클로저의 활용#2-1
	 - 함수의 캡슐화

	"I am XXX. I live in XXX. I'am XX years old" 라는 문장을 출력하는데,
	X 부분은 사용자에게 인자로 입력받아 값을 출력하려면?
**/


var getCompletedStr = (function (){

	var strArr = ["I am ", "", " I live in ", "", " I'am ", "", " years old" ];

	return function(name, city, age){
		strArr[1] = name;
		strArr[3] = city;
		strArr[5] = age;	
			
		return strArr.join("");
	}
	
})();

var str = getCompletedStr('DongUk', 'Seoul', '29');
console.log(str);
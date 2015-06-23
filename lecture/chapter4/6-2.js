/**
	클로저의 활용#2
	 - 함수의 캡슐화

	"I am XXX. I live in XXX. I'am XX years old" 라는 문장을 출력하는데,
	X 부분은 사용자에게 인자로 입력받아 값을 출력하려면?
**/

var strArr = ["I am ", "", " I live in ", "", " I'am ", "", " years old" ];

function getCompletedStr(name, city, age){
	strArr[1] = name;
	strArr[3] = city;
	strArr[5] = age;

	return strArr.join("");
};

var str = getCompletedStr('DongUk', 'Seoul', '29');
console.log(str);


/**

	위 코드는 strArr 이라는 전역 변수를 사용하므로
	언제든지 strArr 변수의 값이 변경될 위험이 있다.
	이를 대비하기 위해 코드를 수정하면?
**/
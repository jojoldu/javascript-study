function showMessage(){
	alert("안녕하세요");
}


//속성찾기
function getProps(obj){

	for(prop in obj){
		console.log("속성명 : "+prop + " 값 : " + obj[prop]);
	}
};

//테스트용 객체
function MyObject(){
	var name;
	var age;
	var job;

	var setName=function(x){
		name = x;
	}
};

var arr = [1,2,3,4];

var str = "안녕하세요";

var num = new Number(123);

var customObj = new MyObject();
customObj.name = "이동욱";
customObj.age = 29;
customObj.job = "developer";


getProps(arr);
getProps(str);
getProps(num);
getProps(customObj);


/**
	회원가입 프로그램
**/

var company = signIn("zum internet", "서초구 반포대로 3 이스트빌딩");
var student = signIn("이학생", 29, "금오공대");
var developer = signIn("김개발", 870912, "zum internet", 3);

var skillStack = [];
skillStack.push("java");
skillStack.push("javascript");
skillStack.push("mySql");
skillStack.push("bootstrap");

var freelancer = signIn("최프리", "010-3583-1515", skillStack , 6);

var memberList = [company, student, developer, freelancer];


function signIn(){
	var args_len = arguments.length;
	var object;

	switch(args_len){
		case 2:
			object = new Campany(arguments[0], arguments[1]);
			break;	

		case 3:
			object = new Student(arguments[0], arguments[1], arguments[2]);
			break;

		case 4:
			object = new Developer(arguments[0], arguments[1], arguments[2], arguments[3]);
			break;			
	};

	return object;
};

function getMemberList(list){
	var i, prop,
		member;

	for(i=0;i<list.length;i++){
		console.log("============================");

		member = list[i];
		
		for(prop in member){
			console.log(prop + " : " + member[prop]);
		}
	}
};

getMemberList(memberList);

function Campany(name, location){
	this.name = name;
	this.location = location;
};

function Student(name, age, campus){
	this.name = name;
	this.age = age;
	this.campus = campus;
};

function Developer(name, freeProp1, freeProp2, developYear){
	this.name = name;
	
	if(typeof freeProp1 === 'number'){
		this.birthday = freeProp1;
	}else if(typeof freeProp1 === 'string'){
		this.phoneNumber = freeProp1;
	};

	if(typeof freeProp2 === 'string'){
		this.campany = freeProp2;
	}else if(typeof freeProp2 === 'object'){
		this.skillStack = freeProp2.toString();
	};

	this.developYear = developYear;	
};

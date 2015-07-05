function Member(name, job, workMonth){
	this.name = name;
	this.job = job;
	this.workMonth = workMonth;
};

var memberList = [];
memberList.push(new Member('홍길동', 'java개발자', 2));
memberList.push(new Member('장길산', 'php개발자', 3));
memberList.push(new Member('이순신', '프론트개발자', 6));
memberList.push(new Member('장보고', 'asp개발자', 5));

function getDeveloperList(memberList){
	
	var memberList = memberList;
	var i, prop,
		member, 
		propValue;

	for(i=0; i<memberList.length;i++){

		member = memberList[i];

		for(prop in member){

			propValue = member[prop];
			
			switch(prop){
				case 'name':
					console.log("이름 : " + propValue);
					break;

				case 'job':
					console.log("직업 : " + propValue);
					break;

				case 'workMonth':
					if(propValue >= 5){
						console.log("중급 개발자입니다.");
					}else{
						console.log("초급 개발자입니다.");
					};
					break;

				default :
					console.log("없는 개발자입니다.");
					break;
			};
		};
		console.log("====================");
	}
};

getDeveloperList(memberList);
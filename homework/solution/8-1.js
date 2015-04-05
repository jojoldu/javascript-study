
var array = [1,20,3,6,54,4,9,10];

function sortSelector(arr, sortType){


	if(typeof arr !== 'object'){
		console.log("올바른 값을 입력해주세요.");
		return;
	}

	if(sortType === "asc"){
		arr.sort(function(a, b){
			console.log("오름차순 정렬입니다.");
			return a-b;
		});

	}else{
		arr.sort(function(a, b){
			console.log("내림차순 정렬입니다.");
			return b-a;
		});	
	}

	console.log(arr);
};

sortSelector(array, "asc"); //오름차순 정렬
sortSelector(array, "desc"); //내림차순 정렬
sortSelector("배열", "asc"); //입력 에러

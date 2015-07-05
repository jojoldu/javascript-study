/**

	8.3 JSON
	 - 인터넷을 통해 주고 받는 데이터 양이 커지면서, 좀 더 가볍고 직관적인 방식으로 데이터를
	 표현하는것이 필요하게 되었다.
	 기존에는 XML 형태로 사용해왔지만, 2001년 더글라스 크락포드가 텍스트 형식으로 데이터를 저장하는 자바스크립트 문법을 JSON이라 명명하고 제안하였다.
	 현재는 클라이언트 <-> 서버 통신을 할때 대부분은 이러한 JSON 타입으로 하고 있다.

	 - JSON은 { "속성명" : "값", "속성명2" : "값2" } 으로 표현한다.  

**/
$(function(){

	var $submitBtn = $("#submit");
	var $id = $("#id");
	var $name = $("#name");
	var $age = $("#age");

	$submitBtn.click(function(){
		$.ajax({
			type:"GET",
			url:"http://localhost:8087/js/study/jojoldu",
			dataType:"jsonp",
			success:function(result){
				$id.val(result.id);
				$name.val(result.name);
				$age.val(result.age);
			}
		});
	});
})

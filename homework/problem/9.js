
/** 
	1) Book 객체를 생성하는 function을 만드세요.
	 - Book 객체는 name, category, price, author, salePrice를 속성으로 가지고 있습니다.
	 - 모든 속성은 get/set function외에는 접근이 불가능 합니다.
	 - showInfo function은 현재 Book이 가지고 있는 속성과 속성의 값을 확인할 수 있습니다. 
	

**/
var Book = (function(){

	/**
		코드를 작성해주세요.
	**/

})();

Book.setName('자바스크립트 객체지향 프로그래밍');
Book.setCategory('IT');
Book.setPrice(25000);
Book.setAuthor('황인균');
Book.setSalePrice(70);
Book.showInfo();

console.log("======= Book 정보 변경 =======");
Book.setName('자바스크립트 핵심가이드');
Book.setCategory('IT');
Book.setPrice(22000);
Book.setAuthor('더글라스 크락포드');
Book.setSalePrice(70);
Book.showInfo();
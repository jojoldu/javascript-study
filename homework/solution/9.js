
/** 
	Book 객체를 생성하는 function을 만드세요.
	Book 객체는 name, category, price, author, salePrice를 속성으로 가지고 있습니다.
	모든 속성은 get/set function외에는 접근이 불가능 합니다.
	name, category, price, author는 생성자에서 받을 수 있습니다.
	salePrice는 생성자로 값을 넣을수 없습니다.

**/
var Book = (function(){

	/**
		코드를 작성해주세요.
	**/
	var name;
	var category;
	var price;
	var author;
	var salePrice;

	return {
		getName : function(){
			return name;
		},
		setName : function(name){
			this.name = name;
		},

		getCategory : function(){
			return category;
		},
		setCategory : function(category){
			this.category = category;
		},

		getPrice : function(){
			return price;
		},
		setPrice : function(price){
			this.price = price;
		},

		getAuthor : function(){
			return author;
		},
		setAuthor : function(author){
			this.author = author;
		},

		getSalePrice : function(){
			return salePrice;
		},
		setSalePrice : function(saleRate){
			this.salePrice = (this.price * saleRate)/100;
		},

		showInfo : function(){
			var str = ' name : ' + this.name +
					'\n category : ' + this.category + 
					'\n price : ' + this.price +
					'\n author : ' + this.author +
					'\n salePrice : ' + this.salePrice; 

			console.log(str);
		}
	}
})();


Book.setName('자바스크립트 객체지향 프로그래밍');
Book.setCategory('IT');
Book.setPrice(25000);
Book.setAuthor('황인균');
Book.setSalePrice(70);
Book.showInfo();

Book.setName('자바스크립트 핵심가이드');
Book.setCategory('IT');
Book.setPrice(22000);
Book.setAuthor('더글라스 크락포드');
Book.setSalePrice(70);
Book.showInfo();


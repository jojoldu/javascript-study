/*
	
	3-2. call()과 apply()는 어디에 쓰는 것인가??
	
*/

function Product(name, price){
	this.name = name;
	this.price = price;
}

function Food(name, price){
	Product.call(this, name, price);
	this.category = 'food';
}

function Toy(name, price){
	Product.call(this, name, price);
	this.category = 'toy';
	this.site = 'www.disney.co.kr/';
}

var food = new Food('apple', 1000);
var toy = new Toy('doll', 9000);

console.log(food);
console.log(toy);



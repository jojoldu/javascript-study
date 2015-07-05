
/**
	외부 프로젝트로 고기 매장시스템 구축을 하게 되었습니다.
	아래와 같은 요구조건을 만족하는 프로그램을 작성하세오.

    * 구현 가능한 범위까지만 구현합니다.

	1. 손님의 유형
	: 모든 손님은 각자 회원번호를 지니고 있습니다.
	: 손님 유형마다 주문가능한 메뉴가 있습니다.
	: 몇몇 손님은 할인된 금액을 확인할 수 있습니다.
	: 몇몇 손님은 포인트를 적립할 수 있습니다.

	 1) 일반 손님
	  - 회원번호 : 0
	  - 주문가능 메뉴 : 삼겹살, 돼지갈비, 목살

	 2) 쿠팡 손님
	  - 회원번호 : 1
	  - 할인율 : 40%
	  - 주문가능 메뉴 : 삼겹살, 돼지갈비

	 3) 장기예약 손님
	  - 회원번호 : 2 
	  - 할인율 : 20%
	  - 주문가능 메뉴 : 삼겹살, 돼지갈비, 목살, 항정살, 차돌박이
	  - 포인트 적립 5% 

	 4) VIP
	  - 회원번호 : 3
	  - 할인율 : 30%
	  - 주문가능 메뉴 : 전메뉴
	  - 포인트 적립 10%

	 5) etc... 
	  - 고객사의 요청에 따라 언제든지 다른 유형의 손님이 추가될 수 있음

	2. 계산대
	 - 각 손님의 유형에 따라 할인율 적용하여 계산함
	 - 각 손님의 유형에 따라 포인트 적립
	
	3. 메뉴판
	 - 삼겹살, 돼지갈비, 목살, 항정살, 차돌박이, 한우등심, 한우갈비, 육회


**/

function Menu(name, price){
	this.name = name;
	this.price = price;
};

var menus = [ new Menu("삼겹살", 6000), 
			  new Menu("돼지갈비", 6000),
			  new Menu("목살", 8000),
			  new Menu("항정살", 10000),
			  new Menu("차돌박이", 10000),
			  new Menu("한우등심", 12000),
			  new Menu("한우갈비", 12000),
			  new Menu("육회", 18000)
			];


function Customer(no, menu, count){
	this.no = no;
	this.menu = menu;
	this.count = count;
};


var normal = new Customer(0, "삼겹살", 3);
var coupang = new Customer(1, "돼지갈비", 4);
var coupang2 = new Customer(1, "차돌박이", 4);
var subscriber = new Customer(2, "항정살", 3);
var vip = new Customer(3, "육회", 3);


Customer.prototype.limit=0;
normal.limit = 2;
coupang.limit = 1;
coupang2.limit = 1;
subscriber.limit = 4;
vip.limit = menus.length-1;


coupang.discount = 0.6;
coupang2.discount = 0.6;

subscriber.discount = 0.8;
subscriber.point = 0.05;

vip.discount = 0.7;
vip.point = 0.1;

function calculate(customer){

	var no = customer.no;
	var menu = customer.menu;
	var limit = customer.limit;
	var count = customer.count;

	var menuNo, menuPrice,
		i;

	for(i=0;i<menus.length;i++){
		if(customer.menu === menus[i].name){
			menuNo = i;
			menuPrice = menus[i].price;
		}
	}
	
	if(menuNo > limit){

		console.log("주문할 수 없는 고기입니다.");

	}else{
		console.log("드신 고기는 "+ menu +"입니다.");

		switch(no){
			case 0: //일반손님
				console.log("총 가격은 " + (menuPrice * count) +"원 입니다.");
				break;

			case 1: //쿠팡손님
				console.log("총 가격은 " + (menuPrice * count * customer.discount) +"원 입니다.");
				break;

			case 2: //장기예약손님
				console.log("총 가격은 " + (menuPrice * count * customer.discount) +"원 입니다.");
				console.log("총 "+( menuPrice * count * customer.discount * customer.point)+"원 적립되었습니다.");
				break;

			case 3: //VIP
				console.log("총 가격은 " + (menuPrice * count * customer.discount) +"원 입니다.");
				console.log("총 "+( menuPrice * count * customer.discount * customer.point)+"원 적립되었습니다.");
				break;

			default:
				console.log("없는 유형의 손님입니다.");
				break;
		}		
	}

	console.log("===============");
};

calculate(normal);
calculate(coupang);
calculate(coupang2);
calculate(subscriber);
calculate(vip);

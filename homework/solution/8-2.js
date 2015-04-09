/**
    할인가 계산기
**/

function getSalePrice(price, func){

    var salePrice;

    console.log("정가는 : " + price + "원 입니다.");

    salePrice = func(price);

    console.log("할인 된 가격은 : " + salePrice + "원 입니다.");
};

//10000원의 50% 가격에 추가 할인 -500원
getSalePrice(10000, function(price){
	return (price * 0.5) - 500;
});

//14000원의 70% 가격에 추가 할인 -700원
getSalePrice(14000, function(price){
	return (price * 0.7) - 700;
});

//22000원의 55% 가격에 추가 할인 -1200원
getSalePrice(10000, function(price){
	return (price * 0.55) - 1200;
});
/*

	6.2 prototype, constructor, 인스턴스

	흔히 잘못알고 있는 상식중에 하나가
	생성자 funcionn -> prototype -> 생성된 객체(이하 인스턴스)
	순으로 상속되고 있다는건데
	정확하게는 prototype과 인스턴스간에는 관계가 있지만
	생성자 funcion과 인스턴스는 관계가 없다.
	this.속성 식으로 하면 인스턴스에 영향을 끼칠수 있다고 생각할 수도 있는데
	그건 인스턴스를 생성할때까지만 영향을 끼친다.

*/

function Person(){
	this.name = "이동욱";
}
Person.personProp = "person";
Person.prototype.protoProp = "prototype";

var p = new Person();
p.instanceProp = "instance";

console.log(p.personProp);
console.log(p.protoProp);
console.log(p.instanceProp);

/*
	위 코드의 결과를 보면 명확히 알 수 있는 것이,
	인스턴스는 자신의 속성중에 찾고자 하는 속성이 없으면 
	생성자의 prototype속성은 검사하지만 생성자의 속성은 검사하지 않는다
	생성되고 난 인스턴스와 생성자는 아무런 관계가 없기 때문이다.
*/


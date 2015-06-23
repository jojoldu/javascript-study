/**

	apply 함수를 활용하여 부모의 속성을 복사하는 방식에서 

**/


function Person(name) {
    this.name = name || "혁준";
}
 
Person.prototype.getName = function(){
    return this.name;
};
 
function Korean(name){
    Person.apply(this, arguments);
}
 
var kor1 = new Korean("지수");
console.log(kor1.name);  // 지수
console.log(kor1.getName()); 
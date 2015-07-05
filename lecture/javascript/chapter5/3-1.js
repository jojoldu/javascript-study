/**
	자바스크립트 상속#1

**/

//아래와 같은 코드가 있다고 하자
function Person(name){
   
    this.name = name;
    
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}

var p1 = new Person('DongUk');
console.log(p1.introduce());



function Person(name){
    this.name = name;
}

Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}

var p2 = new Person('DongUk2');
console.log(p1.introduce());
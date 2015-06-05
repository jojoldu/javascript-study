/*
	Javascript 내부함수를 활용
*/

var numbers = [5, 6, 2, 3, 7];


var max = Math.max.apply(null, numbers); 

var min = Math.min.apply(null, numbers);

max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("max : " + max);
console.log("min : " + min);

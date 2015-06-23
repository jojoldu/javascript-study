/**

	1-3. 배열객체의 프로토타입 속성

**/

// 1) concat
// var arr11 = ["a","b","c"];
// var arr12 = [1,2];
// var result1 = arr11.concat(arr12);
// console.log(result1);





// 2) join
// var arr21 = ["a","b","c"];
// console.log(arr21.join());





// 3) slice
// var arr31 = ["a","b","c","d","e"];
// console.log(arr31.slice(2));
// console.log(arr31.slice(2,4));
// console.log(arr31.slice(-1));





// Q1) "cde234" 와 같은 결과를 출력하려면??

// var q1 = ["a","b","c","d","e"];
// var q2 = [1,2,3,4,5];

// var r1 = q1.slice(2);
// var r2 = q2.slice(1,4);

// console.log(r1);
// console.log(r2);
// console.log(r1.concat(r2).join());  





// 4) push
// var arr41 = ["a","b","c","d"];
// var arr42 = [];
// for(var i=0;i<arr41.length;i++){
// 	arr42.push(arr41[i]);
// }
// console.log(arr42);
// var arr43 = arr41.push(1,2);
// console.log(arr41);
// console.log(arr43); //왜 6이 나오나???




// 5) sort
var arr51 = ['d','a','c','e','b'];
console.log(arr51.sort());




// // 6) reverse
var arr6 = arr51.reverse();
console.log(arr6); 
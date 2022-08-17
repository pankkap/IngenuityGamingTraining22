// ES5 Based Function

// var add = function (a, b) {
//   return a + b;
// };

// console.log(add(5, 10));

// ES6 Fat Arrow Function (short syntax)

// variation-3
var add = (a, b) => a + b;
console.log(add(5, 15));

// variation-1
var sayHello = () => console.log("This is Arrow function of Variation-1");
var sayHello = () => {
  console.log("This is Arrow function of Variation-1");
  console.log("This is Statement-2");
};

sayHello();

// variation-2
var sqr = (a) => console.log("Result: " + a * a);
sqr(5);

var myArr = [1, 3, 5, 7];
myArr.forEach((a) => console.log(a * 10));

// // function parts
// // 1. Function Defination
// // 2. Function Calling
// // 3. Function Arguments (optional)
// // 4. Return value (optional)

// const { Scope } = require("eslint-scope");

// // Function Versions
// // 1. function without arguments and without return

// function myFunction1() {
//   // function defination
//   console.log("This is Function");
//   console.log("It will perform some tasks");
// }

// myFunction1();
// myFunction1();
// myFunction1();
// myFunction1();
// myFunction1();

// // 2. Function with arguments and without return

// function myFunction2(a, b) {
//   console.log("Function with Data");
//   console.log("Result = " + (a + b));
// }
// myFunction2(5, 10);

// // 3. Function with arguments and with return

// function myFunction3(a, b) {
//   return a + b;
// }

// var result = myFunction3(10, 20);
// console.log("Result = " + result);
// console.log("Data Recieved = " + myFunction3(30, 25));
// console.log("Data Recieved = " + myFunction3("Hello", "World"));

// // function sayHi(message) {
// //   if (!message) return;
// //   else return message;
// // }

// // console.log(sayHi("Hello"));
// // console.log(sayHi());

// // function add(a, b = 0) {
// //   //   if (b == undefined) {
// //   //     b = 0;
// //   //   }
// //   return a + b;
// // }

// // console.log("Sum of Number" + add(5, 23));
// // console.log("Sum of Number" + add(5));

// // function sum() {
// //   console.log(arguments.length);
// // }

// // sum(1, 2);
// // sum(1, 2, 3, 4, 5, 6);
// // sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // We can also create Function using Constructor

// var myFunction4 = new Function("a", "b", "return a+b");
// // function myFunction3(a, b) {
// //   return a + b;
// // }

// console.log("Function using Constructor: " + myFunction4(5, 7));

// // Function Expression: It means storing function defination inside a variable is called function Expression. It is also know as Anonymous Function.
// // var a = 10;
// var a = function () {
//   console.log("This is Function Expression");
//   return "Hello Friends";
// };
// console.log(a());

// // Self-Invoking Function

// (function () {
//   console.log("This is an Anonymous Function and its get called itself");
// })();

// // Function Hoisting

// // sayHello(5, 10);

// // function sayHello(a, b) {
// //   console.log("Result = " + (a + b));
// // }

// Add(5, 10);

// // Hoisting of function expression not allowed
// var Add = function () {
//   return a + b;
// };



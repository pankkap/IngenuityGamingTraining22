// JavaScript Scope: Visibility of Code
// There are three types of Scope
// 1. Block Scope
// 2. Function Scope
// 3. Global Scope

// 1. Block Scope: ES5 there is no block, its available in ES6 (let and const)

var c = 30;
function Scope1() {
  var a = 10;
  console.log("Inside Scope1");
  console.log(a);
  console.log(c);
  function Scope2() {
    var a = 20;
    var b = 20;
    console.log("Inside Scope2");
    console.log(a);
    console.log(b);
    console.log(c);
  }
  Scope2();
  //   console.log(b);
}

Scope1();
console.log("Outside Scope1");
console.log(c);
// console.log(a);

function checkvar() {
  // a varibale that is create inside function without var is treated as Global variable and have global scope
  data = 20;
  console.log(data);
}
checkvar();
console.log(data);

function add(a, b) {
  return a + b;
}

var sum = add;
// Reference of add() is also stored in sum
// so we call the function using add() as well sum()

// console.log(sum(5, 10));
// console.log(add(5, 10));

// Passing function as argument

// function avg(a, b, x) {
//   return x(a, b) / 2;
// }

// var result = avg(5, 10, sum);
// console.log("Final Result= " + result);

// Function to create Objects

// Class
function Person() {
  // properties

  this.name = " Pankaj";
  this.age = 30;

  // methods
  this.details = function () {
    return "Name = " + this.name + " Age: " + this.age;
  };
}

var obj1 = new Person();
console.log(obj1.name);
obj1.name = "Sachin";
console.log(obj2.details());

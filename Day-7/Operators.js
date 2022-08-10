// JavaScript Operators

// Arithmetic Operator
// +, -, *, /, %, ++, --

var a = 20,
  b = 10;

var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % 3;
console.log("Result = " + c);
console.log("Result = " + d);
console.log("Result = " + e);
console.log("Result = " + f);
console.log("Result = " + g);
console.log("Result = " + ++g); // 3
console.log("Result = " + g++); // 3
console.log("Result = " + g--); // 4
console.log("Result = " + --g); // 2

// Relation Operators
// <,>,<=, >=, ==, ===, !=, !==
// Results in TRUE and FALSE

(a = 10), (b = 20), (c = 30);

console.log(a < b); // true
console.log(a > b); // false
console.log(a <= b); // true
console.log(a >= b); // false
console.log(a != b); // true

a = "20";
// comparision Op: it compares the value
console.log(a == b); // true

// Strict comparision Op: it compares the value as well datatype
console.log(a === b);

console.log(a != b); // false
console.log(a !== b); // true

// Logical Operator
// var result = "Hello" && a == b;
var result = "Hello" || a != b;
console.log("Logical OR:" + result);
console.log("Logical Not:" + !result);

// Assignment Operators
// =, +=, -=, /+, *=, %=
b = 55;
console.log((a = b)); //55
console.log((a += b)); //110

// Ternary Operator
result = a != b ? "Hi! This is True" : "Hi! This is False";
console.log(result);        // Hi! This is True

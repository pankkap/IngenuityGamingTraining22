// JavaScript Arrays
// 1. USing Array Literal
// 2. Using Array Constructor

var stringArray = ["One", "Two", "Three"]; // String Literal Array
var numericArray = [1, 2, 3, 4, 5, 6]; // Integer Array
var decimalArray = [1.1, 1.2, 1.3, 1.4]; // Deciaml Array

// Array of Mixed Primitive Data types
var mixedArray = ["One", 2, 3.1, true, "Ok"]; // Mixed Data
console.log(mixedArray);

// Array of Mixed Data Structure (Non-primitive Data Types)
var mixDSArray = [
  { task1: "Assignments" }, // Array with Object
  [1, 2, 3], // Array of Array
  function sayHi() {
    // Array with FUnction
    return "Mixed Array";
  },
];

// Accessing Individual Element
console.log(mixDSArray[0].task1);
console.log(mixDSArray[1][1]);
console.log(mixDSArray[2]());
console.log(mixedArray[3]);

// Update Individual Element value
mixDSArray[1][2] = 5;
console.log(mixDSArray[1]);
mixedArray[0] = "Ok OK Ok";

console.log(mixedArray);

for (var i = 0; i < mixDSArray.length; i++) console.log(mixDSArray[i]);

// creating an Array using Constructor

var newArr = new Array("Sachin", "Manish", "Aastha", "Payal", "Gaurav");

newArr[5] = "New Element";
console.log(newArr);

//Array Methods for inserting and removeing elements from Array
newArr.push("Raman");
newArr.push("Sonia"); // add new element at the end
console.log(newArr);
newArr.unshift("NewData"); // add element in starting
console.log(newArr);
newArr.shift(); // remove element from starting
newArr.pop(); // Remove element from last
console.log(newArr);

// Reverse and Sort function

// newArr.sort();

var reversedArr = [...newArr].reverse();
console.log(newArr);
console.log(reversedArr);

for (var i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}

var myArr = ["Sachin", "Manish", "Aastha", "Payal", "Gaurav"];

myArr.forEach(myFunction); //callback function: It is function inwhich function calls another function

function myFunction(item) {
  console.log("Hello " + item + "having characters: " + item.length);
}

myArr.forEach(function (element) {
  console.log("Hi " + element);
});

myArr.forEach((element) => console.log(element));

// Test Function
// some(): It is a test function which is testing the elments of the array

function checkMinor(age) {
  return age < 18;
}

var ageArr = [34, 23, 20, 26, 19];

// checks wheather ageArr contains any element that is less than 18
let check = ageArr.some(checkMinor);
console.log(check);

// Multidimensional: Array of Arrays
var team = [
  ["Ankit", 25],
  ["Sachin", 30],
  ["Sara", 32],
];
// console.log(team[1]);
team.forEach(function (i) {
  console.log("Name: " + i[0] + " Age: " + i[1]);
  //   i.forEach((x) => console.log(x));
});

// Splice Function: Used to add and Remove elements in the array.
var dataArr = [1, 2, 3, 4, 5, 6, 7];
dataArr.splice(3, 2, 8, 10);
console.log(dataArr);

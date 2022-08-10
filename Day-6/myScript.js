// output statement
//   document.write("Hello WOrld!! ");
//   window.alert("This is JavaScript");
//   console.log("This is console to debug your code");
//-----------------------------------------------
// Single line Comment
/* Multile Line
      Comments*/
//-----------------------------------------------
// Variables in JavaScript
var name;
name = "Pankaj Kapoor";
var Name = "xyz";

// Variables Rules
//  1. variable are casesensitive
//  2. variable name can not start from Number
//  3. Only underscore (_) is used as special symbols
//  4. spaces are not allow between variable name
//  5. you can not use variable name as keyword
//  var first name = "Pankaj";   // not allowed
//  var firstName;               // allowed

//-----------------------------------------------
//   Datatypes in JavaScript;

// String DT
var firstName = "Koenig";
var lastName = "Solutions";

// Number DT
var distance = 40;
var exactDistance = 40.7;

// Boolean DT
var isOpened = false;

console.log(typeof firstName);
console.log(typeof distance);
console.log(typeof isOpened);

var training;
console.log(typeof training);

var trainingType = "ILO";
console.log(typeof trainingType);

//-----------------------------------------------
// Type of Programming Language
// JavaScript is typeless (Loosely Typed Language)
// which make javascript to be dynamic

firstName = 50000;
console.log(typeof firstName);

// Dynamic behaviour of JavaScript
function sayHi(value) {
  if (value) {
    console.log("The statement is correct");
  } else {
    console.log("The statement is incorrect");
  }
}
sayHi("true");

//-----------------------------------------------
lastDay = "Monday";
console.log(lastDay);

// JavaScript worked in two modes
//   1. Sloppy Mode
// By Default Mode

//   2. Strict Mode
//    "use strict";

//-----------------------------------------------
// Dialog Boxes
//   1. alert: use to display some message  as notification
//   2. confirm: a Dialog box which input as "Yes" or "No"
//   3. prompt: Use to take input from user

//   alert("This is Simple Notification")
//   var isOk = confirm("Are your sure to go Further");
//   console.log(isOk);

var fullName = prompt("Enter your Fullname");
console.log(fullName);

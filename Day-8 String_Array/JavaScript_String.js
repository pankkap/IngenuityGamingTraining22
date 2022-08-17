// There are two ways to Create a String
// 1. String Literals
// 2. Using String Constructor

var str1 = "Hello World"; // String Litrals
var str2 = "Hello World"; // String Litrals

// Escape also help to add special character in JavaScript
var str3 = "This is Gameing's Training Session";
var str4 = "This is Gameing's Training Session";

// 2. String with constrcutor

var myStr1 = new String("Hello World");     // String Object
console.log(myStr1);

console.log("===Comparing Literal vs Object===");
console.log(myStr1 === str1);
console.log(typeof myStr1);
console.log(typeof str1);

// Access (Iterate over String)
for (var i = 0; i < str1.length; i++) console.log(str1[i]);

// using for..of
for (var ch of myStr1) {
  console.log(ch);
}

// concatenate using + Operator
var str = "hello" + "Hi" + str1;
console.log(str);

// String Methods
//-------------------------------------------------------
var strOne = "JavaScript is a Programming Lanaguage of Web";
var strTwo = "fontend and backend development";

console.log(strOne.charAt(5)); //a
// check what character at perticular index

console.log(strOne.charCodeAt(1)); //a
// unicode character of given index

// Merging the two strings
var newStr = strOne.concat(strTwo);
console.log(newStr);

// Check weather a string ended with a subString mentioned
console.log(strOne.endsWith("Web"));

//Check weather a string is availale or not
console.log(strTwo.includes("end"));    // return true or False

// check the first and Last index of mentined Strinf
console.log(strTwo.indexOf("end"));
console.log(strTwo.lastIndexOf("ends"));

// Match the string based on Regular Expersion
console.log(strTwo.match(/End/gi));

console.log(strOne.repeat(3));
// Repeat the string

// Replace the substring with given substring
console.log(strTwo.replace(/development/g, "DEV"));
console.log(strOne.replace("is", "IS"));

// Search give the string in String and it returns the location
console.log(strTwo.search("end"));

console.log(strOne.split(" "));
// Spilt method create an array of string with the given (split literal)

// Extracting the Substring
var mysub = strOne.substring(0, 10);
console.log(mysub);

// conversion into Uppercase and Lowercase
console.log(strOne.toLowerCase());
console.log(strOne.toUpperCase());

// Removing Extra spaces outside the string
var checkStr = "    Hello     World!    ";
console.log(checkStr.trim());

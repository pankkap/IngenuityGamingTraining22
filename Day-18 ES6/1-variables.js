const { clearScreenDown } = require("readline");

// ES5 variables:
var a = 10; // Global scope as well local scope

// ES6 Variables:
// let, const
// block scope

// {
//   b = 20;
//   console.log(b);
// }
// console.log(b);

// Here c is a Block variable: its accessibilty is only inside the block
{
  let c = 100;
  console.log(c);
}
// console.log(c);

const sessions = 120;
console.log(sessions);
sessions++;
console.log(sessions);

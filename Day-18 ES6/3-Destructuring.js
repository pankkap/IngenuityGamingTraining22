// Destructuring

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let x = a[0];
// let y = a[1];
// let z = a[2];
// let z1 = a[3];
// let z2 = a[4];

let [a, b, c, d, e, f, , , , t] = arr;

console.log(a);
console.log(b);
console.log(t);

// Destructuring with Object

let person = {
  name: "sachin",
  age: 30,
  mobile: 24343434,
  email: "abc@gmail.com",
  city: {
    pincode: 12323,
    street: "abc",
  },
};

//destructure

let { name, age, mobile, email, city } = person;
let { pincode, street } = person.city;

console.log(pincode);
console.log(mobile);
console.log(email);
console.log(city);

// console.log(person.mobile);
// console.log(person.email);
// console.log(person.city);

// actual object will not change

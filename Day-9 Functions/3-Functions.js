// var obj = {
//   firstName: "Sachin",
//   lastName: "Yadav",
//   // using Function to create method of Object
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(obj.fullName());

// var person1 = {
//   firstName: "Sara",
//   lastName: "khan",
// };

// console.log(obj.fullName.call(person1));

var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};
var person1 = {
  firstName: "Sara",
  lastName: "khan",
};

console.log(person.fullName.call(person1, "Mumbai", "India"));

// Apppy method to reuse a method avilable in other Object

var person2 = {
  firstName: "Mohit",
  lastName: "Kumar",
};

console.log(person.fullName.apply(person2, ["Delhi", "India"]));

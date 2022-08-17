var myArr = [1, 3, 5, 7, 10];
var newArr = myArr.forEach((i) => i * 10);

console.log(newArr);

var users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

var fullName = users.map((u) => {
  return u.firstName + " " + u.lastName;
});

console.log(fullName);

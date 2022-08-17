// JavaScript Object: Objects is Non-primitive Data type

// Way-1 to create Objects

var person = {
  name: "Pankaj",
  age: 30,
  city: { cityName: "Chandigarh", pincode: 12346 },
  sector: [1, 2, 3, 4, 5],
  details: function () {
    return this.name + " from " + this.city.cityName;
  },
};

// console.log(person);
console.log(person.name);
console.log(person.city.cityName);
console.log("Sector: " + person.sector[1]);
console.log(person.details());

var student = new Object();
student.name = "Manish";
student.age = 22;
student["city"] = "Mathura";

console.log(student);

person.email = "pankaj.kapoor@koenig-solutions.com";
console.log(person);

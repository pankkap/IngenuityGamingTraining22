var ages = [32, 33, 16, 40];
var result = ages.filter(filterAge);
function filterAge(age) {
  return age > 18;
}
console.log(result);

// Example-2

let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

// var bigCities = [];

// for (var i = 0; i < cities.length; i++) {
//   if (cities[i].population > 3000000) {
//     bigCities.push(cities[i]);
//   }
// }
// console.log(bigCities);

var bigCities = cities
  .filter((city) => city.population > 3000000)
  .sort(function (n1, n2) {
    return n2.name - n1.name;
  });

console.log(bigCities);

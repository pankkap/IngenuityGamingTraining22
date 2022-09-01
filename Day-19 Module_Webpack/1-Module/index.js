// import { message } from "./library.js";
// import { display } from "./library.js";
// import { Employee } from "./library.js";

// import { message, display, Employee } from "./library.js";
import * as Data from "./library.js";
import Important from "./library.js";

console.log(Data.message);
var name = prompt("Enter your name");
var data1 = Data.display(name);
console.log(data1);

let emp1 = new Data.Employee("Avneet", 10101, "Gaming Intern");
emp1.dispDetails();

Important();

let name = "Pankaj";
let designation = "Trainer";
let city = "chandigarh";
let distance = 135;

let disp = () => {
  console.log("This is Function");
};

// Restructuring data into objects
let obj = { name, designation, city, distance, disp };
console.log(obj);

obj.disp();
console.log(obj.name);

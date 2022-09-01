export default function () {
  console.log("This is an Important Information");
}

let message = "This is Module Concepts";

let accountNo = 121212;

let display = (name) => {
  return `Hi ${name}, Welcome to Ingenuity Gaming! `;
};

class Employee {
  constructor(name, id, designation) {
    this.name = name;
    this.id = id;
    this.designation = designation;
  }
  dispDetails() {
    console.log(
      `Employee Name: ${this.name}\nEmployee Id: ${this.id}\nEmployee Desingnation: ${this.designation}`
    );
  }
}

export { message, display, Employee };

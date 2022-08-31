class Employee {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
}

let emp1 = new Employee("Pankaj");
// emp1.name = "manish";
console.log(emp1.setName());

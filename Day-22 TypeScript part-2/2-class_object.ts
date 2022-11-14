abstract class Person{
    // class properties
    
    constructor(protected empCode:number,protected empName:string){
        console.log("Constructor Called");
        this.empCode = empCode;
        this.empName = empName
    }

    // class Methods
    // dispDetails():void {
    //     console.log(`Code: ${this.empCode} Name:${this.empName}`);
    // }
    abstract dispDetails():void
}

// let emp1 = new Person(101, "Rahul")
// emp1.empCode = 102
// emp1.dispDetails()


// Access Modifires
// 1. public: can be access outside
// 2. private:can be access online inside class
// 3. protected:can access inside or inherited class


class Employee extends Person
{
        private empSal:number;
        constructor(code:number, name:string, salary:number)
        {
            super(code, name);
            this.empSal = salary;
        }
        dispSalary():void {
            // super.dispDetails();
            console.log(`Salary: ${this.empSal}`);
        }
        // Abstract Method implementation
        dispDetails():void{
            console.log(`Code: ${this.empCode} Name: ${this.empName}`);
        }
}

let employee1 = new Employee(103, "Rahul", 50000);
employee1.dispDetails()
employee1.dispSalary();
// let p1 = new Person(102, "fdf");


// 
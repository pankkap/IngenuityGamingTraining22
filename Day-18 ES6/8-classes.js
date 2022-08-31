// ES6

// Class | Blueprint
class Training {
  // constructor
  constructor(a, b, c = "online") {
    this.trainingName = a;
    this.trainingDuration = b;
    this.trainingStatus = c;
  }

  // Member Function
  displayDetails() {
    return `Training Name: ${this.trainingName}\nTraining Duration: ${this.trainingDuration}\nTraining Status: ${this.trainingStatus}`;
  }
}

// Objects Creation
let IngenityGaming = new Training("Development Basics", 120, "Offline");
let Dell = new Training("ReactJS", 40);

IngenityGaming.trainingName = "Typescript";
// Method Calling
console.log(IngenityGaming.displayDetails());
console.log(Dell.displayDetails());

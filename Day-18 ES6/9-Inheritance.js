class Training {
  constructor(a, b, c = "online") {
    this.trainingName = a;
    this.trainingDuration = b;
    this.trainingStatus = c;
  }
  displayDetails() {
    console.log(
      `Training Name: ${this.trainingName}\nTraining Duration: ${this.trainingDuration}\nTraining Status: ${this.trainingStatus}`
    );
  }
}

class InCampus extends Training {
  constructor(a, b, c, d) {
    super(a, b, c);
    this.rollno = d;
  }

  // Function Overriding
  displayDetails() {
    console.log(`Rollno: ${this.rollno}`);
    // super.displayDetails();
  }
}

let stu1 = new InCampus("Flutter", 40, "Online", 1011);
stu1.displayDetails();

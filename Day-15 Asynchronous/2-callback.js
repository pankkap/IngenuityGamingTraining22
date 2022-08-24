// In JavaScript function are first class citizens
// 1. Function can be assigned to a variable
// 2. Function can be use as an argument
// 3. Function can also used as return statemnt

// callback:
// 1. Function can be used as an Arguments
// 2. A callback is a function that is executed after another function has finished executing- hence the call back

var students = [
  { name: "Sachin", subject: "Java" },
  { name: "Manish", subject: "Python" },
  { name: "Rupali", subject: "C++" },
];

function admitStudent(student, callback) {
  setTimeout(() => {
    students.push(student);
    console.log("Student has been admitted");
    callback();
  }, 3000);
}

function displayStudent() {
  setTimeout(() => {
    var str = "";
    students.forEach((student) => {
      str += student.name + " ";
    });
    console.log(str);
    console.log("Students have been fetched");
  }, 3000);
}

var newStudent = { name: "Rahul", subject: "React" };
admitStudent(newStudent, displayStudent);
// displayStudent();

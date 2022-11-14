
///<reference path="Student.ts" />
///<reference path ="Teacher.ts" />

let stu1:StudentNS.StudentInt = new StudentNS.Student("Rahul Kumar", 232323);
stu1.dispDetails();

let t1 = new TeacherNS.Teacher("Pankaj", ["Flutter", "React", "NodeJs"])
console.log(`Teacher Name: ${t1.fullname} | Subject Teach: ${t1.subjects}`);




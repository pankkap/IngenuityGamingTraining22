var StudentNS;
(function (StudentNS) {
    class Student {
        constructor(fullname, passport) {
            this.fullname = fullname;
            this.passport = passport;
        }
        dispDetails() {
            console.log(`Name: ${this.fullname} | Passport: ${this.passport}`);
        }
    }
    StudentNS.Student = Student;
})(StudentNS || (StudentNS = {}));
var TeacherNS;
(function (TeacherNS) {
    class Teacher {
        constructor(fn, sub) {
            this.fn = fn;
            this.sub = sub;
            this.fullname = fn;
            this.subjects = sub;
        }
    }
    TeacherNS.Teacher = Teacher;
})(TeacherNS || (TeacherNS = {}));
///<reference path="Student.ts" />
///<reference path ="Teacher.ts" />
let stu1 = new StudentNS.Student("Rahul Kumar", 232323);
stu1.dispDetails();
let t1 = new TeacherNS.Teacher("Pankaj", ["Flutter", "React", "NodeJs"]);
console.log(`Teacher Name: ${t1.fullname} | Subject Teach: ${t1.subjects}`);

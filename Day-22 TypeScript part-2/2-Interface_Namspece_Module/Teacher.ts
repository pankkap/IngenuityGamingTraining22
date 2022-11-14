
namespace TeacherNS
{

    export interface TeacherInt
{
    fullname:string
    subjects:string[]
    }

    export class Teacher implements TeacherInt
    {
        fullname: string;
        subjects:string[]
        constructor(public fn:string, public sub:string[])
        {
                this.fullname = fn
                this.subjects = sub
        }
    }

}

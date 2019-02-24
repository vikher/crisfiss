import {Syllabus} from "./syllabus.model";
import {Teacher} from "./teacher.model";
import {Student} from "./student.model";


export class Course{
    id: number;
    name: string;
    teacher?: Teacher;
    syllabus?: Syllabus;
    startDate: Date;
    student?: Student[];
    isActive: boolean;
    photoPath?: string;
    videoPath?: string;
}

import {Course} from "./course.model";

export class Career{
    id: number;
    name: string;
    startDate: Date;
    isActive: boolean;
    photoPath?: string;
    course: Course[];
}



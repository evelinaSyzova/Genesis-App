import { Meta } from "@angular/platform-browser";
import { Lesson } from "./lesson";

export class Course {
    id: string;
    title: string;
    tags: string[];
    launchDate: Date;
    status: string;
    description: string;
    duration: number;
    lessonsCount: number;
    previewImageLink: string;
    rating: number;
    meta: Meta;
    lessons: Lesson;
    containsLockedLessons: boolean;
}
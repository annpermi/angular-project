import { CoursesService } from './course/courses.service';
import {Component} from '@angular/core';

//DECORATOR function
@Component({
    //<div class="courses"></div> -> ".courses"
    selector: 'courses', //<courses></courses>
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {  // instead of let service = new CoursesService();
        this.courses = service.getCourses();
    }
}
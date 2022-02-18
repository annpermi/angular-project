import { CoursesService } from './course/courses.service';
import {Component} from '@angular/core';

//DECORATOR function
@Component({
    //<div class="courses"></div> -> ".courses"
    selector: 'courses', //<courses></courses>
    template: `
    <h2>{{ title }}</h2>
    <h2 [textContent]="title"></h2>

    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>

    <img src="{{ imageUrl }}"/>
    <img [src]="imageUrl"/>

    <table>
        <tr>
            <td [attr.colspan]="colSpan">{{tableContent}}</td>
        </tr>
    </table>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    colSpan = 2;
    tableContent= 'Anna'
    imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/220px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg';

    constructor(service: CoursesService) {  // instead of let service = new CoursesService();
        this.courses = service.getCourses();
    }
}
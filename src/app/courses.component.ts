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

    <button class="btn btn-primary" [class.active]="isActive">Save</button>

    <button [style.backgroundColor]="isActive ? 'green' : 'red'">Click</button>

    <div (click)="onDivClick()">
        <button (click)="onSave($event)">Save</button>
    </div>

    <input (keyup)="onKeyUp($event)"/>
    <input (keyup.enter)="onKeyUp($event)"/>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    colSpan = 2;
    tableContent= 'Anna'
    imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/220px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg';
    isActive = true;

    onSave($event: any) {
        $event.stopPropagation();
        console.log('button was clicked', $event)
    }

    onDivClick() {
        console.log('click')
    }

    // onKeyUp($event: any) {
    //     if($event.keyCode ===13) console.log(' enter pressed')
    // }
    onKeyUp($event: any) {
       console.log(' enter pressed')
    }
    constructor(service: CoursesService) {  // instead of let service = new CoursesService();
        this.courses = service.getCourses();
    }
}
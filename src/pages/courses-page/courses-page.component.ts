import { Component } from '@angular/core';
import { COURSES_DATA } from './courses-page.const';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {
  public coursesData = COURSES_DATA;

}

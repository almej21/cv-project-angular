import { Component } from '@angular/core';
import { homeData } from './homeData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  myName: string;
  aboutMe: string;

  constructor() {
    this.myName = homeData.myName;
    this.aboutMe = homeData.aboutMe;
  }
}

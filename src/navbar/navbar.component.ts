import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public tabs = [
    {
      label: 'Home',
      route: '/home',
    },
    {
      label: 'Professional courses',
      route: '/courses',
    },
    {
      label: 'GitHub links',
      route: '/github',
    },
    {
      label: 'Contact me',
      route: '/contact',
    },
  ];

  public backgroudColor: ThemePalette = 'primary';

  constructor() {}
}

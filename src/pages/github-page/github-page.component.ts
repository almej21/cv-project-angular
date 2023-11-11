import { Component } from '@angular/core';
import { GITHUB_DATA } from './github-page.const';

@Component({
  selector: 'app-github-page',
  templateUrl: './github-page.component.html',
  styleUrls: ['./github-page.component.scss'],
})
export class GithubPageComponent {
  public githubData = GITHUB_DATA;

  constructor() {}
}

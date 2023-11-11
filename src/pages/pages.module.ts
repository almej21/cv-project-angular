import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { GithubPageComponent } from './github-page/github-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SectionViewComponent } from './section-view/section-view.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CoursesPageComponent,
    GithubPageComponent,
    ContactPageComponent,
    SectionViewComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  exports: [
    HomePageComponent,
    CoursesPageComponent,
    GithubPageComponent,
    ContactPageComponent,
    SectionViewComponent,
  ],
})
export class PagesModule {}

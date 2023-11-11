import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from 'pages/contact-page/contact-page.component';
import { CoursesPageComponent } from 'pages/courses-page/courses-page.component';
import { GithubPageComponent } from 'pages/github-page/github-page.component';
import { HomePageComponent } from 'pages/home-page/home-page.component';
import { PagesModule } from 'pages/pages.module';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'github', component: GithubPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

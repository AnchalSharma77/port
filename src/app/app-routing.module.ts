import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'awards',component:AwardsComponent},
  {path:'edu',component:EducationComponent},
  {path:'intern',component:InternshipComponent},
  {path:'**',redirectTo: '/home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,AboutComponent,SkillsComponent,ProjectsComponent,AwardsComponent,EducationComponent,InternshipComponent]

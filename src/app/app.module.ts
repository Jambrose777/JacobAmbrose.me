import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SlalomComponent } from './components/slalom/slalom.component';
import { WcaComponent } from './components/wca/wca.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

const moduleRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'slalom', component: SlalomComponent },
  { path: 'wca', component: WcaComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ProfileComponent,
    AboutComponent,
    EducationComponent,
    SlalomComponent,
    WcaComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(moduleRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

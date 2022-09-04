import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { SubNavComponent } from './components/shared/sub-nav/sub-nav.component';
import { AboutMeComponent } from './components/about/about-me/about-me.component';
import { HobbiesComponent } from './components/about/hobbies/hobbies.component';
import { LifeComponent } from './components/about/life/life.component';

const moduleRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: 'about', component: AboutComponent, data: {animation: 'about'}, children: [
    { path: '', pathMatch: 'full', component: AboutMeComponent },
    { path: 'me', component: AboutMeComponent },
    { path: 'hobbies', component: HobbiesComponent },
    { path: 'life', component: LifeComponent }
  ] },
  { path: 'contact-me', component: ContactMeComponent, data: {animation: 'contact-me'}  },
  { path: 'education', component: EducationComponent, data: {animation: 'education'}  },
  { path: 'projects', component: ProjectsComponent, data: {animation: 'projects'}  },
  { path: 'skills', component: SkillsComponent, data: {animation: 'skils'}  },
  { path: 'slalom', component: SlalomComponent, data: {animation: 'slalom'}  },
  { path: 'wca', component: WcaComponent, data: {animation: 'wca'}  },
  { path: '**', redirectTo: 'about' },
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
    ContactMeComponent,
    SubNavComponent,
    AboutMeComponent,
    HobbiesComponent,
    LifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(moduleRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

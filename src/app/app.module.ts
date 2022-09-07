import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { SubNavComponent } from './components/shared/sub-nav/sub-nav.component';
import { AboutMeComponent } from './components/pages/about/about-me/about-me.component';
import { HobbiesComponent } from './components/pages/about/hobbies/hobbies.component';
import { LifeComponent } from './components/pages/about/life/life.component';
import { ContactMeComponent } from './components/pages/contact-me/contact-me.component';
import { EducationComponent } from './components/pages/education/education.component';
import { SlalomComponent } from './components/pages/slalom/slalom.component';
import { SubSlalomComponent } from './components/pages/slalom/slalom/slalom.component';
import { CoxComponent } from './components/pages/slalom/cox/cox.component';
import { DeltaComponent } from './components/pages/slalom/delta/delta.component';
import { PulteComponent } from './components/pages/slalom/pulte/pulte.component';
import { SaiaComponent } from './components/pages/slalom/saia/saia.component';
import { WcaComponent } from './components/pages/wca/wca.component';
import { SubWcaComponent } from './components/pages/wca/sub-wca/sub-wca.component';
import { DelegateComponent } from './components/pages/wca/delegate/delegate.component';
import { ResultsComponent } from './components/pages/wca/results/results.component';
import { TeamsComponent } from './components/pages/wca/teams/teams.component';
import { CompetitorComponent } from './components/pages/wca/competitor/competitor.component';
import { JacobAmbroseMeComponent } from './components/pages/projects/jacob-ambrose-me/jacob-ambrose-me.component';
import { SoutheastCubingOrgComponent } from './components/pages/projects/southeast-cubing-org/southeast-cubing-org.component';
import { WcaStatisticsComponent } from './components/pages/projects/wca-statistics/wca-statistics.component';
import { SheetsComponent } from './components/pages/projects/sheets/sheets.component';

const moduleRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: window.innerWidth > 950 ? 'about' : 'home' },
  { path: 'about', component: AboutComponent, data: {animation: 'about'}, children: [
    { path: '', pathMatch: 'full', component: AboutMeComponent, data: {animation: 'me'} },
    { path: 'hobbies', component: HobbiesComponent, data: {animation: 'hobbies'} },
    { path: 'life', component: LifeComponent, data: {animation: 'life'} },
    { path: 'me', component: AboutMeComponent, data: {animation: 'me'} },
  ] },
  { path: 'contact-me', component: ContactMeComponent, data: {animation: 'contact-me'}  },
  { path: 'education', component: EducationComponent, data: {animation: 'education'}  },
  window.innerWidth > 950 ? { path: 'home', pathMatch: 'full', redirectTo: 'about' } : { path: 'home', component: ProfileComponent },
  { path: 'projects', component: ProjectsComponent, data: {animation: 'projects'}, children: [
    { path: '', pathMatch: 'full', component: JacobAmbroseMeComponent },
    { path: 'jacob-ambrose-me', component: JacobAmbroseMeComponent },
    { path: 'sheets', component: SheetsComponent },
    { path: 'southeast-cubing-org', component: SoutheastCubingOrgComponent },
    { path: 'wca-statistics', component: WcaStatisticsComponent },
  ] },
  { path: 'skills', component: SkillsComponent, data: {animation: 'skils'}  },
  { path: 'slalom', component: SlalomComponent, data: {animation: 'slalom'}, children: [
    { path: '', pathMatch: 'full', component: SubSlalomComponent, data: {animation: 'slalom'} },
    { path: 'cox', component: CoxComponent, data: {animation: 'cox'} },
    { path: 'delta', component: DeltaComponent, data: {animation: 'delta'} },
    { path: 'pulte', component: PulteComponent, data: {animation: 'pulte'} },
    { path: 'saia', component: SaiaComponent, data: {animation: 'saia'} },
    { path: 'slalom', component: SubSlalomComponent, data: {animation: 'slalom'} },
  ] },
  { path: 'wca', component: WcaComponent, data: {animation: 'wca'}, children: [
    { path: '', pathMatch: 'full', component: SubWcaComponent },
    { path: 'competitor', component: CompetitorComponent },
    { path: 'delegate', component: DelegateComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'wca', component: SubWcaComponent },
  ] },
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
    LifeComponent,
    SubSlalomComponent,
    SaiaComponent,
    DeltaComponent,
    CoxComponent,
    PulteComponent,
    SubWcaComponent,
    DelegateComponent,
    ResultsComponent,
    TeamsComponent,
    CompetitorComponent,
    JacobAmbroseMeComponent,
    SoutheastCubingOrgComponent,
    WcaStatisticsComponent,
    SheetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(moduleRoutes),
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

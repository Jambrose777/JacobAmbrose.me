import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/pages/about/about-me/about-me.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HobbiesComponent } from './components/pages/about/hobbies/hobbies.component';
import { LifeComponent } from './components/pages/about/life/life.component';
import { ContactMeComponent } from './components/pages/contact-me/contact-me.component';
import { EducationComponent } from './components/pages/education/education.component';
import { JacobAmbroseMeComponent } from './components/pages/projects/jacob-ambrose-me/jacob-ambrose-me.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { SheetsComponent } from './components/pages/projects/sheets/sheets.component';
import { SoutheastCubingOrgComponent } from './components/pages/projects/southeast-cubing-org/southeast-cubing-org.component';
import { WcaStatisticsComponent } from './components/pages/projects/wca-statistics/wca-statistics.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { CoxComponent } from './components/pages/slalom/cox/cox.component';
import { DeltaComponent } from './components/pages/slalom/delta/delta.component';
import { PulteComponent } from './components/pages/slalom/pulte/pulte.component';
import { SaiaComponent } from './components/pages/slalom/saia/saia.component';
import { SlalomComponent } from './components/pages/slalom/slalom.component';
import { SubSlalomComponent } from './components/pages/slalom/slalom/slalom.component';
import { CompetitorComponent } from './components/pages/wca/competitor/competitor.component';
import { DelegateComponent } from './components/pages/wca/delegate/delegate.component';
import { ResultsComponent } from './components/pages/wca/results/results.component';
import { SubWcaComponent } from './components/pages/wca/sub-wca/sub-wca.component';
import { TeamsComponent } from './components/pages/wca/teams/teams.component';
import { WcaComponent } from './components/pages/wca/wca.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
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
    { path: '', pathMatch: 'full', component: SubWcaComponent, data: {animation: 'wca'} },
    { path: 'competitor', component: CompetitorComponent, data: {animation: 'competitor'} },
    { path: 'delegate', component: DelegateComponent, data: {animation: 'delegate'} },
    { path: 'results', component: ResultsComponent, data: {animation: 'results'} },
    { path: 'teams', component: TeamsComponent, data: {animation: 'teams'} },
    { path: 'wca', component: SubWcaComponent, data: {animation: 'wca'} },
  ] },
  { path: '**', redirectTo: 'about' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

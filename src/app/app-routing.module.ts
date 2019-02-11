import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StandingsComponent } from './standings/standings.component'
import { HomeComponent } from './home/home.component'
import { ScheduleComponent } from './schedule/schedule.component'
import { TeamsComponent } from './teams/teams.component'
import { TeamdetailsComponent } from './teamdetails/teamdetails.component'
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'standings', component: StandingsComponent },
  { path: 'schedule', component: ScheduleComponent},
  { path: 'teams', component: TeamsComponent, data: {animation: 'TeamsPage'}},
  { path: 'teamdetails/:id', component: TeamdetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user', component: UserComponent, resolve: {data: UserResolver}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

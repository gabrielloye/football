import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StandingsComponent } from './standings/standings.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'standings', component: StandingsComponent },
  //{ path: 'teamdetail/:id'},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

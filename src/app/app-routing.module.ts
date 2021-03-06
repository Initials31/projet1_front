import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './site/login/login.component';
import { AuthGuard } from './service/auth/auth.guard';
import { PlayersComponent } from './site/data/players/players.component';
import { ContestsComponent } from './site/data/contests/contests.component';
import { EventsComponent } from './site/data/events/events.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'players', component: PlayersComponent, canActivate: [AuthGuard]},
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard]},
  { path: 'contests', component: ContestsComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

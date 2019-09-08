import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AllSportsService } from './services/all-sports.service'
import { SoccerService } from './services/soccer-service'
import { DataService } from './services/data.service'

import { SortDescPipe } from './pipes/sort-desc.pipe';
import { AllLeaguesComponent } from './components/all-leagues/all-leagues.component';
import { AllSportsComponent } from './components/all-sports/all-sports.component';
import { SportDetailComponent } from './components/sport-detail/sport-detail.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { LeagueDetailComponent } from './components/league-detail/league-detail.component';

const appRoutes: Routes = [
  { path: 'Home', component: DashboardComponent },
  { path: 'all-sports', component: AllSportsComponent },
  { path: 'sport-detail', component: SportDetailComponent },
  { path: 'all-leagues', component: AllLeaguesComponent },
  { path: 'league-detail', component: LeagueDetailComponent },
  { path: 'team-detail', component: TeamDetailComponent },
  { path: 'player-detail', component: PlayerDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MastheadComponent,
    FooterComponent,
    SortDescPipe,
    DashboardComponent,
    AllLeaguesComponent,
    AllSportsComponent,
    SportDetailComponent,
    TeamDetailComponent,
    PlayerDetailComponent,
    LeagueDetailComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AllSportsService, SoccerService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

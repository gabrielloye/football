import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { StandingsComponent } from './standings/standings.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule, MatFormFieldModule, MatSliderModule } from '@angular/material';
import { TeamsComponent } from './teams/teams.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { MatCardModule } from '@angular/material/card';
import { ResultsComponent } from './results/results.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms'
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    StandingsComponent,
    HomeComponent,
    ScheduleComponent,
    MainNavComponent,
    TeamsComponent,
    TeamdetailsComponent,
    HighlightDirective,
    UpcomingComponent,
    ResultsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NgbAccordionModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../services/standings.service' ;
import { flyInOut, expand } from '../animations/animations'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  host: {
    '[@flyInOut]' : 'true',
    'style' : 'display: flex',
  },
  animations: [
    flyInOut(), expand()
  ],
})
export class ScheduleComponent implements OnInit {

  scorers: any;
  public matchday: number;
  displayedColumns: string[] = ['player', 'team', 'numberOfGoals'];
  errMess: string;

  constructor(private http: StandingsService) { }

  ngOnInit() {
    this.http.getTopScorers(5)
    .subscribe(object => {this.scorers=object.scorers;
      this.matchday=object.season.currentMatchday;
    },errmess => this.errMess = <any>errmess)
    
  }

}

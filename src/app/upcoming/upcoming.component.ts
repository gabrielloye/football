import { Component, OnInit, Input } from '@angular/core';
import { StandingsService } from '../services/standings.service' 

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  @Input() matchday: number;
  matches: any[];
  morematches = [];

  constructor(private http: StandingsService) { 
    
  }

  ngOnInit() {
    this.http.getSchedule(this.matchday)
    .subscribe(info=>{this.matches = info['matches']})
  }

  loadMoreMatches() {
    this.matchday += 1;
    this.http.getSchedule(this.matchday)
    .subscribe(info=>{this.morematches.push(info['matches'])})
  }


}

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
    .subscribe(schedule=>{
  this.http.getStandings().subscribe(standings=>{
    var x;
    var y;
    for (x in standings['standings'][0].table) {
      for (y in schedule["matches"]) {
        if (standings['standings'][0].table[x]["team"]['name'] === schedule["matches"][y]["homeTeam"]['name']){
          schedule["matches"][y]["homeTeam"]["position"] = standings['standings'][0].table[x]["position"]
          schedule["matches"][y]["homeTeam"]["crestUrl"] = standings['standings'][0].table[x]['team']["crestUrl"]
        } else if (standings['standings'][0].table[x]["team"]['name'] === schedule["matches"][y]["awayTeam"]['name']){
          schedule["matches"][y]["awayTeam"]["position"] = standings['standings'][0].table[x]["position"]
          schedule["matches"][y]["awayTeam"]["crestUrl"] = standings['standings'][0].table[x]['team']["crestUrl"]
        }
      }
    }
  }); this.matches = schedule['matches'];})
  }

  loadMoreMatches() {
    this.matchday += 1;
    this.http.getSchedule(this.matchday)
    .subscribe(schedule=>{
  this.http.getStandings().subscribe(standings=>{
    var x;
    var y;
    for (x in standings['standings'][0].table) {
      for (y in schedule["matches"]) {
        if (standings['standings'][0].table[x]["team"]['name'] === schedule["matches"][y]["homeTeam"]['name']){
          schedule["matches"][y]["homeTeam"]["position"] = standings['standings'][0].table[x]["position"]
          schedule["matches"][y]["homeTeam"]["crestUrl"] = standings['standings'][0].table[x]['team']["crestUrl"]
        } else if (standings['standings'][0].table[x]["team"]['name'] === schedule["matches"][y]["awayTeam"]['name']){
          schedule["matches"][y]["awayTeam"]["position"] = standings['standings'][0].table[x]["position"]
          schedule["matches"][y]["awayTeam"]["crestUrl"] = standings['standings'][0].table[x]['team']["crestUrl"]
        }
      }
    }
  }); this.morematches.push(schedule['matches']);})
  }
}

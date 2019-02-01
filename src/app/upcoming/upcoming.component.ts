import { Component, OnInit, Input } from '@angular/core';
import { StandingsService } from '../services/standings.service' 
import { expand } from '../animations/animations'

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
  animations: [
    expand()
  ]
})
export class UpcomingComponent implements OnInit {

  @Input() matchday: number;
  matches: any[];
  morematches = [];
  errMess:string;

  constructor(private http: StandingsService) { 
    
  }

  ngOnInit() {
    this.LoadCurrent()
  }

  LoadCurrent() {
    this.http.getSchedule(this.matchday)
    .subscribe(schedule=>{
      if (schedule['count']===0){
        this.matchday+=1
        this.LoadCurrent()
        return;
      }
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
  }); this.matches = schedule['matches'];
},errmess => this.errMess = <any>errmess)
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
  }); this.morematches.push(schedule['matches']);},
  errmess => this.errMess = <any>errmess)
  }
}

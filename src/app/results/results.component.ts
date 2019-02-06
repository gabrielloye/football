import { Component, OnInit, Input } from '@angular/core';
import { StandingsService } from '../services/standings.service' 
import { expand } from '../animations/animations'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  animations: [
    expand()
  ]
})
export class ResultsComponent implements OnInit {

  @Input() matchday: number;
  ongoing: boolean;
  results: any[];
  moreresults=[];
  errMess: string;

  constructor(private http: StandingsService) { }

  ngOnInit() {
    this.displayResults()
  }

  displayResults() {
    this.http.getResult(this.matchday)
    .subscribe(result => {
      if(result['count'] === 0) {
        this.matchday -=1;
        this.loadResults()
      } else {
        this.loadResults()
      }
    })
  }

  loadResults () {
      this.http.getResult(this.matchday)
    .subscribe(result=>{
  this.http.getStandings().subscribe(standings=>{
    var x;
    var y;
    for (x in standings['standings'][0].table) {
      for (y in result["matches"]) {
        if (standings['standings'][0].table[x]["team"]['name'] === result["matches"][y]["homeTeam"]['name']){
          result["matches"][y]["homeTeam"]["position"] = standings['standings'][0].table[x]["position"]
          result["matches"][y]["homeTeam"]["crestUrl"] = standings['standings'][0].table[x]['team']["crestUrl"]
        } else if (standings['standings'][0].table[x]["team"]['name'] === result["matches"][y]["awayTeam"]['name']){
          result["matches"][y]["awayTeam"]["position"] = standings['standings'][0].table[x]["position"]
          result["matches"][y]["awayTeam"]["crestUrl"] = standings['standings'][0].table[x]['team']["crestUrl"]
        }
      }
    }
  }); this.results = result['matches'];}, errmess => this.errMess = <any>errmess)
    , errmess => this.errMess = <any>errmess 
  }

  loadMoreResults() {
    this.matchday -= 1;
    this.http.getResult(this.matchday)
    .subscribe(result=>{
  this.http.getStandings().subscribe(standings=>{
    var x;
    var y;
    for (x in standings['standings'][0].table) {
      for (y in result["matches"]) {
        if (standings['standings'][0].table[x]["team"]['name'] === result["matches"][y]["homeTeam"]['name']){
          result["matches"][y]["homeTeam"]["position"] = standings['standings'][0].table[x]["position"]
          result["matches"][y]["homeTeam"]["crestUrl"] = standings['standings'][0].table[x]['team']["crestUrl"]
        } else if (standings['standings'][0].table[x]["team"]['name'] === result["matches"][y]["awayTeam"]['name']){
          result["matches"][y]["awayTeam"]["position"] = standings['standings'][0].table[x]["position"]
          result["matches"][y]["awayTeam"]["crestUrl"] = standings['standings'][0].table[x]['team']["crestUrl"]
        }
      }
    }
  }); this.moreresults.push(result['matches']);},errmess => this.errMess = <any>errmess)
  }
}

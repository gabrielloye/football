import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../services/standings.service'

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  standings: any;
  topTeamIds = [64, 65, 73, 61, 57, 66]
  placing={};
  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getStandings()
    .subscribe(info=>{this.standings=info.standings[0].table;
      for (var x in this.standings) {
        for (var y in this.topTeamIds) {
          if (this.standings[x]['team']['id']===this.topTeamIds[y]) {
            this.placing[this.standings[x]['team']['id']]=this.standings[x]['position']
          }
        }
        
      };})   
  }
}

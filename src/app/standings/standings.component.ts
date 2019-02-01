import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../services/standings.service'
import { flyInOut } from '../animations/animations';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut()
  ]
})
export class StandingsComponent implements OnInit {

  standings: any;
  topTeamIds = [64, 65, 73, 61, 57, 66]
  placing={};
  errMess:string;

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
        
      };},errmess => this.errMess = <any>errmess)   
  }
}

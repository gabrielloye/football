import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../services/standings.service'
import { expand, flyInOut } from '../animations/animations'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: flex, position: absolute;'
    },
  animations: [
    expand(),
    flyInOut()
  ]
})
export class TeamsComponent implements OnInit {

  teams: any;
  errMess:string;
  
  constructor(private httpService: StandingsService) { }

  ngOnInit() {
    this.httpService.getTeams()
    .subscribe(info=>{this.teams=info.teams;},
    errmess => this.errMess = <any>errmess)
  }

}

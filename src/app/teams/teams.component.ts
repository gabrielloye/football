import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../services/standings.service'
import { expand } from '../animations/animations'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  animations: [
    expand()
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

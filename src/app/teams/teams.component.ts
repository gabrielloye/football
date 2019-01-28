import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../services/standings.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: any;
  constructor(private httpService: StandingsService) { }

  ngOnInit() {
    this.httpService.getTeams()
    .subscribe(info=>{this.teams=info.teams; console.log(this.teams)})
  }

}

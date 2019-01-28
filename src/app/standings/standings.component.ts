import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../services/standings.service'

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  standings: any;
  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getStandings()
    .subscribe(info=>{this.standings=info.standings[0].table; console.log(this.standings)})
  }

}

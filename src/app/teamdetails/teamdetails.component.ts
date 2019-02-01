import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { StandingsService } from '../services/standings.service';
import { switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { expand } from '../animations/animations';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.scss'],
  animations: [
    expand()
  ]
})
export class TeamdetailsComponent implements OnInit {

  team: any;
  errMess:string;

  constructor(private httpservice: StandingsService,
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.httpservice.getTeam(params['id']);
    }))
    .subscribe(team=>{
      this.team=team},
      errmess => this.errMess = <any>errmess)
  }

  open(content) {
    this.modalService.open(content, { centered: true })
  }

}

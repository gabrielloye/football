import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StandingsService } from '../services/standings.service'
import { Router } from '@angular/router'

export interface StateGroup {
  letter: string;
  names: string[];
  id: any;
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('sform') stateFormDirective
  stateForm: FormGroup
  buttonDisable: boolean = true;
  searchField: string;

  stateGroups: StateGroup[] = [{
    letter: 'Pages',
    names: ['Home', 'Standings', 'Schedule', 'Teams', 'User'],
    id: ['home', 'standings', 'schedule', 'teams', 'user']
  }, {
    letter: 'Teams',
    names: [],
    id: []
  }];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder,
    private teamService: StandingsService,
    private router: Router) {
      this.stateForm = this.fb.group({
        stateGroup: '',
      });
    }

  ngOnInit() {
    this.teamService.getTeams()
    .subscribe(res =>{
      for (let x in res.teams) {
        this.stateGroups[1].names.push(res.teams[x].shortName);
        this.stateGroups[1].id.push('teamdetails/'+ res.teams[x].id)
      };
      this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    })
    this.stateForm.get('stateGroup').valueChanges
    .subscribe((value)=>{
      for (let y in this.stateGroups){
        for (let x in this.stateGroups[y].names) {
          if (value.toLowerCase() === this.stateGroups[y].names[x].toLowerCase()){
            this.searchField = this.stateGroups[y].id[x]
            this.buttonDisable = false;
          }
        }
      }
    })
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value), id: group.id}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  search() {
    this.router.navigateByUrl('/' + this.searchField);
  }
}
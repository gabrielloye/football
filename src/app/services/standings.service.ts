import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Auth-Token':  'e19fdf16497e43a4ad3141d5daf3caff'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private http: HttpClient) { }

  getStandings(): Observable<any> {
    httpOptions.headers = 
    httpOptions.headers.set('X-Auth-Token','e19fdf16497e43a4ad3141d5daf3caff')
    return this.http.get('http://api.football-data.org/v2/competitions/PL/standings', httpOptions)
  }
}

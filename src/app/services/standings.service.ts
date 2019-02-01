import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpmsgService } from './httpmsg.service'

const httpOptions = {
  headers: new HttpHeaders({
    'X-Auth-Token':  'e19fdf16497e43a4ad3141d5daf3caff',
    'X-Response-Control': 'Access-Control-Allow-Origin'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private http: HttpClient,
    private httperror: HttpmsgService) { }

  getStandings(): Observable<any> {
    httpOptions.headers = 
    httpOptions.headers.set('X-Auth-Token','e19fdf16497e43a4ad3141d5daf3caff')
    return this.http.get('https://api.football-data.org/v2/competitions/PL/standings', httpOptions)
    .pipe(catchError(this.httperror.handleError))
  };

  getTeams(): Observable<any> {
    httpOptions.headers = 
    httpOptions.headers.set('X-Auth-Token','e19fdf16497e43a4ad3141d5daf3caff')
    return this.http.get('https://api.football-data.org/v2/competitions/PL/teams', httpOptions)
    .pipe(catchError(this.httperror.handleError))
  }
  getTeam (id: string): Observable<any> {
    httpOptions.headers = 
    httpOptions.headers.set('X-Auth-Token','e19fdf16497e43a4ad3141d5daf3caff')
    const link = 'https://api.football-data.org/v2/teams/' + id;
    return this.http.get(link, httpOptions)
    .pipe(catchError(this.httperror.handleError))
  }
  getTopScorers(limit: number): Observable<any> {
    httpOptions.headers = 
    httpOptions.headers.set('X-Auth-Token','e19fdf16497e43a4ad3141d5daf3caff')
    const link = 'https://api.football-data.org/v2/competitions/PL/scorers?limit=' + limit;
    return this.http.get(link, httpOptions)
    .pipe(catchError(this.httperror.handleError))
  }

  getSchedule(matchday: number) {
    httpOptions.headers = 
    httpOptions.headers.set('X-Auth-Token','d256c8829c5f44d195b07dcb46e4fc91')
    const link = 'https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED&matchday=' + matchday;
    return this.http.get(link, httpOptions)
    .pipe(catchError(this.httperror.handleError))
  }

  getResult(matchday: number) {
    httpOptions.headers = 
    httpOptions.headers.set('X-Auth-Token','d256c8829c5f44d195b07dcb46e4fc91')
    const link = 'https://api.football-data.org/v2/competitions/PL/matches?status=FINISHED&matchday=' + matchday;
    return this.http.get(link, httpOptions)
    .pipe(catchError(this.httperror.handleError))
  }
}

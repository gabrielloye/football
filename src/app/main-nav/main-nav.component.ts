import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  name: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isLoggedIn$ = firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  })
  isLoggedIn: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private userService: UserService,
    private authService: AuthService) {}

  openLogin() {
    this.dialog.open(LoginComponent, {width: '550px', height: '500px'});
  }

  ngOnInit() {
    this.userService.getCurrentUser()
    .then(res=>{
      this.name = res.displayName;
    }, err=>console.log(err))
  }

  logout() {
    this.authService.doLogout();
    location.reload();
  }

}

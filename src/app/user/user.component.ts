import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  name: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
    .then(res=>{
      this.name = res.displayName;
    })
  }

}

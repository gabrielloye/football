import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string;

  formErrors = {
    'name': '',
    'email': '',
    'password': ''
  }

  validationMessages = {
    'name': {
      'required': 'Name is required'
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email not in valid format'
   },
   'password' : {
     'required': 'Password is required',
     'minlength': 'Password must have at least 6 characters'
   }
  }

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private userService: UserService) { 
    this.createForm()
  }
  
  createForm () {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.registerForm.valueChanges
    .subscribe(data=> this.onValueChange(data))
  }

  ngOnInit() {
  }

  register(value) {
    this.authService.doRegister(value)
    .then(res => {this.authService.doLogin(value)
      .subscribe(res=>{
        this.router.navigate(['/user']);
        this.dialogRef.close();
        this.userService.updateCurrentUser(value)
        .then(res => {
          console.log(res)
          location.reload()
        })
      })
      },
    err => {console.log(err)});
  }

  onValueChange(data?:any) {
    if (!this.registerForm) {return;}
    const form = this.registerForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)){
        this.formErrors[field]=''; //clears any existing messages appended in formErrors
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  register: boolean = false;
  errorMessage: string;

  formErrors = {
    'email': '',
    'password': ''
  }

  validationMessages = {
    'email': {
      'required': 'Email is required',
      'email': 'Email not in valid format'
   },
   'password' : {
     'required': 'Password is required'
   }
  }

  constructor(private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>) {
    this.createForm()
   }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    this.loginForm.valueChanges
    .subscribe(data => this.onValueChange(data))
  }

  login(value) {
    this.authService.doLogin(value)
    .subscribe(
      res=>{
        this.router.navigate(['/user'])
        this.dialogRef.close()
        location.reload()
      },
      err=>{
        this.errorMessage = "Invalid Email or Password"
      }
    )
  }

  showRegister() {
    this.register=true;
  }

  onValueChange (data?: any){
    if (!this.loginForm) {return;}
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)){
        this.formErrors[field]=''; //clears any existing messages appended in formErrors
        const control = form.get(field);
        if (control && control.touched && !control.valid) {
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

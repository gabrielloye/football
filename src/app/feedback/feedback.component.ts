import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, formErrors, validationMessages } from '../shared/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective
  feedbackForm: FormGroup;
  feedback: Feedback;
  formErrors = formErrors;
  validationMessages = validationMessages;

  constructor(private fb: FormBuilder) {
    this.createform();
   }

  ngOnInit() {
  }

  createform() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      rating: 5,
      feedback: ['', [Validators.required]]
    });
    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChange(data))

    this.onValueChange()
  }

  onValueChange(data?: any) {
    if(!this.feedbackForm) {return;} //if form hasnt been created yet, exit
    const form = this.feedbackForm;
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
  };

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackFormDirective.resetForm();
  }

}

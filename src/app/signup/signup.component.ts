import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.minLength(1) ]],
    email: ['', [Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
  });

  get name(): AbstractControl {
    return this.signupForm.get('name');
  }

  get email(): AbstractControl {
    return this.signupForm.get('email');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  signup(): void {

  }
}

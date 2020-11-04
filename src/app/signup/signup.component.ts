import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  disableButton = false;
  signupForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
    usertype: ['patient', []]
  });

  get username(): AbstractControl {
    return this.signupForm.get('username');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }

  get usertype(): AbstractControl {
    return this.signupForm.get('usertype');
  }

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public toaster: Toaster
  ) { }

  ngOnInit(): void {
  }

  async signup(): Promise<void> {
    this.disableButton = true;
    try {
      await this.authService.signup(this.username.value, this.password.value, this.usertype.value);
      this.router.navigate(['/patient']);
    } catch (error) {
      console.log(error);
      this.toaster.open('Something went wrong');
    }
    this.disableButton = false;
  }
}

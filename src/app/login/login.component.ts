import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  disableButton = false;

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.minLength(3), Validators.required]],
  });

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public toaster: Toaster
  ) { }


  ngOnInit(): void {
  }

  async login(): Promise<void> {
    this.disableButton = true;
    try {
      await this.authService.login(this.username.value, this.password.value);
      if(localStorage.getItem('user_type') == 'patient')
        this.router.navigate(['/patient']);
      else
        this.router.navigate(['/doctor']);

    } catch (error) {
      this.toaster.open('Invalid username or password');
    }
    this.disableButton = false;
  }
}

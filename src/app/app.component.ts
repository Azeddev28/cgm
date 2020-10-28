import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cgm';
  isLoggedIn = false;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  logout(): void {
    this.router.navigate(['/']);
    this.authService.logout();
  }
}

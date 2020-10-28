import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logger = new Subject<boolean>();

  constructor() { }

  login(): void {
    localStorage.setItem('loggedIn', 'true');
    this.logger.next(true);
  }

  public get isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  logout(): void {
    this.logger.next(false);
    localStorage.clear();
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logger = new Subject<boolean>();

  private baseUrl: string = 'https://smart-diabetic-companion.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  async signup(username, password, usertype) {
    const signup: any = await this.httpClient.post(`${this.baseUrl}/accounts/auth/register`, {
      "username": username,
      "password": password,
      "confirm_password": password,
      "user_type": usertype
    }).toPromise();
    this.logger.next(true);
    localStorage.setItem('token', signup.token);
  }

  async login(username, password) {
    try {
      const login: any = await this.httpClient.post(`${this.baseUrl}/accounts/auth/login`, {
        username,
        password
      }).toPromise();
      this.logger.next(true);
      localStorage.setItem('token', login.token);
      localStorage.setItem('user_type', login.user.user_type);
    } catch (error) {
      throw error;
    }
  }

  public get isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('token');
    this.logger.next(token ? true : false);
    return this.logger.asObservable();
  }

  logout(): void {
    this.logger.next(false);
    localStorage.clear();
  }
}

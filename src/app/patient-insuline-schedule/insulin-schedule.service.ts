import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsulinScheduleService {
  baseUrl = "https://smart-diabetic-companion.herokuapp.com"
  constructor(private http:HttpClient) { }

  getInsulinSchedule(): Observable<any> {
    const token = localStorage.getItem('token');
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders().set('Authorization', `Token ${token}`), 
    };
    return this.http.get(this.baseUrl + "/patient/medication-schedule/", requestOptions);
  }

}

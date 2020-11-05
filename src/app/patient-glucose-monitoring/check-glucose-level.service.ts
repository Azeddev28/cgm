import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CheckGlucoseLevelService {
  baseUrl = "https://smart-diabetic-companion.herokuapp.com"
  constructor(private http: HttpClient) { }

  getGlucoseReading(): Observable<any> {
    const token = '';
    const httpHeaders = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': `Token ${token}` });
    return this.http.get(this.baseUrl + "/patient/check-glucose-level", { headers: httpHeaders });
  }
}

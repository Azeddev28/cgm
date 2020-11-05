import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RetrievePatientListService {
  
    private baseUrl: string = 'https://smart-diabetic-companion.herokuapp.com';

    constructor(private http: HttpClient) { }

    getPatientList(): Observable<any> {
        const token = localStorage.getItem('token');
        const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders().set('Authorization', `Token ${token}`), 
        };
        return this.http.get(this.baseUrl + "/doctor/patient-list", requestOptions);
    };
    

}

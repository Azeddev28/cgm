// import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';



// @Injectable({
//   providedIn: 'root'
// })
// export class RetrievePatientListService {
//   const httpOptions = {
//     headers: new HttpHeaders{
//       Authorization: Token
//     }
//   }
//   private baseUrl: string = 'https://smart-diabetic-companion.herokuapp.com';

//   constructor(private httpClient: HttpClient) { }

//   async retrievePatients() {
//     try {
//       const patientList: any = await this.httpClient.post(`${this.baseUrl}/doctor/patient-list`, {
//       }).toPromise();
//     } catch (error) {
//       throw error;
//     }
//   }

// }

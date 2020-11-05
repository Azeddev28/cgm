import { Component, OnInit } from '@angular/core';
import {RetrievePatientListService} from './retrieve-patient-list.service'

@Component({
  selector: 'app-doctor-patient-list',
  templateUrl: './doctor-patient-list.component.html',
  styleUrls: ['./doctor-patient-list.component.css']
})
export class DoctorPatientListComponent implements OnInit {
  PatientList = []
  constructor(private api:RetrievePatientListService) { 
    this.getPatientList();
  }
  getPatientList = () => {
    this.api.getPatientList().subscribe(
      data => {
        this.PatientList = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  ngOnInit(): void {
  }

}

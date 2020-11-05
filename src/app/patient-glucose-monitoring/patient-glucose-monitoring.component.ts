import { Component, OnInit, ViewChild } from '@angular/core';
import {CheckGlucoseLevelService} from './check-glucose-level.service'

@Component({
  selector: 'app-patient-glucose-monitoring',
  templateUrl: './patient-glucose-monitoring.component.html',
  styleUrls: ['./patient-glucose-monitoring.component.css']
})
export class PatientGlucoseMonitoringComponent implements OnInit {
  glucoseReadingValue = null;

  constructor(private api:CheckGlucoseLevelService) { 
    this.getGlucoseReading();
  }

  getGlucoseReading = () => {
    this.api.getGlucoseReading().subscribe(
      data => {
        this.glucoseReadingValue = parseFloat(data['glucose_level']).toFixed(2);
      },
      error => {
        console.log(error);
      }
    );
  };
  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import {InsulinScheduleService} from './insulin-schedule.service'
@Component({
  selector: 'app-patient-insuline-schedule',
  templateUrl: './patient-insuline-schedule.component.html',
  styleUrls: ['./patient-insuline-schedule.component.css']
})
export class PatientInsulineScheduleComponent implements OnInit {

  constructor(private api:InsulinScheduleService) { 
    this.getInsulinSchedule();
  }
  getInsulinSchedule = () => {
    this.api.getInsulinSchedule().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error)
      }
    );
  }

  ngOnInit(): void {
  }

}

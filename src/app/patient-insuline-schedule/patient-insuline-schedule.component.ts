import { Component, OnInit } from '@angular/core';
import {InsulinScheduleService} from './insulin-schedule.service'
import * as moment from 'moment';

@Component({
  selector: 'app-patient-insuline-schedule',
  templateUrl: './patient-insuline-schedule.component.html',
  styleUrls: ['./patient-insuline-schedule.component.css']
})
export class PatientInsulineScheduleComponent implements OnInit {
  InsulinScheduleList = [];
  constructor(private api:InsulinScheduleService) { 
    this.getInsulinSchedule();
  }
  getInsulinSchedule = () => {
    this.api.getInsulinSchedule().subscribe(
      data => {
        for(var i=0; i<data.length; i++)
        {
          var insulinDic = {
            scheduled_time: moment(data[i]['created_at']).format("hh:mm A"),
            medication: data[i]['medication']
          }
          this.InsulinScheduleList.push(insulinDic);
        }
      
      },
      error => {
        console.log(error)
      }
    );
  }

  ngOnInit(): void {
  }

}

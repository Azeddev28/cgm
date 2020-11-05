import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {FetchGlucoseHistoryService} from './fetch-glucose-history.service'
import * as moment from 'moment';

@Component({
  selector: 'app-patient-glucose-history',
  templateUrl: './patient-glucose-history.component.html',
  styleUrls: ['./patient-glucose-history.component.css']
})
export class PatientGlucoseHistoryComponent implements OnInit {

  glucoseReadings: number[] = [];
  timesArray: string[] = [];
  public lineChartPlugins = [pluginAnnotations];
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  public lineChartOptions: ChartOptions = {
    showLines: true,
    responsive: true,
    maintainAspectRatio: false,
  };


  constructor(private api:FetchGlucoseHistoryService) {
    this.getPatientGlucoseLevelHistory();
   }

   getPatientGlucoseLevelHistory = () => {
    this.api.getGlucoseHistory().subscribe(
        
      data => {
        for(var i=0; i<data.length; i++)
        {
          var time = moment(data[i].created_at).format("hh:mm A");
          console.log(time);
          this.timesArray.push(time);
          this.glucoseReadings.push(data[i].glucose_level);
        }
      },
      error => {
        console.log(error);
      }
      );  
      
   };
  glucoseReadingData: ChartDataSets[] = [
    { data: this.glucoseReadings, 
      label: 'Patient Glucose' 
    },
  ];
  glucoseReadingTime: Label[] = this.timesArray;

  ngOnInit(): void {
  }

}








import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {CheckGlucoseLevelService} from './check-glucose-level.service'

@Component({
  selector: 'app-patient-glucose-monitoring',
  templateUrl: './patient-glucose-monitoring.component.html',
  styleUrls: ['./patient-glucose-monitoring.component.css']
})
export class PatientGlucoseMonitoringComponent implements OnInit {
  glucoseReadingValue = null;
  public glucoseReadingData: ChartDataSets[] = [
    { data: [90, 140, 95, 93, 92, 94, 92], label: 'Patient Glucose' },
  ];
  public glucoseReadingTime: Label[] = ['10PM', '11PM', '12PM', '1AM', '2AM', '3AM', '4AM'];
  public lineChartPlugins = [pluginAnnotations];
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  public lineChartOptions: ChartOptions = {
    showLines: true,
    responsive: true,
    maintainAspectRatio: false,
  };

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

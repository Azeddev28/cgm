import { Component, OnInit } from '@angular/core';
import {MealPlanService} from './meal-plan.service';
import * as moment from 'moment';

@Component({
  selector: 'app-patient-meal-plan',
  templateUrl: './patient-meal-plan.component.html',
  styleUrls: ['./patient-meal-plan.component.css']
})


export class PatientMealPlanComponent implements OnInit {
  
  MealPlanList = []
  constructor(private api:MealPlanService) {
    this.getMealPlan();
   }

   getMealPlan = () => {
    this.api.getMealPlan().subscribe(
      data => {
        for(var i=0; i<data.length; i++)
        {
          var mealDic = {
            scheduled_time: moment(data[i]['created_at']).format("hh:mm A"),
            name: data[i]['name']
          }
          this.MealPlanList.push(mealDic);
        }
      },
      error => {
        console.log(error);
      }
    );
  };


  ngOnInit(): void {
  }

}


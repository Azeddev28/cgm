import { Component, OnInit } from '@angular/core';
import {MealPlanService} from './meal-plan.service';

export interface MealPlan {
  name: string,
  scheduled_time: string
}

@Component({
  selector: 'app-patient-meal-plan',
  templateUrl: './patient-meal-plan.component.html',
  styleUrls: ['./patient-meal-plan.component.css']
})


export class PatientMealPlanComponent implements OnInit {
  
  MealPlanList: MealPlan[] = []
  displayedColumns: string[] = ['name', 'scheduled time'];
  constructor(private api:MealPlanService) {
    this.getMealPlan();
   }

   getMealPlan = () => {
    this.api.getMealPlan().subscribe(
      data => {
        console.log(data);
        // this.MealPlanList = data;
      },
      error => {
        console.log(error);
      }
    );
  };


  ngOnInit(): void {
  }

}


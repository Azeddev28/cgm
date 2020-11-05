import { PatientMealPlanComponent } from './patient-meal-plan/patient-meal-plan.component';
import { PatientGlucoseHistoryComponent } from './patient-glucose-history/patient-glucose-history.component';
import { PatientGlucoseMonitoringComponent } from './patient-glucose-monitoring/patient-glucose-monitoring.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientInsulineScheduleComponent } from './patient-insuline-schedule/patient-insuline-schedule.component';
import { DoctorPatientListComponent } from './doctor-patient-list/doctor-patient-list.component';

const routes: Routes = [
  {
    component: LandingComponent,
    path: ''
  },
  {
    component: SignupComponent,
    path: 'signup'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: PatientDashboardComponent,
    path: 'patient',
  },
  {
    component: DoctorDashboardComponent,
    path: 'doctor'
  },
  {
    component: PatientGlucoseMonitoringComponent,
    path: 'glucose-monitoring'
  },
  {
    component: PatientGlucoseHistoryComponent,
    path: 'glucose-history'
  },
  {
    component: PatientMealPlanComponent,
    path: 'meal-plan'
  },
  {
    component: PatientInsulineScheduleComponent,
    path: 'insulin-schedule'
  },
  {
    component: DoctorPatientListComponent,
    path: 'patient-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

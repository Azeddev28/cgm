import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientGlucoseMonitoringComponent } from './patient-glucose-monitoring/patient-glucose-monitoring.component';
import { PatientMealPlanComponent } from './patient-meal-plan/patient-meal-plan.component';
import { PatientInsulineScheduleComponent } from './patient-insuline-schedule/patient-insuline-schedule.component';
import { PatientContactDoctorComponent } from './patient-contact-doctor/patient-contact-doctor.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    PatientDashboardComponent,
    DoctorDashboardComponent,
    PatientGlucoseMonitoringComponent,
    PatientMealPlanComponent,
    PatientInsulineScheduleComponent,
    PatientContactDoctorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ToastNotificationsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

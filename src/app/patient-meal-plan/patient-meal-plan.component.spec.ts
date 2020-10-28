import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMealPlanComponent } from './patient-meal-plan.component';

describe('PatientMealPlanComponent', () => {
  let component: PatientMealPlanComponent;
  let fixture: ComponentFixture<PatientMealPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMealPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

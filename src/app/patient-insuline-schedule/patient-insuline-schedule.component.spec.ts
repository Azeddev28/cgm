import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInsulineScheduleComponent } from './patient-insuline-schedule.component';

describe('PatientInsulineScheduleComponent', () => {
  let component: PatientInsulineScheduleComponent;
  let fixture: ComponentFixture<PatientInsulineScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInsulineScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInsulineScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

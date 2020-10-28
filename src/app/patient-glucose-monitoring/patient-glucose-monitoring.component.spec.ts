import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGlucoseMonitoringComponent } from './patient-glucose-monitoring.component';

describe('PatientGlucoseMonitoringComponent', () => {
  let component: PatientGlucoseMonitoringComponent;
  let fixture: ComponentFixture<PatientGlucoseMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientGlucoseMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGlucoseMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

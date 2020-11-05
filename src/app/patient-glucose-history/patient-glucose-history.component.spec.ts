import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGlucoseHistoryComponent } from './patient-glucose-history.component';

describe('PatientGlucoseHistoryComponent', () => {
  let component: PatientGlucoseHistoryComponent;
  let fixture: ComponentFixture<PatientGlucoseHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientGlucoseHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGlucoseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientContactDoctorComponent } from './patient-contact-doctor.component';

describe('PatientContactDoctorComponent', () => {
  let component: PatientContactDoctorComponent;
  let fixture: ComponentFixture<PatientContactDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientContactDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientContactDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

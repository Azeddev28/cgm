import { TestBed } from '@angular/core/testing';

import { RetrievePatientListService } from './retrieve-patient-list.service';

describe('RetrievePatientListService', () => {
  let service: RetrievePatientListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrievePatientListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

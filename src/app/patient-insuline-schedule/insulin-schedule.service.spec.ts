import { TestBed } from '@angular/core/testing';

import { InsulinScheduleService } from './insulin-schedule.service';

describe('InsulinScheduleService', () => {
  let service: InsulinScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsulinScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

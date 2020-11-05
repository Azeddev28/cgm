import { TestBed } from '@angular/core/testing';

import { FetchGlucoseHistoryService } from './fetch-glucose-history.service';

describe('FetchGlucoseHistoryService', () => {
  let service: FetchGlucoseHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchGlucoseHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

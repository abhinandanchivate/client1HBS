import { TestBed } from '@angular/core/testing';

import { HbsService } from './hbs.service';

describe('HbsService', () => {
  let service: HbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

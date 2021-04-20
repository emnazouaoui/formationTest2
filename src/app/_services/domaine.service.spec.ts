import { TestBed } from '@angular/core/testing';

import { DomaineService } from './_service/domaine.service';

describe('DomaineService', () => {
  let service: DomaineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomaineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SpostService } from './spost.service';

describe('SpostService', () => {
  let service: SpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

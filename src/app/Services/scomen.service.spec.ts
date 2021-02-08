import { TestBed } from '@angular/core/testing';

import { ScomenService } from './scomen.service';

describe('ScomenService', () => {
  let service: ScomenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScomenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

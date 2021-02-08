import { TestBed } from '@angular/core/testing';

import { SperfilService } from './sperfil.service';

describe('SperfilService', () => {
  let service: SperfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SperfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

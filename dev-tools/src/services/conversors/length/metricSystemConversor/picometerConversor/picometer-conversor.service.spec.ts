import { TestBed } from '@angular/core/testing';

import { PicometerConversorService } from './picometer-conversor.service';

describe('PicometerConversorService', () => {
  let service: PicometerConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicometerConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

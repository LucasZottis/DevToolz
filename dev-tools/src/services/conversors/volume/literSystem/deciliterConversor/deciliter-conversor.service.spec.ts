import { TestBed } from '@angular/core/testing';

import { DeciliterConversorService } from './deciliter-conversor.service';

describe('DeciliterConversorService', () => {
  let service: DeciliterConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeciliterConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

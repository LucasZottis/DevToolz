import { TestBed } from '@angular/core/testing';

import { CubicDecimeterConversorService } from './cubic-decimeter-conversor.service';

describe('CubicDecimeterConversorService', () => {
  let service: CubicDecimeterConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubicDecimeterConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

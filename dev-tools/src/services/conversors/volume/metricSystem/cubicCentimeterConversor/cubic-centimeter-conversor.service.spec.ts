import { TestBed } from '@angular/core/testing';

import { CubicCentimeterConversorService } from './cubic-centimeter-conversor.service';

describe('CubicCentimeterConversorService', () => {
  let service: CubicCentimeterConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubicCentimeterConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

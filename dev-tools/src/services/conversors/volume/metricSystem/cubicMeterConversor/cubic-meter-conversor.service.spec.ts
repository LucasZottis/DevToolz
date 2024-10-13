import { TestBed } from '@angular/core/testing';

import { CubicMeterConversorService } from './cubic-meter-conversor.service';

describe('CubicMeterConversorService', () => {
  let service: CubicMeterConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubicMeterConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CubicKilometerConversorService } from './cubic-kilometer-conversor.service';

describe('CubicKilometerConversorService', () => {
  let service: CubicKilometerConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubicKilometerConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

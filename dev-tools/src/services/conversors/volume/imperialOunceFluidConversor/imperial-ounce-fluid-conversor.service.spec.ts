import { TestBed } from '@angular/core/testing';

import { ImperialOunceFluidConversorService } from './imperial-ounce-fluid-conversor.service';

describe('ImperialOunceFluidConversorService', () => {
  let service: ImperialOunceFluidConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImperialOunceFluidConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

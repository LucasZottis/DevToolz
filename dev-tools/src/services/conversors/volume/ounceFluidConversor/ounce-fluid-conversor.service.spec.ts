import { TestBed } from '@angular/core/testing';

import { OunceFluidConversorService } from './ounce-fluid-conversor.service';

describe('OunceFluidConversorService', () => {
  let service: OunceFluidConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OunceFluidConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

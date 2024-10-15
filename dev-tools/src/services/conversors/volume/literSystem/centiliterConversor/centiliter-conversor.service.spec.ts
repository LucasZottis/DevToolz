import { TestBed } from '@angular/core/testing';

import { CentiliterConversorService } from './centiliter-conversor.service';

describe('CentiliterConversorService', () => {
  let service: CentiliterConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentiliterConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NanometerConversorService } from './nanometer-conversor.service';

describe('NanometerConversorService', () => {
  let service: NanometerConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NanometerConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

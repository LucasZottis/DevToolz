import { TestBed } from '@angular/core/testing';

import { HectoliterConversorService } from './hectoliter-conversor.service';

describe('HectoliterConversorService', () => {
  let service: HectoliterConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HectoliterConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

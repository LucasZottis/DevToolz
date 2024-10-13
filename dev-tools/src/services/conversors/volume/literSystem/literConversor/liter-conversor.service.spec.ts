import { TestBed } from '@angular/core/testing';

import { LiterConversorService } from './liter-conversor.service';

describe('LiterConversorService', () => {
  let service: LiterConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiterConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

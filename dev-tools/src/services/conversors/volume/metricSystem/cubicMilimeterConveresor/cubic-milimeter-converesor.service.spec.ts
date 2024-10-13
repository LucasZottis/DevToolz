import { TestBed } from '@angular/core/testing';

import { CubicMilimeterConveresorService } from './cubic-milimeter-converesor.service';

describe('CubicMilimeterConveresorService', () => {
  let service: CubicMilimeterConveresorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubicMilimeterConveresorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

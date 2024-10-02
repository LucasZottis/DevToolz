import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericSystemsConverterPageComponent } from './numeric-systems-converter-page.component';

describe('NumericSystemsConverterPageComponent', () => {
  let component: NumericSystemsConverterPageComponent;
  let fixture: ComponentFixture<NumericSystemsConverterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumericSystemsConverterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericSystemsConverterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

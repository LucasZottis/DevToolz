import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperToLowerLettersConversorPageComponent } from './upper-to-lower-letters-conversor-page.component';

describe('UpperToLowerLettersConversorPageComponent', () => {
  let component: UpperToLowerLettersConversorPageComponent;
  let fixture: ComponentFixture<UpperToLowerLettersConversorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperToLowerLettersConversorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperToLowerLettersConversorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

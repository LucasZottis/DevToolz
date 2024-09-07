import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterCounterComponent } from './letter-counter.component';

describe('LetterCounterComponent', () => {
  let component: LetterCounterComponent;
  let fixture: ComponentFixture<LetterCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

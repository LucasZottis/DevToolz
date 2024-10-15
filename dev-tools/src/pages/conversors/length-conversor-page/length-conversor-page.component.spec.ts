import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthConversorPageComponent } from './length-conversor-page.component';

describe('LengthConversorPageComponent', () => {
  let component: LengthConversorPageComponent;
  let fixture: ComponentFixture<LengthConversorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LengthConversorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LengthConversorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

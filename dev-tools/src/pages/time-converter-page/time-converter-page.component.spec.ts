import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConverterPageComponent } from './time-converter-page.component';

describe('TimeConverterPageComponent', () => {
  let component: TimeConverterPageComponent;
  let fixture: ComponentFixture<TimeConverterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeConverterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeConverterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

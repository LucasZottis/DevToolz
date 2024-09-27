import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csv2JsonPageComponent } from './csv2-json-page.component';

describe('Csv2JsonPageComponent', () => {
  let component: Csv2JsonPageComponent;
  let fixture: ComponentFixture<Csv2JsonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Csv2JsonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csv2JsonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

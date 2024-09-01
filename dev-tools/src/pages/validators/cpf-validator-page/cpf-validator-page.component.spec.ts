import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfValidatorPageComponent } from './cpf-validator-page.component';

describe('CpfValidatorPageComponent', () => {
  let component: CpfValidatorPageComponent;
  let fixture: ComponentFixture<CpfValidatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpfValidatorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpfValidatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

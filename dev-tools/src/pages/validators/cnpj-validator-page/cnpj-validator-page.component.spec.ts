import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnpjValidatorPageComponent } from './cnpj-validator-page.component';

describe('CnpjValidatorPageComponent', () => {
  let component: CnpjValidatorPageComponent;
  let fixture: ComponentFixture<CnpjValidatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnpjValidatorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CnpjValidatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

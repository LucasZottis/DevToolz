import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfGeneratorPageComponent } from './cpf-generator-page.component';

describe('CpfGeneratorPageComponent', () => {
  let component: CpfGeneratorPageComponent;
  let fixture: ComponentFixture<CpfGeneratorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpfGeneratorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpfGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

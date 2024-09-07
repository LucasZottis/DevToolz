import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnpjGeneratorPageComponent } from './cnpj-generator-page.component';

describe('CnpjGeneratorPageComponent', () => {
  let component: CnpjGeneratorPageComponent;
  let fixture: ComponentFixture<CnpjGeneratorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnpjGeneratorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CnpjGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

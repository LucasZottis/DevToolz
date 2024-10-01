import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverAcentoTextoPageComponent } from './remover-acento-texto-page.component';

describe('RemoverAcentoTextoPageComponent', () => {
  let component: RemoverAcentoTextoPageComponent;
  let fixture: ComponentFixture<RemoverAcentoTextoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoverAcentoTextoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoverAcentoTextoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

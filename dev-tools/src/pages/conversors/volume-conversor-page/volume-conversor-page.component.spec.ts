import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeConversorPageComponent } from './volume-conversor-page.component';

describe('VolumeConversorPageComponent', () => {
  let component: VolumeConversorPageComponent;
  let fixture: ComponentFixture<VolumeConversorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolumeConversorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumeConversorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

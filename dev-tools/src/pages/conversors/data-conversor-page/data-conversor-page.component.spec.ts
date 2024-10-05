import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataConversorPageComponent } from './data-conversor-page.component';

describe('DataConversorPageComponent', () => {
  let component: DataConversorPageComponent;
  let fixture: ComponentFixture<DataConversorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataConversorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataConversorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

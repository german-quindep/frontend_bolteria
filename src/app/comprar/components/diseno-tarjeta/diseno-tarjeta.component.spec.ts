import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoTarjetaComponent } from './diseno-tarjeta.component';

describe('DisenoTarjetaComponent', () => {
  let component: DisenoTarjetaComponent;
  let fixture: ComponentFixture<DisenoTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisenoTarjetaComponent]
    });
    fixture = TestBed.createComponent(DisenoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTarjetaComponent } from './form-tarjeta.component';

describe('FormTarjetaComponent', () => {
  let component: FormTarjetaComponent;
  let fixture: ComponentFixture<FormTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTarjetaComponent]
    });
    fixture = TestBed.createComponent(FormTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

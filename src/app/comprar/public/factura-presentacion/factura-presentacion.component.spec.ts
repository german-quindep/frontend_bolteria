import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPresentacionComponent } from './factura-presentacion.component';

describe('FacturaPresentacionComponent', () => {
  let component: FacturaPresentacionComponent;
  let fixture: ComponentFixture<FacturaPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FacturaPresentacionComponent]
    });
    fixture = TestBed.createComponent(FacturaPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

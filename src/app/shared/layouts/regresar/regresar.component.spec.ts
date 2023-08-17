import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresarComponent } from './regresar.component';

describe('RegresarComponent', () => {
  let component: RegresarComponent;
  let fixture: ComponentFixture<RegresarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegresarComponent]
    });
    fixture = TestBed.createComponent(RegresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

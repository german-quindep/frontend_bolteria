import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBusComponent } from './form-bus.component';

describe('FormBusComponent', () => {
  let component: FormBusComponent;
  let fixture: ComponentFixture<FormBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBusComponent]
    });
    fixture = TestBed.createComponent(FormBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

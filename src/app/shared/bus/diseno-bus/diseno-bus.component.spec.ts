import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoBusComponent } from './diseno-bus.component';

describe('DisenoBusComponent', () => {
  let component: DisenoBusComponent;
  let fixture: ComponentFixture<DisenoBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisenoBusComponent]
    });
    fixture = TestBed.createComponent(DisenoBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

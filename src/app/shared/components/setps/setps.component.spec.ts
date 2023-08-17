import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpsComponent } from './setps.component';

describe('SetpsComponent', () => {
  let component: SetpsComponent;
  let fixture: ComponentFixture<SetpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SetpsComponent]
    });
    fixture = TestBed.createComponent(SetpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

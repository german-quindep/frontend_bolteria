import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumbsComponent } from './breadcumbs.component';

describe('BreadcumbsComponent', () => {
  let component: BreadcumbsComponent;
  let fixture: ComponentFixture<BreadcumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BreadcumbsComponent]
    });
    fixture = TestBed.createComponent(BreadcumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

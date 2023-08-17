import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsModuleComponent } from './sections-module.component';

describe('SectionsModuleComponent', () => {
  let component: SectionsModuleComponent;
  let fixture: ComponentFixture<SectionsModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SectionsModuleComponent]
    });
    fixture = TestBed.createComponent(SectionsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

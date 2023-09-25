import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeassonIndexComponent } from './leasson-index.component';

describe('LeassonIndexComponent', () => {
  let component: LeassonIndexComponent;
  let fixture: ComponentFixture<LeassonIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeassonIndexComponent]
    });
    fixture = TestBed.createComponent(LeassonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

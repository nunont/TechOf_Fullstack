import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeassonEditionComponent } from './leasson-edition.component';

describe('LeassonEditionComponent', () => {
  let component: LeassonEditionComponent;
  let fixture: ComponentFixture<LeassonEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeassonEditionComponent]
    });
    fixture = TestBed.createComponent(LeassonEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

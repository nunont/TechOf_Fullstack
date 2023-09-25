import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupForControlComponent } from './group-for-control.component';

describe('GroupForControlComponent', () => {
  let component: GroupForControlComponent;
  let fixture: ComponentFixture<GroupForControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupForControlComponent]
    });
    fixture = TestBed.createComponent(GroupForControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

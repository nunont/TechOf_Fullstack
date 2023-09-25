import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupForControlBuilderComponent } from './group-for-control-builder.component';

describe('GroupForControlBuilderComponent', () => {
  let component: GroupForControlBuilderComponent;
  let fixture: ComponentFixture<GroupForControlBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupForControlBuilderComponent]
    });
    fixture = TestBed.createComponent(GroupForControlBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

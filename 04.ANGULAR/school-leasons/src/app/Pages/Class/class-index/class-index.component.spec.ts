import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassIndexComponent } from './class-index.component';

describe('ClassIndexComponent', () => {
  let component: ClassIndexComponent;
  let fixture: ComponentFixture<ClassIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassIndexComponent]
    });
    fixture = TestBed.createComponent(ClassIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEditionComponent } from './class-edition.component';

describe('ClassEditionComponent', () => {
  let component: ClassEditionComponent;
  let fixture: ComponentFixture<ClassEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassEditionComponent]
    });
    fixture = TestBed.createComponent(ClassEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

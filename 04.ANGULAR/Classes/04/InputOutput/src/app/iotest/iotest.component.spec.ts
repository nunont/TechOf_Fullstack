import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotestComponent } from './iotest.component';

describe('IotestComponent', () => {
  let component: IotestComponent;
  let fixture: ComponentFixture<IotestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IotestComponent]
    });
    fixture = TestBed.createComponent(IotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

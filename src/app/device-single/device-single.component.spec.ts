import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSingleComponent } from './device-single.component';

describe('DeviceSingleComponent', () => {
  let component: DeviceSingleComponent;
  let fixture: ComponentFixture<DeviceSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

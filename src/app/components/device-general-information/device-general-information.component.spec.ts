import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGeneralInformationComponent } from './device-general-information.component';

describe('DeviceGeneralInformationComponent', () => {
  let component: DeviceGeneralInformationComponent;
  let fixture: ComponentFixture<DeviceGeneralInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceGeneralInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

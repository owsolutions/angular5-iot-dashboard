import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCustomizationComponent } from './device-customization.component';

describe('DeviceCustomizationComponent', () => {
  let component: DeviceCustomizationComponent;
  let fixture: ComponentFixture<DeviceCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

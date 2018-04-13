import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEventsActionsComponent } from './device-events-actions.component';

describe('DeviceEventsActionsComponent', () => {
  let component: DeviceEventsActionsComponent;
  let fixture: ComponentFixture<DeviceEventsActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceEventsActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceEventsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

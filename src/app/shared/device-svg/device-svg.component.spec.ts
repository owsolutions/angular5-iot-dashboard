import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSvgComponent } from './device-svg.component';

describe('DeviceSvgComponent', () => {
  let component: DeviceSvgComponent;
  let fixture: ComponentFixture<DeviceSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

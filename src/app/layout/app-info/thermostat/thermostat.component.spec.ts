import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermostatComponent } from './thermostat.component';

describe('ThermostatComponent', () => {
  let component: ThermostatComponent;
  let fixture: ComponentFixture<ThermostatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermostatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermostatComponent);
    component = fixture.componentInstance;
    component.tempratures = [];
    component.nowTemp = 1;
    component.setTemperature = (t) => component.tempratures;
    component.getTemperature = () => 1;
    component.changeTemp = (s) => {};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

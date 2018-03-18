import { Component, OnInit, Input } from '@angular/core';
import { CloudDevice, CloudDeviceType } from '@shared/iot/definitions';

@Component({
  selector: 'app-switch-widgets',
  templateUrl: './switch-widgets.component.html',
  styleUrls: ['./switch-widgets.component.scss' , '../checkbox-switch.scss']
})
export class SwitchWidgetsComponent implements OnInit {

  @Input('device') public device: CloudDevice;

  ngOnInit() {

  }

  public GetIcon (device: CloudDevice) {
    if (device.type === CloudDeviceType.TemperatureSensor) {
      return 'icon icon-thermometer-2';
    }
    return 'icon icon-cloud';
  }

  public value (device: CloudDevice) {
    if (!device.value.toFixed) {
      return device.value;
    }
    if (device.value === 'ON' || device.value === 'OFF') {
      return device.value;
    }
    return (device.value as Number).toFixed(2);
  }
}

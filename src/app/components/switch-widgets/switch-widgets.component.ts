import { Component, Input } from '@angular/core';
import { CloudDevice } from '@app/definitions';

@Component({
  selector: 'app-switch-widgets',
  templateUrl: './switch-widgets.component.html',
  styleUrls: ['./switch-widgets.component.scss' , '../checkbox-switch.scss']
})
export class SwitchWidgetsComponent {

  @Input('device') public device: CloudDevice;

  public GetIcon (device: CloudDevice) {
    return 'icon-cloud_circle';
  }

  public IsTemperature (device: CloudDevice) {
    return false;
  }
  public value (device: CloudDevice) {
    if (! device.value || !device.value.toFixed) {
      return device.value;
    }
    if (device.value === 'ON' || device.value === 'OFF') {
      return device.value;
    }
    return (device.value as Number).toFixed(2);
  }
}

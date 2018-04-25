import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IDeviceDisplayPreference } from '@app/definitions';

@Component({
  selector: 'app-device-humidity',
  templateUrl: './device-humidity.component.html',
  styleUrls: ['./device-humidity.component.scss']
})
export class DeviceHumidityComponent {

  public form: IDeviceDisplayPreference = {};
  @Output('onChange') public onChange: EventEmitter<IDeviceDisplayPreference> = new EventEmitter();
  @Input('preferences') public set preferences (value:  IDeviceDisplayPreference) {
    this.form = Object.assign({}, value) || {};
  }

  public TriggerChange () {
    this.onChange.emit(this.form);
  }

}

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IDeviceDisplayPreference } from '@app/definitions';

@Component({
  selector: 'app-device-co2',
  templateUrl: './device-co2.component.html',
  styleUrls: ['./device-co2.component.scss']
})
export class DeviceCO2Component {

  public form: IDeviceDisplayPreference = {};
  @Output('onChange') public onChange: EventEmitter<IDeviceDisplayPreference> = new EventEmitter();
  @Input('preferences') public set preferences (value:  IDeviceDisplayPreference) {
    this.form = Object.assign({}, value) || {};
  }

  public TriggerChange () {
    this.onChange.emit(this.form);
  }

}

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IDeviceDisplayPreference } from '@app/definitions';

@Component({
  selector: 'app-device-lamp',
  templateUrl: './device-lamp.component.html',
  styleUrls: ['./device-lamp.component.scss']
})
export class DeviceLampComponent {

  public form: IDeviceDisplayPreference = {};
  @Output('onChange') public onChange: EventEmitter<IDeviceDisplayPreference> = new EventEmitter();
  @Input('preferences') public set preferences (value:  IDeviceDisplayPreference) {
    this.form = Object.assign({}, value) || {};
  }

  public TriggerChange () {
    this.onChange.emit(this.form);
  }

}

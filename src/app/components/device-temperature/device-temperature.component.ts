import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IDeviceDisplayPreference } from '@app/definitions';

@Component({
  selector: 'app-device-temperature',
  templateUrl: './device-temperature.component.html',
  styleUrls: ['./device-temperature.component.scss']
})
export class DeviceTemperatureComponent implements OnInit {

  public form: IDeviceDisplayPreference = {};
  @Output('onChange') public onChange: EventEmitter<IDeviceDisplayPreference> = new EventEmitter();
  @Input('preferences') public set preferences (value:  IDeviceDisplayPreference) {
    this.form = Object.assign({}, value) || {};
  }

  constructor() { }

  ngOnInit() {
  }

  public TriggerChange () {
    // setTimeout(() => {
      this.onChange.emit(this.form);
    // })

  }

}

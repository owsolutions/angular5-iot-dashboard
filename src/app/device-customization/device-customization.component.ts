import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import UpdateOrInsert from '@shared/core/functions/UpdateOrInsert';
import { IDeviceDisplayPreference, TemperatureCustomization } from '@shared/iot/definitions';

@Component({
  selector: 'app-device-customization',
  templateUrl: './device-customization.component.html',
  styleUrls: ['./device-customization.component.scss']
})
export class DeviceCustomizationComponent implements OnInit {

  private form: IDeviceDisplayPreference = {};
  @Output('onChange') public onChange: EventEmitter<IDeviceDisplayPreference> = new EventEmitter();
  @Input('preferences') public set preferences (value:  IDeviceDisplayPreference) {
    this.form = value || {};
  }

  constructor() { }

  ngOnInit() {
  }

  public TriggerChange () {
    this.onChange.emit(this.form);
  }

}
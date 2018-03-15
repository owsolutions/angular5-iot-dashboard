import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import UpdateOrInsert from '@shared/core/functions/UpdateOrInsert';
import { IDeviceDisplayPreference, TemperatureCustomization } from '@shared/iot/definitions';

@Component({
  selector: 'app-device-customization',
  templateUrl: './device-customization.component.html',
  styleUrls: ['./device-customization.component.scss']
})
export class DeviceCustomizationComponent implements OnInit {

  @Output('onChange') public onChange: EventEmitter<Array<IDeviceDisplayPreference>> = new EventEmitter();
  @Input('preferences') public preferences: Array<IDeviceDisplayPreference> = [];
  public TemperatureCustomization = TemperatureCustomization;
  constructor() { }

  ngOnInit() {
  }

  public LastweekAverageInSidebar (value: boolean = false) {
    const $el: IDeviceDisplayPreference = {
      key: TemperatureCustomization.SidebarLastWeekAverage,
      value: value,
      type: 'TemperatureDevice'
    };
    this.preferences = UpdateOrInsert($el, this.preferences || [], 'key');
    this.onChange.emit(this.preferences);
  }
  public RealtimeValueInSidebar (value: boolean = false) {
    const $el: IDeviceDisplayPreference = {
      key: TemperatureCustomization.SidebarRealTimeValue,
      value: value,
      type: 'TemperatureDevice'
    };
    this.preferences = UpdateOrInsert($el, this.preferences || [], 'key');
    this.onChange.emit(this.preferences);
  }

  public IsChecked (type: TemperatureCustomization) {
    if ( ! this.preferences) {
      return;
    }
    const val = this.preferences.find(t=> t.key === type);
    return val && val.value || false;
  }

}

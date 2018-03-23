import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IDeviceDisplayPreference } from '@app/definitions';

@Component({
  selector: 'app-device-customization',
  templateUrl: './device-customization.component.html',
  styleUrls: ['./device-customization.component.scss']
})
export class DeviceCustomizationComponent implements OnInit {

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

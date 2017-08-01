import { Component, OnInit, Input } from '@angular/core';
import { IDevice, IPin } from '../Definitions';
import { CommunicateService } from '../../communicate.service';
import { IActivity, ActivityTypes } from '../Definitions';
import { random } from 'lodash';

@Component({
  selector: 'app-output-pin',
  templateUrl: './output-pin.component.html',
  styleUrls: ['./output-pin.component.scss',  '../checkbox-switch.scss']
})
export class OutputPinComponent implements OnInit {

  public enable: any;
  @Input('pin') public pin = <IPin>null;
  @Input('device') public device = <IDevice>null;
  @Input('switchSize') public switchSize = 'bigswitch';

  constructor(public communicate: CommunicateService) { }

  ngOnInit() {
    // empty for now.
  }

  findType (value: any) {
    if (value === 'ON' || value === 'OFF') {
      return 'switch';
    }
    return 'input';
  }

  castPinValue (value: any) {
    if (value === 'ON') {
      return 'on';
    }
    if (value === 'OFF') {
      return 'off';
    }
    return parseFloat(value).toPrecision(3);
  }

  changeAnalogData($event: any, device: IDevice, pin: IPin) {
    const newValue = $event.target.value;
    this.communicate.triggerDeviceChange($event, device, pin, newValue);
    return newValue;
  }

  changeDigitalData($event, device: IDevice, pin: IPin) {
    const newValue = $event.target.checked ? 'ON' : 'OFF';
    this.communicate.triggerDeviceChange($event, device, pin, newValue);
    return newValue;
  }
}

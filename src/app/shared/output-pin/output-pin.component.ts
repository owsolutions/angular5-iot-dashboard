import { Component, OnInit, Input } from '@angular/core';
import { IDevice, IPin } from '../Definitions';
import { CommunicateService } from '../../communicate.service';
import { IActivity } from '../Definitions';
import { random } from 'lodash';

@Component({
  selector: 'app-output-pin',
  templateUrl: './output-pin.component.html',
  styleUrls: ['./output-pin.component.scss',  '../checkbox-switch.scss']
})
export class OutputPinComponent implements OnInit {
  public enable: any;
  @Input() pin: IPin;
  @Input() device: IDevice;

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

  changeAnalogData ($event: any, device: IDevice, pin: IPin) {
    let newValue = $event.target.value;
    this.communicate.notfityActivity({
      description: $event.target.value + ' -> ' + device.uniqueid + ' > ' + newValue,
      id: random(111,999)
    });
    return newValue;
  }
  changeDigitalData ($event, device: IDevice, pin: IPin) {
    let newValue = $event.target.checked ? 'ON' : 'OFF';
    this.communicate.notfityActivity({
      description: $event.target.value + ' -> ' + device.uniqueid + ' > ' + newValue,
      id: random(111,999)
    });
    return newValue;
  }

  pinValueChange (pin: IPin , t) {
    console.log('Pin Change: ' , pin, t);
    return true;
  }

}

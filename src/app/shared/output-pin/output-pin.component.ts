import { Component, OnInit, Input } from '@angular/core';
import { IDevice, IPin } from '../Definitions';
@Component({
  selector: 'app-output-pin',
  templateUrl: './output-pin.component.html',
  styleUrls: ['./output-pin.component.scss',  '../checkbox-switch.scss']
})
export class OutputPinComponent implements OnInit {
  public enable: any;
  @Input() pin: IPin;
  @Input() device: IDevice;

  constructor() { }
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
    console.log("Output change: " , $event.target.value , device , pin);
    return $event.target.value;
  }
  changeDigitalData ($event, device: IDevice, pin: IPin) {
    console.log("Output change: " , $event.target.checked , device, pin);
    return $event.target.checked ? 'ON' : 'OFF';
  }

  pinValueChange (pin: IPin , t) {
    console.log('Pin Change: ' , pin, t);
    return true;
  }

}

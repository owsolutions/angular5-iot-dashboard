import { Component, OnInit, Input } from '@angular/core';
import { IDevice, IPin } from '../Definitions';
@Component({
  selector: 'app-output-pin',
  templateUrl: './output-pin.component.html',
  styleUrls: ['./output-pin.component.scss']
})
export class OutputPinComponent implements OnInit {
  public enable: any;
  @Input() pin: any;

  constructor() { }
  ngOnInit() {
    // empty for now.
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

  pinValueChange (pin: IPin , t) {
    console.log('Pin Change: ' , pin, t);
    return true;
  }

}

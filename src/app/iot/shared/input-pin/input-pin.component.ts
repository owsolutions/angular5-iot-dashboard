import { Component, OnInit, Input } from '@angular/core';
import { IPin } from '@app/iot/definitions';

@Component({
  selector: 'app-input-pin',
  templateUrl: './input-pin.component.html',
  styleUrls: ['./input-pin.component.scss']
})
export class InputPinComponent implements OnInit {

  @Input() pin = <IPin>null;
  constructor() { }

  /**
   * Since each pin
   */
  castPinValue (value: any) {
    if (value === 'ON') {
      return 'on';
    }
    if (value === 'OFF') {
      return 'off';
    }
    return parseFloat(value).toPrecision(3);
  }

  ngOnInit() {
  }

}

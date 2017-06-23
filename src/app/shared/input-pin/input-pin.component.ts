import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-pin',
  templateUrl: './input-pin.component.html',
  styleUrls: ['./input-pin.component.scss']
})
export class InputPinComponent implements OnInit {

  @Input() pin: string;
  constructor() { }

  /**
   * Since each pin 
   */
  castPinValue (value: any) {
    if (value === 'ON') 
      return 'on';
    if (value === 'OFF')
      return 'off';
    return parseFloat(value).toPrecision(3);
  }

  ngOnInit() {
  }

}

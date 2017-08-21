import { Component, OnInit, Input } from '@angular/core';
import { IWidget } from '@app/iot/definitions';

@Component({
  selector: 'app-switch-widgets',
  templateUrl: './switch-widgets.component.html',
  styleUrls: ['./switch-widgets.component.scss' , '../checkbox-switch.scss']
})
export class SwitchWidgetsComponent implements OnInit {
  @Input() public widget: any;

  constructor() {
  }
  ngOnInit() {

  }

  value (widget: IWidget) {
    if (!widget.pin.value.toFixed) {
      return widget.pin.value;
    }
    if (widget.pin.value === 'ON' || widget.pin.value === 'OFF') {
      return widget.pin.value;
    }
    return (widget.pin.value as Number).toFixed(2);
  }
}

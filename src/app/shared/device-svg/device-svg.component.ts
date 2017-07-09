import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IPin , IDevice } from '../Definitions';

@Component({
  selector: 'device-svg',
  templateUrl: './device-svg.component.html',
  styleUrls: ['./device-svg.component.scss']
})
export class DeviceSvgComponent implements OnInit {

  @Input() public device: IDevice;
  @Output() public onFocusDevice: EventEmitter<any> = new EventEmitter();

  public focusedPin: IPin = null;
  constructor() { }

  getPinValue (id) {
    if (this.device) {
      let pin = this.device.pins.find(pin => pin.id === id);
      if ( pin ) {
        switch (typeof pin.value) {
          case 'string':
            return pin.value.toLowerCase();
          case 'number':
            return '~' + Math.floor(pin.value);
        }
      }
    }
    return '';
  }
  ngOnInit() {
    console.log('device -> ', this.device);
  }
  focusedDialogLeave () {
    this.focusedPin = null;
  }

  pinClick (id) {
    this.focusedPin = this.device.pins.find(pin => pin.id === id);
    this.onFocusDevice.emit({device: this.device , pin: this.focusedPin});
  }

}

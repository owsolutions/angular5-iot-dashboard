import { Component, Input, Output, EventEmitter} from '@angular/core';
import { IPin , IDevice } from '@app/iot/definitions';

@Component({
  selector: 'app-device-svg',
  templateUrl: './device-svg.component.html',
  styleUrls: ['./device-svg.component.scss']
})
export class DeviceSvgComponent {

  @Input() public device = <IDevice>null;
  @Output() public onFocusDevice: EventEmitter<any> = new EventEmitter();

  public focusedPin: IPin = null;

  getPinValue (id) {
    if (this.device) {
      const pin = this.device.pins.find(T => T.id === id);
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

  focusedDialogLeave () {
    this.focusedPin = null;
  }

  pinClick (id) {
    this.focusedPin = this.device.pins.find(pin => pin.id === id);
    this.onFocusDevice.emit({device: this.device , pin: this.focusedPin});
  }

}

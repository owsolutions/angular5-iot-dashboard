import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DeviceObject } from '../shared/DeviceObject';
import { IDevice, IPin, AppState, ILocation, IWidget } from '../shared/Definitions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CommunicateService } from '../communicate.service';
interface IForm {
  name: string
}
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements  OnDestroy , OnInit {

  public focusedDevice: IDevice = null;
  public focusedPin: IPin = null;
  public devices: Array<IDevice>;
  public places: Array<ILocation>;
  public form: IForm = {
    name: ''
  };
  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>, private communications: CommunicateService) {
    // Initialize private variables
  }

  countInputPins (device: IDevice) {
    return device.pins.filter(pin => pin.type === 'input').length;
  }

  countOutputPins (device: IDevice) {
    return device.pins.filter(pin => pin.type === 'output').length;
  }

  onWidgetNameInputChange (value) {
    this.form.name = value;
  }

  submitForm () {
    if (!this.focusedDevice || !this.focusedPin) return;
    this.communications.createWidgets({
      device: this.focusedDevice,
      pin: this.focusedPin,
      name: this.form.name,
      location: null
    });
  }

  describeDevice( device: IDevice) {
    return `This device has ${this.countInputPins(device)} inputs, and ${this.countOutputPins(device)} outputs.`;
  }

  deviceInfo (device: any) {
    return new DeviceObject(device);
  }

  unfocus () {
    this.focusedPin = null;
    this.focusedDevice = null;
  }

  resetForm () {
    this.form.name = '';
  }
  clickDispatch ({device, pin}) {
    this.focusedDevice = device;
    this.focusedPin = pin;

    // find if there is a widget
    const widget = this.communications.findWidget(device, pin);
    widget.then((widget: IWidget) => {
      console.log(widget);
      if (!widget) return this.resetForm();
      this.form.name = widget.name;

    })
  }

  ngOnInit() {
    this.store.select('devices').subscribe(devices => {
      this.devices = (devices as Array<IDevice>);
      this.chRef.detectChanges();
    });
    this.store.select('locations').subscribe(devices => {
      this.places = (devices as Array<ILocation>);
      this.chRef.detectChanges();
    });
    this.focusedDevice = this.devices[0];
    this.focusedPin = this.devices[0].pins[0];
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}

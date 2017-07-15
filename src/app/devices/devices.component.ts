import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DeviceObject } from '../shared/DeviceObject';
import { IDevice, IPin, AppState, ILocation, IWidget } from '../shared/Definitions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CommunicateService } from '../communicate.service';
interface IForm {
  name: string;
  location: any;
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
  public locations: Array<ILocation>;
  public form: IForm = {
    name: '',
    location: ''
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

  onPlaceChange (value) {
    this.form.location = value;
  }
  onWidgetNameInputChange (value) {
    this.form.name = value;
  }

  submitForm () {
    if (!this.focusedDevice || !this.focusedPin) {
      return;
    }
    this.communications.createWidgets({
      device: this.focusedDevice,
      pin: this.focusedPin,
      name: this.form.name,
      location: this.findLocationByName(this.form.location)
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
    this.form.location = '';
  }
  async clickDispatch ({device, pin}) {
    this.focusedDevice = device;
    this.focusedPin = pin;

    // find if there is a widget
    const widget = (await this.communications.findWidget(device, pin) as IWidget);
    if (!widget) {
      return this.resetForm();
    }
    this.form.name = widget.name;
    this.form.location = widget.location.name;
  }

  findLocationByName (name: string): ILocation {
    return this.locations.find(x => x.name === name);
  }

  ngOnInit() {
    this.store.select('devices').subscribe(collection => {
      this.devices = (collection as Array<IDevice>);
      this.chRef.detectChanges();
    });
    this.store.select('locations').subscribe(collection => {
      this.locations = (collection as Array<ILocation>);
    });

    // Set the initial window opened
    // this.focusedDevice = this.devices[0];
    // this.focusedPin = this.devices[0].pins[0];
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}

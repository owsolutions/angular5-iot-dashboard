import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DeviceObject } from '../shared/DeviceObject';
import { IDevice, IPin, AppState } from '../shared/Definitions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements  OnDestroy , OnInit {

  public focusedDevice: IDevice = null;
  public focusedPin: IPin = null;
  public devices: Array<IDevice>;

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>) {
    // Initialize private variables
  }


  countInputPins (device: IDevice) {
    return device.pins.filter(pin => pin.type === 'input').length;
  }
  
  countOutputPins (device: IDevice) {
    return device.pins.filter(pin => pin.type === 'output').length;
  }

  onWidgetNameInputChange (value) {
    console.log("Input change: " , value);
  }
  describeDevice( device: IDevice) {
    return `This device has ${this.countInputPins(device)} inputs, and ${this.countOutputPins(device)} outputs.`;
  }

  deviceInfo (device: any) {
    return new DeviceObject(device);
  }

  clickDispatch ({device, pin}) {
    this.focusedDevice = device;
    this.focusedPin = pin;
  }

  ngOnInit() {
    this.store.select('devices').subscribe(devices => {
      this.devices = (devices as Array<IDevice>);
      this.chRef.detectChanges();
    });
    this.focusedDevice = this.devices[0];
    this.focusedPin = this.devices[0].pins[0];
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}

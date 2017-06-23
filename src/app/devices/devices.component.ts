import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DeviceObject } from '../shared/DeviceObject';
import { IDevice, IPin } from '../shared/Definitions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  devices: Array<any>;
}

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss' , '../shared/checkbox-switch.scss']
})
export class DevicesComponent implements  OnDestroy , OnInit {

  private devices: Array<IDevice>;

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>) {

  }

  get Devices (): Array<DeviceObject> {
    return this.devices.map(device => new DeviceObject(device));
  }

  ngOnInit() {
    this.store.select('devices').subscribe(devices => {
      this.devices = (devices as Array<IDevice>);
      this.chRef.detectChanges();
    });
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}

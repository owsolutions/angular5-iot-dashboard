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

  public devices: Array<IDevice>;

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>) {

  }

  deviceInfo (device: any) {
    return new DeviceObject(device);
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

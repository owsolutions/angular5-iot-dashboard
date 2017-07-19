import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DeviceObject } from '../shared/DeviceObject';
import { IDevice, IPin, AppState, ILocation, IWidget } from '../shared/Definitions';
import { Store } from '@ngrx/store';
import { CommunicateService } from '../communicate.service';

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

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>, private communications: CommunicateService) {
    // Initialize private variables
  }

  async clickDispatch ({device, pin}) {
    this.focusedDevice = device;
    this.focusedPin = pin;
  }

  ngOnInit() {
    this.store.select('devices').subscribe(collection => {
      this.devices = (collection as Array<IDevice>);
      this.chRef.detectChanges();
    });
    this.store.select('locations').subscribe(collection => {
      this.locations = (collection as Array<ILocation>);
    });
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

  unfocus () {
    this.focusedPin = null;
    this.focusedDevice = null;
  }

}

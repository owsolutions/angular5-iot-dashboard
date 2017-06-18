import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Echosystem } from '../shared/EcoSystem';
import { ChangeDetectorRef } from '@angular/core';
import { DeviceObject } from '../shared/DeviceObject';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  devices: Array<any>
}

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss' , '../shared/checkbox-switch.scss']
})
export class DevicesComponent  {

  devices: any;

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>) {
    
    store.select('devices').subscribe(storeDevices => {
      this.devices = storeDevices;
      console.log('Devices: ' , this.devices);
    });

  }

  get Devices (): Array<DeviceObject> {
    return this.devices.map(device => {
      return new DeviceObject(device);
    });
  }

 
}

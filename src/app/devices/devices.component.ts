import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Echosystem } from '../shared/EcoSystem';
import {ChangeDetectorRef}  from '@angular/core';
import { DeviceObject } from '../shared/DeviceObject';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss' , '../shared/checkbox-switch.scss'],
  
})
export class DevicesComponent implements OnInit, OnDestroy {

  constructor(
    public chRef: ChangeDetectorRef
  ) { 
  }
  public devices: Array<DeviceObject>;

  ngOnInit() {
    let eco = new Echosystem();
    eco.UpdateDevices(eco.generateMock);
    this.devices = eco.Devices;

    window.currentSocket.on('message', message => {
        eco.UpdateDevice(message.device);
        this.devices = eco.Devices;
        this.chRef.detectChanges();
    });
    
    
  }

  ngOnDestroy() {
    this.chRef.detach();
  }
}

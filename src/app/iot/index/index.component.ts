import { Component, OnInit, ApplicationRef, AfterContentInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CloudDevice } from '@app/definitions';
import { values } from '@lodash';
import { IotModuleState } from '@app/iot/iot.module.defs';
import { IotRequestsService } from '@app/iot/iot-requests.service';
import { RealtimeService } from '../realtime.service';
import { UserService } from '@app/services/user.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit, AfterContentInit  {
  public liveData: any;
  public devices: Array<any> = [];

  constructor(
    private store: Store<IotModuleState>,
    private ref: ApplicationRef,
    private requests: IotRequestsService,
    private realtime: RealtimeService,
    private user: UserService,
  ) { }
  ngOnInit () {
    this.realtime.connectToRoom(this.user.GetToken());

    this.store.select('iotModule').subscribe(({devices}) => {
      this.devices = devices.concat([]);
    });
  }
  ngAfterContentInit() {
    this.requests.getDevices();
    // this.requests.getLocations();
    // this.requests.getUnconnected();
  }
  public TempWidget (device: CloudDevice) {
    return [{
      icon: 'icon icon-temperature-2',
      title: device.name,
      value: device.value
    }];
  }
  public HasNoPreferenceOnDevices (items: Array<CloudDevice> = []) {
    return items.every(x => ! x.preferences || values(x.preferences).every(() => false));
  }

  public AsDevice(device: CloudDevice): CloudDevice {
    return Object.assign({}, device);
  }

}

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ILocation, DataSource, CloudDevice } from '@app/definitions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { IotModuleState } from '@app/iot/iot.module.defs';
import { IotRequestsService } from '@app/iot/iot-requests.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements  OnInit, OnDestroy {

  public devices: Array<any> = [];
  public unconnected: Array<DataSource> = [];
  public locations: Array<ILocation> = [];
  private _ref1: any  = null;
  private _ref2 = null;
  constructor (
    private requests: IotRequestsService,
    public chRef: ChangeDetectorRef,
    private router: Router,
    private store: Store<IotModuleState>,
    private notification: NotificationService,
    private translate: TranslateService,

  ) {
   }

  ngOnInit() {
    this._ref1 = this.store.select('iotModule').subscribe(({devices}) => {
      this.devices = devices;
    });
    this._ref2 = this.store.select('iotModule').subscribe(({locations}) => {
      this.locations = (locations as Array<ILocation>);
    });
    this.store.select('iotModule').subscribe(({unconnectedSources}) => {
      this.unconnected = unconnectedSources;
    });
    this.requests.getDevices();
  }
  public FormatDate (value: Date) {
    if ( ! value ) {
      return 'unknown';
    }
    return `${value.getFullYear()}/${value.getMonth() + 1}/${value.getDate()}`;
  }
  public FormatTemperature (value: number = 0) {
    return value.toFixed(2);
  }

  ngOnDestroy () {
    this._ref1.unsubscribe();
    this._ref2.unsubscribe();
  }

  public DeleteDevice (device: CloudDevice) {
    if (confirm( this.translate.get('Are you sure to delete this device?')['value'])) {
      this.requests.deleteDevice(device.id);
      this.notification.InvokeDeviceDelete(device);
      this.router.navigateByUrl('/devices');
    }
  }

  public FindLocationName (id: number): string {
    const location = this.locations.find(x => x.id === id);
    if (location) {
      return location.name;
    }
  }
}

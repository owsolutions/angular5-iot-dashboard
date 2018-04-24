import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AppState, ILocation, DataSource, CloudDevice } from '@app/definitions';
import { Store } from '@ngrx/store';
import { RequestsService } from '@services/requests.service';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';

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
    private requests: RequestsService,
    public chRef: ChangeDetectorRef,
    private router: Router,
    private store: Store<AppState>,
    private notification: NotificationService,
    private translate: TranslateService,

  ) {
   }

  ngOnInit() {
    this._ref1 = this.store.select('devices').subscribe(collection => {
      this.devices = collection;
    });
    this._ref2 = this.store.select('locations').subscribe(collection => {
      this.locations = (collection as Array<ILocation>);
    });
    this.store.select('unconnectedSources').subscribe(sources => {
      this.unconnected = sources;
    });
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

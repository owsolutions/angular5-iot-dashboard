import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IDevice, IPin, AppState, ILocation } from '@shared/iot/definitions';
import { Store } from '@ngrx/store';
import { CommunicateService } from '@shared/core/services/communicate.service';
import { RequestsService } from '@shared/core/services/requests.service';
import { groupBy, values } from 'lodash';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements  OnInit, OnDestroy {

  public focusedDevice: IDevice = null;
  public focusedPin: IPin = null;
  public devices: Array<any> = [];
  public locations: Array<ILocation> = [];
  private _ref1: any  = null;
  private _ref2 = null;

  constructor (
    private requests: RequestsService,
    public chRef: ChangeDetectorRef,
    private store: Store<AppState>,
    private communications: CommunicateService
  ) {
  }

  async clickDispatch ({device, pin}) {
    this.focusedDevice = device;
    this.focusedPin = pin;
  }

  ngOnInit() {
    this._ref1 = this.store.select('devices').subscribe(collection => {
      this.devices = collection;
    });
    this._ref2 = this.store.select('locations').subscribe(collection => {
      this.locations = (collection as Array<ILocation>);
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
  unfocus () {
    this.focusedPin = null;
    this.focusedDevice = null;
  }

  ngOnDestroy () {
    this._ref1.unsubscribe();
    this._ref2.unsubscribe();
  }
}

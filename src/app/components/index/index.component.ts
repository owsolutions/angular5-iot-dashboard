import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, CloudDevice } from '@app/definitions';
import { values, clone } from 'lodash';
import { DailyStatistics } from '../../../mocks/dailyStatistics';
import { HistoryStatistics } from '../../../mocks/historyStatistics';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit  {
  public hs = HistoryStatistics;
  public ds = DailyStatistics;
  public liveData: any;
  public devices: Array<any> = [];

  constructor(
    private store: Store<AppState>,
    private ref: ApplicationRef,
  ) { }
  ngOnInit () {
    this.store.select('devices').subscribe((devices) => {
      this.devices = clone(devices);
    });
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

}

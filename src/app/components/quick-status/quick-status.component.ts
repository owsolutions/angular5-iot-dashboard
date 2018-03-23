import { Component, OnInit } from '@angular/core';
import { SidebarWidgetItem } from '@app/definitions';
import { Store } from '@ngrx/store';
import { AppState, CloudDevice } from '@app/definitions';
import { values } from 'lodash';

@Component({
  selector: 'app-quick-status',
  templateUrl: './quick-status.component.html',
  styleUrls: ['./quick-status.component.scss']
})
export class QuickStatusComponent implements OnInit {

  public devices: Array<any> = [];
  public weatherConditions: any;

  public example1: Array<SidebarWidgetItem> = [
    {
      title: 'Wind',
      icon: 'icon icon-wind',
      value: '1 km/h'
    },
    {
      title: 'Pressure',
      value: {
        amount: 44,
        unit: 'hPa'
      }
    },
    {
      title: 'Precipitation',
      value: {
        amount: 23,
        unit: '%'
      }
    }
  ];

  public example0: Array<SidebarWidgetItem> = [
    {
      icon: 'icon icon-rainy2',
      value: '33˚'
    },
    {
      icon: 'icon icon-cloudy',
      value: '23˚'
    },
  ];

  public temperature: Array<SidebarWidgetItem> = [
    {
      icon: 'icon icon-temperature-2',
      title: 'temperature',
      value: '22'
    }
  ];

  constructor(
    private store: Store<AppState>,
  ) { }
  ngOnInit() {
    this.weatherConditions = {
      largeTemp: {
        icon: 'icon-cloudy',
        degree: 10
      },
      smallTemp: {
        icon: 'icon-rainy2',
        degree: 6
      },
      wind: 10,
      pressure: 1016,
      precipitation: 4
    };
    this.store.select('devices').subscribe((devices) => {
      this.devices = devices;
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

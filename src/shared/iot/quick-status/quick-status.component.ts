import { Component, OnInit } from '@angular/core';
import { SidebarWidgetItem } from '@shared/core/definitions';

@Component({
  selector: 'app-quick-status',
  templateUrl: './quick-status.component.html',
  styleUrls: ['./quick-status.component.scss']
})
export class QuickStatusComponent implements OnInit {

  public weatherConditions: any;

  constructor() { }

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
        unit: 'mm'
      }
    }
  ]
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
  }

}

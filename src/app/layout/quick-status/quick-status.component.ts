import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-status',
  templateUrl: './quick-status.component.html',
  styleUrls: ['./quick-status.component.scss']
})
export class QuickStatusComponent implements OnInit {

  public weatherConditions: any;

  constructor() { }

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

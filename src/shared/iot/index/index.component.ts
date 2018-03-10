import { Component } from '@angular/core';
import { times, random } from 'lodash';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent {
    // Index is empty, since for each customer we might implement
    // different widgets.

  getMock(count = 50) {
    return times(count, (index) => {
      return [
        1317888000000 + (index * 60000),
        random(32000, 40000) / 100,
        random(32000, 40000) / 100,
        random(32000, 40000) / 100,
      ];
    });
  }
  

  public series = [
    {
      name: 'Power',
      type: 'area',
      data: this.getMock(),
      yAxis: 1,
      gapSize: 5,
      tooltip: {
        valueSuffix: ' Wh',
      },
      marker: {
        enabled: false,
        fillColor: '#FFF',
        lineColor: '#52dba7',
        lineWidth: 1,
        symbol: 'circle',
        radius: 3
      },
      fillColor: 'rgba(248, 250, 249, 0.8)',
      lineColor: '#52dba7'
    },
    {
      name: 'Consumption',
      type: 'area',
      gapSize: 5,
      data: this.getMock(),
      marker: {
        enabled: false,
        fillColor: '#FFF',
        lineColor: '#2bc661',
        lineWidth: 1,
        symbol: 'circle',
        radius: 3
      },
      tooltip: {
        valueSuffix: ' kWh'
      },
      fillColor: 'rgba(232, 245, 236, 0.8)',
      lineColor: 'rgba(230,0,100,0.5)'
    },
    {
      name: 'Water',
      type: 'area',
      data: this.getMock(),
      gapSize: 5,
      yAxis: 2,
      tooltip: {
        valueDecimals: 2,
        valueSuffix: ' L'
      },
      marker: {
        enabled: false,
        fillColor: '#FFF',
        lineColor: 'rgb(0, 212, 252)',
        lineWidth: 1,
        symbol: 'circle',
        radius: 3
      },
      fillColor: 'rgba(230, 251, 255, 0.7)',
      lineColor: 'rgb(0, 212, 252)',
      threshold: null
    }
  ];
}

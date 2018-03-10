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
      fillColor: 'rgba(74,20,140,0.4)',
      lineColor: 'rgba(74,20,140,0.9)'
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
      fillColor: 'rgba(142,36,170, 0.4)',
      lineColor: 'rgba(142,36,170, 0.9)'
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
      fillColor: 'rgba(171,71,188, 0.6)',
      lineColor: 'rgba(171,71,188, 0.9)',
      threshold: null
    }
  ];
}

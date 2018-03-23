import { Component, OnInit } from '@angular/core';
import { times, random } from 'lodash';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  public series = [
    {
      name: 'Power',
      type: 'area',
      data: getMock(),
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
      fillColor: 'rgba(220,237,200,0.4)',
      lineColor: 'rgba(220,237,200,0.9)'
    },
    {
      name: 'Consumption',
      type: 'area',
      gapSize: 5,
      data: getMock(),
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
      fillColor: 'rgb(156,204,101, 0.4)',
      lineColor: 'rgb(156,204,101, 0.9)'
    },
    {
      name: 'Water',
      type: 'area',
      data: getMock(),
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
      fillColor: 'rgb(124,179,66, 0.6)',
      lineColor: 'rgb(124,179,66, 0.9)',
      threshold: null
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}

function getMock (count = 50) {
  return times(count, (index) => {
    return [
      1317888000000 + (index * 60000),
      random(32000, 40000) / 100,
      random(32000, 40000) / 100,
      random(32000, 40000) / 100,
    ];
  });
}

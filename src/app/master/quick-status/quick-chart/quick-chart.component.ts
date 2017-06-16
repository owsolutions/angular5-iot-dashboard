import { Component, OnInit } from '@angular/core';
declare var Highcharts: any;
import { times, random} from 'lodash';

@Component({
  selector: 'app-quick-chart',
  templateUrl: './quick-chart.component.html',
  styleUrls: ['./quick-chart.component.scss']
})
export class QuickChartComponent implements OnInit {
  private chartData: Array<any>;

  drawChart (data) {
    Highcharts.chart('quick-chart-container', {
      chart: {
          backgroundColor: 'transparent',
          type: 'areaspline'
      },
      tooltip: {
          enable: null
      },
      title: {
          text: null
      },
      xAxis: {
        categories: [
            'MON',
            'TUE',
            'WED',
            'THU',
            'FRI',
            'SAT',
            'SUN'
        ],
        lable: {
          textColor: 'rgba(255,255,255,0.5)'
        },
        tickLength: 0,
        lineColor: 'transparent'
      },
      yAxis: {
          min: 0,
          gridLineWidth: 0,
          title: {
              text: ''
          },
          labels:
          {
              enabled: false
          }
      },
      legend: {
          enabled: false
      },
      credits: {
          enabled: false
      },
      exporting: {
          enabled: false
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0,
              marker: {
                  enabled: false
              }
          }
      },
      series: [{
          name: 'Temperature',
          data: [3, 4, 3, 5, 4, 7, 5],
          fillColor: {
              linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
              },
              stops: [
                  [0, 'rgba(0,0,0,.3)'],
                  [1, 'rgba(0,0,0,.05)']
              ]
          },
          lineWidth: 3,
          lineColor: 'rgba(255,255,255,0.5)'
      }]
    });


  }

  constructor() { }

  ngOnInit() {
    this.chartData = times(10 , () => random(1, 100));
    this.drawChart(this.chartData);
  }

}

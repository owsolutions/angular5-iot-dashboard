import { Component, OnInit } from '@angular/core';
import { times, random } from '@lodash';
declare var Highcharts: any;

@Component({
  selector: 'app-quick-chart',
  templateUrl: './quick-chart.component.html',
  styleUrls: ['./quick-chart.component.scss']
})
export class QuickChartComponent implements OnInit {
  private chartData: Array<any>;

  drawChart(data) {
    Highcharts.chart('quick-chart-container', {
      chart: {
        animation: false,
        backgroundColor: 'transparent',
        type: 'areaspline',
        spacingBottom: 0,
        spacingTop: 10,
        spacingLeft: 0,
        spacingRight: 0,
      },

      tooltip: {
        enable: null
      },
      title: {
        text: null
      },
      xAxis: {
        min: 1, max: 6,
        categories: [
          'MON',
          'TUE',
          'WED',
          'THU',
          'FRI',
          'SAT',
          'SUN',
          'MON',
          'TUE',
          'WED'
        ],
        labels: {
          style: {
              color: 'rgba(255,255,255,0.8)'
          },
          y: -10,
          x: 0
        },
        tickLength: -250,
        tickColor: 'rgba(255,255,255,0.25)',
        lineColor: 'transparent'
      },
      yAxis: {
        min: 0,
        gridLineWidth: 0,
        title: {
          text: ''
        },
        labels: {
          enabled: false
        },
        stackLabels: {
          enabled: true,
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
        animation: false,
        areaspline: {
          fillOpacity: 0,
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        animation: false,
        name: 'Temperature',
        data: [
          11, 15, 10, 16, 10, 15, 11, 14, 9, 14
        ],
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
        lineWidth: 2.2,
        lineColor: 'rgba(255,255,255,0.5)',
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          align: 'left',
          x: -15,
          y: top,
          format: '{y}˚',
          style: {
            fontWeight: 'light',
            fontSize: 13,
            textOutline: false
          }
        }
      }]
    });
  }

  constructor() { }

  ngOnInit() {
    this.chartData = times(10 , () => random(1, 100));
    this.drawChart(this.chartData);
  }
}

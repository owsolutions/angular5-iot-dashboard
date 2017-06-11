import { Component, OnInit } from '@angular/core';
declare var Highcharts: any;
import { times, random} from 'lodash';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  private chartData: Array<any>;

  drawChart (data) {
    Highcharts.chart('chart-container', {
      chart: {
          backgroundColor: 'transparent',
          type: 'area'
      },
      tooltip: {
          pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
          area: {
              pointStart: 100,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
      series: [{
          name: 'Temperature',
          data: data
      }]
    });


  }

  constructor() { }

  ngOnInit() {
    this.chartData = times(10 , () => random(1, 100));
    this.drawChart(this.chartData);
  }

}

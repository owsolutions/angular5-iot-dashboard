import { Component, OnInit } from '@angular/core';
import { fetchApi } from '../api';
import { times, random} from 'lodash';

declare var Highcharts: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    private places: Array<any>;
    private largeWidgets : Array<any>;
    private chartData: Array<any>;
  constructor() {
  }
 
  async getApi (week) {
    let url = 'http://smart.openweb.solutions/api/report/byweek/' + week;
    let response = await fetchApi(url);
    return (response as any).results;
  }

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

  mockData () {
      return [
          {
              'title': 'Power',
              'icon': 'icon icon-flash',
              'value': random(300,600),
              'unit': 'Wh'
          },
          {
              'title': 'Consumption',
              'icon': 'icon icon-temperatire',
              'value': random(5500,6000)/100,
              'unit': 'kWh'
          },
          {
              'title': 'Water',
              'icon': 'icon icon-tint',
              'value': random(200,800)/100,
              'unit': "L"
          }
      ];
  }


  async ngOnInit() {
      this.chartData = times(10 , () => random(1,100));

   this.drawChart(this.chartData);

   this.largeWidgets = this.mockData();

   setInterval(() => {
       this.largeWidgets = this.mockData()
   }, 5000);

   this.places = [
       {name: "Kitchen"} ,
       {name:"Bathroom"} ,
       {name:"Master bedrrom"} ,
       {name: " Parking"} ,
       {name: "Kitchen"} ,
       {name:"Bathroom"} ,
       {name:"Master bedrrom"} ,
       {name: " Parking"}
   ];

  }

}

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
  constructor() {
  }
 
  async getApi (week) {
    let url = 'http://smart.openweb.solutions/api/report/byweek/' + week;
    let response = await fetchApi(url);
    return (response as any).results;
  }

  drawChart () {

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
          data: times(10 , () => random(1,100))
      }]
    });

    
  }

  async ngOnInit() {
   this.drawChart();

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

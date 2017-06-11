import { Component, OnInit } from '@angular/core';
import { fetchApi } from '../api';
import { times, random} from 'lodash';
import { ChartComponent } from './chart/chart.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],

})
export class IndexComponent implements OnInit {

    public places: Array<any>;
    public largeWidgets : Array<any>;

  constructor() {
  }

  async getApi (week) {
    const url = 'http://smart.openweb.solutions/api/report/byweek/' + week;
    const response = await fetchApi(url);
    return (response as any).results;
  }



  mockData () {
      return [
          {
              'title': 'Power',
              'icon': 'icon icon-flash',
              'value': random(300, 600),
              'unit': 'Wh'
          },
          {
              'title': 'Consumption',
              'icon': 'icon icon-temperatire',
              'value': random(5500, 6000) / 100,
              'unit': 'kWh'
          },
          {
              'title': 'Water',
              'icon': 'icon icon-tint',
              'value': random(200, 800) / 100,
              'unit': 'L'
          }
      ];
  }


  async ngOnInit() {


   this.largeWidgets = this.mockData();

   setInterval(() => {
       this.largeWidgets = this.mockData();
   }, 5000);

   this.places = [
       {name: 'Kitchen'} ,
       {name: 'Bathroom'} ,
       {name: 'Master bedrrom'} ,
       {name: ' Parking'} ,
       {name: 'Kitchen'} ,
       {name: 'Bathroom'} ,
       {name: 'Master bedrrom'} ,
       {name: ' Parking'}
   ];

  }

}

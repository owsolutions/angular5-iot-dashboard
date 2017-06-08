import { Component, OnInit } from '@angular/core';
import { fetchApi } from '../api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {
  }
 
  async getApi (week) {
    let url = 'http://smart.openweb.solutions/api/report/byweek/' + week;
    let response = await fetchApi(url);
    return (response as any).results;
  }
  
  async ngOnInit() {

    let collection = await this.getApi(15);
    (window as any).createChart("#chart1" , collection);
    collection = await this.getApi(16);
    (window as any).createChart("#chart2", collection);
  }

}

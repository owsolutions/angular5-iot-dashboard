import { Component, OnInit } from '@angular/core';
import { fetchApi } from '../api';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary: {
    mintemp: Number,
    maxtemp: Number,
    minhumidity: Number,
    maxhumidity: Number
  };
  constructor() {
    this.summary = {
      mintemp: 0,
      minhumidity: 0,
      maxhumidity: 0,
      maxtemp: 0
    };
  }


  async getApi (): Promise<{result: Array<any>}> {
    const url = 'http://smart.openweb.solutions/api/summary';
    const response = await fetchApi(url);
    return (response as any).result;
  }

  async ngOnInit() {
      this.summary = (await this.getApi())[0];
  }

}

import { Component, OnInit } from '@angular/core';
declare var fetch: Function;
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
      maxtemp:0
    };
  }

  ngOnInit() {

    fetch('http://smart.openweb.solutions/api/summary')
    .then(response => response.json())
    .then(data => {
      this.summary = data.result[0];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public healthCheckResponseExample: IResponse<any> = {
    data: {
      items: [
        {
          uptime: 312,
          devices: 3,
          lastUpdate: new Date()
        }
      ]
    }
  }
}

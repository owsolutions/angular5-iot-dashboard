import { Component } from '@angular/core';
import { IResponse } from 'response-type';
import { DataSource } from '@shared/iot/definitions';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {

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
  };
  public boardcastResponseExample: IResponse<DataSource> = {
    params: {
      device: '3381947jjw',
      value: 22.4,
      geo: {
        lat: 32.837298914,
        lng: 43.389482497
      }
    } as any,
    data: {
      items: [
        {
          dataSourceId: '3920',
          geo: {
            lat: 32.837298914,
            lng: 43.389482497
          },
          value: 22.4
        }
      ],

    }
  };
  public boardcastBodyExample: DataSource = {
    dataSourceId: '3381947jjw',
    value: 22.4,
    geo: {
      lat: 32.837298914,
      lng: 43.389482497
    }
  };
}

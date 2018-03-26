import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { DataSource } from '@app/definitions';
import { environment } from 'environments/environment';
import { RequestsService } from '@app/services/requests.service';
import { IsSuccessEntity } from '@app/common';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  public example: {
    dataSourceId?: string,
    value?: any
  } = {
    dataSourceId: 'device-1',
    value: 22.9
  };
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

  public boardcastHeaderExample = {
    'x-token': '-token-',
    'is-doc': true
  };
  public boardcastBodyExample: DataSource = {
    dataSourceId: 'device-1',
    value: 22.4,
    geo: {
      lat: 32.837298914,
      lng: 43.389482497
    }
  };

  constructor (
    private requests: RequestsService
  ) {

  }
  async ngOnInit () {
    const token = await this.requests.getDeviceToken();
    if (IsSuccessEntity(token)) {
      this.boardcastHeaderExample['x-token'] = token.data.items[0].hash;
    }
  }

  public ChangeExample () {
    this.boardcastBodyExample.dataSourceId = this.example.dataSourceId;
    this.boardcastBodyExample.value = this.example.value;
  }
  public GetUrl (affix: string) {
    return environment.api + '/api/' + affix;
  }
}

import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { environment } from 'environments/environment';
import { IsSuccessEntity } from '@app/common';
import { IotRequestsService } from '@app/iot/iot-requests.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss', './docs.styling.scss']
})
export class DocsComponent implements OnInit {
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

  public boardcastHeaderExample = {
    'x-token': '-token-',
  };

  constructor (
    private requests: IotRequestsService
  ) {

  }
  async ngOnInit () {
    const token = await this.requests.getDeviceToken();
    if (IsSuccessEntity(token)) {
      this.boardcastHeaderExample['x-token'] = token.data.items[0].hash;
    }
  }

  public GetUrl (affix: string) {
    return environment.api + '/api/' + affix;
  }
}

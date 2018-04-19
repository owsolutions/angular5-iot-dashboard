import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { environment } from 'environments/environment';
import { RequestsService } from '@app/services/requests.service';
import { IsSuccessEntity } from '@app/common';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
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
    private requests: RequestsService
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

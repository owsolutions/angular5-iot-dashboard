import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { DataSource } from '@app/definitions';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-sending-information-https',
  templateUrl: './sending-information-https.component.html',
  styleUrls: ['./sending-information-https.component.scss']
})
export class SendingInformationHttpsComponent implements OnInit {

  public boardcastBodyExample: DataSource = {
    dataSourceId: 'device-1',
    value: 22.4,
    geo: {
      lat: 32.837298914,
      lng: 43.389482497
    }
  };

  public example: {
    dataSourceId?: string,
    value?: any
  } = {
    dataSourceId: 'device-1',
    value: 22.9
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
  constructor() { }

  ngOnInit() {
  }


  public ChangeExample () {
    this.boardcastBodyExample.dataSourceId = this.example.dataSourceId;
    this.boardcastBodyExample.value = this.example.value;
  }

  public GetUrl (affix: string) {
    return environment.api + '/api/' + affix;
  }
}

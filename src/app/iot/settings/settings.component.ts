import { Component, OnInit } from '@angular/core';
import { IsSuccessEntity } from '@app/common';
import { IotRequestsService } from '@app/iot/iot-requests.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private token: string = null;
  constructor(
    private requests: IotRequestsService,
  ) { }

  public GetDeviceToken () {
    return this.token;
  }
  async ngOnInit() {
    const response = await this.requests.getDeviceToken();
    if (IsSuccessEntity(response)) {
      this.token = response.data.items[0].hash;
    } else {
      this.token = 'Cannot get the token from server. Please try again in few minutes';
    }
  }

}

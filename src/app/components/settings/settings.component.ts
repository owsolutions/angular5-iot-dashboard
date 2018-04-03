import { Component, OnInit } from '@angular/core';
import { RequestsService } from '@app/services/requests.service';
import { IsSuccessEntity } from '@app/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private token: string = null;
  constructor(
    private requests: RequestsService,
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

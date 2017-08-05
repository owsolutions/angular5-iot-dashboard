import { Injectable } from '@angular/core';
import { IRole, ILocation, IDevice, IActivity, IWidget } from './shared/Definitions';
import { PermissionsService } from './permissions.service';
import * as locationsMocks from './locations/locations.mock';
import * as devicesMocks from './devices/devices.mock';
import { sample, times} from 'lodash';
import { MocksService } from './mocks.service';
function makeMockWidget (device: IDevice, location: ILocation): IWidget {
  const widget: IWidget = {
    device: device,
    location: location,
    name : sample(['Cloud', 'Lamp', 'Roberry']),
    pin: sample(device.pins)
  };
  return widget;
}


@Injectable()
export class RequestsService {

  constructor(private permissions: PermissionsService, private mocks: MocksService) { }

  async getWidgets (): Promise<Array<IWidget>> {
    const devices = await this.getDevices();
    const locations = await this.getLocations();
    return times(4, () => {
      return makeMockWidget(sample(devices), sample(locations));
    });
  }
  async getLocations(): Promise<Array<ILocation>> {
    return locationsMocks.generateMock();
  }
  
  async getActivities (): Promise<Array<IActivity>> {
    return this.mocks.Activities();
  }

  async getDevices (): Promise<Array<IDevice>> {
    return devicesMocks.generateMock();
  }

  async getRoles (): Promise<Array<IRole>> {
    return [
      {
        permissions: [
          this.permissions.findByKey('DEVICES_PIN_CHANGE'),
          this.permissions.findByKey('UPDATE_USER')
        ],
        id: 1,
        title: 'Content Moderator'
      },
      {
        permissions: [],
        id: 2,
        title: 'Higher manager'
      },
      {
        permissions: [],
        id: 3,
        title: 'Installler'
      }
    ];
  }

}

import { Injectable } from '@angular/core';
import { IRole, ILocation, IDevice, IActivity, IWidget } from './shared/Definitions';
import { PermissionsService } from './permissions.service';
import { sample, times} from 'lodash';
import { MocksService } from './mocks.service';


@Injectable()
export class RequestsService {

  constructor(private permissions: PermissionsService, private mocks: MocksService) { }

  async getWidgets (): Promise<Array<IWidget>> {
    return this.mocks.Widgets();
  }
  async getLocations(): Promise<Array<ILocation>> {
    return this.mocks.Locations();
  }

  async getActivities (): Promise<Array<IActivity>> {
    return this.mocks.Activities();
  }

  async getDevices (): Promise<Array<IDevice>> {
    return this.mocks.Devices();
  }

  async getRoles (): Promise<Array<IRole>> {
    return this.mocks.Roles();
  }

  async getUsers (offset, limit): Promise<any> {
    return this.mocks.Users({offset, limit});
  }

}

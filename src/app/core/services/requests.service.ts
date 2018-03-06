import { Injectable } from '@angular/core';
import { IRole, IUser, IResponse } from '@app/core/definitions';
import { ILocation, IDevice, IActivity, IWidget, IVPCInformation } from '@app/iot/definitions';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';

function timeout (ms = 1000): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve() , ms);
  });
}


@Injectable()
export class RequestsService {

  constructor(private permissions: PermissionsService, private mocks: MocksService) { }

  async getWidgets (): Promise<Array<IWidget>> {
    return this.mocks.Widgets();
  }

  async createUser (user): Promise<IResponse> {
    return this.mocks.createUser(user);
  }
  async createVPC (vpcInformation: IVPCInformation): Promise<IResponse> {
    await timeout (200);
    return this.mocks.createVPC(vpcInformation);
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
    return this.mocks.Users({offset});
  }

  async authenticateUser (username: string, password: string): Promise<IUser> {
    return this.mocks.User();
  }

}

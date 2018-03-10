import { Injectable } from '@angular/core';
import { IRole, IUser, IResponse } from '@app/core/definitions';
import { ILocation, IDevice, IActivity, IWidget, IVPCInformation, WorkspaceUser } from '@app/iot/definitions';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


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

  /**
   * Returns users are registered or associated under this account.
   * These are users who are inside your workspace; you are not able to edit their details
   * but only you can view their activity; or disable them from separate accesses.
   */
  public GetWorkspaceUsers (): Observable<Array<WorkspaceUser>> {
    return Observable.of([
      {
        Access: 'High',
        Email: 'user.name@gmail.com',
        LastActivity: '23 minutes ago',
        Name: 'Username'
      }
    ] as Array<WorkspaceUser>);
  }

  public ChangeUserRole (userID: string, roleID: string) {
    console.log(' Implement the code to change user here');
  }

}

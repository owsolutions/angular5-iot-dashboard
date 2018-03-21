import { Injectable } from '@angular/core';
import { IRole, IUser } from '@shared/core/definitions';
import { IActivity, IVPCInformation, WorkspaceUser, AppState } from '@shared/iot/definitions';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';
import { IResponse } from 'response-type';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Store } from '@ngrx/store';

@Injectable()
export class RequestsService {

  constructor(
    private permissions: PermissionsService,
    private mocks: MocksService,
    private store: Store<AppState>
  ) {
    this.getDevices();
    this.getLocations();
   }

  async createUser (user): Promise<IResponse<any>> {
    return this.mocks.createUser(user);
  }
  async createVPC (vpcInformation: IVPCInformation): Promise<IResponse<any>> {
    return this.mocks.createVPC(vpcInformation);
  }
  async getLocations() {
    const collections = this.mocks.Locations();
    for (const item of collections) {
      this.store.dispatch({
        type: 'UPDATE_LOCATION',
        payload: item
      });
    }
  }

  async getActivities (): Promise<Array<IActivity>> {
    return this.mocks.Activities();
  }

  async getDevices () {
    const collections = this.mocks.Devices();
     for (const item of collections) {
      this.store.dispatch({
        type: 'UPDATE_DEVICE',
        payload: item
      });
    }
  }

  async deleteDevice (id: number) {
    this.store.dispatch({
      type: 'DELETE_DEVICE',
      payload: id
    });
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
    console.log(' Implement the code to change user here ');
  }
}

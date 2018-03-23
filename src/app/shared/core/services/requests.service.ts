import { Injectable } from '@angular/core';
import { IRole, IUser } from '@shared/core/definitions';
import { IActivity, WorkspaceUser, AppState } from '@shared/iot/definitions';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';
import { IResponse } from 'response-type';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestsService {

  constructor(
    private permissions: PermissionsService,
    private mocks: MocksService,
    private store: Store<AppState>,
    private http: HttpClient,
  ) {
    this.getDevices();
    this.getLocations();
   }

  async createUser (user): Promise<IResponse<any>> {
    return this.mocks.createUser(user);
  }
  async getLocations() {
    this.http.get('http://localhost:1337/api/locations').subscribe(
      (response: any) => {
        const collections = response.data.items;
        for (const item of collections) {
          this.store.dispatch({
            type: 'UPDATE_LOCATION',
            payload: item
          });
        }
      },
      (response) => {
        console.log('error:', response);
      }
    );
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

  public ChangeUserRole (userID: string, roleID: string) {
    console.log(' Implement the code to change user here ');
  }
}

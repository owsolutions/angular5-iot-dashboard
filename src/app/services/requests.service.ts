import { Injectable } from '@angular/core';
import {
  AppState,
  ILocation,
  IUser,
  ISettingsUpdateResponse,
  IContact,
  IRole
 } from '@app/definitions';
import { PermissionsService } from './permissions.service';
import 'rxjs/add/observable/of';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { MockService } from '@app/services/mocks.service';
import { IResponse } from 'response-type';
import { GetNetworkError, IsSuccessEntity } from '@app/common';
import 'rxjs/add/operator/toPromise';

declare var io: any;

@Injectable()
export class RequestsService {

  constructor(
    private permissions: PermissionsService,
    private mocks: MockService,
    private store: Store<AppState>,
    private http: HttpClient,
  ) {

  }

  public async GetRoles (): Promise<IResponse<IRole>> {
    const url = environment.api + '/api/roles';
    const ref = this.http.get(url).toPromise();
    try {
      const response: IResponse<IRole> = await ref;
      const collections = response.data.items;
      for (const item of collections) {
        this.store.dispatch({
          type: 'UPDATE_ROLE',
          payload: item
        });
      }
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }
  public async GetContactDetails (): Promise<IResponse<IContact>> {
    const url = environment.api + '/api/contact-details';
    const ref = this.http.get(url).toPromise();
    try {
      const response: IResponse<IContact> = await ref;
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }
  public async PostRole (role: IRole): Promise<IResponse<IRole>> {
    const ref = this.http.post(environment.api + '/api/role' , role).toPromise();
    try {
      const response: IResponse<IRole> = await ref;
      if (response && response.data && response.data.items && response.data.items[0]) {
        const $role = response.data.items[0];
        if ($role) {
          this.store.dispatch({
            type: 'UPDATE_ROLE',
            payload: $role
          });
        }
      }
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }
  

  public async UpdateUserProfile (user: IUser): Promise<IResponse<ISettingsUpdateResponse>> {
    const ref = this.http.post(environment.api + '/api/user/settings' , user).toPromise();
    try {
      const response: IResponse<ISettingsUpdateResponse> = await ref;
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }
  public async UpdateContactDetails (contacts: Array<IContact>): Promise<IResponse<any>> {
    const ref = this.http.post(environment.api + '/api/contact-details' , {contacts}).toPromise();
    try {
      const response: IResponse<any> = await ref;
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }

  public async RequestPasswordReset (username: string): Promise<IResponse<ILocation>> {
    const ref = this.http.post(environment.api + '/api/forget-password' , {username}).toPromise();
    try {
      const response: IResponse<ILocation> = await ref;
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }

  async deleteRole (id: number ) {
    const ref = this.http.delete(environment.api + '/api/role/' + id).toPromise();
    try {
      const response: IResponse<IRole> = await ref;
      if (IsSuccessEntity(response)) {
        const $role = response.data.items[0];
        if ($role) {
          this.store.dispatch({
            type: 'DELETE_ROLE',
            payload: id
          });
        }
      }
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }
}

import { Injectable } from '@angular/core';
import {
  AppState,
  ILocation,
  IUser,
  ISettingsUpdateResponse,
  IContact
 } from '@app/definitions';
import { PermissionsService } from './permissions.service';
import 'rxjs/add/observable/of';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { MockService } from '@app/services/mocks.service';
import { IResponse } from 'response-type';
import { GetNetworkError } from '@app/common';
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
}

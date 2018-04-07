import { Injectable } from '@angular/core';
import { AppState, CloudDevice, ILocation } from '@app/definitions';
import { PermissionsService } from './permissions.service';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { MockService } from '@app/services/mocks.service';
import { IResponse } from 'response-type';
import { GetNetworkError, IsSuccessEntity } from '@app/common';
import { random } from 'lodash';

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
  getLocations() {
    this.http.get(environment.api + '/api/locations').subscribe(
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
      }
    );
  }

  async getDeviceToken (): Promise<IResponse<any>> {
    return await this.http.get(environment.api + '/api/devices/token').toPromise();
  }

  getUnconnected () {
    this.http.get(environment.api + '/api/unconnected').subscribe(
      (response: any) => {
        const collections = response.data.items;
        for (const item of collections) {
          this.store.dispatch({
            type: 'UPDATE_UNCONNECTED_DATA_SOURCE',
            payload: item
          });
        }
      },
      (response: any) => {
      },
    );
  }

  getDevices () {
    this.http.get(environment.api + '/api/devices').subscribe(
      (response: any) => {
        const collections = response.data.items;
        for (const item of collections) {
          this.store.dispatch({
            type: 'UPDATE_DEVICE',
            payload: item
          });
        }
      },
      (response: any) => {
      },
    );
  }

  public async PostDevice (device: CloudDevice): Promise<IResponse<CloudDevice>> {
    const ref = this.http.post(environment.api + '/api/device' , device).toPromise();
    try {
      const response: IResponse<CloudDevice> = await ref;
      if (response && response.data && response.data.items && response.data.items[0]) {
        const $device = response.data.items[0];
        if ($device) {
          this.store.dispatch({
            type: 'UPDATE_DEVICE',
            payload: $device
          });
          this.store.dispatch({
            type: 'CLEAR_UNCONNECTED_SOURCE',
            payload: $device.datasource
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

  // public resetPassword(req: HttpRequest<any>): IResponse<ILocation> {


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

  public async PostLocation (location: ILocation): Promise<IResponse<ILocation>> {
    const ref = this.http.post(environment.api + '/api/location' , location).toPromise();
    try {
      const response: IResponse<ILocation> = await ref;
      if (IsSuccessEntity(response)) {
        const $location = response.data.items[0];
        if (! $location.id) {
          $location.id = random(1000, 999999);
        }
        if ($location) {
          this.store.dispatch({
            type: 'UPDATE_LOCATION',
            payload: $location
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

  async deleteLocation (id: number ) {
    const ref = this.http.delete(environment.api + '/api/location/' + id).toPromise();
    try {
      const response: IResponse<ILocation> = await ref;
      if (IsSuccessEntity(response)) {
        const $location = response.data.items[0];
        if (! $location.id) {
          $location.id = random(1000, 999999);
        }
        if ($location) {
          this.store.dispatch({
            type: 'DELETE_LOCATION',
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

  async deleteDevice (id: number ) {
    const ref = this.http.delete(environment.api + '/api/device/' + id).toPromise();
    try {
      const response: IResponse<ILocation> = await ref;
      if (IsSuccessEntity(response)) {
        const $location = response.data.items[0];
        if (! $location.id) {
          $location.id = random(1000, 999999);
        }
        if ($location) {
          this.store.dispatch({
            type: 'DELETE_DEVICE',
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

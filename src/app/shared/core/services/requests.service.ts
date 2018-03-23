import { Injectable } from '@angular/core';
import { IRole } from '@shared/core/definitions';
import { AppState } from '@shared/iot/definitions';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';
import { IResponse } from 'response-type';
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
    this.http.get('http://localhost:1337/api/devices').subscribe(
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
        console.log('error:', response);
      },
    );
  }

  async deleteDevice (id: number) {
    this.store.dispatch({
      type: 'DELETE_DEVICE',
      payload: id
    });
  }

}

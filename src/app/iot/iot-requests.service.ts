import { Injectable } from '@angular/core';
import {
  IUser,
  IRole
 } from '@app/definitions';
import 'rxjs/add/observable/of';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { IotMockService } from './iot-mocks.service';
import { IResponse } from 'response-type';
import { GetNetworkError, IsSuccessEntity } from '@app/common';
import 'rxjs/add/operator/toPromise';
import { IotModuleState } from '@app/iot/iot.module.defs';

declare var io: any;

@Injectable()
export class IotRequestsService {
  constructor(
    private mocks: IotMockService,
    private store: Store<IotModuleState>,
    private http: HttpClient,
  ) { }
}
